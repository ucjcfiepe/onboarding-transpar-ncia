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
  description?: string[];
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
    description: [
      "As informações de Transparência são disponibilizadas por diferentes canais, conforme a natureza dos dados. Algumas são atualizadas automaticamente por integrações entre sistemas, como o SGE/API-DN ou SORS, sem necessidade de intervenção manual. Outras são recebidas das áreas responsáveis e disponibilizadas pelos canais institucionais.",
      "A equipe de Transparência acompanha as publicações e verifica a integridade das informações disponibilizadas, utilizando ferramentas de monitoramento e consulta aos portais.",
    ],
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
    id: "sistemas",
    question: "Quais sistemas fazem parte da rotina?",
    classification: "Sistemas de informação e disponibilização",
    intro:
      "Cada sistema tem uma finalidade específica. A disponibilização das informações ocorre por diferentes canais, conforme a natureza dos dados.",
    items: [
      {
        id: "sge",
        name: "SGE — Gestão da Educação",
        entity: "ambos",
        role: "Informações educacionais",
        description: "Sistema relacionado às informações educacionais.",
      },
      {
        id: "sors",
        name: "SORS",
        entity: "ambos",
        role: "Informações contábeis e financeiras",
        description: "Sistema relacionado às informações contábeis e financeiras.",
      },
      {
        id: "crm",
        name: "CRM",
        entity: "ambos",
        role: "SAC e Ouvidoria",
        description: "Sistema utilizado para gestão do SAC e da Ouvidoria.",
      },
      {
        id: "ddr",
        name: "DDR",
        entity: "ambos",
        role: "Dirigentes e responsáveis",
        description: "Sistema de Gestão de Dirigentes e Rol dos Responsáveis.",
      },
      {
        id: "transparencia-web",
        name: "Transparência Web",
        entity: "ambos",
        role: "Disponibilização de arquivos",
        description: "Sistema utilizado para disponibilizar arquivos que não são publicados via API.",
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

export interface Scenario {
  id: string;
  situation: string;
  guidance: string;
  takeaway: string;
}

export const scenarios: Scenario[] = [
  {
    id: "s1",
    situation: "O DataCG identificou uma inconsistência relacionada a uma informação publicada.",
    guidance:
      "Identifique a natureza da inconsistência e quem é responsável pelo ajuste antes de encaminhar. Ela pode ser de conteúdo (área responsável), de carga/publicação (plataforma aplicável) ou técnica (acionamento técnico por meio do ZEEV).",
    takeaway: "Antes de encaminhar, identifique a natureza da inconsistência e o responsável.",
  },
  {
    id: "s2",
    situation:
      "O Portal da Transparência do SENAI está indisponível. As informações estão corretas, mas o site não está funcionando.",
    guidance:
      "Solicite a intervenção técnica por meio do ZEEV, que é utilizado para abrir e acompanhar o chamado destinado à atuação técnica necessária no portal.",
    takeaway: "Indisponibilidade do portal: acionamento técnico por meio do ZEEV.",
  },
  {
    id: "s3",
    situation: "Uma área encaminhou um arquivo para publicação, mas ele está incompleto.",
    guidance:
      "Solicite a correção à área responsável antes de concluir a disponibilização. A conferência de completude ocorre antes da publicação, e é o arquivo corrigido que segue para o portal.",
    takeaway: "Completude é conferida antes de disponibilizar.",
  },
  {
    id: "s4",
    situation: "A informação aparece normalmente no DataCG.",
    guidance:
      "Isso não significa, necessariamente, que o conteúdo está totalmente de acordo com o manual. O DataCG auxilia no monitoramento, mas não substitui a análise de conformidade do conteúdo.",
    takeaway: "Monitoramento não é análise de conformidade.",
  },
  {
    id: "s5",
    situation: "Uma informação foi disponibilizada no portal.",
    guidance:
      "A atividade não está necessariamente encerrada. Após a disponibilização, verifique o resultado no ambiente público e registre a evidência correspondente.",
    takeaway: "Disponibilizar não encerra: verificar e registrar fazem parte do processo.",
  },
  {
    id: "s6",
    situation:
      "Uma informação orçamentária relacionada ao SORS ainda não apareceu no Portal da Transparência, e o prazo se aproxima.",
    guidance:
      "Acompanhe o prazo, cobre a área responsável, verifique se a informação foi refletida no portal e registre a verificação. Quando a informação tem origem em outro sistema, a atuação do analista é de acompanhamento, cobrança, verificação e registro.",
    takeaway: "Informação de origem em outro sistema: acompanhar, cobrar, verificar e registrar.",
  },
];
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
