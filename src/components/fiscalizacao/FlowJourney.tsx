import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { actorMeta, flowSteps } from "@/content/fiscalizacao";
import { ActorChip } from "./primitives";

/**
 * Jornada visual das 8 etapas: cada etapa é revelada progressivamente
 * conforme entra na viewport e pode ser expandida para leitura do detalhe.
 */
export function FlowJourney() {
  const [revealed, setRevealed] = useState<Set<string>>(new Set());
  const [openId, setOpenId] = useState<string | null>(flowSteps[0]!.id);
  const listRef = useRef<HTMLOListElement>(null);

  useEffect(() => {
    const nodes = listRef.current?.querySelectorAll<HTMLLIElement>("[data-step-id]");
    if (!nodes?.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = (entry.target as HTMLElement).dataset["stepId"];
          if (entry.isIntersecting && id) {
            setRevealed((prev) => (prev.has(id) ? prev : new Set(prev).add(id)));
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.2 },
    );
    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, []);

  const progress = (revealed.size / flowSteps.length) * 100;

  return (
    <ol ref={listRef} className="relative space-y-2 pl-8 sm:pl-10">
      <span className="absolute left-[11px] top-2 h-[calc(100%-1rem)] w-px bg-hairline sm:left-[15px]" aria-hidden />
      <span
        className="absolute left-[11px] top-2 w-px transition-[height] duration-700 ease-out sm:left-[15px]"
        style={{ height: `calc((100% - 1rem) * ${progress / 100})`, backgroundImage: "var(--gradient-brand)" }}
        aria-hidden
      />
      {flowSteps.map((step, i) => {
        const open = openId === step.id;
        const show = revealed.has(step.id);
        return (
          <li
            key={step.id}
            data-step-id={step.id}
            className={cn(
              "relative transition-all duration-500 ease-out",
              show ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0",
            )}
          >
            <span
              className={cn(
                "absolute -left-8 top-4 inline-flex size-6 items-center justify-center rounded-full text-[11px] font-bold text-white transition-transform duration-300 sm:-left-10 sm:size-8 sm:text-xs",
                actorMeta[step.actor].bar,
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
              <ActorChip actor={step.actor} />
              <p className="mt-2 text-[15px] font-bold text-primary">{step.title}</p>
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
