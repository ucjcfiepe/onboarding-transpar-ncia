import type { Entity } from "./modules";

/* ---------------- Introdução ---------------- */

export const conceito =
  "A Transparência, no contexto do SESI e do SENAI, compreende o conjunto de atividades destinadas a garantir que as informações institucionais obrigatórias estejam disponíveis ao público de forma atualizada, acessível, organizada e rastreável.";

export const rotinaEnvolve = [
  "Planejamento dos prazos",
  "Solicitação de informações",
  "Acompanhamento das áreas responsáveis",
  "Recebimento e conferência",
  "Disponibilização",
  "Verificação",
  "Registro de evidências",
  "Identificação de inconsistências",
  "Solicitação de correções",
  "Acompanhamento de adequações técnicas e estruturais",
];

export const finalidades = [
  {
    title: "Governança institucional",
    text: "Fortalecer a governança das entidades por meio de informação organizada e acessível.",
  },
  {
    title: "Prestação de contas",
    text: "Contribuir para a prestação de contas e para o atendimento das orientações aplicáveis.",
  },
  {
    title: "Prazos de divulgação",
    text: "Cumprir os prazos de divulgação previstos para cada obrigação.",
  },
  {
    title: "Rastreabilidade",
    text: "Garantir que cada disponibilização possa ser verificada e comprovada.",
  },
  {
    title: "Tratamento de inconsistências",
    text: "Identificar e tratar inconsistências junto às áreas e à equipe técnica.",
  },
  {
    title: "Ambientes disponíveis",
    text: "Manter os ambientes de Transparência disponíveis e adequados ao público.",
  },
];

/* ---------------- Arquitetura do processo ---------------- */

export interface ProcessStep {
  id: string;
  index: number;
  title: string;
  question: string;
  activities: string[];
}

export const processSteps: ProcessStep[] = [
  {
    id: "planejar",
    index: 1,
    title: "Planejar e solicitar",
    question: "O que precisa ser disponibilizado, quando e por quem?",
    activities: [
      "Consultar calendário e cronogramas",
      "Identificar as obrigações",
      "Verificar módulo e periodicidade",
      "Identificar a área responsável",
      "Identificar prazos",
      "Organizar as solicitações",
      "Solicitar as informações",
      "Acompanhar o envio",
      "Realizar cobranças quando necessário",
    ],
  },
  {
    id: "receber",
    index: 2,
    title: "Receber e disponibilizar",
    question: "A informação chegou e como ficará disponível?",
    activities: [
      "Receber arquivos",
      "Verificar período de referência",
      "Conferir formato",
      "Verificar completude",
      "Solicitar correção quando necessário",
      "Utilizar a plataforma correspondente quando houver publicação direta",
      "Acompanhar informações originadas em outros sistemas",
      "Acompanhar integrações automáticas quando aplicável",
    ],
  },
  {
    id: "verificar",
    index: 3,
    title: "Verificar e registrar",
    question: "Foi disponibilizada corretamente e existe evidência?",
    activities: [
      "Acessar os ambientes públicos",
      "Conferir se a informação está disponível",
      "Verificar o conteúdo",
      "Conferir período e arquivo",
      "Testar links e verificar navegação",
      "Acompanhar inconsistências",
      "Conferir aderência aos manuais aplicáveis",
      "Registrar data, link e prints",
      "Manter evidências",
      "Atualizar mapas e controles",
    ],
  },
  {
    id: "corrigir",
    index: 4,
    title: "Corrigir e aprimorar",
    question: "Há algo a corrigir ou adequar?",
    activities: [
      "Solicitar correção à área responsável",
      "Solicitar novo arquivo",
      "Tratar erros de carga",
      "Corrigir informações nas plataformas aplicáveis",
      "Consultar orientações do Departamento Nacional quando necessário",
      "Solicitar alterações técnicas quando necessário",
      "Acompanhar a implementação",
      "Testar a solução e validar a alteração",
      "Registrar a conclusão",
    ],
  },
];

