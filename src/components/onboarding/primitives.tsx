import type { ReactNode } from "react";
import { Check, Info } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import type { Entity } from "@/content/modules";

/* ---------- EntityTag ---------- */
export function EntityTag({ entity, className }: { entity: Entity; className?: string }) {
  if (entity === "ambos") {
    return (
      <span
        className={cn(
          "inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-primary",
          className,
        )}
      >
        <span className="size-1.5 rounded-full bg-primary" aria-hidden />
        SESI e SENAI
      </span>
    );
  }
  const isSesi = entity === "sesi";
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-semibold tracking-wide",
        isSesi
          ? "border-sesi/30 bg-sesi/8 text-sesi"
          : "border-senai/30 bg-senai/8 text-senai",
        className,
      )}
    >
      <span
        className={cn("size-1.5 rounded-full", isSesi ? "bg-sesi" : "bg-senai")}
        aria-hidden
      />
      {isSesi ? "SESI" : "SENAI"}
    </span>
  );
}

/* ---------- Eyebrow ---------- */
export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn("label-eyebrow", className)}>{children}</p>;
}

/* ---------- SectionHeading ---------- */
export function SectionHeading({
  eyebrow,
  title,
  lead,
  className,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  className?: string;
}) {
  return (
    <header className={cn("max-w-3xl", className)}>
      {eyebrow ? <Eyebrow className="mb-3">{eyebrow}</Eyebrow> : null}
      <h2 className="text-3xl font-extrabold text-primary sm:text-4xl">{title}</h2>
      {lead ? <p className="mt-4 text-base leading-relaxed text-muted-foreground">{lead}</p> : null}
    </header>
  );
}

/* ---------- KeyTakeaway ---------- */
export function KeyTakeaway({
  title,
  children,
  tone = "info",
}: {
  title: string;
  children: ReactNode;
  tone?: "info" | "attention";
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border p-6 sm:p-7",
        tone === "attention"
          ? "border-sky/30 bg-mist/70"
          : "border-border bg-card",
      )}
    >
      <span
        className={cn(
          "absolute inset-y-0 left-0 w-[3px]",
          tone === "attention" ? "bg-sky" : "bg-primary/40",
        )}
        aria-hidden
      />
      <p className="label-eyebrow mb-2">{title}</p>
      <div className="text-[15px] leading-relaxed text-foreground">{children}</div>
    </div>
  );
}

/* ---------- InfoTooltip ---------- */
export function InfoTooltip({ label, children }: { label: string; children: ReactNode }) {
  return (
    <TooltipProvider delayDuration={150}>
      <Tooltip>
        <TooltipTrigger
          type="button"
          aria-label={label}
          className="inline-flex size-5 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-sky hover:text-sky"
        >
          <Info className="size-3" aria-hidden />
        </TooltipTrigger>
        <TooltipContent className="max-w-xs text-xs leading-relaxed">{children}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

/* ---------- ProgressIndicator ---------- */
export function ProgressIndicator({
  value,
  label,
  tone = "light",
  className,
}: {
  value: number;
  label?: string;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <div className={cn("w-full", className)}>
      {label ? (
        <div className="mb-2 flex items-baseline justify-between gap-3">
          <span
            className={cn(
              "text-[11px] font-bold uppercase tracking-[0.16em]",
              tone === "dark" ? "text-white/60" : "text-muted-foreground",
            )}
          >
            {label}
          </span>
          <span
            className={cn(
              "text-sm font-bold tabular-nums",
              tone === "dark" ? "text-white" : "text-primary",
            )}
          >
            {value}%
          </span>
        </div>
      ) : null}
      <div
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={label ?? "Progresso"}
        className={cn(
          "h-1.5 w-full overflow-hidden rounded-full",
          tone === "dark" ? "bg-white/15" : "bg-hairline",
        )}
      >
        <div
          className="h-full rounded-full transition-[width] duration-500 ease-out"
          style={{
            width: `${value}%`,
            backgroundImage: "var(--gradient-brand)",
          }}
        />
      </div>
    </div>
  );
}

/* ---------- StepDot ---------- */
export function CompletedMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex size-5 items-center justify-center rounded-full bg-primary/10 text-primary",
        className,
      )}
    >
      <Check className="size-3" strokeWidth={3} aria-hidden />
    </span>
  );
}
