import { CheckCircle2, FileText, Lightbulb } from "lucide-react";
import type { Scenario } from "@/content/transparencia";

export function ScenarioCard({ scenario, index }: { scenario: Scenario; index: number }) {
  return (
    <article className="rounded-3xl border border-border bg-card p-6 sm:p-8">
      <p className="label-eyebrow">Situação {String(index).padStart(2, "0")}</p>
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-border bg-background p-5">
          <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-primary">
            <FileText className="size-4 text-sky" aria-hidden />
            Situação prática
          </p>
          <p className="mt-3 text-[15px] leading-relaxed text-foreground">{scenario.situation}</p>
        </div>
        <div className="rounded-2xl border border-sesi/30 bg-sesi/5 p-5">
          <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-primary">
            <CheckCircle2 className="size-4 text-sesi" aria-hidden />
            Como proceder
          </p>
          <p className="mt-3 text-[15px] leading-relaxed text-foreground">{scenario.guidance}</p>
        </div>
      </div>
      <p className="mt-5 flex items-start gap-3 text-sm text-muted-foreground">
        <Lightbulb className="mt-0.5 size-4 shrink-0 text-sky" aria-hidden />
        <span>{scenario.takeaway}</span>
      </p>
    </article>
  );
}