/* ---------------- Ambientes e ferramentas ---------------- */

export interface ToolItem {
  id: string;
  name: string;
  entity: Entity;
  role: string;
  description: string;
  bullets?: string[];
  flow?: string[];
  note?: string;
  link?: string | null;
}

export interface ToolGroup {
  id: string;
  question: string;
  classification: string;
  intro: string;
  items: ToolItem[];
}

export const toolGroups: ToolGroup[] = [
  {
    id: "publico",
    question: "Onde o público consulta?",
    classification: "Ambientes públicos de divulgação e consulta",
    intro:
      "São os pontos públicos em que as informações podem ser consultadas. Não são sistemas internos de trabalho.",
    items: [
      {
        id: "portal-sesi",
        name: "Portal da Transparência SESI/PE",
        entity: "sesi",
        role: "Ambiente público",
        description: "Ponto público de consulta das informações do SESI/PE.",
        link: null,
      },
      {
        id: "portal-senai",
        name: "Portal da Transparência SENAI/PE",
        entity: "senai",
        role: "Ambiente público",
        description: "Ponto público de consulta das informações do SENAI/PE.",
        link: null,
      },
      {
        id: "tcu-sesi",
        name: "Prestação de Contas TCU SESI/PE",
        entity: "sesi",
        role: "Ambiente público",
        description: "Ambiente público de prestação de contas do SESI/PE.",
        link: null,
      },
      {
        id: "tcu-senai",
        name: "Prestação de Contas TCU SENAI/PE",
        entity: "senai",
        role: "Ambiente público",
        description: "Ambiente público de prestação de contas do SENAI/PE.",
        link: null,
      },
    ],
  },
  {
    id: "plataformas",
    question: "Onde a equipe publica ou administra?",
    classification: "Plataformas de publicação e gestão",
    intro:
      "Ambientes de trabalho do Analista de Transparência para carga, publicação e gestão de conteúdos.",
    items: [
      {
        id: "transparencia-web",
        name: "Transparência Web",
        entity: "ambos",
        role: "Plataforma de publicação e gestão",
        description:
          "Utilizada pelo Analista de Transparência para realizar determinadas cargas, validar arquivos, publicar conteúdos e administrar títulos, notas e fontes. Também pode ser utilizada para consulta de informações relacionadas às cargas e ao cronograma de publicação.",
        flow: [
          "Selecionar módulo",
          "Informar parâmetros",
          "Inserir arquivo",
          "Processar",
          "Validar",
          "Publicar",
          "Verificar no portal",
        ],
      },
      {
        id: "ddr",
        name: "DDR",
        entity: "ambos",
        role: "Plataforma de publicação e gestão",
        description:
          "Utilizada principalmente para gestão e publicação de informações relacionadas a dirigentes, responsáveis, órgãos colegiados e reuniões.",
        bullets: [
          "Cadastro de dados",
          "Gestão de dirigentes e responsáveis",
          "Registro de substituições",
          "Cadastro de reuniões",
          "Gestão de títulos, notas e fontes",
          "Relação de Dirigentes",
          "Rol de Responsáveis",
        ],
      },
    ],
  },
  {
    id: "origem",
    question: "De onde vêm determinadas informações?",
    classification: "Sistema de origem de informações",
    intro:
      "Nem tudo é publicado manualmente. Parte da informação nasce em outro sistema e se reflete no portal.",
    items: [
      {
        id: "sors",
        name: "SORS",
        entity: "ambos",
        role: "Sistema de origem de informações",
        description:
          "Participa da rotina como sistema relacionado à origem ou ao lançamento de determinadas informações orçamentárias e financeiras que posteriormente são refletidas no Portal da Transparência.",
        bullets: [
          "Execução orçamentária",
          "Saldos de exercícios anteriores",
          "Despesas por licitação e processos de seleção",
          "Rateio de despesas",
        ],
        note: "Nesses casos, pode não haver publicação manual: a atuação envolve acompanhar o prazo, cobrar a área responsável, verificar se a informação foi refletida no portal e registrar a verificação.",
      },
    ],
  },
  {
    id: "monitoramento",
    question: "Como a equipe monitora?",
    classification: "Ferramenta de monitoramento",
    intro: "Apoio ao acompanhamento dos ambientes de Transparência e Prestação de Contas.",
    items: [
      {
        id: "datacg",
        name: "DataCG",
        entity: "ambos",
        role: "Ferramenta de monitoramento",
        description:
          "Utilizado para monitoramento dos ambientes de Transparência e Prestação de Contas.",
        bullets: [
          "Acessar o sistema",
          "Selecionar SESI ou SENAI",
          "Acessar o monitoramento dos sites",
          "Consultar eventos",
          "Identificar inconsistências",
          "Identificar áreas responsáveis",
          "Solicitar ajustes",
          "Acompanhar a correção",
        ],
        note: "O DataCG auxilia na identificação de inconsistências, disponibilidade e completude, mas não substitui a análise de conformidade do conteúdo.",
      },
    ],
  },
  {
    id: "tecnico",
    question: "Como a equipe aciona alterações técnicas?",
    classification: "Ferramenta de acionamento técnico",
    intro:
      "O ZEEV não é plataforma de publicação da Transparência nem origem das informações. É a via de acionamento técnico.",
    items: [
      {
        id: "zeev",
        name: "ZEEV",
        entity: "ambos",
        role: "Ferramenta de acionamento técnico",
        description:
          "Ferramenta interna utilizada pelo Analista de Transparência para abrir e acompanhar chamados destinados à atuação técnica do desenvolvedor ou da equipe responsável pelo site.",
        bullets: [
          "Adequações solicitadas pelo Departamento Nacional",
          "Alterações estruturais no Portal da Transparência",
          "Inclusão ou modificação de funcionalidades",
          "Correção de problemas de navegação",
          "Ajustes de links ou elementos do site",
          "Indisponibilidade ou queda do portal",
          "Outras necessidades que exijam intervenção técnica",
        ],
        flow: [
          "Identificar necessidade técnica",
          "Reunir informações/evidências",
          "Abrir chamado no ZEEV",
          "Acompanhar atendimento",
          "Testar alteração",
          "Validar",
          "Registrar evidência",
        ],
        note: "Use sempre a expressão “acionamento técnico por meio do ZEEV”.",
      },
    ],
  },
];

