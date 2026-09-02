import { useEffect, useState } from "react";
import { createFileRoute, Link, notFound, useNavigate } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { getModule } from "@/content/modules";
import { useProgress } from "@/lib/progress";
import { ProgressIndicator } from "@/components/onboarding/primitives";
import { Button } from "@/components/ui/button";
import {
  ConclusionSection,
  IntroSection,
  JourneySection,
  ProcessSection,
  ResponsibilitiesSection,
  ScenariosSection,
  SectionNotReady,
  ToolsSection,
} from "@/components/onboarding/sections";

export const Route = createFileRoute("/modulos/$moduleId/$sectionId")({
  head: () => ({
    meta: [
      { title: "Módulo Transparência SESI/SENAI — Onboarding Unidade Jurídica" },
      {
        name: "description",
        content:
          "Trilha interativa sobre a rotina de Transparência do SESI e do SENAI: processo, ambientes públicos, plataformas, monitoramento e evidências.",
      },
      { property: "og:title", content: "Módulo Transparência SESI/SENAI" },
      {
        property: "og:description",
        content:
          "Aprenda a rotina de Transparência: planejar, disponibilizar, verificar, registrar e corrigir.",
      },
    ],
  }),
  loader: ({ params }) => {
    const mod = getModule(params.moduleId);
    if (!mod || mod.status !== "available") throw notFound();
    if (!mod.sections.some((s) => s.id === params.sectionId)) throw notFound();
    return null;
  },
  component: SectionPage,
});

function SectionPage() {
  const { moduleId, sectionId } = Route.useParams();
  const navigate = useNavigate();
  const mod = getModule(moduleId)!;
  const index = mod.sections.findIndex((s) => s.id === sectionId);
  const section = mod.sections[index]!;
  const prev = index > 0 ? mod.sections[index - 1] : undefined;
  const next = index < mod.sections.length - 1 ? mod.sections[index + 1] : undefined;

  const { completeSection, isSectionComplete, moduleProgress, setLastVisited } = useProgress();
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    setLastVisited(moduleId, sectionId);
    setNavOpen(false);
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [moduleId, sectionId, setLastVisited]);

  const progress = moduleProgress(moduleId);

  function advance() {
    completeSection(moduleId, sectionId);
    if (next) {
      void navigate({
        to: "/modulos/$moduleId/$sectionId",
        params: { moduleId, sectionId: next.id },
      });
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Topbar mobile */}
      <div className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur lg:hidden">
        <div className="flex items-center justify-between gap-3 px-4 py-3">
          <Link to="/" className="text-sm font-bold text-primary">
            Onboarding UJ
          </Link>
          <button
            type="button"
            onClick={() => setNavOpen((v) => !v)}
            className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-xs font-semibold text-primary"
            aria-expanded={navOpen}
          >
            {navOpen ? <X className="size-3.5" aria-hidden /> : <Menu className="size-3.5" aria-hidden />}
            Seções
          </button>
        </div>
        <div className="px-4 pb-3">
          <ProgressIndicator value={progress} />
        </div>
        {navOpen ? (
          <nav className="rise-in border-t border-border bg-card px-4 py-4">
            <SectionList moduleId={moduleId} currentId={sectionId} />
          </nav>
        ) : null}
      </div>

      <div className="mx-auto flex w-full max-w-[1400px] gap-12 px-4 sm:px-8">
        {/* Sidebar desktop */}
        <aside className="sticky top-0 hidden h-screen w-72 shrink-0 flex-col justify-between py-10 lg:flex">
          <div className="min-h-0 overflow-y-auto pr-2">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft className="size-3.5" aria-hidden />
              Início
            </Link>
            <p className="label-eyebrow mt-8">{mod.code}</p>
            <h1 className="mt-2 text-lg font-extrabold leading-snug text-primary">{mod.title}</h1>
            <div className="mt-6">
              <ProgressIndicator value={progress} label="Progresso" />
            </div>
            <nav className="mt-8">
              <SectionList moduleId={moduleId} currentId={sectionId} />
            </nav>
          </div>
        </aside>

        {/* Conteúdo */}
        <main className="min-w-0 flex-1 py-12 lg:py-16">
          <div key={sectionId} className="rise-in mx-auto max-w-3xl xl:max-w-4xl">
            <SectionBody kind={section.kind} moduleId={moduleId} />

            <nav className="mt-20 flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
              {prev ? (
                <Button variant="ghost" asChild className="justify-start gap-2">
                  <Link
                    to="/modulos/$moduleId/$sectionId"
                    params={{ moduleId, sectionId: prev.id }}
                  >
                    <ArrowLeft className="size-4" aria-hidden />
                    {prev.title}
                  </Link>
                </Button>
              ) : (
                <span />
              )}
              {next ? (
                <Button onClick={advance} className="gap-2">
                  {isSectionComplete(moduleId, sectionId) ? "Continuar" : "Concluir e continuar"}
                  <ArrowRight className="size-4" aria-hidden />
                </Button>
              ) : (
                <Button
                  onClick={() => completeSection(moduleId, sectionId)}
                  disabled={isSectionComplete(moduleId, sectionId)}
                  className="gap-2"
                >
                  {isSectionComplete(moduleId, sectionId) ? "Módulo concluído" : "Marcar como concluído"}
                  <Check className="size-4" aria-hidden />
                </Button>
              )}
            </nav>
          </div>
        </main>
      </div>
    </div>
  );
}

function SectionList({ moduleId, currentId }: { moduleId: string; currentId: string }) {
  const mod = getModule(moduleId)!;
  const { isSectionComplete } = useProgress();

  return (
    <ol className="space-y-1">
      {mod.sections.map((s, i) => {
        const active = s.id === currentId;
        const done = isSectionComplete(moduleId, s.id);
        return (
          <li key={s.id}>
            <Link
              to="/modulos/$moduleId/$sectionId"
              params={{ moduleId, sectionId: s.id }}
              className={cn(
                "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-colors duration-200",
                active
                  ? "bg-mist font-bold text-primary"
                  : "text-muted-foreground hover:bg-ice hover:text-primary",
              )}
            >
              <span
                className={cn(
                  "inline-flex size-5 shrink-0 items-center justify-center rounded-full border text-[10px] font-bold tabular-nums",
                  done
                    ? "border-primary bg-primary text-white"
                    : active
                      ? "border-sky text-sky"
                      : "border-hairline",
                )}
                aria-hidden
              >
                {done ? <Check className="size-3" strokeWidth={3} /> : i + 1}
              </span>
              <span className="truncate">{s.title}</span>
              {done ? <span className="sr-only">(concluída)</span> : null}
            </Link>
          </li>
        );
      })}
    </ol>
  );
}

function SectionBody({ kind, moduleId }: { kind: string; moduleId: string }) {
  switch (kind) {
    case "intro":
      return <IntroSection />;
    case "process":
      return <ProcessSection />;
    case "tools":
      return <ToolsSection />;
    case "journey":
      return <JourneySection />;
    case "responsibilities":
      return <ResponsibilitiesSection />;
    case "scenarios":
      return <ScenariosSection />;
    case "conclusion":
      return <ConclusionSection moduleId={moduleId} />;
    default:
      return <SectionNotReady />;
  }
}
