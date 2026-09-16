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
  | "conclusion"
  | "fc-abertura"
  | "fc-fluxo"
  | "fc-inicio"
  | "fc-comunicacao"
  | "fc-prazos"
  | "fc-entregas"
  | "fc-ajustes"
  | "fc-validacao"
  | "fc-papeis"
  | "fc-conclusao"
  | "ja-papel"
  | "ja-reportes"
  | "ja-pauta"
  | "ja-triagem"
  | "ja-movimentacoes"
  | "ja-contencioso"
  | "ja-apoio"
  | "ja-controles"
  | "ja-prognostico"
  | "ja-atualizacao"
  | "ja-relatorio"
  | "ja-validacao"
  | "ja-resumo";


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
  hidden?: boolean;
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

export const fiscalizacaoSections: ModuleSection[] = [
  {
    id: "abertura",
    eyebrow: "Seção 01",
    title: "Abertura",
    summary: "O que é a Fiscalização Contínua do TCU e quem participa dela.",
    kind: "fc-abertura",
  },
  {
    id: "fluxo",
    eyebrow: "Seção 02",
    title: "Entenda o fluxo",
    summary: "Visão geral da jornada, do ofício ao encerramento.",
    kind: "fc-fluxo",
  },
  {
    id: "oficio",
    eyebrow: "Seção 03",
    title: "Tudo começa com um ofício",
    summary: "Recebimento do ofício e organização do acompanhamento.",
    kind: "fc-inicio",
  },
  {
    id: "comunicacao",
    eyebrow: "Seção 04",
    title: "Comunicação às áreas",
    summary: "Quem precisa ser comunicado e em qual prazo.",
    kind: "fc-comunicacao",
  },
  {
    id: "prazos",
    eyebrow: "Seção 05",
    title: "Prazos que importam",
    summary: "Os três prazos que organizam o ritmo da fiscalização.",
    kind: "fc-prazos",
  },
  {
    id: "entregas",
    eyebrow: "Seção 06",
    title: "Preparar e conferir",
    summary: "Como as áreas preparam os arquivos e como ocorre a conferência.",
    kind: "fc-entregas",
  },
  {
    id: "ajustes",
    eyebrow: "Seção 07",
    title: "Quando há ajustes",
    summary: "O loop de correção antes do envio ao TCU.",
    kind: "fc-ajustes",
  },
  {
    id: "validacao",
    eyebrow: "Seção 08",
    title: "Envio e validação",
    summary: "Envio ao TCU, verificação, não conformidade e conformidade.",
    kind: "fc-validacao",
  },
  {
    id: "papeis",
    eyebrow: "Seção 09",
    title: "Quem faz o quê",
    summary: "Responsabilidades do TCU, do Especialista e das áreas.",
    kind: "fc-papeis",
  },
  {
    id: "conclusao",
    eyebrow: "Seção 10",
    title: "Conclusão",
    summary: "Resumo da jornada e próximos passos.",
    kind: "fc-conclusao",
  },
];

export const assistenciaJuridicaSections: ModuleSection[] = [
  { id: "papel", eyebrow: "Etapa 01", title: "Papel da Assistência", summary: "Como a Assistência conecta demandas, advogados e controles.", kind: "ja-papel" },
  { id: "reportes", eyebrow: "Etapa 02", title: "Início do dia", summary: "Tratamento dos reportes encaminhados pelos advogados.", kind: "ja-reportes" },
  { id: "pauta", eyebrow: "Etapa 03", title: "Organização da pauta", summary: "Dados essenciais para incluir e atualizar demandas.", kind: "ja-pauta" },
  { id: "triagem", eyebrow: "Etapa 04", title: "Triagem no ZEEV", summary: "Análise inicial de admissibilidade das solicitações.", kind: "ja-triagem" },
  { id: "movimentacoes", eyebrow: "Etapa 05", title: "Tratamento das movimentações", summary: "Como registrar entradas, retornos, correções e conclusões.", kind: "ja-movimentacoes" },
  { id: "contencioso", eyebrow: "Etapa 06", title: "Demandas do contencioso", summary: "Atenção especial às publicações e aos prazos judiciais.", kind: "ja-contencioso" },
  { id: "apoio", eyebrow: "Etapa 07", title: "Apoio à operação", summary: "Suporte aos advogados, clientes internos e gestão.", kind: "ja-apoio" },
  { id: "controles", eyebrow: "Etapa 08", title: "Manutenção dos controles", summary: "Checklist antes de concluir qualquer atualização.", kind: "ja-controles" },
  { id: "atualizacao-mensal", eyebrow: "Etapa 09", title: "Atualização mensal", summary: "Preparação do repositório a partir do dia 20.", kind: "ja-atualizacao" },
  { id: "relatorio-mensal", eyebrow: "Etapa 10", title: "Relatório mensal", summary: "Elaboração objetiva a partir do repositório atualizado.", kind: "ja-relatorio" },
  { id: "prognostico", eyebrow: "Etapa 11", title: "Revisão do prognóstico", summary: "Marcos, responsabilidades e papel da Assistência.", kind: "ja-prognostico" },
  { id: "validacao-envio", eyebrow: "Etapa 12", title: "Validação e envio", summary: "Responsáveis, assinatura e prazo de envio oficial.", kind: "ja-validacao" },
  { id: "visao-rapida", eyebrow: "Etapa 13", title: "Visão rápida da rotina", summary: "Resumo dos principais momentos da rotina da Assistência.", kind: "ja-resumo" },
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
    title: "Fiscalização Contínua do TCU",
    subtitle: "Do ofício de requisição à validação dos arquivos",
    description:
      "Entenda como o TCU acompanha periodicamente informações do SESI e do SENAI, quem participa, quais são os prazos e como as entregas são preparadas, conferidas, enviadas e validadas.",
    status: "available",
    duration: "≈ 25 min",
    sections: fiscalizacaoSections,
  },
  {
    id: "assistencia-juridica",
    order: 3,
    code: "Trilha 01 · Jurídico",
    title: "Rotina da Assistência Jurídica",
    subtitle: "Da entrada da demanda aos controles e relatórios",
    description:
      "Conheça as responsabilidades e os controles que organizam o trabalho da Assistência Jurídica no dia a dia da UCJC.",
    status: "available",
    duration: "≈ 45 min",
    sections: assistenciaJuridicaSections,
    hidden: true,
  },

];

export function getModule(id: string) {
  return modules.find((m) => m.id === id);
}
