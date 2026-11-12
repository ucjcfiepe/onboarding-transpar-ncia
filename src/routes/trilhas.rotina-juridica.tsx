import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Lock } from "lucide-react";
import { AreaHero, AreaSection } from "@/components/ucjc/primitives";
import { Button } from "@/components/ui/button";
import { legalPracticeId, legalPracticeModules, legalPracticeOverview } from "@/content/juridicoAdvogados";
import { useProgress } from "@/lib/progress";

const title = "Rotina dos Advogados e Especialistas Jurídicos — Onboarding UCJC";
const description = "Trilha 02 do Jurídico: atuação na UCJC e jornada de oito módulos sobre ferramentas, demandas, prazos, registros e reportes.";
export const Route = createFileRoute("/trilhas/rotina-juridica")({
  head: () => ({ meta: [{ title }, { name: "description", content: description }, { property: "og:title", content: title }, { property: "og:description", content: description }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: LegalPracticeOverviewPage,
});

function LegalPracticeOverviewPage() {
  const { hydrated, isSectionComplete } = useProgress();
  const availableCount = legalPracticeModules.filter(m => m.status === "available").length;
  return <div className="min-h-screen bg-background">
    <AreaHero eyebrow={legalPracticeOverview.eyebrow} title={legalPracticeOverview.title} lead={legalPracticeOverview.subtitle} />
    <AreaSection>
      <div className="grid gap-6 md:grid-cols-[1fr_2fr]"><div><p className="label-eyebrow">Apresentação</p><h2 className="mt-3 text-2xl font-bold text-primary">Sua jornada no Jurídico</h2></div><div className="space-y-4 text-base leading-relaxed text-muted-foreground">{legalPracticeOverview.introduction.map(p => <p key={p}>{p}</p>)}</div></div>
      <div className="mt-14 flex flex-wrap items-end justify-between gap-4 border-b border-border pb-5"><div><p className="label-eyebrow">Organização da jornada</p><h2 className="mt-3 text-2xl font-bold text-primary">Oito módulos. Uma atuação conectada.</h2></div><p className="text-sm text-muted-foreground">{availableCount} disponíveis · {legalPracticeModules.length - availableCount} em breve</p></div>
      <ol aria-label="Módulos da Trilha 02" className="grid gap-x-12 md:grid-cols-2">{legalPracticeModules.map(m => <li key={m.id} className="flex min-w-0 gap-5 border-b border-border py-7"><span className={`text-3xl font-semibold tabular-nums ${m.status === "available" ? "text-sky" : "text-muted-foreground"}`} aria-hidden>0{m.number}</span><div className="min-w-0 flex-1"><div className="mb-2 flex items-center gap-2 text-xs font-semibold text-muted-foreground">{m.status === "available" ? <Check className="size-3.5 text-primary" aria-hidden /> : <Lock className="size-3.5" aria-hidden />}{m.status === "available" ? "Disponível" : "Em breve"}</div><h3 className="text-lg font-bold leading-snug text-primary">{m.title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.description}</p>{m.status === "available" ? <Button variant="link" asChild className="mt-3 px-0"><Link to="/modulos/$moduleId/$sectionId" params={{ moduleId: legalPracticeId, sectionId: m.id }}>{hydrated && isSectionComplete(legalPracticeId, m.id) ? "Revisar" : "Iniciar"} módulo {String(m.number).padStart(2, "0")}<ArrowRight className="size-4" aria-hidden /></Link></Button> : null}</div></li>)}</ol>
      <div className="mt-10"><Button variant="outline" asChild><Link to="/juridico">Voltar ao Jurídico</Link></Button></div>
    </AreaSection>
  </div>;
}