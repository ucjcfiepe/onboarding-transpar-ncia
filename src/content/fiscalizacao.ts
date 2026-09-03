/**
 * Conteúdo do Módulo 02 — Fiscalização Contínua do TCU.
 * Baseado nos procedimentos "Recebimento e Divulgação do Ofício de Requisição"
 * e "Atendimento à Fiscalização Contínua do TCU".
 * Terminologia obrigatória: "Especialista em Fiscalização Contínua" (nunca
 * "Jurídico", "advogado" ou "equipe jurídica" para as atividades operacionais).
 */

export type Actor = "tcu" | "especialista" | "areas";

export const actorMeta: Record<
  Actor,
  { label: string; short: string; role: string; dot: string; chip: string; bar: string }
> = {
  tcu: {
    label: "TCU",
    short: "TCU",
    role: "Agente externo que requisita e valida",
    dot: "bg-primary",
    chip: "border-primary/25 bg-primary/6 text-primary",
    bar: "bg-primary",
  },
  especialista: {
    label: "Especialista em Fiscalização Contínua",
    short: "Especialista",
    role: "Coordena e intermedia o fluxo",
    dot: "bg-sky",
    chip: "border-sky/30 bg-sky/8 text-sky",
    bar: "bg-sky",
  },
  areas: {
    label: "Áreas responsáveis pelas informações",
    short: "Áreas responsáveis",
    role: "Preparam, disponibilizam e ajustam",
    dot: "bg-senai",
    chip: "border-senai/30 bg-senai/8 text-senai",
    bar: "bg-senai",
  },
};

export const abertura = {
  title: "Fiscalização Contínua do TCU",
  lead:
    "A Fiscalização Contínua acompanha periodicamente informações do SESI e do SENAI e exige organização, cumprimento de prazos e participação de diferentes áreas.",
  call:
    "Neste módulo, você vai entender como funciona essa jornada — do recebimento do ofício à validação dos arquivos pelo TCU.",
};

export interface FlowStep {
  id: string;
  title: string;
  actor: Actor;
  detail: string;
}

export const flowSteps: FlowStep[] = [
  {
    id: "oficio",
    title: "TCU envia o ofício",
    actor: "tcu",
    detail:
      "O Ofício de Requisição comunica a instauração da Fiscalização Contínua do exercício e apresenta o cronograma de entrega dos arquivos.",
  },
  {
    id: "organiza",
    title: "Especialista recebe e organiza a fiscalização",
    actor: "especialista",
    detail:
      "Análise do que foi solicitado, criação do controle de acompanhamento e organização do ambiente de armazenamento dos arquivos.",
  },
  {
    id: "comunica",
    title: "Áreas responsáveis são comunicadas",
    actor: "especialista",
    detail:
      "O ofício, os documentos orientativos e as demais orientações são encaminhados aos responsáveis envolvidos.",
  },
  {
    id: "prepara",
    title: "As entregas são preparadas",
    actor: "areas",
    detail:
      "As áreas preparam os arquivos no formato definido pelo TCU e os disponibilizam no ambiente utilizado pelo SESI e SENAI.",
  },
  {
    id: "confere",
    title: "Especialista verifica os arquivos",
    actor: "especialista",
    detail:
      "Análise quanto ao aspecto formal: estrutura, credibilidade dos dados e layout, conforme os documentos orientativos do TCU.",
  },
  {
    id: "envia",
    title: "Arquivos são enviados ao TCU",
    actor: "especialista",
    detail:
      "Com os arquivos formalmente adequados, o Especialista alimenta o sistema utilizado pelo TCU.",
  },
  {
    id: "valida",
    title: "TCU valida ou solicita ajustes",
    actor: "tcu",
    detail:
      "O sistema do TCU verifica os documentos e pode gerar validação ou comunicação de não conformidade, com as alterações e o prazo de atendimento.",
  },
  {
    id: "conclui",
    title: "Conformidade e encerramento",
    actor: "tcu",
    detail:
      "Com a comunicação de conformidade, o controle é atualizado e a conclusão é comunicada às partes envolvidas.",
  },
];

