export const reportsOpening = {
  eyebrow: "MÓDULO 07 · ROTINA JURÍDICA",
  title: "Registros, Movimentações e Reportes",
  subtitle: "Comunicação, atualização de controles e modelos de reporte e replanejamento.",
  paragraphs: ["O registro adequado das informações e a comunicação tempestiva dos encaminhamentos são essenciais para o acompanhamento das demandas jurídicas.", "Além de executar as atividades técnicas, os advogados e especialistas jurídicos devem manter as informações pertinentes atualizadas e realizar os reportes necessários, permitindo que a gestão acompanhe as atividades, os prazos e as situações que exigem atenção."],
};
export const reportsSections = [
  { id: "comunicar", title: "O que reportar" }, { id: "modelos", title: "Modelos de reporte" },
  { id: "judicial", title: "Replanejamento judicial" }, { id: "email", title: "Comunicação por e-mail" },
  { id: "retorno", title: "Retorno e replanejamento" }, { id: "guia", title: "Guia de consulta" },
  { id: "encerramento", title: "Encerramento" },
];
export const reportSituations = [
  { title: "Retorno de demanda", text: "Quando uma demanda retorna para continuidade do atendimento, exigindo acompanhamento ou atualização de prazo." },
  { title: "Reunião", text: "Quando uma reunião relacionada às atividades jurídicas precisa ser incluída ou registrada nos controles pertinentes." },
  { title: "Necessidade de replanejamento", text: "Quando houver necessidade de revisão do prazo previsto para atendimento, observados os procedimentos institucionais aplicáveis." },
  { title: "Acontecimentos relevantes", text: "Quando forem identificadas informações que possam impactar o andamento da demanda, seu prazo ou os encaminhamentos necessários." },
];
export interface ReportModel { id: string; title: string; fields: { label: string; example: string }[] }
export const reportActions = ["Inserir e planejar", "Replanejar", "Inserir e dar baixa"];
export const reportModels: ReportModel[] = [
  { id: "modelo-retorno", title: "Modelo A — Retorno de demanda", fields: [
    { label: "Número da demanda ou Zeev", example: "DEMO-2026-071" },
    { label: "Matéria", example: "Contratos" },
    { label: "Descrição da demanda", example: "Análise de minuta de prestação de serviços com ajustes recebidos." },
    { label: "Data de retorno", example: "19/11/2026" },
    { label: "Sugestão de prazo para atendimento", example: "23/11/2026" },
    { label: "Ação", example: "Replanejar" },
    { label: "Área solicitante", example: "Área de Compras — exemplo fictício" },
  ] },
  { id: "modelo-reuniao", title: "Modelo B — Reporte de reunião", fields: [
    { label: "Número da demanda", example: "DEMO-2026-072" },
    { label: "Matéria", example: "Contratos" },
    { label: "Descrição da reunião", example: "Responsável: Ana Lima. Participantes: Bruno Costa e Carla Alves. Área envolvida: Compras. Tema: alinhamento da minuta de prestação de serviços. Horário: 10h. Nomes e contexto fictícios." },
    { label: "Data de entrada", example: "19/11/2026" },
    { label: "Prazo previsto", example: "20/11/2026" },
    { label: "Instituição", example: "SESI — contexto ilustrativo" },
    { label: "Área solicitante", example: "Área de Compras — exemplo fictício" },
    { label: "Providência", example: "Incluir a reunião no controle pertinente." },
  ] },
  { id: "modelo-consultivo", title: "Modelo C — Replanejamento consultivo", fields: [
    { label: "Número da demanda (Zeev)", example: "DEMO-2026-073" },
    { label: "Descrição da demanda", example: "Análise jurídica de minuta contratual." },
    { label: "Sugestão de prazo para atendimento", example: "24/11/2026" },
    { label: "Área solicitante", example: "Área de Compras — exemplo fictício" },
    { label: "Motivo do replanejamento", example: "Necessidade de examinar informações complementares recebidas." },
  ] },
];
export const judicialReport: ReportModel = {
  id: "modelo-judicial", title: "Replanejamento judicial", fields: [
    { label: "Número do processo", example: "PROCESSO-DEMO-2026-074 (identificador fictício)" },
    { label: "Parte contrária", example: "Empresa Exemplo — nome fictício" },
    { label: "Descrição da demanda", example: "Preparação de manifestação nos autos." },
    { label: "Prazo fatal", example: "27/11/2026" },
    { label: "Sugestão de prazo para atendimento", example: "25/11/2026" },
    { label: "Motivo do replanejamento", example: "Necessidade de revisão de informações complementares para a manifestação." },
  ],
};
export const judicialGuidance = {
  introduction: "O pedido de replanejamento judicial deve identificar a atividade, o prazo fatal e a necessidade de alteração do prazo de atendimento.",
  alert: "Caso seja necessária a alteração do prazo fatal registrado, essa situação deverá ser expressamente sinalizada, com a indicação do novo prazo fatal.",
  distinction: "Não confundir a sugestão de prazo para atendimento com a alteração de um prazo processual legal.",
  note: "O replanejamento interno não altera automaticamente prazos judiciais.",
};
export const reportCommunication = {
  subjectPattern: "REPORTE - DD/MM/AAAA", subjectExample: "REPORTE - 19/11/2026",
  introduction: "Ao reportar demandas consultivas ou contenciosas, utilize o padrão de assunto abaixo. O assunto deve permitir identificar a natureza da comunicação e sua data.",
  formalization: "Os pedidos de replanejamento devem ser formalizados por e-mail, utilizando o modelo correspondente.",
  alert: "A comunicação verbal não substitui o registro formal quando o procedimento exige reporte por e-mail.",
};
// Pending institutional validation; do not expose these potential rules as obligations.
export const reportPendingRules = { cutoffHour: null, sameDayReturnRequired: false, mandatoryAnoTeamsAlert: false };
export const reportReturnSteps = ["Identificar o retorno da demanda.", "Verificar as providências necessárias.", "Avaliar a possibilidade de atendimento no prazo.", "Quando necessário, formalizar o pedido de replanejamento.", "Manter os registros pertinentes atualizados."];
export const reportQuickGuide = [
  { situation: "Retorno de demanda", model: "Reporte de retorno", target: "modelo-retorno" },
  { situation: "Registro de reunião", model: "Reporte de reunião", target: "modelo-reuniao" },
  { situation: "Revisão de prazo consultivo", model: "Replanejamento consultivo", target: "modelo-consultivo" },
  { situation: "Revisão de prazo de atividade judicial", model: "Replanejamento judicial", target: "modelo-judicial" },
];
export const reportsConclusion = {
  title: "Um reporte bem estruturado facilita o acompanhamento das demandas.",
  paragraphs: ["Os reportes permitem comunicar situações relevantes, registrar necessidades de replanejamento e manter as informações necessárias à gestão jurídica organizadas.", "A clareza dos dados, a indicação dos prazos e a formalização dos encaminhamentos contribuem para a continuidade das atividades."],
};