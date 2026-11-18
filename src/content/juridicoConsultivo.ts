export const consultiveOpening = {
  eyebrow: "MÓDULO 05 · ROTINA JURÍDICA",
  title: "Rotina Consultiva",
  subtitle: "Procedimentos e encaminhamentos nas diferentes situações de atendimento.",
  paragraphs: ["Durante a condução de uma demanda consultiva, podem surgir diferentes situações que exigem encaminhamentos específicos, como a necessidade de correção, validação pela gestão, rejeição, cancelamento ou conclusão definitiva.", "Compreender essas situações permite registrar adequadamente o andamento das atividades e adotar as providências pertinentes a cada caso."],
  objective: "Identificar as principais situações das demandas consultivas, compreender seus critérios de utilização e reconhecer os cuidados necessários para sua condução.",
};

export const consultiveSections = [
  { id: "situacoes", title: "Situações da demanda" },
  { id: "correcao", title: "Correção e retorno" },
  { id: "validacao", title: "Validação pela gestão" },
  { id: "comparacao", title: "Rejeição ou cancelamento?" },
  { id: "conclusao-definitiva", title: "Conclusão definitiva" },
  { id: "exemplo", title: "Situação prática" },
  { id: "guia", title: "Guia rápido dos status" },
  { id: "encerramento", title: "Encerramento" },
];

export const consultiveStatuses = [
  { id: "correcao", title: "Saída para Correção", purpose: "Ajuste ou alinhamento necessário à continuidade", description: "Utilizada quando é identificada a necessidade de ajuste do documento analisado ou de alinhamento com o solicitante.", instructions: ["Antes de realizar a saída para correção, busque contato com o solicitante para o alinhamento ou solicitação dos documentos necessários.", "Caso não haja êxito, proceda com a saída para correção, registre o motivo na observação e informe a complexidade da demanda."] },
  { id: "validacao", title: "Validação", purpose: "Demanda submetida à aprovação da gestão", description: "Utilizada quando a demanda necessita de aprovação pela gestão.", instructions: ["Na observação, registre a data de envio, o meio utilizado para encaminhamento e o caminho da pasta correspondente.", "Acompanhe o prazo, sinalize à gestão quando necessário e registre a complexidade da demanda."] },
  { id: "rejeitado", title: "Rejeitado", purpose: "Inviabilidade de prosseguimento identificada após análise", description: "Utilizada quando a demanda foi analisada, mas foi identificada a inviabilidade de prosseguir com a solicitação.", instructions: ["Registre o motivo da rejeição na observação e a complexidade da demanda."] },
  { id: "cancelado", title: "Cancelado", purpose: "Demanda identificada como inviável para atendimento", description: "Utilizada quando é identificado que a demanda não é viável para atendimento.", instructions: ["Registre o motivo do cancelamento na observação e a complexidade da demanda."] },
  { id: "definitiva", title: "Saída Definitiva", purpose: "Atendimento efetivamente concluído", description: "Utilizada quando o atendimento consultivo é efetivamente concluído.", instructions: ["Realize os registros correspondentes à conclusão e confira as informações pertinentes da pauta."] },
];

// No current institutional confirmation exists for same-day return, email or Teams rules.
export const consultiveReturnRules = {
  confirmed: false,
  sameDayRequired: false,
  mandatoryReplanningChannel: null,
  mandatoryAnoAlertChannel: null,
  guidance: "Acompanhe o retorno e comunique tempestivamente situações que possam afetar a continuidade do atendimento ou o prazo da demanda, observando os encaminhamentos institucionais aplicáveis.",
};

export const consultiveCorrection = {
  title: "Quando a demanda precisa de ajustes.",
  introduction: "A saída para correção representa uma etapa de ajuste ou alinhamento necessário à continuidade da demanda. Após o retorno, o atendimento deve ser retomado, observando os prazos e os encaminhamentos aplicáveis.",
  steps: [
    { title: "Identificação da necessidade", text: "Verificar os ajustes, esclarecimentos ou documentos necessários." },
    { title: "Contato com o solicitante", text: "Buscar o alinhamento ou solicitar a documentação pertinente antes de efetivar a saída para correção." },
    { title: "Registro do encaminhamento", text: "Quando aplicável, registrar a saída para correção, seu motivo e a complexidade da demanda." },
    { title: "Acompanhamento do retorno", text: "Monitorar o retorno da demanda e verificar os elementos disponibilizados." },
    { title: "Continuidade do atendimento", text: "Retomar a análise e adotar os encaminhamentos necessários." },
  ],
};

