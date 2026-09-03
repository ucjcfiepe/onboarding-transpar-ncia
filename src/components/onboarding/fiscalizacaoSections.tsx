import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  Compass,
  FileCheck2,
  Home,
  Mail,
  RefreshCw,
  RotateCcw,
  Send,
  ShieldCheck,
} from "lucide-react";
import {
  abertura,
  actorMeta,
  conclusaoResumo,
  conferenciaCriterios,
  destinatarios,
  organizacaoChecklist,
  prazos,
  preparoFluxo,
  responsabilidades,
  validacaoFinal,
} from "@/content/fiscalizacao";
import { KeyTakeaway, ProgressIndicator, SectionHeading } from "./primitives";
import {
  ActorChip,
  ActorRelay,
  Branch,
  DeadlineCard,
  SideNote,
  StepChain,
} from "@/components/fiscalizacao/primitives";
import { FlowJourney } from "@/components/fiscalizacao/FlowJourney";
import { Button } from "@/components/ui/button";
import { useProgress } from "@/lib/progress";

/* ---------------- Abertura ---------------- */
export function FcAberturaSection() {
  return (
    <div className="space-y-14">
      <figure className="grain aurora surface-deep relative overflow-hidden rounded-3xl px-8 py-14 sm:px-14 sm:py-20">
        <div className="relative z-10 max-w-3xl">
          <p className="label-eyebrow text-white/55">Módulo 02 · Seção 01</p>
          <h2 className="mt-5 text-3xl font-extrabold leading-[1.1] text-white sm:text-5xl">
            {abertura.title}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-white/75 sm:text-lg">{abertura.lead}</p>
          <p className="mt-5 text-[15px] leading-relaxed text-white/60">{abertura.call}</p>
          <p className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-primary">
            Começar jornada
            <ArrowRight className="size-4" aria-hidden />
          </p>
        </div>
      </figure>

      <section>
        <p className="label-eyebrow mb-6">Quem participa</p>
        <div className="grid gap-4 sm:grid-cols-3">
          {(["tcu", "especialista", "areas"] as const).map((actor) => (
            <article key={actor} className="card-elevated rounded-2xl p-6">
              <ActorChip actor={actor} variant="full" />
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {actorMeta[actor].role}
              </p>
            </article>
          ))}
        </div>
      </section>

      <SideNote>
        O Especialista em Fiscalização Contínua está lotado na área jurídica e atua como responsável
        pela coordenação operacional dessas atividades.
      </SideNote>
    </div>
  );
}

/* ---------------- Entenda o fluxo ---------------- */
export function FcFluxoSection() {
  return (
    <div className="space-y-12">
      <SectionHeading
        eyebrow="Seção 02 · Entenda o fluxo"
        title="A jornada completa em oito momentos"
        lead="As etapas aparecem conforme você avança na página. Clique em cada uma para ver o detalhe."
      />
      <FlowJourney />
      <KeyTakeaway title="Visão geral">
        A fiscalização começa com o ofício do TCU e só é encerrada quando os arquivos são validados e
        a conformidade é comunicada às partes envolvidas.
      </KeyTakeaway>
    </div>
  );
}

