import { ChevronRight, ExternalLink, TriangleAlert } from "lucide-react";
import { cn } from "@/lib/utils";
import { EntityTag } from "./primitives";
import type { ToolItem } from "@/content/transparencia";

export function FlowChips({ steps }: { steps: string[] }) {
  return (
    <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-2">
      {steps.map((s, i) => (
        <li key={s} className="flex items-center gap-1.5">
          <span className="rounded-lg border border-border bg-ice px-2.5 py-1.5 text-xs font-medium text-foreground">
            {s}
          </span>
          {i < steps.length - 1 ? (
            <ChevronRight className="size-3.5 text-sky" aria-hidden />
          ) : null}
        </li>
      ))}
    </ol>
  );
}

export function ToolCard({ tool, compact = false }: { tool: ToolItem; compact?: boolean }) {
  return (
    <article
      className={cn(
        "card-elevated flex h-full flex-col rounded-2xl",
        compact ? "p-6" : "p-7 sm:p-8",
      )}
    >
      <div className="flex flex-wrap items-center gap-2">
        <EntityTag entity={tool.entity} />
        <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
          {tool.role}
        </span>
      </div>

      <h3 className={cn("mt-4 font-extrabold text-primary", compact ? "text-lg" : "text-xl")}>
        {tool.name}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{tool.description}</p>

      {tool.bullets ? (
        <ul className="mt-5 grid gap-2 sm:grid-cols-2">
          {tool.bullets.map((b) => (
            <li key={b} className="flex items-start gap-2 text-sm leading-relaxed">
              <span className="mt-2 size-1 shrink-0 rounded-full bg-sky" aria-hidden />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      ) : null}

      {tool.flow ? (
        <div className="mt-6">
          <p className="label-eyebrow mb-3">Fluxo resumido</p>
          <FlowChips steps={tool.flow} />
        </div>
      ) : null}

      {tool.note ? (
        <div className="mt-6 flex items-start gap-3 rounded-xl border border-sky/25 bg-mist/70 p-4">
          <TriangleAlert className="mt-0.5 size-4 shrink-0 text-sky" aria-hidden />
          <p className="text-[13px] leading-relaxed text-foreground">{tool.note}</p>
        </div>
      ) : null}

      {tool.link !== undefined ? (
        <div className="mt-auto pt-6">
          {tool.link ? (
            <a
              href={tool.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-sky hover:underline"
            >
              Acessar ambiente <ExternalLink className="size-3.5" aria-hidden />
            </a>
          ) : (
            <span className="text-xs text-muted-foreground">
              Link do ambiente a ser incluído.
            </span>
          )}
        </div>
      ) : null}
    </article>
  );
}
