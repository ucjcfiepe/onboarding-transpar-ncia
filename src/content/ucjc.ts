/**
 * Conteúdo institucional da UCJC — Unidade Compartilhada Jurídica e de Compliance.
 * As três frentes (Jurídico, Compliance e Operações) são descritas aqui,
 * separadas dos componentes de apresentação.
 */

export type AreaId = "juridico" | "compliance" | "operacoes";

export interface AreaSummary {
  id: AreaId;
  route: "/juridico" | "/compliance" | "/operacoes";
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  accent: "institutional" | "teal" | "sky";
}

export const areas: AreaSummary[] = [
  {
    id: "juridico",
    route: "/juridico",
    eyebrow: "Frente 01",
    title: "Jurídico",
    subtitle: "Atuação consultiva, preventiva e contenciosa",
    description:
      "Assessora as entidades do Sistema FIEPE em situações preventivas e em demandas judiciais, administrativas e negociais.",
    highlights: ["Pareceres e normativos", "Contratos e acordos de vontade", "Processos e aquisições"],
    accent: "institutional",
  },
  {
    id: "compliance",
    route: "/compliance",
    eyebrow: "Frente 02",
    title: "Compliance",
    subtitle: "Integridade, riscos, controles e monitoramento",
    description:
      "Atua em integridade institucional, avaliação de riscos, terceiros, comunicação, treinamento e acompanhamento de recomendações.",
    highlights: ["Programa de Integridade", "Due Diligence de terceiros", "Monitoramento e controle"],
    accent: "teal",
  },
  {
    id: "operacoes",
    route: "/operacoes",
    eyebrow: "Frente 03",
    title: "Operações Jurídicas e de Compliance",
    subtitle: "Processos, dados, padrões e frentes transversais",
    description:
      "Área-meio da UCJC com foco na otimização de processos, gestão de dados e eficiência operacional para o Jurídico SESI, o Jurídico SENAI e o Compliance.",
    highlights: ["Legal Ops e processos", "Dados e conhecimento", "Transparência e Fiscalização Contínua"],
    accent: "sky",
  },
];

/* ============================== JURÍDICO ============================== */

export const juridicoIntro =
  "O Jurídico atua antes, durante e depois das decisões que envolvem risco jurídico, oferecendo orientação, análise e representação para apoiar as áreas com segurança.";

export const juridicoPortfolio: { group: string; items: string[] }[] = [
  {
    group: "Análise e orientação",
    items: [
      "Emissão de pareceres jurídicos",
      "Elaboração e revisão de documentos internos",
      "Memorandos, ofícios e normativos",
    ],
  },
  {
    group: "Instrumentos e negociações",
    items: [
      "Análise e elaboração de acordos de vontade",
      "Contratos, convênios e termos aditivos",
      "Outros instrumentos jurídicos",
      "Suporte jurídico em negociações coletivas e relações sindicais",
    ],
  },
  {
    group: "Representação e processos",
    items: [
      "Atuação em processos judiciais",
      "Atuação em processos administrativos",
      "Condução de processos administrativos sancionadores",
      "Consultoria em processos de aquisições",
    ],
  },
  {
    group: "Assessoria às áreas",
    items: [
      "Assessoria jurídica às áreas de Negócio",
      "Assessoria às áreas de Saúde",
      "Assessoria às áreas de Educação",
      "Assessoria às áreas de Inovação",
      "Assessoria às áreas de Apoio",
    ],
  },
];