/* ---------------- Jornada do analista ---------------- */

export interface JourneyStep {
  id: string;
  title: string;
  detail: string;
  stage: string;
}

export const journeySteps: JourneyStep[] = [
  {
    id: "j1",
    title: "Existe uma obrigação próxima do prazo",
    detail:
      "O calendário e os cronogramas indicam a obrigação, o módulo e a periodicidade aplicável.",
    stage: "Planejar e solicitar",
  },
  {
    id: "j2",
    title: "O analista identifica a área responsável",
    detail: "Cada informação tem uma área produtora, que responde pelo conteúdo e pelo prazo.",
    stage: "Planejar e solicitar",
  },
  {
    id: "j3",
    title: "Solicita a informação",
    detail: "As solicitações são organizadas e encaminhadas com o prazo necessário.",
    stage: "Planejar e solicitar",
  },
  {
    id: "j4",
    title: "Acompanha o recebimento",
    detail: "Enquanto o envio não ocorre, o acompanhamento e a cobrança fazem parte da rotina.",
    stage: "Planejar e solicitar",
  },
  {
    id: "j5",
    title: "Recebe o arquivo",
    detail: "O material chega para conferência antes de qualquer disponibilização.",
    stage: "Receber e disponibilizar",
  },
  {
    id: "j6",
    title: "Confere os requisitos",
    detail: "Período de referência, formato e completude são verificados nesta etapa.",
    stage: "Receber e disponibilizar",
  },
  {
    id: "j7",
    title: "Define como a informação será disponibilizada",
    detail:
      "Publicação direta em plataforma aplicável, informação originada em outro sistema ou integração automática.",
    stage: "Receber e disponibilizar",
  },
  {
    id: "j8",
    title: "Acompanha ou realiza a disponibilização",
    detail: "Nem toda informação é publicada manualmente pelo analista; parte é acompanhada.",
    stage: "Receber e disponibilizar",
  },
  {
    id: "j9",
    title: "Verifica no ambiente público",
    detail: "Conferência do conteúdo, do período, do arquivo, dos links e da navegação.",
    stage: "Verificar e registrar",
  },
  {
    id: "j10",
    title: "Registra a evidência",
    detail: "Data, link e prints são registrados, e os mapas e controles são atualizados.",
    stage: "Verificar e registrar",
  },
  {
    id: "j11",
    title: "Caso exista problema, direciona a correção",
    detail:
      "Correção pela área responsável, ajuste na plataforma aplicável ou acionamento técnico por meio do ZEEV.",
    stage: "Corrigir e aprimorar",
  },
];

