/* Conteúdo operacional do módulo Jurídico — complementa src/content/ucjc.ts */

export const chegadaIntro =
  "Antes de chegar à análise do advogado, a demanda passa por uma etapa operacional de recebimento, triagem e organização. Essa etapa ajuda a garantir que a solicitação esteja corretamente instruída, direcionada e inserida na pauta de trabalho.";

export const chegadaFluxo: string[] = [
  "Demanda aberta no ZEEV",
  "Triagem",
  "Verificação de admissibilidade",
  "Inclusão em pauta",
  "Atendimento pelo advogado",
  "Acompanhamento",
];

export const zeevFrase =
  "O ZEEV é o principal ponto de entrada das demandas jurídicas. É por meio dele que as solicitações chegam à UCJC para triagem, organização e posterior inclusão na pauta dos advogados.";

export const zeevCards: { title: string; description: string }[] = [
  {
    title: "Abertura pelas áreas",
    description:
      "As áreas abrem a solicitação no ZEEV — Orquestra, que concentra o recebimento das demandas jurídicas.",
  },
  {
    title: "Recebimento pela equipe",
    description:
      "A equipe jurídica recebe a solicitação pelo ZEEV e inicia a análise de admissibilidade.",
  },
  {
    title: "Inclusão em pauta",
    description:
      "Admitida a demanda, ela é incluída na pauta para acompanhamento e atendimento pelos advogados.",
  },
  {
    title: "Se o ZEEV estiver indisponível",
    description:
      "Em situações de indisponibilidade do sistema, o recebimento pode ocorrer por e-mail.",
  },
];

export const triagemOrientacoes: string[] = [
  "Abertura correta do chamado",
  "Documentos necessários",
  "Informações de admissibilidade",
  "Complementações para que a demanda possa seguir",
];

export const triagemFrase =
  "A triagem ajuda a garantir que a demanda chegue ao advogado com o contexto e os documentos necessários para análise.";

export const assistentesAtribuicoes: string[] = [
  "Triagem das demandas recebidas via ZEEV",
  "Suporte aos clientes internos sobre abertura de chamados e documentos de admissibilidade",
  "Assistência aos advogados",
  "Apoio à gestão",
  "Emissão de procurações",
  "Relatórios mensais de processos judiciais e administrativos",
  "Coleta e tratamento de dados relacionados ao A.N.O.",
  "Apoio à organização das pautas consultivas e contenciosas",
];

export const reporteUsos: string[] = [
  "Inserção de demandas na pauta",
  "Solicitação de replanejamento",
  "Ajustes em demandas consultivas",
  "Ajustes em demandas contenciosas",
];

export const replanejamentoCriterios: string[] = [
  "Evitar o estouro do A.N.O.",
  "Minimizar impactos nas demais demandas",
  "Evitar sobrecarga desnecessária no dia subsequente",
];

export const prazosTipos: { label: string; title: string; text: string }[] = [
  {
    label: "Ajustável",
    title: "Prazo de segurança",
    text: "Pode ser ajustado conforme solicitação do advogado, para a data por ele indicada.",
  },
  {
    label: "Formal",
    title: "Prazo fatal",
    text: "Nunca deve ser alterado sem solicitação expressa do advogado, formalizada por e-mail.",
  },
];

export const anoFaixas: { prazo: string; unidade: string; itens: string[] }[] = [
  {
    prazo: "2",
    unidade: "dias",
    itens: [
      "Consulta — Comercial",
      "Contrato — Comercial",
      "Contrato Fase Interna — Validação",
      "Termo de Registro de Preços — Validação",
      "Impugnação",
    ],
  },
  {
    prazo: "3",
    unidade: "dias",
    itens: [
      "Fase Interna",
      "Contrato Fase Interna — Elaboração",
      "Termo de Registro de Preços — Elaboração",
    ],
  },
  {
    prazo: "5",
    unidade: "dias",
    itens: [
      "Acordo de Confidencialidade",
      "Acordo de Cooperação",
      "Análise de Documentação",
      "Análise de Edital",
      "Carta de Indicação",
      "Certidão",
      "Cláusula",
      "Consulta",
      "Contrato",
      "Decisão em Processo Administrativo — PAD",
      "Declaração",
      "Distrato",
      "Memorando",
      "Notificação",
    ],
  },
  {
    prazo: "10",
    unidade: "dias",
    itens: ["Política", "Termo de Referência"],
  },
  {
    prazo: "—",
    unidade: "sem prazo",
    itens: [
      "Acordo Coletivo",
      "Diligências",
      "Elaboração de Minuta Padrão",
      "eSocial",
      "Estudo Estratégico",
      "Material de Apoio",
      "Plano de Ação",
      "Relatório",
      "Reunião",
    ],
  },
];

export const anoImpactos: string[] = [
  "Organização da pauta",
  "Priorização",
  "Replanejamento",
  "Distribuição das demandas",
  "Acompanhamento da carga de trabalho",
  "Geração de dados para gestão",
];

export const publicacoesFluxo: string[] = [
  "Publicação recebida",
  "Leitura",
  "Inserção na pauta contenciosa",
  "Revisão",
  "Acompanhamento do prazo",
];
