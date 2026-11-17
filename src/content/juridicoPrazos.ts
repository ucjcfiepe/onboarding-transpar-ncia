export const legalDeadlinesOpening = {
  eyebrow: "MÓDULO 04 · ROTINA JURÍDICA",
  title: "Gestão de Prazos e Acompanhamento das Pautas",
  subtitle: "Controle de prazos, acompanhamento do A.N.O. e preenchimento dos registros.",
  paragraphs: [
    "O acompanhamento das pautas jurídicas exige atenção aos prazos e à atualização das informações registradas.",
    "Além de consultar as demandas, é necessário compreender o significado dos campos de controle, conferir as datas e garantir que os registros correspondam aos acontecimentos efetivos.",
    "Neste módulo, você conhecerá os principais cuidados para acompanhar os prazos e preencher corretamente as informações utilizadas no controle das demandas jurídicas.",
  ],
  objective: "Ao concluir o módulo, você deverá compreender como acompanhar os prazos das demandas, verificar a situação do A.N.O. e registrar corretamente as datas e informações de controle nas pautas jurídicas.",
};

export const legalDeadlinesSections = [
  { id: "acompanhamento", title: "Acompanhamento dos prazos" },
  { id: "ano", title: "Acompanhamento do A.N.O." },
  { id: "datas", title: "Colunas de datas" },
  { id: "formulas", title: "Fórmulas e colunas ocultas" },
  { id: "conferencia", title: "Conferência dos registros" },
  { id: "exemplo", title: "Exemplo de preenchimento" },
  { id: "encerramento", title: "Encerramento" },
];

export const deadlineMonitoring = {
  title: "O prazo precisa ser acompanhado durante toda a demanda.",
  introduction: "O acompanhamento dos prazos não se limita à identificação da data de vencimento. Também envolve verificar a situação da atividade e reconhecer antecipadamente circunstâncias que possam interferir na conclusão do atendimento.",
  items: [
    { title: "Demanda dentro do prazo", text: "A atividade está dentro do período previsto para atendimento. O profissional deve acompanhar sua evolução e observar eventuais pendências que possam comprometer a conclusão." },
    { title: "Demanda próxima do vencimento", text: "A atividade exige atenção quanto às providências ainda necessárias e à possibilidade de conclusão dentro do prazo." },
    { title: "Demanda com risco de atraso", text: "Existem circunstâncias que podem comprometer o prazo previsto. É necessário identificar a situação e adotar os encaminhamentos institucionais aplicáveis." },
  ],
  note: "Os procedimentos de comunicação e replanejamento de demandas serão aprofundados no Módulo 07.",
};

export const anoMonitoring = {
  title: "A.N.O.: conferindo o prazo de atendimento",
  introduction: "O A.N.O. é acompanhado nas pautas consultivas por meio das informações e fórmulas utilizadas no controle. É importante verificar não apenas o resultado apresentado pela planilha, mas também se as datas e os registros correspondem à situação real da demanda.",
  items: [
    { title: "Dentro do A.N.O.", steps: ["Preencha corretamente as colunas pertinentes.", "Confira as datas registradas.", "Verifique se o resultado da fórmula corresponde à situação real.", "Mantenha as informações atualizadas conforme os acontecimentos."], row: { demand: "Demanda ilustrativa A", entry: "24/07/2025", conclusion: "29/07/2025", result: "Dentro do A.N.O." } },
    { title: "Fora do A.N.O.", steps: ["Confira as datas utilizadas no registro.", "Verifique se o resultado da fórmula corresponde à realidade.", "Confirme se houve efetivamente o estouro.", "Quando confirmado, registre a justificativa na coluna de observações."], row: { demand: "Demanda ilustrativa B", entry: "03/08/2026", conclusion: "12/08/2026", result: "Fora do A.N.O." } },
  ],
  alert: "A indicação de estouro deve ser conferida antes do registro da justificativa.",
  explanation: "Um preenchimento incorreto pode comprometer o resultado apresentado pela fórmula.",
  note: "Representações fictícias e didáticas. Os resultados são ilustrativos, não calculados a partir das datas exibidas; não representam fórmulas, critérios ou parâmetros temporais do A.N.O.",
};

export const agendaDateColumns = ["1ª saída para correção", "1º retorno", "2ª saída para correção", "2º retorno", "Saída definitiva"];