/* ---------------- Responsabilidades ---------------- */

export const responsibilities = [
  {
    id: "analista",
    title: "Analista de Transparência",
    lead: "Coordena a rotina de ponta a ponta.",
    items: [
      "Coordenar a rotina",
      "Acompanhar prazos",
      "Solicitar informações",
      "Acompanhar áreas responsáveis",
      "Receber e conferir arquivos",
      "Realizar publicações quando aplicável",
      "Acompanhar disponibilizações",
      "Verificar os ambientes públicos",
      "Registrar evidências",
      "Identificar inconsistências",
      "Solicitar correções",
      "Abrir e acompanhar chamados técnicos quando necessário",
    ],
  },
  {
    id: "areas",
    title: "Áreas responsáveis pelas informações",
    lead: "Respondem pelo conteúdo que produzem.",
    items: [
      "Produzir os dados",
      "Validar o conteúdo",
      "Encaminhar os arquivos",
      "Observar os prazos",
      "Corrigir inconsistências relacionadas às informações sob sua responsabilidade",
    ],
  },
  {
    id: "tecnica",
    title: "Equipe técnica / desenvolvedor",
    lead: "Atua nas intervenções que dependem de desenvolvimento.",
    items: [
      "Correção técnica",
      "Ajuste estrutural",
      "Alteração de funcionalidade",
      "Tratamento de indisponibilidade",
      "Outras modificações que dependam de desenvolvimento",
    ],
  },
  {
    id: "dn",
    title: "Departamento Nacional",
    lead: "Orienta e direciona os Regionais.",
    items: [
      "Orientações",
      "Manuais",
      "Cronogramas",
      "Solicitações de adequação",
      "Apoio aos Regionais",
      "Requisitos e direcionamentos nacionais",
    ],
  },
];

/* ---------------- Situações práticas ---------------- */

export interface ScenarioOption {
  id: string;
  text: string;
  correct: boolean;
  feedback: string;
}

export interface Scenario {
  id: string;
  situation: string;
  options: ScenarioOption[];
  takeaway: string;
}

