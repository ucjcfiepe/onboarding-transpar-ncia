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
  button: "border-primary bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground",
  group: "border-primary/15 bg-primary/5",
  role: "border-primary/30",
  line: "before:bg-primary/45",
  mobileGroup: "border-primary/25 bg-primary/5",
};

const areaTones: Record<OrganizationArea["id"], AreaTone> = {
  compliance: {
    button: "border-primary bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground",
    group: "border-primary/15 bg-primary/5",
    role: "border-primary/30",
    line: "before:bg-primary/45",
    mobileGroup: "border-primary/25 bg-primary/5",
  },
  "juridico-sesi": {
    button: "border-sesi bg-sesi text-primary-foreground hover:bg-sesi/90 hover:text-primary-foreground",
    group: "border-sesi/20 bg-sesi/10",
    role: "border-sesi/35",
    line: "before:bg-sesi/55",
    mobileGroup: "border-sesi/30 bg-sesi/10",
  },
  "juridico-senai": {
    button: "border-senai bg-senai text-primary-foreground hover:bg-senai/90 hover:text-primary-foreground",
    group: "border-senai/20 bg-senai/10",
    role: "border-senai/35",
    line: "before:bg-senai/55",
    mobileGroup: "border-senai/30 bg-senai/10",
  },
  operacoes: {
    button: "border-teal bg-teal text-night hover:bg-teal/90 hover:text-night",
    group: "border-teal/25 bg-teal/10",
    role: "border-teal/45",
    line: "before:bg-teal/65",
    mobileGroup: "border-teal/35 bg-teal/10",
  },
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
        "flex min-h-12 w-full min-w-0 flex-col items-center justify-center rounded-lg border px-3 py-2 text-center transition-[background-color,border-color,box-shadow] duration-300",
        active
          ? cn("bg-card shadow-[var(--shadow-soft)]", tone.role)
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
  const tone = areaTones[area.id] ?? defaultTone;
  return (
    <div
      id={`organization-team-${area.id}`}
      className={cn(
        "relative mt-3 pt-8 transition-opacity duration-300 before:absolute before:left-1/2 before:top-0 before:h-7 before:w-px before:bg-hairline",
        active && tone.line,
      )}
    >
      <ul className="flex flex-col gap-3" aria-label={`Equipe de ${area.name}`}>
        {area.roles.map((role, index) => (
          <RoleCard
            key={`${role.title}-${role.specialty ?? ""}-${index}`}
            role={role}
            active={active}
            tone={tone}
          />
        ))}
      </ul>
    </div>
  );
}

export function OrganizationChart() {
  const [activeId, setActiveId] = useState("");
  const hasActiveArea = activeId !== "";

  const areaInteraction = (id: string) => ({
    onPointerEnter: (event: React.PointerEvent<HTMLButtonElement>) => {
      if (event.pointerType === "mouse") setActiveId(id);
    },
    onPointerLeave: (event: React.PointerEvent<HTMLButtonElement>) => {
      if (event.pointerType === "mouse") {
        setActiveId((current) => current === id ? "" : current);
      }
    },
    onFocus: (event: React.FocusEvent<HTMLButtonElement>) => {
      if (event.currentTarget.matches(":focus-visible")) setActiveId(id);
    },
    onBlur: () => setActiveId((current) => current === id ? "" : current),
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => {
      if (event.detail === 0) {
        setActiveId(id);
      } else if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
        setActiveId((current) => current === id ? "" : id);
      }
    },
  });

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
                className={cn(
                  "relative pt-9 transition-opacity duration-300 before:absolute before:left-1/2 before:top-0 before:h-8 before:w-px before:bg-hairline",
                  active && tone.line,
                  hasActiveArea && !active && "opacity-65",
                )}
              >
                <div
                  className={cn(
                    "rounded-lg border border-transparent p-3 transition-[background-color,border-color,box-shadow] duration-300",
                    active && cn(tone.group, "shadow-[var(--shadow-soft)]"),
                  )}
                >
                  <Button
                    type="button"
                    variant="outline"
                    {...areaInteraction(area.id)}
                    aria-pressed={active}
                    aria-expanded={active}
                    aria-controls={`organization-team-${area.id}`}
                    className={cn(
                      "h-20 w-full whitespace-normal rounded-lg px-4 text-center text-[11px] font-extrabold uppercase leading-snug transition-[transform,background-color,border-color,color,box-shadow] duration-300",
                      active
                        ? cn("-translate-y-0.5 shadow-[var(--shadow-lifted)]", tone.button)
                        : "bg-card shadow-[var(--shadow-soft)] hover:-translate-y-0.5 hover:border-sky/40 hover:bg-mist hover:text-primary hover:shadow-[var(--shadow-lifted)]",
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
                className={cn(
                  "overflow-hidden rounded-lg border bg-card transition-[border-color,box-shadow,transform] duration-300",
                  open
                    ? cn("-translate-y-0.5 shadow-[var(--shadow-lifted)]", tone.mobileGroup)
                    : cn("border-border shadow-[var(--shadow-soft)]", hasActiveArea && "opacity-70"),
                )}
              >
                <Button
                  type="button"
                  variant="ghost"
                  {...areaInteraction(area.id)}
                  aria-expanded={open}
                  aria-controls={`organization-mobile-team-${area.id}`}
                  className={cn(
                    "grid h-auto min-h-16 w-full grid-cols-[minmax(0,1fr)_auto] gap-4 whitespace-normal rounded-none px-5 py-4 text-left transition-colors duration-300 hover:bg-mist hover:text-primary",
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
                    <ul className={cn("flex flex-col gap-3 p-5", open && tone.group)} aria-label={`Equipe de ${area.name}`}>
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