// Literal didactic records only: these dates never calculate A.N.O. or alter a real agenda.
export const agendaDateExamples = {
  withoutCorrection: { entry: "24/07/2025", dates: ["24/07/2025", "24/07/2025", "24/07/2025", "24/07/2025", "29/07/2025"] },
  withCorrection: { dates: ["03/08/2026", "05/08/2026", "07/08/2026", "10/08/2026", "12/08/2026"] },
};

export const agendaDates = {
  title: "As datas precisam contar a história da demanda.",
  introduction: "As colunas de datas permitem acompanhar os acontecimentos relacionados à tramitação da demanda, incluindo saídas para correção, retornos e conclusão definitiva. O preenchimento deve respeitar a sequência dos acontecimentos e representar as datas efetivas de cada movimentação.",
  withoutCorrection: { title: "Exemplo A — Demanda sem correção", text: "Quando a demanda não tiver passado por saída para correção, repita a data de entrada nas colunas de datas correspondentes ao histórico de correção e retorno. Registre na coluna “Saída Definitiva” a data real da conclusão." },
  withCorrection: { title: "Exemplo B — Demanda com correção", text: "Quando houver saídas para correção antes da conclusão, preencha as colunas conforme a ordem cronológica: primeira saída, primeiro retorno, segunda saída e segundo retorno, quando houver. Em “Saída Definitiva”, registre a data da conclusão efetiva." },
  note: "Exemplos exclusivamente didáticos. Os critérios para encaminhar uma demanda para correção serão abordados no Módulo 05 — Rotina Consultiva. Aqui, o foco é o registro cronológico das datas.",
};

export const agendaFormulas = {
  title: "Atenção ao preencher: nem todas as colunas estão visíveis.",
  introduction: "As pautas podem conter colunas ocultas com fórmulas utilizadas nos cálculos de acompanhamento. Por isso, determinados procedimentos de preenchimento podem alterar informações que não estão imediatamente visíveis.",
  avoid: "Evite arrastar datas com o mouse ou copiar e colar informações em bloco sobre várias colunas. Esse procedimento pode preencher indevidamente células ocultas e comprometer as fórmulas existentes.",
  prefer: "Preencha manualmente cada célula necessária, observando a coluna correspondente ao acontecimento registrado. Confira os campos após a atualização.",
  hidden: "Coluna oculta · fórmula",
  impact: "Fórmula pode ser sobrescrita",
  preserved: "Fórmula preservada",
  note: "Representação simplificada de planilha, sem edição de dados ou fórmulas reais.",
};

export const agendaReview = {
  title: "Antes de finalizar uma atualização, confira os dados.",
  introduction: "Após registrar as informações, é importante verificar se as datas e os campos preenchidos correspondem aos acontecimentos da demanda.",
  items: [
    { title: "Datas", text: "As datas registradas correspondem aos acontecimentos efetivos?" },
    { title: "Sequência cronológica", text: "As saídas e os retornos foram registrados na ordem correta?" },
    { title: "Saída definitiva", text: "A data de conclusão corresponde à efetiva finalização da demanda?" },
    { title: "A.N.O.", text: "O resultado apresentado pelo controle está coerente com as informações registradas?" },
    { title: "Observações", text: "Quando houve estouro confirmado do A.N.O., a justificativa foi registrada?" },
    { title: "Integridade da pauta", text: "O preenchimento preservou as fórmulas e os campos que não deveriam ser alterados?" },
  ],
};

export const agendaWalkthrough = {
  title: "Uma demanda com duas saídas para correção.",
  introduction: "Uma demanda consultiva foi recebida e, durante seu atendimento, precisou ser encaminhada duas vezes para correção antes de sua conclusão definitiva.",
  explanation: "Cada data deve ser registrada na coluna correspondente ao acontecimento. A sequência cronológica permite acompanhar o histórico das correções e identificar a data efetiva de conclusão da demanda.",
};

export const legalDeadlinesConclusion = {
  title: "Prazos acompanhados, informações confiáveis.",
  paragraphs: [
    "O acompanhamento dos prazos e o preenchimento correto das pautas contribuem para a organização do trabalho jurídico e a confiabilidade das informações registradas.",
    "A conferência do A.N.O., o respeito à sequência cronológica e os cuidados com as fórmulas são fundamentais para preservar a consistência dos controles.",
    "No próximo módulo, você conhecerá os procedimentos específicos da rotina consultiva, incluindo as diferentes situações de atendimento das demandas.",
  ],
};