export const juridicoEstrutura: {
  id: string;
  name: string;
  lead: string;
  items: string[];
}[] = [
  {
    id: "senai",
    name: "Gerência de Negócios Jurídicos SENAI",
    lead: "Responsável pela assessoria jurídica às unidades do SENAI.",
    items: [
      "Pareceres",
      "Atuação em processos judiciais e administrativos",
      "Consultoria em aquisições",
      "Elaboração e revisão de documentos internos",
      "Acordos de vontade",
      "Assessoria às áreas de Educação",
      "Assessoria às áreas de Inovação",
      "Assessoria às áreas de Apoio",
    ],
  },
  {
    id: "sesi",
    name: "Gerência de Negócios Jurídicos SESI",
    lead: "Responsável pela assessoria jurídica às unidades do SESI.",
    items: [
      "Pareceres",
      "Atuação em processos judiciais e administrativos",
      "Consultoria em aquisições",
      "Documentos internos",
      "Acordos de vontade",
      "Assessoria às áreas de Educação",
      "Assessoria às áreas de Saúde",
      "Assessoria às áreas de Inovação",
      "Assessoria às áreas de Apoio",
    ],
  },
  {
    id: "fiepe-iel",
    name: "Núcleo Jurídico FIEPE/IEL",
    lead: "Responsável pela assessoria jurídica às unidades da FIEPE e do IEL.",
    items: [
      "Pareceres",
      "Processos judiciais e administrativos",
      "Consultoria em aquisições",
      "Acordos de vontade",
      "Documentos internos",
      "Assessoria às áreas do IEL",
      "Assessoria às áreas de Suporte ao Negócio",
      "Assessoria à GERI",
    ],
  },
];

export const juridicoSituacoes: string[] = [
  "Preciso revisar ou elaborar um contrato.",
  "Tenho dúvida sobre a aplicação de uma norma.",
  "Preciso formalizar um convênio ou termo aditivo.",
  "Existe um processo judicial ou administrativo.",
  "Estou conduzindo uma aquisição e preciso de orientação.",
  "Preciso revisar um memorando, ofício ou normativo.",
  "Existe uma questão trabalhista coletiva ou sindical.",
];

export const juridicoAntesDeEnviar: { title: string; text: string }[] = [
  {
    title: "Contexto",
    text: "O Jurídico precisa entender o que aconteceu, qual é a situação e por que a análise está sendo solicitada.",
  },
  {
    title: "Necessidade",
    text: "Deixe claro qual decisão, dúvida ou providência necessita de apoio jurídico.",
  },
  {
    title: "Documentos",
    text: "Apresente os documentos necessários para a análise.",
  },
];

/* ============================= COMPLIANCE ============================= */

export const complianceIntro =
  "O Compliance apoia a integridade institucional: previne riscos, orienta as áreas, avalia terceiros, monitora controles e acompanha recomendações — muito além de fiscalizar.";

export const compliancePortfolio: string[] = [
  "Consulta Compliance",
  "Conflito de Interesse em Processo Seletivo",
  "Due Diligence de Clientes e Parceiros",
  "Ações de Monitoramento e Controle — AMC",
  "Due Diligence de Fornecedor",
  "Avaliação de Riscos de Integridade",
  "Revisão de Normativos de Integridade",
  "Gestão da Auditoria Independente",
  "Execução de ações de comunicação e treinamento",
  "Monitoramento de recomendações de órgãos de controle externo",
];

export const programaIntegridade: { id: string; title: string; items: string[] }[] = [
  {
    id: "riscos",
    title: "Avaliação de riscos de integridade",
    items: [
      "Categorização",
      "Mapeamento",
      "Classificação por impacto e probabilidade",
      "Definição e acompanhamento de planos de ação",
    ],
  },
  {
    id: "normativos",
    title: "Códigos, políticas e normativos",
    items: [
      "Revisão e atualização do Código de Conduta",
      "Código de Conduta de colaboradores",
      "Código de Conduta de fornecedores",
      "Adequação de normativos de integridade",
    ],
  },
  {
    id: "comunicacao",
    title: "Comunicação",
    items: [
      "Boletins",
      "Campanhas internas",
      "Comunicação por meio dos Elos de Compliance",
      "Integridade, respeito, assédio, discriminação e conduta ética",
    ],
  },
  {
    id: "treinamentos",
    title: "Treinamentos",
    items: [
      "Capacitações internas",
      "Treinamentos realizados em conjunto com outras áreas",
      "Capacitações para fornecedores",
      "Orientações sobre deveres e obrigações",
      "Ações educativas",
    ],
  },
  {
    id: "escolas",
    title: "Compliance nas escolas",
    items: ["Ações de apresentação", "Sensibilização", "Disseminação da cultura de integridade"],
  },
  {
    id: "terceiros",
    title: "Due diligence de fornecedores",
    items: ["Normativos", "Procedimentos", "Checklists", "Capacitação", "Análise de integridade de terceiros"],
  },
];