/* ---------------- Ofício + organização ---------------- */
export function FcInicioSection() {
  return (
    <div className="space-y-16">
      <SectionHeading
        eyebrow="Seção 03 · Ponto de partida"
        title="Tudo começa com um ofício"
        lead="O TCU encaminha aos responsáveis cadastrados das entidades fiscalizadas um Ofício de Requisição, comunicando a instauração da Fiscalização Contínua daquele exercício e apresentando o cronograma para entrega dos arquivos."
      />

      <ActorRelay
        chain={[
          { actor: "tcu", caption: "Emite o Ofício de Requisição do exercício." },
          { actor: "tcu", caption: "Ofício com informações solicitadas e cronograma." },
          {
            actor: "especialista",
            caption: "Recebe a comunicação por e-mail e assume a condução do acompanhamento.",
          },
        ]}
      />

      <KeyTakeaway title="Ponto-chave" tone="attention">
        O ofício é o <strong className="font-semibold">ponto de partida</strong> da Fiscalização
        Contínua.
      </KeyTakeaway>

      <section className="space-y-7">
        <div className="border-l-2 border-sky pl-5">
          <p className="label-eyebrow">Etapa seguinte</p>
          <h3 className="mt-2 text-2xl font-extrabold text-primary">
            Antes das entregas, vem a organização
          </h3>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Depois de receber o ofício, o Especialista em Fiscalização Contínua analisa o que foi
            solicitado, estrutura o controle de acompanhamento e prepara o ambiente de armazenamento.
          </p>
        </div>

        <ul className="grid gap-3 sm:grid-cols-2">
          {organizacaoChecklist.map((item) => (
            <li key={item.question} className="card-elevated flex gap-3 rounded-2xl p-5">
              <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-sky" aria-hidden />
              <div>
                <p className="text-sm font-bold text-primary">{item.question}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
              </div>
            </li>
          ))}
        </ul>

        <SideNote>
          O Especialista em Fiscalização Contínua, lotado na área jurídica, também acompanha a fase e
          o status de cada entrega ao longo de todo o exercício.
        </SideNote>
      </section>
    </div>
  );
}

