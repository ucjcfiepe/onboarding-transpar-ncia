import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { modules } from "@/content/modules";
import { areas, integracaoExemplo } from "@/content/ucjc";
import { useProgress } from "@/lib/progress";
import { ModuleCard } from "@/components/onboarding/ModuleCard";
import { BrandLogo } from "@/components/ucjc/BrandLogo";

import { ProgressIndicator } from "@/components/onboarding/primitives";
import { cn } from "@/lib/utils";

const title = "Onboarding UCJC — Unidade Compartilhada Jurídica e de Compliance";
const description =
  "Jornada prática para entender como Jurídico, Compliance e Operações Jurídicas e de Compliance atuam no Sistema FIEPE, quando cada frente é acionada e como os processos se conectam.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Home,
});

const accentBar: Record<string, string> = {
  institutional: "bg-primary",
  teal: "bg-teal",
  sky: "bg-sky",
};

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
      <header className="grain mesh relative overflow-hidden">
        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-20 sm:px-8 sm:py-28">
          <BrandLogo variant="light" horizontalClassName="h-7 sm:h-8" stackedClassName="h-11" />
          <p className="label-eyebrow mt-8 text-white/55">
            Unidade Compartilhada Jurídica e de Compliance · Onboarding
          </p>

          <h1 className="mt-6 max-w-3xl text-4xl font-extrabold leading-[1.08] text-white sm:text-5xl lg:text-6xl">
            Conheça a UCJC por dentro.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
            Uma jornada prática para entender como Jurídico, Compliance e Operações Jurídicas e de
            Compliance atuam, quando cada frente deve ser acionada e como os principais processos se
            conectam no dia a dia.
          </p>

          <div className="mt-12 flex flex-col gap-6 sm:flex-row sm:items-center">
            <a
              href="#frentes"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-primary transition-transform duration-300 hover:-translate-y-0.5"
            >
              Explorar a UCJC
              <ArrowRight className="size-4" aria-hidden />
            </a>
          </div>
        </div>
      </header>

      {/* Frentes */}
      <section
        id="frentes"
        className="border-y border-border"
        style={{ backgroundImage: "var(--gradient-soft)" }}
      >
        <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-8 sm:py-24">
          <div className="max-w-2xl">
            <p className="label-eyebrow">Conheça a UCJC</p>
            <h2 className="mt-3 text-3xl font-extrabold text-primary sm:text-4xl">
              Por onde você quer começar?
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
              Cada frente possui responsabilidades diferentes, mas elas trabalham de forma integrada
              para apoiar decisões, prevenir riscos, organizar processos e dar suporte às áreas do
              Sistema FIEPE.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {areas.map((a) => (
              <Link
                key={a.id}
                to={a.route}
                className="card-elevated group relative block overflow-hidden rounded-3xl p-7 sm:p-8"
              >
                <span
                  className={cn(
                    "pointer-events-none absolute inset-x-0 top-0 h-1",
                    accentBar[a.accent],
                  )}
                  aria-hidden
                />
                <p className="label-eyebrow">{a.eyebrow}</p>
                <h3 className="mt-2 text-xl font-extrabold text-primary sm:text-2xl">{a.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{a.subtitle}</p>
                <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
                  {a.description}
                </p>
                <ul className="mt-6 space-y-2.5">
                  {a.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2.5 text-sm leading-relaxed">
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-sky" aria-hidden />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-7 flex items-center gap-2 text-sm font-semibold text-primary">
                  Explorar frente
                  <ArrowRight
                    className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Integração */}
      <section className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-8 sm:py-24">
        <div className="max-w-2xl">
          <p className="label-eyebrow">Integração</p>
          <h2 className="mt-3 text-3xl font-extrabold text-primary sm:text-4xl">
            Áreas diferentes. Atuação conectada.
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
            Uma contratação, por exemplo, pode envolver mais de uma frente ao mesmo tempo.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {integracaoExemplo.map((i) => (
            <article key={i.area} className="rounded-2xl border border-border bg-card p-6">
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-sky">{i.area}</p>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{i.text}</p>
            </article>
          ))}
        </div>

        <p className="mt-8 border-l-2 border-hairline pl-4 text-[15px] leading-relaxed text-foreground">
          A UCJC funciona de forma integrada. Dependendo da demanda, mais de uma frente pode
          participar do mesmo processo.
        </p>
      </section>

      {/* Sua jornada */}
      <section
        className="border-y border-border"
        style={{ backgroundImage: "var(--gradient-soft)" }}
      >
        <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-8 sm:py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-xl">
              <p className="label-eyebrow">Sua jornada</p>
              <h2 className="mt-3 text-3xl font-extrabold text-primary sm:text-4xl">
                Módulos com jornada guiada
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
                Frentes transversais conduzidas pelo Núcleo de Operações Jurídicas e de Compliance,
                com trilha completa e progresso registrado.
              </p>
            </div>
            <div className="w-full max-w-xs rounded-2xl border border-border bg-card p-5">
              <ProgressIndicator value={overall} label="Progresso geral" />
              <Link
                to="/modulos/$moduleId/$sectionId"
                params={{ moduleId: primary.id, sectionId: resume ?? primary.sections[0]!.id }}
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary"
              >
                {overall > 0 ? "Continuar de onde parei" : "Começar o onboarding"}
                <ArrowRight className="size-4" aria-hidden />
              </Link>
            </div>
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
        <BrandLogo variant="color" horizontalClassName="h-8 sm:h-9" stackedClassName="h-14" />
        <p className="mt-6 border-t border-border pt-6 text-xs leading-relaxed text-muted-foreground">
          Onboarding da Unidade Compartilhada Jurídica e de Compliance — UCJC · FIEPE, IEL e CIEPE.
          Progresso armazenado localmente neste navegador nesta primeira versão.
        </p>
      </footer>

    </div>
  );
}
