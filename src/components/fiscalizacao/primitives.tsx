import type { ReactNode } from "react";
import { ArrowRight, ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { actorMeta, type Actor } from "@/content/fiscalizacao";

/* ---------- Identificação visual dos atores ---------- */
export function ActorChip({
  actor,
  variant = "short",
  className,
}: {
  actor: Actor;
  variant?: "short" | "full";
  className?: string;
}) {
  const meta = actorMeta[actor];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-semibold tracking-wide",
        meta.chip,
        className,
      )}
    >
      <span className={cn("size-1.5 rounded-full", meta.dot)} aria-hidden />
      {variant === "full" ? meta.label : meta.short}
    </span>
  );
}

/* ---------- Cadeia horizontal (Preparar → Carregar → Avisar) ---------- */
export function StepChain({
  items,
  className,
}: {
  items: { title: string; text?: string; actor?: Actor }[];
  className?: string;
}) {
  return (
    <ol className={cn("grid gap-3 sm:grid-cols-3", className)}>
      {items.map((item, i) => (
        <li key={item.title} className="relative">
          <div className="card-elevated h-full rounded-2xl p-6">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold tabular-nums text-sky">
                {String(i + 1).padStart(2, "0")}
              </span>
              {item.actor ? <ActorChip actor={item.actor} /> : null}
            </div>
            <p className="mt-3 text-base font-bold text-primary">{item.title}</p>
            {item.text ? (
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            ) : null}
          </div>
          {i < items.length - 1 ? (
            <>
              <ArrowRight
                className="absolute -right-[15px] top-1/2 hidden size-4 -translate-y-1/2 text-sky sm:block"
                aria-hidden
              />
              <ArrowDown className="mx-auto mt-2 size-4 text-sky sm:hidden" aria-hidden />
            </>
          ) : null}
        </li>
      ))}
    </ol>
  );
}

/* ---------- Relé entre atores (TCU → Especialista → Áreas) ---------- */
export function ActorRelay({
  chain,
  vertical = false,
}: {
  chain: { actor: Actor; caption: string }[];
  vertical?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-stretch gap-3",
        vertical ? "flex-col" : "flex-col sm:flex-row sm:items-center",
      )}
    >
      {chain.map((node, i) => (
        <div key={`${node.actor}-${i}`} className={cn("flex items-center gap-3", !vertical && "flex-1")}>
          <div className="flex-1 rounded-2xl border border-border bg-card p-5">
            <ActorChip actor={node.actor} />
            <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{node.caption}</p>
          </div>
          {i < chain.length - 1 ? (
            <ArrowRight className="hidden size-4 shrink-0 text-sky sm:block" aria-hidden />
          ) : null}
        </div>
      ))}
    </div>
  );
}

/* ---------- Bifurcação de fluxo ---------- */
export function Branch({
  question,
  left,
  right,
}: {
  question: string;
  left: { label: string; title: string; text: string };
  right: { label: string; title: string; text: string };
}) {
  return (
    <div className="rounded-3xl border border-border bg-ice p-6 sm:p-8">
      <p className="text-center text-sm font-bold text-primary">{question}</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {[
          { ...left, tone: "sesi" as const },
          { ...right, tone: "senai" as const },
        ].map((b) => (
          <div
            key={b.title}
            className={cn(
              "rounded-2xl border bg-card p-6 transition-colors duration-300",
              b.tone === "sesi" ? "border-sesi/30 hover:border-sesi/60" : "border-senai/30 hover:border-senai/60",
            )}
          >
            <p
              className={cn(
                "text-[11px] font-bold uppercase tracking-[0.14em]",
                b.tone === "sesi" ? "text-sesi" : "text-senai",
              )}
            >
              {b.label}
            </p>
            <p className="mt-2 text-base font-bold text-primary">{b.title}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- Bloco de destaque de prazo ---------- */
export function DeadlineCard({
  value,
  unit,
  title,
  text,
  index,
}: {
  value: string;
  unit: string;
  title: string;
  text: string;
  index: number;
}) {
  return (
    <article className="card-elevated relative overflow-hidden rounded-3xl p-7">
      <span
        className="pointer-events-none absolute inset-x-0 top-0 h-1"
        style={{ backgroundImage: "var(--gradient-brand)" }}
        aria-hidden
      />
      <p className="label-eyebrow">Prazo {String(index).padStart(2, "0")}</p>
      <p className="mt-4 flex items-baseline gap-2">
        <span className="text-5xl font-extrabold leading-none text-primary tabular-nums sm:text-6xl">
          {value}
        </span>
        <span className="text-sm font-bold text-sky">{unit}</span>
      </p>
      <h3 className="mt-5 text-lg font-extrabold text-primary">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
    </article>
  );
}

/* ---------- Nota discreta ---------- */
export function SideNote({ children }: { children: ReactNode }) {
  return (
    <p className="border-l-2 border-hairline pl-4 text-[13px] leading-relaxed text-muted-foreground">
      {children}
    </p>
  );
}
