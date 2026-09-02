/**
 * Registro de módulos do onboarding da Unidade Jurídica.
 * Novos módulos (ex.: "Fiscalização Contínua") devem ser adicionados aqui,
 * sem alteração da arquitetura de navegação/progresso.
 */

export type Entity = "sesi" | "senai" | "ambos";

export type SectionKind =
  | "intro"
  | "process"
  | "tools"
  | "journey"
  | "responsibilities"
  | "scenarios"
  | "conclusion";

export interface ModuleSection {
  id: string;
  title: string;
  eyebrow: string;
  summary: string;
  kind: SectionKind;
}

export interface OnboardingModule {
  id: string;
  order: number;
  code: string;
  title: string;
  subtitle: string;
  description: string;
  status: "available" | "soon";
  duration: string;
  sections: ModuleSection[];
}

export const transparenciaSections: ModuleSection[] = [
  {
    id: "introducao",
    eyebrow: "Seção 01",
    title: "Introdução",
    summary: "O que é Transparência no contexto do SESI e do SENAI e para que ela serve.",
    kind: "intro",
  },
  {
    id: "processo",
    eyebrow: "Seção 02",
    title: "Como funciona o processo",
    summary: "A arquitetura de quatro etapas que organiza toda a rotina.",
    kind: "process",
  },
  {
    id: "ambientes",
    eyebrow: "Seção 03",
    title: "Ambientes e ferramentas",
    summary: "Cada recurso responde a uma pergunta diferente da rotina.",
    kind: "tools",
  },
  {
    id: "rotina",
    eyebrow: "Seção 04",
    title: "Rotina do Analista",
    summary: "A jornada completa, do prazo identificado à evidência registrada.",
    kind: "journey",
  },
  {
    id: "responsabilidades",
    eyebrow: "Seção 05",
    title: "Responsabilidades",
    summary: "Quem faz o quê entre analista, áreas, equipe técnica e DN.",
    kind: "responsibilities",
  },
  {
    id: "situacoes",
    eyebrow: "Seção 06",
    title: "Situações práticas",
    summary: "Decisões reais da rotina, com encaminhamento comentado.",
    kind: "scenarios",
  },
  {
    id: "conclusao",
    eyebrow: "Seção 07",
    title: "Conclusão",
    summary: "Retomada dos principais aprendizados e próximos passos.",
    kind: "conclusion",
  },
];

export const modules: OnboardingModule[] = [
  {
    id: "transparencia",
    order: 1,
    code: "Módulo 01",
    title: "Transparência SESI/SENAI",
    subtitle: "Rotina, ambientes públicos, plataformas e evidências",
    description:
      "Entenda como as informações institucionais obrigatórias são planejadas, solicitadas, disponibilizadas, verificadas e corrigidas.",
    status: "available",
    duration: "≈ 35 min",
    sections: transparenciaSections,
  },
  {
    id: "fiscalizacao-continua",
    order: 2,
    code: "Módulo 02",
    title: "Fiscalização Contínua",
    subtitle: "Conteúdo em preparação",
    description:
      "Este módulo será disponibilizado em uma próxima etapa do onboarding da Unidade Jurídica.",
    status: "soon",
    duration: "Em breve",
    sections: [],
  },
];

export function getModule(id: string) {
  return modules.find((m) => m.id === id);
}