/* ---------------- Comunicação às áreas ---------------- */
export function FcComunicacaoSection() {
  return (
    <div className="space-y-14">
      <SectionHeading
        eyebrow="Seção 04 · Comunicação"
        title="Todo mundo precisa saber o seu papel"
        lead="Após receber e analisar o ofício, o Especialista em Fiscalização Contínua o encaminha, juntamente com os documentos orientativos e demais orientações, aos responsáveis envolvidos."
      />

      <div className="grain surface-brand relative overflow-hidden rounded-3xl px-8 py-10 sm:px-12 sm:py-12">
        <div className="relative z-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="label-eyebrow text-white/60">Prazo</p>
            <p className="mt-3 text-4xl font-extrabold text-white sm:text-5xl">Até 5 dias úteis</p>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-white/75">
            O envio deve ocorrer em até 5 dias úteis após o recebimento e a análise do ofício.
          </p>
        </div>
      </div>

      <section>
        <p className="label-eyebrow mb-6">Quem recebe a comunicação</p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {destinatarios.map((d) => (
            <article key={d.title} className="card-elevated rounded-2xl p-6">
              <Mail className="size-4 text-sky" aria-hidden />
              <h4 className="mt-4 text-[15px] font-bold leading-snug text-primary">{d.title}</h4>
              <p className="mt-1.5 text-xs font-semibold uppercase tracking-[0.1em] text-muted-foreground">
                {d.note}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

/* ---------------- Prazos ---------------- */
export function FcPrazosSection() {
  return (
    <div className="space-y-12">
      <SectionHeading
        eyebrow="Seção 05 · Prazos"
        title="Fique de olho no calendário"
        lead="Três prazos organizam o ritmo da Fiscalização Contínua e evitam que uma entrega chegue no limite."
      />
      <div className="grid gap-5 lg:grid-cols-3">
        {prazos.map((p, i) => (
          <DeadlineCard key={p.title} index={i + 1} {...p} />
        ))}
      </div>
      <KeyTakeaway title="Por que isso importa" tone="attention">
        O prazo interno de 7 dias úteis existe para permitir a conferência dos arquivos e eventuais
        ajustes <strong className="font-semibold">antes</strong> do envio ao TCU.
      </KeyTakeaway>
    </div>
  );
}

/* ---------------- Preparação e conferência ---------------- */
export function FcEntregasSection() {
  return (
    <div className="space-y-16">
      <SectionHeading
        eyebrow="Seção 06 · Entregas"
        title="Preparar, conferir e disponibilizar"
        lead="Após receber o alerta do Especialista em Fiscalização Contínua, os responsáveis pelas informações assumem a preparação dos arquivos."
      />

      <StepChain items={preparoFluxo.map((s) => ({ ...s, actor: "areas" as const }))} />

      <KeyTakeaway title="Reforço">
        Disponibilizar o arquivo não encerra a entrega. Ele ainda precisa passar pela conferência do
        Especialista em Fiscalização Contínua antes do envio ao TCU.
      </KeyTakeaway>

      <section className="space-y-7">
        <div className="border-l-2 border-sky pl-5">
          <p className="label-eyebrow">Conferência</p>
          <h3 className="mt-2 text-2xl font-extrabold text-primary">
            Antes de chegar ao TCU, os arquivos passam por uma conferência
          </h3>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Informado de que os arquivos estão disponíveis, o Especialista exporta os documentos do
            ambiente de armazenamento para a pasta de análise e verifica o aspecto formal, conforme
            os critérios dos documentos orientativos do TCU.
          </p>
        </div>

        <div className="rounded-3xl border border-border bg-ice p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-2">
            <ActorChip actor="especialista" />
            <span className="text-sm font-semibold text-primary">Inspeção formal do arquivo</span>
          </div>
          <ul className="mt-6 grid gap-3 sm:grid-cols-4">
            {conferenciaCriterios.map((c) => (
              <li
                key={c}
                className="flex items-center gap-2 rounded-2xl border border-border bg-card px-4 py-3 text-sm font-semibold text-primary"
              >
                <CheckCircle2 className="size-4 text-sky" aria-hidden />
                {c}
              </li>
            ))}
          </ul>
        </div>

        <Branch
          question="O que acontece depois da conferência?"
          left={{
            label: "Está conforme",
            title: "Enviar ao TCU",
            text: "Arquivos formalmente adequados seguem para o sistema utilizado pelo TCU.",
          }}
          right={{
            label: "Precisa de ajuste",
            title: "Retornar à área responsável",
            text: "O Especialista solicita ajustes, indicando prazo que permita nova revisão antes do envio.",
          }}
        />
      </section>
    </div>
  );
}

/* ---------------- Loop de ajustes ---------------- */
export function FcAjustesSection() {
  return (
    <div className="space-y-14">
      <SectionHeading
        eyebrow="Seção 07 · Ajustes"
        title="Nem sempre o arquivo passa de primeira"
        lead="Solicitar ajuste faz parte natural do processo. O arquivo volta para a área responsável e retorna para nova análise."
      />

      <div className="rounded-3xl border border-border bg-card p-6 sm:p-8">
        <div className="flex items-center gap-2">
          <RotateCcw className="size-4 text-sky" aria-hidden />
          <p className="text-sm font-bold text-primary">Loop de correção</p>
        </div>
        <ol className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { actor: "especialista" as const, text: "Solicita ajuste com prazo para nova revisão." },
            { actor: "areas" as const, text: "Recebe a solicitação e realiza os ajustes." },
            { actor: "areas" as const, text: "Disponibiliza novamente e informa o Especialista." },
            { actor: "especialista" as const, text: "Analisa outra vez o aspecto formal do arquivo." },
          ].map((n, i) => (
            <li key={i} className="rounded-2xl border border-border bg-ice p-5">
              <span className="text-[11px] font-bold tabular-nums text-sky">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="mt-2">
                <ActorChip actor={n.actor} />
              </div>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{n.text}</p>
            </li>
          ))}
        </ol>
        <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
          O ciclo se repete quantas vezes forem necessárias até que o arquivo esteja formalmente
          adequado para envio.
        </p>
      </div>
    </div>
  );
}

/* ---------------- Envio, validação e conformidade ---------------- */
export function FcValidacaoSection() {
  return (
    <div className="space-y-16">
      <SectionHeading
        eyebrow="Seção 08 · Envio e validação"
        title="Tudo certo? Agora o arquivo segue para o TCU"
        lead="Com os arquivos formalmente adequados, o Especialista em Fiscalização Contínua alimenta o sistema utilizado pelo TCU, disponibilizando os documentos para apreciação."
      />

      <StepChain
        items={[
          { title: "Arquivo conferido", text: "Análise formal concluída pelo Especialista.", actor: "especialista" },
          { title: "Envio", text: "Documentos carregados no sistema utilizado pelo TCU.", actor: "especialista" },
          { title: "TCU", text: "Documentos disponíveis para apreciação do Tribunal.", actor: "tcu" },
        ]}
      />

      <section className="space-y-7">
        <div className="border-l-2 border-sky pl-5">
          <p className="label-eyebrow">Validação</p>
          <h3 className="mt-2 text-2xl font-extrabold text-primary">
            O TCU também confere os arquivos
          </h3>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            O sistema do TCU realiza verificação automática dos documentos carregados quanto aos
            critérios estabelecidos.
          </p>
        </div>

        <Branch
          question="TCU analisa"
          left={{
            label: "Conforme",
            title: "Validação",
            text: "O arquivo atende aos critérios e é validado pelo sistema do TCU.",
          }}
          right={{
            label: "Não conforme",
            title: "Ajuste necessário",
            text: "O sistema informa aos responsáveis cadastrados quais alterações devem ser realizadas e o prazo para atendimento.",
          }}
        />
      </section>

      <section className="space-y-6">
        <div className="border-l-2 border-senai pl-5">
          <p className="label-eyebrow">Não conformidade</p>
          <h3 className="mt-2 text-2xl font-extrabold text-primary">
            Recebeu uma não conformidade? O processo volta para correção
          </h3>
        </div>
        <ActorRelay
          chain={[
            { actor: "tcu", caption: "Comunica a não conformidade e o prazo de atendimento." },
            { actor: "especialista", caption: "Recebe a comunicação e solicita o ajuste à área." },
            { actor: "areas", caption: "Realiza o ajuste e disponibiliza novamente o arquivo." },
            { actor: "especialista", caption: "Confere e reenvia ao TCU." },
          ]}
        />
        <p className="text-sm leading-relaxed text-muted-foreground">
          O processo pode circular mais de uma vez até que os arquivos sejam validados.
        </p>
      </section>

      <section className="space-y-6">
        <div className="border-l-2 border-sesi pl-5">
          <p className="label-eyebrow">Conclusão da entrega</p>
          <h3 className="mt-2 text-2xl font-extrabold text-primary">Conformidade confirmada</h3>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Quando os arquivos atendem aos critérios definidos, o TCU envia a comunicação de
            conformidade.
          </p>
        </div>
        <ol className="space-y-2">
          {validacaoFinal.map((v, i) => (
            <li
              key={v}
              className="flex items-center gap-3 rounded-2xl border border-border bg-card px-5 py-4 transition-colors duration-300 hover:border-sky/40"
              style={{ animation: `rise-in 420ms cubic-bezier(0.22,1,0.36,1) ${i * 70}ms both` }}
            >
              <ShieldCheck className="size-4 text-sesi" aria-hidden />
              <span className="text-sm font-semibold text-primary">{v}</span>
            </li>
          ))}
        </ol>
        <p className="text-sm leading-relaxed text-muted-foreground">
          O Especialista em Fiscalização Contínua atualiza o controle, acompanha a validação dos
          arquivos e, após a validação de todos, comunica a conformidade às partes envolvidas.
        </p>
      </section>
    </div>
  );
}

/* ---------------- Papéis e conexões ---------------- */
export function FcPapeisSection() {
  return (
    <div className="space-y-16">
      <SectionHeading
        eyebrow="Seção 09 · Papéis"
        title="Quem faz o quê na Fiscalização Contínua?"
        lead="Consulta rápida das responsabilidades de cada parte ao longo do processo."
      />

      <div className="grid gap-5 lg:grid-cols-3">
        {responsabilidades.map((r) => (
          <article key={r.actor} className="card-elevated relative overflow-hidden rounded-3xl p-7">
            <span
              className={`pointer-events-none absolute inset-x-0 top-0 h-1 ${actorMeta[r.actor].bar}`}
              aria-hidden
            />
            <ActorChip actor={r.actor} variant="full" />
            {r.note ? (
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{r.note}</p>
            ) : null}
            <ul className="mt-6 space-y-2.5">
              {r.items.map((i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm leading-relaxed">
                  <span className={`mt-2 size-1 shrink-0 rounded-full ${actorMeta[r.actor].bar}`} aria-hidden />
                  <span>{i}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <section className="space-y-6">
        <div className="border-l-2 border-sky pl-5">
          <p className="label-eyebrow">Conexões</p>
          <h3 className="mt-2 text-2xl font-extrabold text-primary">Quem conecta todo o processo?</h3>
        </div>
        <div className="rounded-3xl border border-border bg-ice p-6 sm:p-10">
          <div className="mx-auto flex max-w-md flex-col items-center gap-3 text-center">
            <div className="w-full rounded-2xl border border-primary/25 bg-card p-5">
              <ActorChip actor="tcu" variant="full" />
              <p className="mt-2 text-sm text-muted-foreground">Requisita e valida as informações.</p>
            </div>
            <span className="text-sky" aria-hidden>↕</span>
            <div className="w-full rounded-2xl border border-sky/35 bg-card p-5 shadow-[var(--shadow-soft)]">
              <ActorChip actor="especialista" variant="full" />
              <p className="mt-2 text-sm text-muted-foreground">Coordena, intermedia e acompanha.</p>
            </div>
            <span className="text-sky" aria-hidden>↕</span>
            <div className="w-full rounded-2xl border border-senai/30 bg-card p-5">
              <ActorChip actor="areas" variant="full" />
              <p className="mt-2 text-sm text-muted-foreground">Preparam e disponibilizam os arquivos.</p>
            </div>
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground">
            O Especialista em Fiscalização Contínua centraliza as comunicações, acompanha os prazos,
            verifica as entregas e faz a interface entre as áreas internas e o TCU ao longo da
            fiscalização.
          </p>
        </div>
      </section>
    </div>
  );
}

/* ---------------- Conclusão ---------------- */
export function FcConclusaoSection({ moduleId }: { moduleId: string }) {
  const { moduleProgress, resetModule } = useProgress();
  const progress = moduleProgress(moduleId);

  return (
    <div className="space-y-12">
      <div className="grain aurora surface-deep relative overflow-hidden rounded-3xl px-8 py-12 sm:px-14 sm:py-16">
        <div className="relative z-10 max-w-2xl">
          <p className="label-eyebrow text-white/60">Jornada concluída</p>
          <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">
            Você concluiu a jornada da Fiscalização Contínua
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-white/70">
            Da chegada do ofício à validação pelo TCU, cada etapa depende de organização, comunicação
            e cumprimento dos prazos.
          </p>
          <div className="mt-9 max-w-md">
            <div className="glass rounded-2xl p-5">
              <ProgressIndicator value={progress} label="Conclusão do módulo" tone="dark" />
            </div>
          </div>
        </div>
      </div>

      <section>
        <p className="label-eyebrow mb-6">Resumo da jornada</p>
        <ol className="flex flex-wrap items-center gap-2">
          {conclusaoResumo.map((s, i) => (
            <li key={s} className="flex items-center gap-2">
              <span className="rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-primary">
                {s}
              </span>
              {i < conclusaoResumo.length - 1 ? (
                <ArrowRight className="size-3.5 text-sky" aria-hidden />
              ) : null}
            </li>
          ))}
        </ol>
      </section>

      <section className="grid gap-4 sm:grid-cols-3">
        {[
          { icon: FileCheck2, title: "Início", text: "O ofício do TCU abre a Fiscalização Contínua do exercício." },
          { icon: Send, title: "Condução", text: "O Especialista em Fiscalização Contínua coordena prazos, conferência e envio." },
          { icon: ShieldCheck, title: "Encerramento", text: "A entrega termina com a validação do TCU e a comunicação da conformidade." },
        ].map((t) => (
          <article key={t.title} className="card-elevated rounded-2xl p-6">
            <t.icon className="size-4 text-sky" aria-hidden />
            <h4 className="mt-4 text-base font-bold text-primary">{t.title}</h4>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.text}</p>
          </article>
        ))}
      </section>

      <section className="rounded-3xl border border-border bg-card p-7 sm:p-9">
        <h3 className="text-xl font-extrabold text-primary">Próximos passos</h3>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Reveja a jornada quando precisar consultar prazos, responsabilidades ou o caminho de
          ajustes.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Button asChild>
            <Link to="/modulos/$moduleId/$sectionId" params={{ moduleId, sectionId: "abertura" }}>
              <Compass className="size-4" aria-hidden />
              Rever a jornada
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/">
              <Home className="size-4" aria-hidden />
              Voltar aos módulos
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
