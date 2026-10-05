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

function RoleCard({ role, active = false }: { role: OrganizationRole; active?: boolean }) {
  return (
    <li
      className={cn(
        "flex min-h-16 flex-col items-center justify-center rounded-lg border px-3 py-3 text-center transition-[background-color,border-color,box-shadow] duration-300",
        active
          ? "border-sky/45 bg-mist shadow-[var(--shadow-soft)]"
          : "border-border bg-card",
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
  return (
    <div
      id={`organization-team-${area.id}`}
      className={cn(
        "relative mt-3 pt-8 transition-opacity duration-300 before:absolute before:left-1/2 before:top-0 before:h-7 before:w-px before:bg-hairline",
        active ? "opacity-100" : "opacity-90",
      )}
    >
      <div className="grid grid-cols-2 gap-3" aria-label={`Equipe de ${area.name}`}>
        {[area.roles.slice(0, split), area.roles.slice(split)].map((column, columnIndex) => (
          <ul key={columnIndex} className="flex flex-col gap-3">
            {column.map((role, index) => (
              <RoleCard key={`${role.title}-${role.specialty ?? ""}-${index}`} role={role} active={active} />
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}

export function OrganizationChart() {
  const [activeId, setActiveId] = useState(organizationAreas[0]?.id ?? "");

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
            return (
              <div key={area.id} className="relative pt-9 before:absolute before:left-1/2 before:top-0 before:h-8 before:w-px before:bg-hairline">
                <Button
                  type="button"
                  variant={active ? "default" : "outline"}
                  onClick={() => setActiveId(area.id)}
                  aria-pressed={active}
                  className={cn(
                    "h-20 w-full whitespace-normal rounded-lg px-4 text-center text-[11px] font-extrabold uppercase leading-snug transition-[transform,background-color,border-color,color,box-shadow] duration-300",
                    active
                      ? "-translate-y-0.5 border-primary bg-primary text-primary-foreground shadow-[var(--shadow-lifted)] ring-2 ring-sky/45 ring-offset-2 ring-offset-background hover:bg-primary/90"
                      : "bg-card shadow-[var(--shadow-soft)] hover:-translate-y-0.5 hover:border-sky/50 hover:bg-mist hover:text-primary hover:shadow-[var(--shadow-lifted)]",
                  )}
                >
                  {area.name}
                </Button>
                <DesktopTeam area={area} active={active} />
              </div>
            );
          })}
        </div>
      </div>

      <div className="relative mx-auto mt-3 max-w-2xl pt-10 before:absolute before:left-6 before:top-0 before:h-8 before:w-px before:bg-hairline lg:hidden">
        <div className="space-y-4">
          {organizationAreas.map((area) => {
            const open = activeId === area.id;
            return (
              <article
                key={area.id}
                className={cn(
                  "overflow-hidden rounded-lg border bg-card transition-[border-color,box-shadow,transform] duration-300",
                  open
                    ? "-translate-y-0.5 border-sky/55 shadow-[var(--shadow-lifted)]"
                    : "border-border shadow-[var(--shadow-soft)]",
                )}
              >
                <Button
                  type="button"
                  variant="ghost"
                  onClick={() => setActiveId(open ? "" : area.id)}
                  aria-expanded={open}
                  aria-controls={`organization-mobile-team-${area.id}`}
                  className={cn(
                    "grid h-auto min-h-16 w-full grid-cols-[minmax(0,1fr)_auto] gap-4 whitespace-normal rounded-none px-5 py-4 text-left transition-colors duration-300 hover:bg-mist hover:text-primary",
                    open && "bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground",
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
                    <ul className="grid gap-3 p-5 sm:grid-cols-2" aria-label={`Equipe de ${area.name}`}>
                      {area.roles.map((role, index) => (
                        <RoleCard key={`${role.title}-${role.specialty ?? ""}-${index}`} role={role} active={open} />
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