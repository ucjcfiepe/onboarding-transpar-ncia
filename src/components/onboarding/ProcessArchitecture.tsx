import { useState } from "react";
import { ArrowRight, RotateCw } from "lucide-react";
import { cn } from "@/lib/utils";
import { processSteps } from "@/content/transparencia";

export function ProcessArchitecture() {
  const [activeId, setActiveId] = useState<string>(processSteps[0]!.id);
  const active = processSteps.find((s) => s.id === activeId) ?? processSteps[0]!;

  return (
    <div className="space-y-8">
      {/* Trilha de etapas */}
      <div className="relative">
        <div
          className="absolute left-6 top-0 hidden h-full w-px bg-hairline sm:block lg:left-0 lg:top-9 lg:h-px lg:w-full"
          aria-hidden
        />
        <ul className="relative grid gap-3 lg:grid-cols-4 lg:gap-5">
          {processSteps.map((step) => {
            const isActive = step.id === activeId;
            return (
              <li key={step.id}>
                <button
                  type="button"
                  onClick={() => setActiveId(step.id)}
                  aria-pressed={isActive}
                  className={cn(
                    "group relative w-full rounded-2xl border p-5 text-left transition-all duration-300",
                    isActive
                      ? "border-transparent shadow-[var(--shadow-lifted)]"
                      : "border-border bg-card opacity-70 hover:opacity-100 hover:-translate-y-0.5",
                  )}
                  style={isActive ? { backgroundImage: "var(--gradient-brand)" } : undefined}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={cn(
                        "inline-flex size-8 shrink-0 items-center justify-center rounded-full text-sm font-bold tabular-nums transition-colors",
                        isActive
                          ? "bg-white/20 text-white"
                          : "bg-mist text-primary",
                      )}
                    >
                      {step.index}
                    </span>
                    <span
                      className={cn(
                        "text-[15px] font-bold leading-tight",
                        isActive ? "text-white" : "text-primary",
                      )}
                    >
                      {step.title}
                    </span>
                  </div>
                  <p
                    className={cn(
                      "mt-3 text-xs leading-relaxed",
                      isActive ? "text-white/80" : "text-muted-foreground",
                    )}
                  >
                    {step.question}
                  </p>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Detalhe da etapa */}
      <div key={active.id} className="rise-in grid gap-8 rounded-3xl border border-border bg-card p-7 sm:p-9 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div>
          <p className="label-eyebrow">Etapa {active.index} · Pergunta-chave</p>
          <p className="mt-4 text-2xl font-extrabold leading-snug text-primary">
            “{active.question}”
          </p>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            Esta etapa integra um ciclo. Após <strong className="font-semibold text-foreground">corrigir e aprimorar</strong>,
            uma nova verificação pode ser necessária.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-mist px-3.5 py-1.5 text-xs font-semibold text-primary">
            <RotateCw className="size-3.5" aria-hidden />
            Processo cíclico
          </div>
        </div>
        <ul className="grid gap-x-6 gap-y-3 sm:grid-cols-2">
          {active.activities.map((a) => (
            <li key={a} className="flex items-start gap-2.5 text-sm leading-relaxed">
              <ArrowRight className="mt-1 size-3.5 shrink-0 text-sky" aria-hidden />
              <span>{a}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