export const organizacaoChecklist = [
  { question: "O que o TCU pediu?", detail: "Quais informações foram solicitadas e a forma de apresentação." },
  { question: "Quem será responsável?", detail: "Entidades fiscalizadas e responsáveis por cada informação." },
  { question: "Quando precisa ser entregue?", detail: "Cronograma e datas de apresentação de cada arquivo." },
  { question: "Onde o arquivo será armazenado?", detail: "Organização do ambiente utilizado para armazenamento." },
  { question: "Qual é o status da entrega?", detail: "Fase de cada entrega e status do acompanhamento." },
];

export const destinatarios = [
  { title: "Superintendência do SESI", note: "Entidade fiscalizada" },
  { title: "Diretoria Regional do SENAI", note: "Entidade fiscalizada" },
  { title: "Gestor da unidade responsável pela área jurídica", note: "Gestão da unidade" },
  { title: "Gestor da unidade responsável pela gestão estratégica", note: "Gestão da unidade" },
  { title: "Unidades responsáveis pelas informações", note: "Preparação dos arquivos" },
];

export const prazos = [
  {
    value: "5",
    unit: "dias úteis",
    title: "Comunicação inicial",
    text:
      "Prazo para o Especialista em Fiscalização Contínua divulgar o ofício e as orientações aos responsáveis após recebê-lo e analisá-lo.",
  },
  {
    value: "30",
    unit: "dias",
    title: "Alerta antes da entrega",
    text:
      "O Especialista envia um aviso aos responsáveis pelas informações com 30 dias de antecedência do prazo de envio ao TCU.",
  },
  {
    value: "7",
    unit: "dias úteis",
    title: "Prazo interno de segurança",
    text:
      "O Especialista estipula que os arquivos sejam disponibilizados pelas áreas com pelo menos 7 dias úteis de antecedência do vencimento.",
  },
];

export const preparoFluxo = [
  {
    title: "Preparar",
    text: "Produzir os arquivos solicitados seguindo o formato definido nos documentos orientativos do TCU.",
  },
  {
    title: "Carregar",
    text: "Disponibilizar os documentos no ambiente utilizado pelo SESI e SENAI, respeitando o prazo informado.",
  },
  {
    title: "Avisar",
    text: "Informar ao Especialista em Fiscalização Contínua, por e-mail, que os arquivos foram disponibilizados.",
  },
];

export const conferenciaCriterios = ["Estrutura", "Formato", "Credibilidade dos dados", "Layout"];

export const responsabilidades: {
  actor: Actor;
  note?: string;
  items: string[];
}[] = [
  {
    actor: "tcu",
    items: [
      "Envia o Ofício de Requisição",
      "Disponibiliza orientações",
      "Recebe os arquivos",
      "Realiza a verificação dos documentos",
      "Informa conformidades e não conformidades",
    ],
  },
  {
    actor: "especialista",
    note:
      "Profissional lotado na área jurídica responsável pela coordenação operacional da Fiscalização Contínua.",
    items: [
      "Recebe e analisa o ofício",
      "Estrutura o acompanhamento",
      "Organiza o ambiente de armazenamento",
      "Comunica as áreas",
      "Controla os prazos",
      "Alerta os responsáveis",
      "Verifica os arquivos",
      "Solicita ajustes",
      "Realiza o envio ao TCU",
      "Acompanha as validações",
      "Atualiza o controle",
      "Comunica a conclusão",
    ],
  },
  {
    actor: "areas",
    items: [
      "Recebem as orientações",
      "Preparam as informações",
      "Observam os padrões definidos pelo TCU",
      "Disponibilizam os arquivos no prazo",
      "Informam a disponibilização",
      "Realizam eventuais ajustes",
    ],
  },
];

export const conclusaoResumo = [
  "Receber",
  "Organizar",
  "Comunicar",
  "Preparar",
  "Conferir",
  "Enviar",
  "Validar",
];

export const validacaoFinal = [
  "Arquivos enviados",
  "TCU validou",
  "Controle atualizado",
  "Áreas comunicadas",
  "Entrega concluída",
];