export const scenarios: Scenario[] = [
  {
    id: "s1",
    situation:
      "O DataCG identificou uma inconsistência relacionada a uma informação publicada. Qual deve ser o próximo passo?",
    options: [
      {
        id: "a",
        text: "Identificar a natureza da inconsistência e quem é responsável pelo ajuste, para então direcionar o encaminhamento.",
        correct: true,
        feedback:
          "A inconsistência pode ser de conteúdo (área responsável), de carga/publicação (plataforma aplicável) ou técnica (acionamento técnico por meio do ZEEV). O direcionamento depende dessa leitura.",
      },
      {
        id: "b",
        text: "Abrir imediatamente um chamado no ZEEV, sem analisar o tipo de inconsistência.",
        correct: false,
        feedback:
          "O acionamento técnico é adequado quando a necessidade exige intervenção do desenvolvedor. Antes disso, é preciso identificar a natureza da inconsistência.",
      },
      {
        id: "c",
        text: "Desconsiderar o evento, porque o DataCG apenas monitora.",
        correct: false,
        feedback:
          "O DataCG é ferramenta de monitoramento e seus apontamentos entram na rotina de acompanhamento e correção.",
      },
    ],
    takeaway: "Antes de encaminhar, identifique a natureza da inconsistência e o responsável.",
  },
  {
    id: "s2",
    situation:
      "O Portal da Transparência do SENAI está indisponível. As informações estão corretas, mas o site não está funcionando. Como o Analista de Transparência deve solicitar a intervenção técnica?",
    options: [
      {
        id: "a",
        text: "Acionamento técnico por meio do ZEEV.",
        correct: true,
        feedback:
          "O ZEEV é utilizado para abrir e acompanhar o chamado destinado à atuação técnica necessária no portal.",
      },
      {
        id: "b",
        text: "Republicar os arquivos na Transparência Web.",
        correct: false,
        feedback:
          "A informação já está correta. A indisponibilidade do site exige intervenção técnica, não nova carga.",
      },
      {
        id: "c",
        text: "Solicitar novo arquivo à área responsável.",
        correct: false,
        feedback: "A área responsável não atua sobre a indisponibilidade técnica do portal.",
      },
    ],
    takeaway: "Indisponibilidade do portal: acionamento técnico por meio do ZEEV.",
  },
  {
    id: "s3",
    situation:
      "Uma área encaminhou um arquivo para publicação, mas ele está incompleto. O que fazer?",
    options: [
      {
        id: "a",
        text: "Solicitar correção à área responsável antes de concluir a disponibilização.",
        correct: true,
        feedback:
          "A conferência de completude ocorre antes da disponibilização. O arquivo corrigido é que segue para publicação.",
      },
      {
        id: "b",
        text: "Disponibilizar assim mesmo e corrigir depois da verificação.",
        correct: false,
        feedback:
          "A verificação de completude integra a etapa de recebimento, antes da disponibilização.",
      },
      {
        id: "c",
        text: "Abrir chamado técnico no ZEEV.",
        correct: false,
        feedback:
          "Trata-se de conteúdo sob responsabilidade da área, não de necessidade de intervenção técnica.",
      },
    ],
    takeaway: "Completude é conferida antes de disponibilizar.",
  },
  {
    id: "s4",
    situation:
      "A informação aparece normalmente no DataCG. Isso significa necessariamente que seu conteúdo está totalmente de acordo com o manual?",
    options: [
      {
        id: "a",
        text: "Não.",
        correct: true,
        feedback:
          "O DataCG auxilia no monitoramento, mas não substitui a análise de conformidade do conteúdo.",
      },
      {
        id: "b",
        text: "Sim, o monitoramento valida a conformidade do conteúdo.",
        correct: false,
        feedback:
          "O monitoramento apoia a identificação de inconsistências, disponibilidade e completude — não o mérito do conteúdo.",
      },
    ],
    takeaway: "Monitoramento não é análise de conformidade.",
  },
  {
    id: "s5",
    situation: "Uma informação foi disponibilizada no portal. A atividade está encerrada?",
    options: [
      {
        id: "a",
        text: "Não necessariamente.",
        correct: true,
        feedback:
          "Após a disponibilização, é necessário verificar o resultado e registrar a evidência correspondente.",
      },
      {
        id: "b",
        text: "Sim, a publicação encerra a obrigação.",
        correct: false,
        feedback:
          "A etapa de verificar e registrar é parte do processo: sem evidência, não há rastreabilidade.",
      },
    ],
    takeaway: "Disponibilizar não encerra: verificar e registrar fazem parte do processo.",
  },
  {
    id: "s6",
    situation:
      "Uma informação orçamentária relacionada ao SORS ainda não apareceu no Portal da Transparência, e o prazo se aproxima. Qual atuação é compatível com a rotina?",
    options: [
      {
        id: "a",
        text: "Acompanhar o prazo, cobrar a área responsável, verificar se a informação foi refletida no portal e registrar a verificação.",
        correct: true,
        feedback:
          "Quando a informação tem origem em outro sistema, a atuação do analista é de acompanhamento, cobrança, verificação e registro.",
      },
      {
        id: "b",
        text: "Realizar a carga manual do conteúdo na Transparência Web sem contato com a área.",
        correct: false,
        feedback:
          "A informação tem origem em outro sistema; a atuação começa pelo acompanhamento junto à área responsável.",
      },
    ],
    takeaway: "Informação de origem em outro sistema: acompanhar, cobrar, verificar e registrar.",
  },
];

