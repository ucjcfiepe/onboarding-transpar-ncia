import { useState } from "react";
import { ChevronDown, Network } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  organizationAreas,
  organizationRoot,
  type OrganizationArea,
  type OrganizationRole,
} from "@/content/organization";

type AreaTone = {
  button: string;
  group: string;
  role: string;
  line: string;
  mobileGroup: string;
};

const defaultTone: AreaTone = {
  button: "border-chart-active bg-chart-active text-primary-foreground hover:bg-chart-active hover:text-primary-foreground",
  group: "border-transparent bg-chart-group",
  role: "border-border/65",
  line: "before:bg-chart-line",
  mobileGroup: "border-border/65 bg-chart-group",
};

const areaTones: Record<OrganizationArea["id"], AreaTone> = {
  compliance: defaultTone,
  "juridico-sesi": defaultTone,
  "juridico-senai": defaultTone,
  operacoes: defaultTone,
};

function RoleCard({
  role,
  active = false,
  tone,
}: {
  role: OrganizationRole;
  active?: boolean;
  tone: AreaTone;
}) {
  return (
    <li
      className={cn(
        "flex min-h-16 flex-col items-center justify-center rounded-lg border bg-card px-3 py-3 text-center transition-colors duration-300",
        active
          ? tone.role
          : "border-border/65",
      )}
    >
      <span className="text-[11px] font-extrabold uppercase leading-tight text-foreground">
        {role.title}
      </span>
      {role.specialty ? (
        <span className="mt-1 text-[10px] leading-tight text-muted-foreground">{role.specialty}</span>
      ) : null}
    </li>
  );
}

function DesktopTeam({ area, active }: { area: OrganizationArea; active: boolean }) {
  const split = area.id === "compliance" ? 4 : 3;
  const tone = areaTones[area.id] ?? defaultTone;
  return (
    <div
      id={`organization-team-${area.id}`}
      className={cn(
        "relative mt-3 pt-8 transition-opacity duration-300 before:absolute before:left-1/2 before:top-0 before:h-7 before:w-px before:bg-hairline",
        active && tone.line,
      )}
    >
      <div className="grid grid-cols-2 gap-3" aria-label={`Equipe de ${area.name}`}>
        {[area.roles.slice(0, split), area.roles.slice(split)].map((column, columnIndex) => (
          <ul key={columnIndex} className="flex flex-col gap-3">
            {column.map((role, index) => (
              <RoleCard
                key={`${role.title}-${role.specialty ?? ""}-${index}`}
                role={role}
                active={active}
                tone={tone}
              />
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}

export function OrganizationChart() {
  const [activeId, setActiveId] = useState("");
  const hasActiveArea = activeId !== "";

  return (
    <div className="mt-12">
      <div className="mx-auto flex w-fit max-w-full items-center gap-3 rounded-xl bg-primary px-5 py-4 text-primary-foreground shadow-[var(--shadow-soft)] sm:px-7">
        <Network className="size-5 shrink-0 text-teal" aria-hidden />
        <p className="text-center text-sm font-extrabold leading-snug sm:text-base">{organizationRoot}</p>
      </div>

      <div className="hidden lg:block">
        <div className="mx-auto mt-3 h-10 w-px bg-hairline" aria-hidden />
        <div className="relative grid grid-cols-4 gap-6 before:absolute before:left-[12.5%] before:right-[12.5%] before:top-0 before:h-px before:bg-hairline">
          {organizationAreas.map((area) => {
            const active = activeId === area.id;
            const tone = areaTones[area.id] ?? defaultTone;
            return (
              <div
                key={area.id}
                data-chart-area={area.id}
                className={cn(
                  "relative pt-9 transition-opacity duration-300 before:absolute before:left-1/2 before:top-0 before:h-8 before:w-px before:bg-hairline",
                  active && tone.line,
                  hasActiveArea && !active && "opacity-90",
                )}
              >
                <div
                  className={cn(
                    "rounded-lg border border-transparent p-3 transition-[background-color,border-color,box-shadow] duration-300",
                    active && tone.group,
                  )}
                >
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setActiveId(active ? "" : area.id)}
                    aria-pressed={active}
                    data-selected={active}
                    aria-expanded={active}
                    aria-controls={`organization-team-${area.id}`}
                    className={cn(
                      "organization-area-button h-20 w-full whitespace-normal rounded-lg px-4 text-center text-[11px] font-extrabold uppercase leading-snug transition-[transform,background-color,border-color,color,box-shadow] duration-300 focus-visible:ring-2 focus-visible:ring-offset-2",
                      active
                        ? cn("-translate-y-0.5 shadow-[var(--shadow-lifted)]", tone.button)
                        : cn("border-border/75 bg-card shadow-sm hover:-translate-y-0.5 hover:border-sky/30 hover:bg-card hover:text-foreground hover:shadow-[var(--shadow-soft)]", hasActiveArea && "text-muted-foreground"),
                    )}
                  >
                    {area.name}
                  </Button>
                  <DesktopTeam area={area} active={active} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="relative mx-auto mt-3 max-w-2xl pt-10 before:absolute before:left-6 before:top-0 before:h-8 before:w-px before:bg-hairline lg:hidden">
        <div className="space-y-4">
          {organizationAreas.map((area) => {
            const open = activeId === area.id;
            const tone = areaTones[area.id] ?? defaultTone;
            return (
              <article
                key={area.id}
                data-chart-area={area.id}
                className={cn(
                  "overflow-hidden rounded-lg border bg-card transition-[border-color,box-shadow,transform] duration-300",
                  open
                    ? cn("-translate-y-0.5 shadow-[var(--shadow-lifted)]", tone.mobileGroup)
                    : cn("border-border/75 shadow-sm", hasActiveArea && "opacity-90"),
                )}
              >
                <Button
                  type="button"
                  variant="ghost"
                  onClick={() => setActiveId(open ? "" : area.id)}
                  aria-expanded={open}
                  data-selected={open}
                  aria-controls={`organization-mobile-team-${area.id}`}
                  className={cn(
                    "organization-area-button grid h-auto min-h-16 w-full grid-cols-[minmax(0,1fr)_auto] gap-4 whitespace-normal rounded-none px-5 py-4 text-left transition-colors duration-300 hover:bg-card hover:text-foreground focus-visible:ring-2 focus-visible:ring-inset",
                    hasActiveArea && !open && "text-muted-foreground",
                    open && tone.button,
                  )}
                >
                  <span className="min-w-0 text-xs font-extrabold uppercase leading-snug">{area.name}</span>
                  <ChevronDown className={cn("size-4 shrink-0 transition-transform duration-300", open && "rotate-180")} aria-hidden />
                </Button>
                <div
                  id={`organization-mobile-team-${area.id}`}
                  aria-hidden={!open}
                  inert={!open}
                  className={cn(
                    "grid transition-[grid-template-rows] duration-300",
                    open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                  )}
                >
                  <div className="overflow-hidden">
                    <ul className={cn("grid gap-3 p-5 sm:grid-cols-2", open && tone.group)} aria-label={`Equipe de ${area.name}`}>
                      {area.roles.map((role, index) => (
                        <RoleCard
                          key={`${role.title}-${role.specialty ?? ""}-${index}`}
                          role={role}
                          active={open}
                          tone={tone}
                        />
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}