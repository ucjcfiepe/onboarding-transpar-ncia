import { useId, useState } from "react";
import { BookOpen, BookOpenCheck, ChevronDown, ExternalLink, FolderOpen, GitBranch, Library, MessageCircleQuestion, Monitor, ScanText, Workflow } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { getResourceHref, resourceGroups, type ResourceIcon } from "@/content/resources";
import { cn } from "@/lib/utils";

const icons: Record<ResourceIcon, typeof Workflow> = {
  workflow: Workflow, scan: ScanText, folder: FolderOpen, library: Library,
  book: BookOpenCheck, question: MessageCircleQuestion, branch: GitBranch,
};

export function ResourcesMenu({ variant = "light" }: { variant?: "light" | "color" }) {
  const [open, setOpen] = useState(false);
  const id = useId();

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className={cn("min-h-11 shrink-0 gap-2 rounded-full px-4 font-semibold sm:px-5", variant === "light" ? "resources-trigger" : "border-primary/20 bg-card text-primary hover:bg-mist")}>
          Recursos
          <ChevronDown aria-hidden className={cn("transition-transform duration-200 motion-reduce:transition-none", open && "rotate-180")} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" side="bottom" sideOffset={10} collisionPadding={12} aria-labelledby={`${id}-title`} aria-describedby={`${id}-description`} className="resources-panel w-[520px] max-w-[calc(100vw-24px)] rounded-2xl border-border bg-popover p-5 text-popover-foreground sm:p-6">
        <div className="mb-5">
          <p id={`${id}-title`} className="text-xl font-extrabold leading-snug text-primary">Recursos e ferramentas</p>
          <p id={`${id}-description`} className="mt-1.5 text-sm leading-relaxed text-muted-foreground">Acesse os sistemas, documentos e orientações da UCJC.</p>
        </div>
        {resourceGroups.map((group, index) => {
          const CategoryIcon = group.id === "platforms" ? Monitor : BookOpen;
          return (
            <div key={group.id}>
              {index > 0 && <DropdownMenuSeparator className="mx-0 my-4 bg-border" />}
              <DropdownMenuGroup aria-labelledby={`${id}-${group.id}`}>
                <DropdownMenuLabel id={`${id}-${group.id}`} className="mb-2 flex items-center gap-3 px-1 text-sm font-bold text-primary">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-mist"><CategoryIcon className="size-4" aria-hidden /></span>
                  {group.title}
                </DropdownMenuLabel>
                {group.resources.map((resource) => {
                  const Icon = icons[resource.icon];
                  const href = getResourceHref(resource);
                  const contents = <>
                    <Icon className="mt-0.5 text-muted-foreground" aria-hidden />
                    <span className="min-w-0 flex-1">
                      <span className={cn("block text-sm font-semibold leading-snug", href ? "text-primary" : "text-foreground")}>{resource.title}</span>
                      <span className="mt-1 block text-xs leading-relaxed text-muted-foreground">{resource.description}</span>
                    </span>
                    {href ? <ExternalLink className="mt-0.5 text-primary" aria-hidden /> : <span className="mt-0.5 shrink-0 text-[10px] font-medium text-muted-foreground">Indisponível</span>}
                  </>;
                  const classes = "min-h-11 items-start gap-3 rounded-lg px-2 py-3 data-[disabled]:opacity-100";
                  return href ? (
                    <DropdownMenuItem key={resource.id} asChild className={cn(classes, "cursor-pointer hover:bg-mist focus:bg-mist")}>
                      <a href={href} target="_blank" rel="noopener noreferrer" aria-label={`${resource.title} — abrir em nova aba`}>{contents}</a>
                    </DropdownMenuItem>
                  ) : <DropdownMenuItem key={resource.id} disabled className={classes}>{contents}</DropdownMenuItem>;
                })}
              </DropdownMenuGroup>
            </div>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}