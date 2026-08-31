import { Link } from "@tanstack/react-router";
import { ArrowRight, Lock } from "lucide-react";
import { cn } from "@/lib/utils";
import type { OnboardingModule } from "@/content/modules";
import { ProgressIndicator } from "./primitives";

export function ModuleCard({
  module,
  progress,
  resumeSectionId,
}: {
  module: OnboardingModule;
  progress: number;
  resumeSectionId?: string;
}) {
  const available = module.status === "available";
  const started = progress > 0;

  const body = (
    <>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="label-eyebrow">{module.code}</p>
          <h3 className="mt-2 text-xl font-extrabold text-primary sm:text-2xl">{module.title}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{module.subtitle}</p>
        </div>
        <span
          className={cn(
            "shrink-0 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.1em]",
            available ? "bg-mist text-primary" : "bg-ice text-muted-foreground",
          )}
        >
          {available ? module.duration : "Em breve"}
        </span>
      </div>

      <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
        {module.description}
      </p>

      {available ? (
        <>
          <div className="mt-7">
            <ProgressIndicator value={progress} label="Progresso do módulo" />
          </div>
          <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-primary">
            {started ? (progress === 100 ? "Revisar módulo" : "Continuar de onde parou") : "Iniciar módulo"}
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
          </div>
        </>
      ) : (
        <div className="mt-7 flex items-center gap-2 text-sm font-medium text-muted-foreground">
          <Lock className="size-4" aria-hidden />
          Arquitetura preparada para receber este módulo.
        </div>
      )}
    </>
  );

  if (!available) {
    return (
      <div className="relative overflow-hidden rounded-3xl border border-dashed border-hairline bg-card/60 p-7 sm:p-9">
        {body}
      </div>
    );
  }

  return (
    <Link
      to="/modulos/$moduleId/$sectionId"
      params={{
        moduleId: module.id,
        sectionId: resumeSectionId ?? module.sections[0]!.id,
      }}
      className="card-elevated group relative block overflow-hidden rounded-3xl p-7 sm:p-9"
    >
      <span
        className="pointer-events-none absolute inset-x-0 top-0 h-1"
        style={{ backgroundImage: "var(--gradient-brand)" }}
        aria-hidden
      />
      {body}
    </Link>
  );
}
