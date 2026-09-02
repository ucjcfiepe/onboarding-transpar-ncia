import { Link } from "@tanstack/react-router";
import { ArrowRight, Compass, FileCheck2, Home, RefreshCw, Repeat } from "lucide-react";
import {
  conceito,
  finalidades,
  responsibilities,
  rotinaEnvolve,
  scenarios,
  takeaways,
  toolGroups,
} from "@/content/transparencia";
import { EntityTag, KeyTakeaway, ProgressIndicator, SectionHeading } from "./primitives";
import { ProcessArchitecture } from "./ProcessArchitecture";
import { JourneyTimeline } from "./JourneyTimeline";
import { ScenarioCard } from "./ScenarioCard";
import { ToolCard } from "./ToolCard";
import { Quiz } from "./Quiz";
import { Button } from "@/components/ui/button";
import { useProgress } from "@/lib/progress";

/* ---------------- Introdução ---------------- */
export function IntroSection() {
  return (
    <div className="space-y-16">
      <SectionHeading
        eyebrow="Seção 01 · Introdução"
        title="O que é Transparência no SESI e no SENAI"
      />

      <figure className="grain aurora surface-deep relative overflow-hidden rounded-3xl px-8 py-12 sm:px-14 sm:py-16">
        <blockquote className="relative z-10 max-w-3xl text-xl font-semibold leading-relaxed text-white sm:text-2xl">
          {conceito}
        </blockquote>
        <figcaption className="relative z-10 mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-white/50">
          Conceito de referência
        </figcaption>
      </figure>

      <section className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
        <div>
          <h3 className="text-2xl font-extrabold text-primary">
            A rotina não é apenas publicar.
          </h3>
          <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
            Ela conecta planejamento, relacionamento com as áreas, conferência, disponibilização,
            verificação e tratamento de inconsistências — em um ciclo contínuo.
          </p>
        </div>
        <ul className="grid gap-x-4 gap-y-0 sm:grid-cols-2">
          {rotinaEnvolve.map((item, i) => (
            <li
              key={item}
              className="flex items-baseline gap-3 border-b border-hairline py-3.5 text-sm"
            >
              <span className="text-[11px] font-bold tabular-nums text-sky">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <p className="label-eyebrow mb-6">Finalidades</p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {finalidades.map((f) => (
            <article key={f.title} className="card-elevated rounded-2xl p-6">
              <h4 className="text-base font-bold text-primary">{f.title}</h4>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
            </article>
          ))}
        </div>
      </section>

      <KeyTakeaway title="Ponto-chave">
        Transparência é informação <strong className="font-semibold">atualizada, acessível,
        organizada e rastreável</strong> — e rastreabilidade só existe com verificação e registro
        de evidência.
      </KeyTakeaway>
    </div>
  );
}

/* ---------------- Processo ---------------- */
export function ProcessSection() {
  return (
    <div className="space-y-12">
      <SectionHeading
        eyebrow="Seção 02 · Como funciona o processo"
        title="Quatro etapas que organizam toda a rotina"
        lead="Selecione uma etapa para ver a pergunta-chave e as atividades relacionadas."
      />
      <ProcessArchitecture />
      <div className="flex items-start gap-3 rounded-2xl border border-border bg-ice p-6">
        <Repeat className="mt-0.5 size-4 shrink-0 text-sky" aria-hidden />
        <p className="text-sm leading-relaxed">
          <strong className="font-semibold">Correção</strong> resolve uma inconsistência pontual.{" "}
          <strong className="font-semibold">Aprimoramento</strong> pode envolver adequação
          estrutural, nova orientação, evolução ou melhoria do portal.
        </p>
      </div>
    </div>
  );
}

/* ---------------- Ambientes e ferramentas ---------------- */
export function ToolsSection() {
  return (
    <div className="space-y-20">
      <SectionHeading
        eyebrow="Seção 03 · Ambientes e ferramentas"
        title="Cada recurso responde a uma pergunta diferente"
        lead="Ambientes públicos, plataformas de publicação e gestão, sistema de origem, monitoramento e acionamento técnico não se confundem."
      />

      {toolGroups.map((group) => (
        <section key={group.id} className="space-y-7">
          <div className="border-l-2 border-sky pl-5">
            <p className="label-eyebrow">{group.classification}</p>
            <h3 className="mt-2 text-2xl font-extrabold text-primary">{group.question}</h3>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              {group.intro}
            </p>
          </div>
          <div
            className={
              group.items.length > 1
                ? "grid gap-5 md:grid-cols-2"
                : "grid gap-5"
            }
          >
            {group.items.map((tool) => (
              <ToolCard key={tool.id} tool={tool} compact={group.id === "publico"} />
            ))}
          </div>
        </section>
      ))}

      <KeyTakeaway title="Distinção obrigatória" tone="attention">
        O ZEEV é ferramenta de <strong className="font-semibold">acionamento técnico</strong>. Não é
        plataforma de publicação da Transparência e não é origem das informações. Use a expressão
        “acionamento técnico por meio do ZEEV”.
      </KeyTakeaway>
    </div>
  );
}

/* ---------------- Jornada ---------------- */
export function JourneySection() {
  return (
    <div className="space-y-12">
      <SectionHeading
        eyebrow="Seção 04 · Rotina do Analista"
        title="Uma obrigação, do prazo à evidência"
        lead="Clique em cada etapa da jornada para ver a explicação correspondente."
      />
      <JourneyTimeline />
      <KeyTakeaway title="Atenção ao vocabulário">
        Prefira <strong className="font-semibold">disponibilizar</strong> a “publicar”: nem toda
        informação é publicada manualmente pelo Analista de Transparência.
      </KeyTakeaway>
    </div>
  );
}

/* ---------------- Responsabilidades ---------------- */
export function ResponsibilitiesSection() {
  return (
    <div className="space-y-12">
      <SectionHeading
        eyebrow="Seção 05 · Responsabilidades"
        title="Quem responde por cada parte do processo"
      />
      <div className="grid gap-5 lg:grid-cols-2">
        {responsibilities.map((r) => (
          <article key={r.id} className="card-elevated rounded-3xl p-7 sm:p-8">
            <h3 className="text-lg font-extrabold text-primary">{r.title}</h3>
            <p className="mt-1.5 text-sm text-muted-foreground">{r.lead}</p>
            <ul className="mt-6 space-y-2.5">
              {r.items.map((i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm leading-relaxed">
                  <span className="mt-2 size-1 shrink-0 rounded-full bg-sky" aria-hidden />
                  <span>{i}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <KeyTakeaway title="Encaminhamento técnico">
        O acionamento da equipe técnica ocorre por meio do ZEEV quando houver necessidade de
        correção técnica, ajuste estrutural, alteração de funcionalidade ou tratamento de
        indisponibilidade.
      </KeyTakeaway>
    </div>
  );
}

/* ---------------- Situações práticas ---------------- */
export function ScenariosSection() {
  return (
    <div className="space-y-10">
      <SectionHeading
        eyebrow="Seção 06 · Situações práticas"
        title="Decidir é parte da rotina"
        lead="Escolha o encaminhamento que considera adequado. O comentário explica o raciocínio esperado."
      />
      <div className="space-y-6">
        {scenarios.map((s, i) => (
          <ScenarioCard key={s.id} scenario={s} index={i + 1} total={scenarios.length} />
        ))}
      </div>
    </div>
  );
}

/* ---------------- Quiz ---------------- */
export function QuizSection({ moduleId }: { moduleId: string }) {
  const { saveQuizResult, state } = useProgress();
  const existing = state.quizResults[moduleId];

  return (
    <div className="space-y-10">
      <SectionHeading
        eyebrow="Seção 07 · Quiz final"
        title="Verifique sua compreensão"
        lead="Dez questões sobre a arquitetura do processo, ambientes, plataformas, monitoramento, acionamento técnico, responsabilidades e evidências."
      />
      <Quiz
        initialAnswers={existing?.answers}
        onFinish={(score, total, answers) =>
          saveQuizResult(moduleId, {
            score,
            total,
            answers,
            completedAt: new Date().toISOString(),
          })
        }
      />
    </div>
  );
}

/* ---------------- Conclusão ---------------- */
export function ConclusionSection({ moduleId }: { moduleId: string }) {
  const { moduleProgress, state, resetModule } = useProgress();
  const progress = moduleProgress(moduleId);
  

  return (
    <div className="space-y-12">
      <div className="grain aurora surface-deep relative overflow-hidden rounded-3xl px-8 py-12 sm:px-14 sm:py-16">
        <div className="relative z-10 max-w-2xl">
          <p className="label-eyebrow text-white/60">Módulo concluído</p>
          <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">
            Transparência SESI/SENAI
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-white/70">
            Você percorreu o conceito, a arquitetura de quatro etapas, os ambientes e ferramentas, a
            rotina do analista, as responsabilidades e as situações práticas.
          </p>
          <div className="mt-9 max-w-md">
            <div className="glass rounded-2xl p-5">
              <ProgressIndicator value={progress} label="Conclusão do módulo" tone="dark" />
            </div>
          </div>
        </div>
      </div>

      <section>
        <p className="label-eyebrow mb-6">Principais aprendizados</p>
        <div className="grid gap-4 sm:grid-cols-2">
          {takeaways.map((t) => (
            <article key={t.title} className="card-elevated rounded-2xl p-6">
              <FileCheck2 className="size-4 text-sky" aria-hidden />
              <h4 className="mt-4 text-base font-bold text-primary">{t.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-border bg-card p-7 sm:p-9">
        <div className="flex flex-wrap items-center gap-3">
          <EntityTag entity="sesi" />
          <EntityTag entity="senai" />
        </div>
        <h3 className="mt-5 text-xl font-extrabold text-primary">Próximos passos</h3>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          O módulo <strong className="font-semibold">Fiscalização Contínua</strong> será
          disponibilizado em uma próxima etapa do onboarding da Unidade Jurídica.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Button asChild>
            <Link to="/">
              <Home className="size-4" aria-hidden />
              Voltar ao início
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/modulos/$moduleId/$sectionId" params={{ moduleId, sectionId: "introducao" }}>
              <Compass className="size-4" aria-hidden />
              Revisar conteúdo
            </Link>
          </Button>
          <Button variant="ghost" onClick={() => resetModule(moduleId)} className="gap-2">
            <RefreshCw className="size-4" aria-hidden />
            Reiniciar progresso
          </Button>
        </div>
      </section>
    </div>
  );
}

export function SectionNotReady() {
  return (
    <div className="rounded-3xl border border-dashed border-hairline p-10 text-center">
      <p className="text-sm text-muted-foreground">Conteúdo em preparação.</p>
      <Link
        to="/"
        className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary"
      >
        Voltar ao início <ArrowRight className="size-4" aria-hidden />
      </Link>
    </div>
  );
}