/* ---------------- Quiz ---------------- */

export type QuizFormat = "multiple" | "boolean" | "match" | "scenario";

export interface QuizQuestionData {
  id: string;
  format: QuizFormat;
  prompt: string;
  formatLabel: string;
  options: { id: string; text: string }[];
  correctId: string;
  explanation: string;
}

export const quizQuestions: QuizQuestionData[] = [
  {
    id: "q1",
    format: "multiple",
    formatLabel: "Múltipla escolha",
    prompt: "Qual é a ordem correta da arquitetura do processo de Transparência?",
    options: [
      {
        id: "a",
        text: "Planejar e solicitar → Receber e disponibilizar → Verificar e registrar → Corrigir e aprimorar",
      },
      {
        id: "b",
        text: "Receber e disponibilizar → Planejar e solicitar → Corrigir e aprimorar → Verificar e registrar",
      },
      {
        id: "c",
        text: "Verificar e registrar → Planejar e solicitar → Receber e disponibilizar → Corrigir e aprimorar",
      },
    ],
    correctId: "a",
    explanation:
      "As quatro etapas seguem esta ordem e formam um ciclo: após corrigir e aprimorar, uma nova verificação pode ser necessária.",
  },
  {
    id: "q2",
    format: "match",
    formatLabel: "Associação",
    prompt: "Qual recurso é classificado como ferramenta de acionamento técnico?",
    options: [
      { id: "a", text: "Transparência Web" },
      { id: "b", text: "ZEEV" },
      { id: "c", text: "SORS" },
      { id: "d", text: "DataCG" },
    ],
    correctId: "b",
    explanation:
      "O ZEEV é a ferramenta de acionamento técnico. Não é plataforma de publicação da Transparência nem origem das informações.",
  },
  {
    id: "q3",
    format: "boolean",
    formatLabel: "Verdadeiro ou falso",
    prompt: "“Publicação via ZEEV” é a expressão correta para descrever o uso da ferramenta.",
    options: [
      { id: "v", text: "Verdadeiro" },
      { id: "f", text: "Falso" },
    ],
    correctId: "f",
    explanation:
      "A expressão correta é “acionamento técnico por meio do ZEEV”. Não há publicação da Transparência via ZEEV.",
  },
  {
    id: "q4",
    format: "match",
    formatLabel: "Associação",
    prompt: "Onde são geridas informações de dirigentes, responsáveis, órgãos colegiados e reuniões?",
    options: [
      { id: "a", text: "DDR" },
      { id: "b", text: "DataCG" },
      { id: "c", text: "Portal da Transparência SESI/PE" },
    ],
    correctId: "a",
    explanation:
      "O DDR é a plataforma de publicação e gestão desses conteúdos, incluindo Relação de Dirigentes e Rol de Responsáveis.",
  },
  {
    id: "q5",
    format: "multiple",
    formatLabel: "Múltipla escolha",
    prompt: "Qual conjunto representa ambientes públicos de divulgação e consulta?",
    options: [
      { id: "a", text: "Transparência Web e DDR" },
      {
        id: "b",
        text: "Portais da Transparência SESI/PE e SENAI/PE e Prestação de Contas TCU SESI/PE e SENAI/PE",
      },
      { id: "c", text: "SORS e DataCG" },
    ],
    correctId: "b",
    explanation:
      "Os portais e os ambientes de Prestação de Contas TCU são pontos públicos de consulta, e não sistemas internos de trabalho.",
  },
  {
    id: "q6",
    format: "boolean",
    formatLabel: "Verdadeiro ou falso",
    prompt:
      "O DataCG substitui a análise de conformidade do conteúdo em relação aos manuais aplicáveis.",
    options: [
      { id: "v", text: "Verdadeiro" },
      { id: "f", text: "Falso" },
    ],
    correctId: "f",
    explanation:
      "O DataCG auxilia na identificação de inconsistências, disponibilidade e completude, mas não substitui a análise de conformidade do conteúdo.",
  },
  {
    id: "q7",
    format: "multiple",
    formatLabel: "Múltipla escolha",
    prompt: "Qual é o papel do SORS na rotina de Transparência?",
    options: [
      { id: "a", text: "Ferramenta de monitoramento dos portais." },
      {
        id: "b",
        text: "Sistema relacionado à origem ou ao lançamento de determinadas informações orçamentárias e financeiras.",
      },
      { id: "c", text: "Plataforma de abertura de chamados técnicos." },
    ],
    correctId: "b",
    explanation:
      "O SORS é sistema de origem de informações que posteriormente são refletidas no Portal da Transparência.",
  },
  {
    id: "q8",
    format: "scenario",
    formatLabel: "Cenário",
    prompt:
      "Uma alteração estrutural no Portal da Transparência foi solicitada pelo Departamento Nacional. Qual é o encaminhamento?",
    options: [
      { id: "a", text: "Acionamento técnico por meio do ZEEV, com acompanhamento até a validação." },
      { id: "b", text: "Nova carga na Transparência Web." },
      { id: "c", text: "Solicitação de novo arquivo à área responsável." },
    ],
    correctId: "a",
    explanation:
      "Adequações estruturais dependem de intervenção técnica: abre-se o chamado, acompanha-se o atendimento, testa-se, valida-se e registra-se a evidência.",
  },
  {
    id: "q9",
    format: "scenario",
    formatLabel: "Cenário",
    prompt: "O que caracteriza o encerramento adequado de uma disponibilização?",
    options: [
      { id: "a", text: "A publicação do arquivo na plataforma." },
      { id: "b", text: "A verificação no ambiente público e o registro da evidência." },
      { id: "c", text: "O envio do arquivo pela área responsável." },
    ],
    correctId: "b",
    explanation:
      "O registro deve estar associado à verificação efetiva da disponibilização: data, link, prints e atualização dos controles.",
  },
  {
    id: "q10",
    format: "match",
    formatLabel: "Associação",
    prompt: "Qual responsabilidade pertence às áreas responsáveis pelas informações?",
    options: [
      { id: "a", text: "Registrar as evidências de verificação nos controles da Transparência." },
      { id: "b", text: "Produzir os dados, validar o conteúdo e observar os prazos." },
      { id: "c", text: "Executar ajustes estruturais no portal." },
    ],
    correctId: "b",
    explanation:
      "As áreas produzem e validam o conteúdo; o registro de evidências cabe ao analista e os ajustes estruturais à equipe técnica.",
  },
];

/* ---------------- Conclusão ---------------- */

export const takeaways = [
  {
    title: "Quatro etapas, um ciclo",
    text: "Planejar e solicitar, receber e disponibilizar, verificar e registrar, corrigir e aprimorar.",
  },
  {
    title: "Disponibilizar ≠ publicar",
    text: "Parte das informações é acompanhada, não publicada manualmente pelo analista.",
  },
  {
    title: "Cada recurso, uma função",
    text: "Ambientes públicos, plataformas de publicação, sistema de origem, monitoramento e acionamento técnico.",
  },
  {
    title: "Evidência é parte do trabalho",
    text: "Sem verificação e registro, não há rastreabilidade da disponibilização.",
  },
];
