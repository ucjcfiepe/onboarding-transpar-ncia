import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { BrandLogo } from "@/components/ucjc/BrandLogo";


/* ---------- Cabeçalho de página de frente ---------- */
export function AreaHero({
  eyebrow,
  title,
  lead,
  note,
}: {
  eyebrow: string;
  title: string;
  lead: string;
  note?: string;
}) {
  return (
    <header className="grain mesh relative overflow-hidden">
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-16 sm:px-8 sm:py-24">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-white/60 transition-colors hover:text-white"
          >
            <ArrowLeft className="size-3.5" aria-hidden />
            UCJC
          </Link>
          <BrandLogo variant="light" horizontalClassName="h-4 sm:h-5" stackedClassName="h-7" />
        </div>
        <p className="label-eyebrow mt-8 text-white/55">{eyebrow}</p>

        <h1 className="mt-5 max-w-3xl text-4xl font-extrabold leading-[1.08] text-white sm:text-5xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">{lead}</p>
        {note ? (
          <div className="glass mt-9 max-w-2xl rounded-2xl p-5">
            <p className="text-sm leading-relaxed text-white/80">{note}</p>
          </div>
        ) : null}
      </div>
    </header>
  );
}

/* ---------- Container de seção ---------- */
export function AreaSection({
  children,
  soft = false,
  className,
}: {
  children: ReactNode;
  soft?: boolean;
  className?: string;
}) {
  return (
    <section
      className={cn(soft && "border-y border-border", className)}
      style={soft ? { backgroundImage: "var(--gradient-soft)" } : undefined}
    >
      <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-8 sm:py-20">{children}</div>
    </section>
  );
}

/* ---------- Lista leve com bullets do projeto ---------- */
export function SoftList({ items, className }: { items: string[]; className?: string }) {
  return (
    <ul className={cn("mt-5 space-y-2.5", className)}>
      {items.map((i) => (
        <li key={i} className="flex items-start gap-2.5 text-sm leading-relaxed">
          <span className="mt-2 size-1 shrink-0 rounded-full bg-sky" aria-hidden />
          <span>{i}</span>
        </li>
      ))}
    </ul>
  );
}

/* ---------- Card com título + lista ou descrição ---------- */
export function ListCard({
  eyebrow,
  title,
  lead,
  items,
  description,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  items?: string[];
  description?: string;
}) {
  return (
    <article className="card-elevated rounded-3xl p-7 sm:p-8">
      {eyebrow ? <p className="label-eyebrow">{eyebrow}</p> : null}
      <h3 className="mt-2 text-lg font-extrabold text-primary">{title}</h3>
      {lead ? <p className="mt-1.5 text-sm text-muted-foreground">{lead}</p> : null}
      {description ? (
        <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{description}</p>
      ) : items ? (
        <SoftList items={items} />
      ) : null}
    </article>
  );
}

/* ---------- Situação prática (pergunta → destino) ---------- */
export function SituationCard({ question, target }: { question: string; target: string }) {
  return (
    <div className="card-elevated flex items-center justify-between gap-4 rounded-2xl p-5">
      <p className="text-sm font-semibold leading-relaxed text-foreground">“{question}”</p>
      <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-mist px-3 py-1 text-[11px] font-bold uppercase tracking-[0.1em] text-primary">
        <ArrowRight className="size-3" aria-hidden />
        {target}
      </span>
    </div>
  );
}

/* ---------- Cadeia de etapas resumida ---------- */
export function FlowStrip({ steps }: { steps: string[] }) {
  return (
    <ol className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-stretch">
      {steps.map((s, i) => (
        <li key={s} className="flex flex-1 items-center gap-3">
          <div className="w-full rounded-2xl border border-border bg-card p-5">
            <span className="text-[11px] font-bold tabular-nums text-sky">
              {String(i + 1).padStart(2, "0")}
            </span>
            <p className="mt-2 text-sm font-bold leading-snug text-primary">{s}</p>
          </div>
          {i < steps.length - 1 ? (
            <ArrowRight className="hidden size-4 shrink-0 text-sky sm:block" aria-hidden />
          ) : null}
        </li>
      ))}
    </ol>
  );
}

/* ---------- Checklist ---------- */
export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-x-6 gap-y-0 sm:grid-cols-2">
      {items.map((i) => (
        <li key={i} className="flex items-start gap-3 border-b border-hairline py-3.5 text-sm">
          <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Check className="size-3" strokeWidth={3} aria-hidden />
          </span>
          <span>{i}</span>
        </li>
      ))}
    </ul>
  );
}

/* ---------- Pílulas de portfólio ---------- */
export function PillGrid({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2.5">
      {items.map((i) => (
        <span
          key={i}
          className="rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-primary transition-colors duration-300 hover:border-sky/50"
        >
          {i}
        </span>
      ))}
    </div>
  );
}
