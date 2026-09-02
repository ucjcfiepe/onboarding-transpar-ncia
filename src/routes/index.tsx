import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { modules } from "@/content/modules";
import { useProgress } from "@/lib/progress";
import { ModuleCard } from "@/components/onboarding/ModuleCard";
import { ProgressIndicator } from "@/components/onboarding/primitives";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Onboarding Unidade Jurídica — Transparência SESI/SENAI" },
      {
        name: "description",
        content:
          "Experiência de aprendizagem digital sobre a rotina de Transparência do SESI e do SENAI: processo, ambientes públicos, plataformas, monitoramento e evidências.",
      },
      { property: "og:title", content: "Onboarding Unidade Jurídica — Transparência SESI/SENAI" },
      {
        property: "og:description",
        content:
          "Trilha interativa: planejar e solicitar, receber e disponibilizar, verificar e registrar, corrigir e aprimorar.",
      },
    ],
  }),
  component: Home,
});


function Home() {
  const { moduleProgress, overallProgress, state, hydrated } = useProgress();
  const overall = hydrated ? overallProgress() : 0;
  const primary = modules[0]!;
  const validResume = (moduleId: string) => {
    const mod = modules.find((m) => m.id === moduleId);
    const last = state.lastVisited[moduleId];
    return last && mod?.sections.some((s) => s.id === last) ? last : undefined;
  };
  const resume = validResume(primary.id);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <header className="grain aurora surface-deep relative overflow-hidden">
        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-20 sm:px-8 sm:py-28">
          <p className="label-eyebrow text-white/55">Unidade Jurídica · Onboarding</p>
          <h1 className="mt-6 max-w-3xl text-4xl font-extrabold leading-[1.08] text-white sm:text-5xl lg:text-6xl">
            Transparência SESI/SENAI, do prazo à evidência.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
            Bem-vindo(a). Esta trilha apresenta como funciona a rotina de Transparência do SESI e do
            SENAI: o que é solicitado, como a informação é disponibilizada, onde ela é verificada e
            como as inconsistências são tratadas.
          </p>

          <div className="mt-12 flex flex-col gap-6 sm:flex-row sm:items-center">
            <Link
              to="/modulos/$moduleId/$sectionId"
              params={{ moduleId: primary.id, sectionId: resume ?? primary.sections[0]!.id }}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-primary transition-transform duration-300 hover:-translate-y-0.5"
            >
              {overall > 0 ? "Continuar de onde parei" : "Começar o onboarding"}
              <ArrowRight className="size-4" aria-hidden />
            </Link>
            <div className="glass w-full max-w-xs rounded-2xl p-5">
              <ProgressIndicator value={overall} label="Progresso geral" tone="dark" />
            </div>
          </div>
        </div>
      </header>

      {/* Módulos */}
      <section
        className="border-y border-border"
        style={{ backgroundImage: "var(--gradient-soft)" }}
      >
        <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-8 sm:py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-xl">
              <p className="label-eyebrow">Trilha</p>
              <h2 className="mt-3 text-3xl font-extrabold text-primary sm:text-4xl">
                Módulos disponíveis
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
                A trilha é modular: novos módulos são incorporados sem alterar a navegação nem o
                progresso já registrado.
              </p>
            </div>
            <p className="text-sm font-semibold text-muted-foreground">
              {modules.filter((m) => m.status === "available").length} de {modules.length} liberado
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {modules.map((m) => (
              <ModuleCard
                key={m.id}
                module={m}
                progress={hydrated ? moduleProgress(m.id) : 0}
                {...(validResume(m.id) ? { resumeSectionId: validResume(m.id)! } : {})}
              />
            ))}
          </div>
        </div>
      </section>

      <footer className="mx-auto w-full max-w-6xl px-6 py-14 sm:px-8">
        <p className="text-xs leading-relaxed text-muted-foreground">
          Onboarding corporativo da Unidade Jurídica · SESI e SENAI. Progresso armazenado localmente
          neste navegador nesta primeira versão.
        </p>
      </footer>
    </div>
  );
}
