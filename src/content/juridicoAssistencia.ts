export const atribuicoesAssistencia = [
  "Triagem e admissibilidade das demandas",
  "Organização e atualização da pauta",
  "Tratamento dos reportes recebidos",
  "Apoio aos advogados",
  "Orientação aos clientes internos",
  "Suporte à gestão",
  "Emissão de procurações",
  "Atualização dos processos judiciais e administrativos",
  "Apoio à elaboração de relatórios",
  "Tratamento de informações relacionadas ao A.N.O. e à volumetria",
];

export const efeitosReporte = [
  "Inclusão de nova demanda",
  "Replanejamento",
  "Inclusão de reunião",
  "Atualização de demanda consultiva",
  "Atualização de demanda contenciosa",
  "Ajuste de prazo informado pelo advogado",
];

export const passosReporte = [
  "Identificar o que o advogado está solicitando",
  "Localizar a demanda correspondente",
  "Inserir ou atualizar a pauta",
  "Utilizar as informações fornecidas pelo responsável",
  "Conferir se os campos necessários ficaram preenchidos",
  "Confirmar com o responsável qualquer informação ausente ou pouco clara",
];

export const camposPauta = [
  "Advogado responsável",
  "Matéria",
  "Instituição",
  "Área solicitante",
  "Descrição da demanda",
  "Data de entrada",
  "Prazo previsto",
  "Prazo fatal",
  "Status",
  "Demais campos aplicáveis",
];

export const fluxoTriagem = [
  "Chamado recebido",
  "Conferir o serviço selecionado",
  "Entender o objeto da solicitação",
  "Conferir informações obrigatórias",
  "Conferir documentos",
  "A demanda está apta para análise?",
];

export const movimentacoes = [
  { title: "Nova demanda", text: "Inserir na pauta." },
  { title: "Replanejamento", text: "Atualizar conforme o prazo informado." },
  { title: "Retorno", text: "Registrar a movimentação." },
  { title: "Conclusão ou baixa", text: "Efetuar os registros operacionais aplicáveis." },
  { title: "Informação divergente", text: "Consultar o responsável." },
];

export const contenciosoChecklist = [
  "Identificar o processo",
  "Identificar a instituição",
  "Verificar a providência indicada",
  "Inserir a demanda na pauta contenciosa",
  "Registrar as informações necessárias",
  "Seguir o fluxo de conferência previsto pela Unidade",
];

export const apoios = [
  { title: "Suporte aos advogados", text: "Apoio operacional na organização e acompanhamento das demandas." },
  { title: "Suporte ao cliente interno", text: "Orientação sobre abertura de chamados, serviços e documentação necessária." },
  { title: "Suporte à gestão", text: "Apoio na produção de informações, controles e atividades operacionais ou estratégicas." },
  { title: "Procurações", text: "Emissão conforme os procedimentos aplicáveis." },
];

export const checklistControles = [
  "Estou na demanda correta?",
  "O responsável está correto?",
  "A instituição está correta?",
  "A área solicitante está correta?",
  "A descrição permite entender a demanda?",
  "As datas correspondem às informações recebidas?",
  "O status representa a situação atual?",
  "Existe algum campo obrigatório vazio?",
  "Estou presumindo alguma informação que deveria confirmar?",
];

export const prognosticoMarcos = [
  { title: "Distribuição", assessment: "Prognóstico inicial, considerando causa de pedir e perfil do autor ou matéria.", owner: "Assistente, ao inserir o processo no repositório.", role: "Registrar inicialmente como “Possível”." },
  { title: "Defesa / Contestação", assessment: "Revisão com base nas teses de defesa, provas disponíveis e pontos frágeis identificados.", owner: "Advogado responsável pela elaboração da defesa.", role: "Identificar o marco e garantir que a análise seja pautada para o responsável, quando necessário." },
  { title: "Sentença ou Acórdão", assessment: "Reclassificação após decisão de 1º ou 2º grau, considerando a existência ou não de recurso.", owner: "Advogado responsável pelo prazo e pela análise do cabimento de recurso.", role: "Identificar o marco e pautar a análise." },
  { title: "Homologação dos cálculos", assessment: "Após manifestação do advogado sobre os cálculos, verificar necessidade de alteração de prognóstico e provisão.", owner: "Advogado responsável pelo prazo.", role: "Pautar a análise do responsável." },
  { title: "Arquivamento", assessment: "Reclassificação final para baixa ou manutenção da provisão.", owner: "Assistente.", role: "Atualizar o repositório conforme a análise aplicável." },
];

export const atualizacaoMensal = [
  { title: "Novos processos", text: "Identificar processos novos que precisam ser registrados." },
  { title: "Pagamentos", text: "Atualizar pagamentos realizados no período." },
  { title: "Alvarás", text: "Registrar liberações e valores." },
  { title: "Arquivamentos", text: "Identificar processos finalizados e conferir o preenchimento dos registros." },
  { title: "Prognóstico", text: "Verificar se o processo atingiu algum marco que exija análise ou atualização." },
  { title: "Última movimentação", text: "Manter o histórico recente claro e compreensível." },
];

export const passosRelatorio = [
  "Utilizar o modelo padronizado",
  "Trabalhar a partir do repositório atualizado",
  "Selecionar as movimentações pertinentes ao período",
  "Redigir de forma clara, objetiva e resumida",
  "Conferir processo, partes, valores e demais dados",
  "Comparar relatório e repositório antes do envio para validação",
];

export const fluxoValidacao = [
  "Assistência Jurídica — atualiza o repositório e elabora o relatório",
  "Gestão Jurídica — realiza a validação do relatório e repositório",
  "Após a validação — providenciar assinatura do relatório",
  "Envio oficial — até o 2º dia útil do mês",
];

export const rotinaResumo = [
  { title: "Início do dia", text: "Verificar reportes e atualizar a pauta." },
  { title: "Durante o dia", text: "Realizar triagem, tratar movimentações, apoiar advogados e clientes internos e manter controles atualizados." },
  { title: "Contencioso", text: "Atenção especial às publicações e prazos judiciais." },
  { title: "A partir do dia 20", text: "Atualizar o repositório de processos." },
  { title: "Final do mês / início do mês seguinte", text: "Elaborar, validar, assinar e enviar o relatório." },
];
