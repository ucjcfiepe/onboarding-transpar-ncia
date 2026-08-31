import { useState } from "react";
import { Check, Lightbulb, X } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Scenario } from "@/content/transparencia";

export function ScenarioCard({
  scenario,
  index,
  total,
  onAnswered,
}: {
  scenario: Scenario;
  index: number;
  total: number;
  onAnswered?: (correct: boolean) => void;
}) {
  const [selected, setSelected] = useState<string | null>(null);
  const chosen = scenario.options.find((o) => o.id === selected);

  return (
    <article className="rounded-3xl border border-border bg-card p-7 sm:p-9">
      <div className="flex items-center justify-between gap-4">
        <p className="label-eyebrow">
          Cenário {index} de {total}
        </p>
      </div>
      <h3 className="mt-4 text-xl font-bold leading-snug text-primary sm:text-2xl">
        {scenario.situation}
      </h3>

      <ul className="mt-6 space-y-3">
        {scenario.options.map((opt) => {
          const isSelected = selected === opt.id;
          const revealed = selected !== null;
          return (
            <li key={opt.id}>
              <button
                type="button"
                disabled={revealed}
                onClick={() => {
                  setSelected(opt.id);
                  onAnswered?.(opt.correct);
                }}
                className={cn(
                  "flex w-full items-start gap-3 rounded-2xl border p-4 text-left text-sm leading-relaxed transition-all duration-300",
                  !revealed && "hover:border-sky/50 hover:bg-mist/50",
                  revealed && opt.correct && "border-sesi/45 bg-sesi/6",
                  revealed && isSelected && !opt.correct && "border-senai/45 bg-senai/6",
                  revealed && !isSelected && !opt.correct && "opacity-50",
                  !revealed && "border-border bg-background",
                )}
              >
                <span
                  className={cn(
                    "mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full border text-[11px] font-bold",
                    revealed && opt.correct && "border-sesi bg-sesi text-white",
                    revealed && isSelected && !opt.correct && "border-senai bg-senai text-white",
                    (!revealed || (!opt.correct && !isSelected)) && "border-hairline text-muted-foreground",
                  )}
                >
                  {revealed && opt.correct ? (
                    <Check className="size-3" strokeWidth={3} aria-hidden />
                  ) : revealed && isSelected ? (
                    <X className="size-3" strokeWidth={3} aria-hidden />
                  ) : (
                    opt.id.toUpperCase()
                  )}
                </span>
                <span>{opt.text}</span>
              </button>
            </li>
          );
        })}
      </ul>

      {chosen ? (
        <div className="rise-in mt-6 space-y-4">
          <div className="rounded-2xl border border-border bg-ice p-5">
            <p className="label-eyebrow mb-2">
              {chosen.correct ? "Encaminhamento adequado" : "Reveja este ponto"}
            </p>
            <p className="text-sm leading-relaxed">{chosen.feedback}</p>
          </div>
          <div className="flex items-start gap-3 text-sm text-muted-foreground">
            <Lightbulb className="mt-0.5 size-4 shrink-0 text-sky" aria-hidden />
            <span>{scenario.takeaway}</span>
          </div>
        </div>
      ) : null}
    </article>
  );
}
