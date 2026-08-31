import { useState } from "react";
import { cn } from "@/lib/utils";
import { journeySteps } from "@/content/transparencia";

const stageTone: Record<string, string> = {
  "Planejar e solicitar": "bg-primary",
  "Receber e disponibilizar": "bg-sky",
  "Verificar e registrar": "bg-primary/70",
  "Corrigir e aprimorar": "bg-sky/70",
};

export function JourneyTimeline() {
  const [openId, setOpenId] = useState<string | null>(journeySteps[0]!.id);

  return (
    <ol className="relative space-y-2 pl-8 sm:pl-10">
      <span className="absolute left-[11px] top-2 h-[calc(100%-1rem)] w-px bg-hairline sm:left-[15px]" aria-hidden />
      {journeySteps.map((step, i) => {
        const open = openId === step.id;
        return (
          <li key={step.id} className="relative">
            <span
              className={cn(
                "absolute -left-8 top-4 inline-flex size-6 items-center justify-center rounded-full text-[11px] font-bold text-white transition-transform duration-300 sm:-left-10 sm:size-8 sm:text-xs",
                stageTone[step.stage] ?? "bg-primary",
                open && "scale-110",
              )}
              aria-hidden
            >
              {i + 1}
            </span>
            <button
              type="button"
              onClick={() => setOpenId(open ? null : step.id)}
              aria-expanded={open}
              className={cn(
                "w-full rounded-2xl border p-5 text-left transition-all duration-300",
                open
                  ? "border-sky/35 bg-card shadow-[var(--shadow-soft)]"
                  : "border-transparent bg-transparent hover:bg-card/70",
              )}
            >
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
                {step.stage}
              </p>
              <p className="mt-1.5 text-[15px] font-bold text-primary">{step.title}</p>
              <div
                className={cn(
                  "grid transition-[grid-template-rows,opacity] duration-300",
                  open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                )}
              >
                <p className="overflow-hidden text-sm leading-relaxed text-muted-foreground">
                  <span className="block pt-2.5">{step.detail}</span>
                </p>
              </div>
            </button>
          </li>
        );
      })}
    </ol>
  );
}
