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
      {
        id: "zeev",
        title: "Zeev (Orquestra – BPMS)",
        description: "Solicitação e acompanhamento de demandas.",
        icon: "workflow",
        url: "https://bpms4.sistemafiepe.org.br/my/tasks?",
      },
      {
        id: "robpubli",
        title: "RobPubli",
        description: "Captura e triagem de publicações trabalhistas.",
        icon: "scan",
        url: "https://robpubli.ucjc.workers.dev/",
      },
      {
        id: "sharepoint-juridico",
        title: "SharePoint Jurídico",
        description: "Documentos e arquivos da área jurídica.",
        icon: "folder",
        url: "https://pesenaibr.sharepoint.com/sites/UCJUR/Documentos%20Partilhados/Forms/AllItems.aspx?viewid=7aa7edb6%2D4945%2D4408%2D94e0%2Dd61eb54154e0&newTargetListUrl=%2Fsites%2FUCJUR%2FDocumentos%20Partilhados&viewpath=%2Fsites%2FUCJUR%2FDocumentos%20Partilhados%2FForms%2FAllItems%2Easpx",
      },
      {
        id: "sharepoint-compliance",
        title: "SharePoint Compliance",
        description: "Documentos e arquivos de Compliance.",
        icon: "folder",
        url: "https://pesenaibr.sharepoint.com/sites/uc.compliance/SitePages/Home.aspx",
      },
    ],
  },
  {
    id: "documents",
    title: "Documentos e orientações",
    resources: [
      {
        id: "normativos",
        title: "Repositório de Normativos Internos",
        description: "Consulta aos normativos do Sistema FIEPE.",
        icon: "library",
        url: "https://pesenaibr.sharepoint.com/sites/RepositriodeDocumentosInternos/Documentos%20Compartilhados/Forms/AllItems.aspx?id=%2Fsites%2FRepositriodeDocumentosInternos%2FDocumentos%20Compartilhados%2FReposit%C3%B3rio%20de%20Documentos%20Internos%2F%C3%81reas%20Compartilhadas%2F%C3%81reas%20Compartilhadas%20%28FIEPE%2C%20IEL%2C%20SENAI%20E%20SESI%29%2FJur%C3%ADdico%20e%20Compliance%2FJur%C3%ADdico%2F01%2E%20NORMATIVOS%20INTERNOS&p=true&ga=1",
      },
      {
        id: "orientacoes",
        title: "Orientações de uso do SharePoint",
        description: "Instruções para utilização e consulta de arquivos.",
        icon: "book",
        url: "https://pesenaibr.sharepoint.com/:b:/s/UCJUR/IQBWhQnYly_UQ4rqcbb9hs7vARZ0iW-TwARGwEvorL1J5D4?e=cIsaw5",
      },
      {
        id: "faq",
        title: "FAQ Jurídico",
        description: "Respostas às dúvidas mais frequentes.",
        icon: "question",
        url: "https://faqjuridico.lovable.app/auth",
      },
      {
        id: "fluxos",
        title: "Fluxos do Jurídico",
        description: "Acesso aos fluxos e procedimentos no SharePoint.",
        icon: "branch",
        url: "https://pesenaibr.sharepoint.com/:f:/s/UCJUR/IgBMRm15jf3JQ6Mp94piMkpwAdATvw25dsgLoTelHJxMa5s?e=9mGleW",
      },
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
