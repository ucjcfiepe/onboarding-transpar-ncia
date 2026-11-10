export type ResourceIcon = "workflow" | "scan" | "folder" | "library" | "book" | "question" | "branch";

export interface Resource {
  id: string;
  title: string;
  description: string;
  icon: ResourceIcon;
  url?: string;
}

// Add the definitive HTTPS address to each resource's url when supplied.
export const resourceGroups: { id: string; title: string; resources: Resource[] }[] = [
  {
    id: "platforms",
    title: "Plataformas e sistemas",
    resources: [
      { id: "zeev", title: "Zeev (Orquestra – BPMS)", description: "Solicitação e acompanhamento de demandas.", icon: "workflow" },
      { id: "robpubli", title: "RobPubli", description: "Captura e triagem de publicações trabalhistas.", icon: "scan" },
      { id: "sharepoint-juridico", title: "SharePoint Jurídico", description: "Documentos e arquivos da área jurídica.", icon: "folder" },
      { id: "sharepoint-compliance", title: "SharePoint Compliance", description: "Documentos e arquivos de Compliance.", icon: "folder" },
    ],
  },
  {
    id: "documents",
    title: "Documentos e orientações",
    resources: [
      { id: "normativos", title: "Repositório de Normativos Internos", description: "Consulta aos normativos do Sistema FIEPE.", icon: "library" },
      { id: "orientacoes", title: "Orientações de uso do SharePoint", description: "Instruções para utilização e consulta de arquivos.", icon: "book" },
      { id: "faq", title: "FAQ Jurídico", description: "Respostas às dúvidas mais frequentes.", icon: "question" },
      { id: "fluxos", title: "Fluxos do Jurídico", description: "Acesso aos fluxos e procedimentos no SharePoint.", icon: "branch" },
    ],
  },
];

export function getResourceHref(resource: Resource): string | undefined {
  if (!resource.url) return undefined;
  try {
    const url = new URL(resource.url);
    return url.protocol === "https:" ? url.href : undefined;
  } catch {
    return undefined;
  }
}