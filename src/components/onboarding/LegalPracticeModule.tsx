import { useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check, Network, UsersRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BrandLogo } from "@/components/ucjc/BrandLogo";
import { ResourcesMenu } from "@/components/ucjc/ResourcesMenu";
import { ProgressIndicator } from "@/components/onboarding/primitives";
import { CheckList } from "@/components/ucjc/primitives";
import { useProgress } from "@/lib/progress";
import {
  legalDimensions, legalGoodPractices, legalIntegration, legalPracticeConclusion,
  legalPracticeId, legalPracticeOpening, legalRoutine,
} from "@/content/juridicoAdvogados";

const localSections = [
  { id: "dimensoes", title: "Dimensões da atuação" },
  { id: "integracao", title: "Integração com a UCJC" },
  { id: "rotina", title: "Organização da rotina" },
  { id: "boas-praticas", title: "Boas práticas" },
  { id: "encerramento", title: "Encerramento" },
];

function ChapterHeading({ number, title }: { number: string; title: string }) {
  return <div className="mb-8"><p className="label-eyebrow">Seção {number}</p><h2 className="mt-3 text-2xl font-extrabold leading-snug text-primary sm:text-3xl">{title}</h2></div>;
}

export function LegalPracticeModulePage() {
  const { hydrated, moduleProgress, completeSection, isSectionComplete, setLastVisited } = useProgress();
  const done = hydrated && isSectionComplete(legalPracticeId, "sua-atuacao");
  useEffect(() => { setLastVisited(legalPracticeId, "sua-atuacao"); }, [setLastVisited]);

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-5 sm:px-8">
          <Button variant="ghost" asChild className="px-0"><Link to="/trilhas/rotina-juridica"><ArrowLeft className="size-4" aria-hidden />Visão geral da trilha</Link></Button>
          <div className="flex items-center gap-4"><BrandLogo variant="color" horizontalClassName="h-6" stackedClassName="h-8" /><ResourcesMenu variant="color" /></div>
        </div>
      </header>
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <header className="max-w-4xl py-12 sm:py-16">
          <p className="label-eyebrow">{legalPracticeOpening.eyebrow}</p>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight text-primary sm:text-5xl">{legalPracticeOpening.title}</h1>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">{legalPracticeOpening.paragraphs.map(p => <p key={p}>{p}</p>)}</div>
          <div className="mt-8 border-l-2 border-sky pl-5"><p className="label-eyebrow">Objetivo de aprendizagem</p><p className="mt-2 text-sm leading-relaxed">{legalPracticeOpening.objective}</p></div>
        </header>
        <div className="flex items-start gap-12 border-t border-border">
          <aside className="sticky top-8 hidden w-52 shrink-0 py-10 lg:block">
            <p className="label-eyebrow">Neste módulo</p>
            <nav aria-label="Seções de Sua atuação na UCJC" className="mt-5"><ol className="space-y-1">{localSections.map((s,i) => <li key={s.id}><a href={`#${s.id}`} className="flex min-h-11 items-center gap-3 rounded-md px-2 text-sm text-muted-foreground transition-colors hover:bg-mist hover:text-primary"><span className="text-xs font-bold tabular-nums text-sky">0{i+1}</span>{s.title}</a></li>)}</ol></nav>
            <ProgressIndicator className="mt-8" value={hydrated ? moduleProgress(legalPracticeId) : 0} label="Conteúdo disponível" />
          </aside>
          <main className="min-w-0 flex-1">
            <section id="dimensoes" className="scroll-mt-8 border-b border-border py-12 sm:py-16">
              <ChapterHeading number="01" title="Uma atuação que vai além da análise técnica" />
              <ol className="grid gap-x-10 gap-y-8 sm:grid-cols-2">{legalDimensions.map((d,i) => <li key={d.title} className="border-t border-border pt-5"><span className="text-3xl font-semibold tabular-nums text-sky" aria-hidden>0{i+1}</span><h3 className="mt-4 text-lg font-bold text-primary">{d.title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d.text}</p></li>)}</ol>
            </section>
            <section id="integracao" className="scroll-mt-8 border-b border-border py-12 sm:py-16">
              <ChapterHeading number="02" title="Uma atuação integrada às equipes e à gestão" />
              <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">{legalIntegration.introduction.map(p => <p key={p}>{p}</p>)}</div>
              <div className="mt-10 border-l-2 border-primary pl-5 sm:pl-7">
                <p className="flex items-center gap-2 text-xs font-bold uppercase text-primary"><Network className="size-4" aria-hidden />Estrutura de gestão</p>
                <h3 className="mt-4 text-xl font-bold text-primary">{legalIntegration.management.title}</h3>
                <p className="mt-3 text-sm leading-relaxed">{legalIntegration.management.text}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{legalIntegration.management.note}</p>
                <Button variant="link" asChild className="mt-3 h-auto whitespace-normal px-0 text-left"><Link to="/" hash="estrutura">Consultar o organograma da UCJC<ArrowRight className="size-4 shrink-0" aria-hidden /></Link></Button>
              </div>
              <div className="mt-10 border-t border-border pt-7">
                <p className="flex items-center gap-2 text-xs font-bold uppercase text-primary"><UsersRound className="size-4" aria-hidden />Interfaces operacionais e de apoio</p>
                <div className="mt-5 space-y-6">{legalIntegration.support.map(s => <div key={s.id}><h3 className="text-lg font-bold text-primary">{s.title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>{s.note ? <p className="mt-3 rounded-md border border-border bg-mist p-4 text-sm font-medium leading-relaxed text-primary">{s.note}</p> : null}</div>)}</div>
              </div>
            </section>
            <section id="rotina" className="scroll-mt-8 border-b border-border py-12 sm:py-16">
              <ChapterHeading number="03" title="Do acompanhamento à conclusão" />
              <p className="text-sm leading-relaxed text-muted-foreground">{legalRoutine.introduction}</p>
              <ol className="mt-10 grid gap-6 sm:grid-cols-5 sm:gap-4">{legalRoutine.steps.map((s,i) => <li key={s.title} className="relative border-l border-border pl-5 sm:border-l-0 sm:border-t sm:pl-0 sm:pt-5"><span className="text-lg font-bold tabular-nums text-sky">0{i+1}</span><h3 className="mt-2 text-sm font-bold text-primary">{s.title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p></li>)}</ol>
              <p className="mt-7 text-xs leading-relaxed text-muted-foreground">{legalRoutine.note}</p>
            </section>
            <section id="boas-praticas" className="scroll-mt-8 border-b border-border py-12 sm:py-16">
              <ChapterHeading number="04" title="Cuidados que fazem diferença" />
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground">{legalGoodPractices.introduction}</p>
              <CheckList items={legalGoodPractices.items} />
            </section>
            <section id="encerramento" className="scroll-mt-8 py-12 sm:py-16">
              <ChapterHeading number="05" title={legalPracticeConclusion.title} />
              <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">{legalPracticeConclusion.paragraphs.map(p => <p key={p}>{p}</p>)}</div>
              <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-y border-border py-5"><div><p className="label-eyebrow">Próximo módulo</p><p className="mt-2 font-semibold text-primary">Ferramentas e sistemas de trabalho</p></div><Button variant="link" asChild className="px-0"><Link to="/modulos/$moduleId/$sectionId" params={{ moduleId: legalPracticeId, sectionId: "ferramentas" }}>Ir para o módulo 02<ArrowRight className="size-4" aria-hidden /></Link></Button></div>
              <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:flex-wrap">
                <Button onClick={() => completeSection(legalPracticeId, "sua-atuacao")} disabled={done}><Check className="size-4" aria-hidden />{done ? "Módulo 01 concluído" : "Marcar módulo 01 como concluído"}</Button>
                <Button variant="outline" asChild className="h-auto min-h-10 whitespace-normal"><Link to="/trilhas/rotina-juridica"><ArrowLeft className="size-4 shrink-0" aria-hidden />Voltar à visão geral da trilha</Link></Button>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}