export const amcTemas: { group: string; items: string[] }[] = [
  {
    group: "Contratações e fornecedores",
    items: [
      "Gestão de contratos",
      "Processos de seleção de fornecedores",
      "Processos com disputa",
      "Processos sem disputa",
      "Obras e serviços de engenharia",
    ],
  },
  {
    group: "Pessoas",
    items: ["Processos seletivos", "Admissões", "Desligamentos", "Gerenciamento de estágios"],
  },
  {
    group: "Recursos e patrimônio",
    items: [
      "Gestão de almoxarifados",
      "Gestão de patrimônio",
      "Caixas e fundos fixos",
      "Gestão de pagamentos",
      "Transferências de recursos",
    ],
  },
  {
    group: "Negócio e projetos",
    items: [
      "Tecnologia da informação",
      "Saúde",
      "Passagens e hospedagens",
      "Concessão de gratuidades SESI e SENAI",
      "Critérios de rateio",
      "Prestação de contas IEL",
      "Gestão de projetos",
      "Convênios",
      "Patrocínios",
      "Monitoramento de recomendações de órgãos de controle externo",
    ],
  },
];

export const dueDiligenceResumo = [
  "Questionário",
  "Análise",
  "Classificação de risco",
  "Tratativas",
  "Revisão",
  "Parecer",
];

export const dueDiligenceFluxo: string[] = [
  "Suprimentos disponibiliza o formulário ao fornecedor.",
  "O fornecedor recebe o link.",
  "O fornecedor responde o questionário.",
  "Compliance recebe a notificação.",
  "Compliance exporta o questionário.",
  "Compliance realiza a Due Diligence.",
  "Compliance elabora relatório.",
  "Compliance classifica o nível de risco.",
  "Compliance realiza tratativas quando necessário.",
  "O fornecedor recebe demandas complementares.",
  "O fornecedor apresenta respostas e evidências.",
  "Compliance revisa a avaliação.",
  "Compliance emite parecer.",
  "O parecer é enviado para Suprimentos.",
];

export const dueDiligenceAnalise: string[] = [
  "CNPJ",
  "Situação ativa da empresa",
  "Conferência do nome empresarial",
  "CNAE",
  "Compatibilidade da atividade econômica com o serviço",
  "Informações prestadas no questionário",
  "Documentos apresentados",
  "Práticas de Compliance",
  "Mídia negativa",
  "Pessoa Exposta Politicamente — PEP",
  "Avaliação societária",
  "Avaliação financeira",
  "Avaliação operacional",
];

export const dueDiligenceBases: { sigla: string; nome: string }[] = [
  { sigla: "CEIS", nome: "Cadastro de Empresas Inidôneas e Suspensas." },
  { sigla: "CNEP", nome: "Cadastro Nacional de Empresas Punidas." },
  { sigla: "CEPIM", nome: "Cadastro de Entidades Privadas sem Fins Lucrativos Impedidas." },
  { sigla: "CNJ", nome: "Consultas processuais e antecedentes judiciais relevantes." },
  { sigla: "TCU", nome: "Acórdãos, tomadas de contas e sanções." },
  { sigla: "Portal da Transparência", nome: "Relações com o poder público, contratos e repasses." },
];

export const orgaosControle: string[] = [
  "Tribunal de Contas da União — TCU",
  "Controladoria-Geral da União — CGU",
  "Tribunais de Contas Estaduais",
  "Ministérios Públicos",
  "Outras entidades fiscalizadoras com interface com o Sistema FIEPE",
];