export const consultiveValidation = {
  title: "Quando a demanda depende de aprovação.",
  introduction: "Algumas demandas necessitam de validação da gestão antes de seu encaminhamento definitivo. Nessas situações, além do envio para aprovação, é importante acompanhar a pendência e manter as informações necessárias ao controle atualizadas.",
  items: ["Registrar a data de envio para validação.", "Identificar o meio utilizado.", "Informar o caminho da pasta correspondente.", "Acompanhar o prazo da demanda.", "Sinalizar à gestão situações que exijam atenção.", "Registrar a complexidade."],
  moments: ["Encaminhar", "Acompanhar", "Concluir após a validação aplicável"],
  highlight: "Validação não significa conclusão definitiva.",
  note: "A demanda permanece dependente do encaminhamento correspondente até que a validação seja concluída.",
};

export const consultiveComparison = {
  title: "Situações semelhantes, contextos diferentes.",
  introduction: "Embora ambas representem situações em que a solicitação não prossegue para atendimento, rejeição e cancelamento possuem contextos distintos.",
  items: [
    { title: "Rejeitado", emphasis: "Após a análise", text: "A demanda foi analisada e, após a avaliação, identificou-se que não há viabilidade de prosseguir com a solicitação.", records: ["Motivo da rejeição.", "Complexidade da demanda."] },
    { title: "Cancelado", emphasis: "Inviável para atendimento", text: "Foi identificado que a demanda não é viável para atendimento.", records: ["Motivo do cancelamento.", "Complexidade da demanda."] },
  ],
};

export const consultiveCompletion = {
  title: "Quando a demanda está concluída.",
  introduction: "A saída definitiva representa a conclusão do atendimento consultivo. Antes de finalizar os registros, é importante verificar se as informações correspondem à efetiva conclusão da atividade.",
  items: ["Confirmar a conclusão do atendimento.", "Registrar a saída definitiva.", "Verificar as informações correspondentes na pauta.", "Conferir se os registros estão coerentes com o histórico.", "Observar os encaminhamentos institucionais aplicáveis."],
  highlight: "A saída definitiva deve refletir a conclusão real da demanda.",
};

export const consultiveExample = {
  title: "Uma demanda que precisou de correção e validação.",
  paragraphs: ["Uma área do Sistema FIEPE encaminhou uma demanda consultiva para análise.", "Durante o atendimento, foi identificada a necessidade de ajuste em um documento. Após o retorno da correção e a continuidade da análise, a demanda precisou ser submetida à validação da gestão."],
  steps: [
    { title: "Necessidade de correção", text: "O profissional identifica o ajuste necessário e busca alinhamento com o solicitante." },
    { title: "Encaminhamento para correção", text: "Quando aplicável, realiza o registro correspondente e informa o motivo e a complexidade da demanda." },
    { title: "Retorno", text: "Acompanha o retorno e verifica os documentos ajustados." },
    { title: "Validação", text: "Encaminha a demanda à gestão, registrando as informações pertinentes ao envio." },
    { title: "Conclusão", text: "Após a validação aplicável, realiza os encaminhamentos necessários e registra a saída definitiva." },
  ],
  note: "Exemplo fictício e didático. Nem todas as demandas seguem esse percurso.",
};

export const consultiveConclusion = {
  title: "Cada encaminhamento precisa refletir a situação real da demanda.",
  paragraphs: ["A utilização adequada dos status consultivos contribui para representar corretamente o andamento das atividades e assegurar a continuidade do atendimento.", "No próximo módulo, serão apresentados os procedimentos específicos da rotina contenciosa."],
};