export const monitoramentoFases: { id: string; title: string; lead: string; items: string[] }[] = [
  {
    id: "f1",
    title: "Fase 1 — Identificação",
    lead: "O que será monitorado neste ciclo.",
    items: [
      "Identificar recomendações objeto de monitoramento",
      "Realizar levantamento periódico",
      "Realizar reunião de alinhamento",
      "Definir escopo",
      "Incluir ações no Plano Anual de Monitoramento e Controle — PMC",
    ],
  },
  {
    id: "f2",
    title: "Fase 2 — Definição de responsabilidades",
    lead: "Quem responde por cada recomendação.",
    items: [
      "Designar unidade responsável",
      "Comunicar formalmente o início do monitoramento",
      "Informar prazos",
      "Solicitar indicação de interlocutor",
      "A unidade responsável indica pessoa de contato",
    ],
  },
  {
    id: "f3",
    title: "Fase 3 — Solicitação de evidências",
    lead: "Compliance envia a SMC — Solicitação de Monitoramento e Controle.",
    items: [
      "Status do plano de ação",
      "Evidências",
      "Documentos",
      "Informações necessárias para análise",
      "A unidade responsável separa e encaminha os documentos",
    ],
  },
  {
    id: "f4",
    title: "Fase 4 — Análise",
    lead: "Análise crítica do que foi apresentado. Se necessário, novas SMCs são enviadas e o ciclo se repete.",
    items: ["Suficiência", "Adequação", "Consistência", "Aderência à recomendação"],
  },
  {
    id: "f5",
    title: "Fase 5 — Plano de ação",
    lead: "Quando a recomendação ainda não possui ações de regularização.",
    items: [
      "Compliance solicita Plano de Ação",
      "A unidade responsável elabora o plano",
      "Compliance recebe e acompanha",
    ],
  },
  {
    id: "f6",
    title: "Fase 6 — Relatório",
    lead: "Consolidação, validação da área responsável, validação da UCJC e, após ajustes, relatório final.",
    items: [
      "Análises",
      "Constatações",
      "Status dos planos de ação",
      "Atendimento das recomendações",
      "Conclusão",
    ],
  },
  {
    id: "f7",
    title: "Fase 7 — Efetividade",
    lead: "Após a implementação do Plano de Ação, Compliance verifica evidências e classifica a recomendação. Recomendações não atendidas retornam para novo ciclo.",
    items: ["Atendida", "Atendida parcialmente", "Não atendida"],
  },
];

export const unidadeResponsavelDeveres: string[] = [
  "Indicar interlocutor",
  "Responder solicitações",
  "Separar documentos",
  "Encaminhar evidências",
  "Elaborar Plano de Ação quando necessário",
  "Cumprir prazos",
  "Participar da validação dos apontamentos",
  "Implementar as providências de sua responsabilidade",
];

/* ============================== OPERAÇÕES ============================== */

export const nojcIntro =
  "Área-meio da UCJC com foco na otimização de processos, gestão de dados e eficiência operacional. Seus clientes internos são principalmente o Jurídico SENAI, o Jurídico SESI e o Compliance.";

export const nojcPortfolio: string[] = [
  "Teses jurídicas alinhadas com o Departamento Nacional — DN",
  "Processos jurídicos e Legal Ops",
  "Difusão de informações jurídicas",
  "Gestão de dados da UCJC",
  "Atuação jurídica transversal SESI, SENAI, FIEPE e IEL",
  "Monitoramento da jurisprudência dos Tribunais Superiores",
  "Backoffice da UCJC",
  "Transparência Institucional",
  "Fiscalização Contínua — TCU",
  "Gestão de Normativos Internos",
];

export const nojcEixos: {
  id: string;
  title: string;
  lead: string;
  blocks: { title: string; message?: string; items: string[] }[];
}[] = [
  {
    id: "processos",
    title: "Processos e Legal Ops",
    lead: "Legal Ops ajuda a organizar como o trabalho jurídico acontece, conectando pessoas, processos, tecnologia e informação.",
    blocks: [
      {
        title: "Organização e melhoria dos processos internos",
        items: [
          "Revisão dos serviços no ZEEV",
          "Revisão de fluxos",
          "Atualização de serviços",
          "Monitoramento das ações dos núcleos",
          "Acompanhamento das ações das áreas compartilhadas",
          "Organização dos processos internos",
          "Apoio à eficiência operacional",
          "Padronização de rotinas",
          "Melhoria de fluxos de trabalho",
        ],
      },
    ],
  },
  {
    id: "dados",
    title: "Dados, documentos e conhecimento",
    lead: "Informação organizada reduz retrabalho, melhora a rastreabilidade e facilita a tomada de decisão.",
    blocks: [
      {
        title: "Gestão de dados e repositórios",
        items: [
          "Gestão de dados da UCJC",
          "Atualização de repositórios",
          "Organização de documentos",
          "Atualização de repositório de processos",
          "Acompanhamento de orientações para organização documental",
          "Padronização de arquivos",
          "Manutenção de informações necessárias aos processos jurídicos",
          "Relatórios de processos",
        ],
      },
      {
        title: "Relatórios e acompanhamento de processos",
        items: [
          "Relatórios de processos",
          "Consolidação de informações",
          "Acompanhamento dos processos",
          "Acompanhamento dos processos relacionados ao Departamento Nacional",
          "Atualização de informações para reporte",
          "Suporte à gestão do contencioso e das atividades jurídicas",
        ],
      },
      {
        title: "Teses, jurisprudência e difusão",
        message: "O conhecimento jurídico também precisa ser organizado e compartilhado.",
        items: [
          "Estudo de teses jurídicas alinhadas ao Departamento Nacional",
          "Monitoramento da jurisprudência dos Tribunais Superiores",
          "Difusão das informações relevantes às equipes jurídicas",
          "Informativos internos, newsletter e boletins jurídicos",
          "Comunicação de temas jurídicos e de Compliance",
          "Alinhamentos técnicos entre as equipes",
        ],
      },
    ],
  },
  {
    id: "padronizacao",
    title: "Padronização e governança",
    lead: "Criar referências consistentes para reduzir retrabalho e aumentar segurança e uniformidade.",
    blocks: [
      {
        title: "Gestão de normativos",
        message:
          "Normativos atualizados e organizados ajudam a manter o mesmo entendimento e a mesma prática entre as áreas.",
        items: [
          "Elaboração de normativos internos",
          "Revisão",
          "Padronização",
          "Organização",
          "Gestão de versões",
          "Disponibilização institucional",
        ],
      },
      {
        title: "Padronização jurídica",
        items: [
          "Padronização de peças processuais",
          "Modelos",
          "Documentos",
          "Minutas",
          "Controle de versões",
          "Organização de instrumentos jurídicos",
          "Repositório de modelos padrão",
        ],
      },
      {
        title: "Procurações e substabelecimentos",
        items: [
          "Procurações",
          "Substabelecimentos",
          "Processos do Departamento Nacional",
          "Solicitação de substabelecimento",
          "Organização de dados dos advogados",
          "Acompanhamento documental",
        ],
      },
    ],
  },
  {
    id: "suporte",
    title: "Suporte e frentes transversais",
    lead: "Rotinas administrativas necessárias ao funcionamento da unidade e frentes institucionais com fluxo próprio.",
    blocks: [
      {
        title: "Financeiro e pagamentos",
        items: [
          "Pagamentos de custas judiciais",
          "Pagamentos de depósitos judiciais",
          "Rotinas de pagamento",
        ],
      },
      {
        title: "Contratos e medições",
        items: ["Medição de contratos", "Contratos FIEPE e IEL", "Contratos SENAI", "Contratos SESI"],
      },
      { title: "Orçamento", items: ["Monitoramento de orçamento", "SORS", "Transferências no SORS"] },
      { title: "Suprimentos", items: ["Requisição de suprimentos", "Requisição de contratos", "Almoxarifado"] },
      {
        title: "Viagens e deslocamentos",
        items: [
          "Solicitação de hospedagem",
          "Passagens aéreas",
          "Passagens rodoviárias",
          "Locações",
          "Diárias de viagem",
        ],
      },
      {
        title: "Bens e apoio administrativo",
        items: ["Controle de saída de bens", "Organização de pastas e arquivos administrativos"],
      },
    ],
  },
];

export const notificacoesFluxo: string[] = [
  "Notificação recebida",
  "Registro",
  "Identificação da demanda",
  "Encaminhamento à área responsável",
  "Acompanhamento",
];

/* ============================ INTEGRAÇÃO ============================ */

export const integracaoExemplo: { area: string; text: string }[] = [
  { area: "Jurídico", text: "Análise do instrumento e segurança jurídica." },
  { area: "Compliance", text: "Avaliação de integridade do fornecedor." },
  {
    area: "Operações",
    text: "Fluxos, modelos, organização de informações e suporte operacional.",
  },
];
