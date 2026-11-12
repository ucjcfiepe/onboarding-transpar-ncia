export const legalToolsOpening = {
  eyebrow: "Módulo 02 · Rotina Jurídica",
  title: "Ferramentas e sistemas de trabalho",
  subtitle: "Os ambientes digitais que apoiam a organização, o acompanhamento e a execução das atividades jurídicas.",
  paragraphs: [
    "A rotina dos advogados e especialistas jurídicos envolve diferentes ferramentas institucionais, utilizadas para receber demandas, acompanhar atividades, consultar informações e organizar documentos.",
    "Conhecer a finalidade de cada ambiente facilita a execução das atividades, contribui para a atualização dos controles e permite maior rastreabilidade das informações.",
  ],
  objective: "Ao concluir este módulo, você conhecerá as principais ferramentas utilizadas na rotina jurídica da UCJC, compreenderá suas finalidades e identificará como elas se relacionam com as atividades desenvolvidas pela equipe.",
};

export const legalToolsSections = [
  { id: "ambiente", title: "Seu ambiente de trabalho" },
  { id: "zeev", title: "Zeev" },
  { id: "pautas", title: "Pautas e controles" },
  { id: "sharepoint", title: "SharePoint Jurídico" },
  { id: "processuais", title: "Sistemas processuais" },
  { id: "complementaridade", title: "Como se complementam" },
  { id: "cuidados", title: "Boas práticas" },
  { id: "encerramento", title: "Encerramento" },
];

export const legalToolGroups = {
  title: "Cada ferramenta tem uma finalidade",
  introduction: "As atividades jurídicas são apoiadas por diferentes ambientes digitais. Enquanto alguns permitem receber e acompanhar solicitações, outros são utilizados para consultar informações, organizar documentos ou manter controles atualizados.",
  items: [
    { title: "Recepção de demandas", text: "Ambientes utilizados para receber solicitações e acompanhar os encaminhamentos associados aos fluxos institucionais.", reference: "Zeev (Orquestra — BPMS)" },
    { title: "Acompanhamento das atividades", text: "Pautas e controles utilizados para acompanhar demandas consultivas e contenciosas, prazos, situações e encaminhamentos.", reference: "Pautas e controles internos da UCJC" },
    { title: "Consulta e organização documental", text: "Ambientes destinados ao acesso, à organização e ao armazenamento de documentos e materiais relacionados às atividades jurídicas.", reference: "SharePoint Jurídico" },
    { title: "Acompanhamento processual", text: "Sistemas utilizados para consultas e atividades relacionadas a processos judiciais, de acordo com a atuação e as atribuições do profissional.", reference: "Sistemas processuais utilizados pela UCJC" },
  ],
};

// The source document is a reference, not confirmation of current operational rules.
export const legalZeevMonitoring: { confirmed: boolean; mandatoryHours: number[]; guidance: string } = {
  confirmed: false,
  mandatoryHours: [],
  guidance: "Consulte regularmente seu painel do Zeev e acompanhe os retornos e encaminhamentos das demandas sob sua responsabilidade.",
};

export const legalZeev = {
  title: "Zeev: onde as demandas chegam",
  introduction: [
    "O Zeev (Orquestra — BPMS) é utilizado na recepção de demandas encaminhadas às áreas jurídicas, conforme os fluxos institucionais.",
    "Por meio da plataforma, é possível consultar solicitações e acompanhar informações relacionadas aos encaminhamentos disponíveis no fluxo.",
  ],
  steps: [
    { title: "Receber", label: "Recebimento", text: "As solicitações jurídicas encaminhadas pelos fluxos institucionais são recepcionadas no ambiente." },
    { title: "Consultar", label: "Consulta", text: "O profissional pode consultar informações e documentos relacionados às demandas às quais possui acesso." },
    { title: "Acompanhar", label: "Acompanhamento", text: "O ambiente permite acompanhar as atividades e os encaminhamentos previstos nos respectivos fluxos." },
    { title: "Identificar retornos", label: "Atenção aos retornos", text: "Demandas que retornam para análise ou continuidade do atendimento precisam ser identificadas e acompanhadas conforme os procedimentos internos." },
  ],
  note: "Sequência conceitual de uso, não um fluxo formal obrigatório do sistema.",
};

export const legalAgendas = {
  title: "Pautas: organização e acompanhamento do trabalho",
  introduction: "As pautas e os controles internos apoiam o acompanhamento das demandas jurídicas, permitindo visualizar informações relevantes sobre atividades, prazos, situações e encaminhamentos.",
  items: [
    { title: "Acompanhamento das demandas", text: "Consulta às atividades registradas e à sua situação." },
    { title: "Controle de prazos", text: "Identificação dos prazos pertinentes às demandas acompanhadas." },
    { title: "Atualização das informações", text: "Registro das movimentações, situações e demais informações necessárias à continuidade do acompanhamento." },
    { title: "Rastreabilidade", text: "Manutenção de informações que permitam compreender o histórico e a situação das demandas." },
  ],
  comparison: [
    { title: "Zeev", text: "Ambiente de recepção das demandas e acompanhamento das etapas previstas nos fluxos institucionais.", example: "Consultar uma solicitação recebida e os encaminhamentos disponíveis no fluxo." },
    { title: "Pautas e controles", text: "Instrumentos de acompanhamento e organização das atividades jurídicas.", example: "Acompanhar a situação de uma demanda e os prazos pertinentes à atividade." },
  ],
  note: "Esses ambientes possuem finalidades distintas e complementares. O Zeev não substitui a pauta, e a pauta não substitui o Zeev.",
  next: "O preenchimento das pautas, a atualização de status, o controle do A.N.O. e o registro das datas serão aprofundados no Módulo 04 — Gestão de Prazos e Acompanhamento das Pautas.",
};

export const legalSharePoint = {
  title: "SharePoint: organização e consulta documental",
  introduction: "O SharePoint Jurídico é um ambiente institucional utilizado para organizar e consultar documentos e materiais relacionados às atividades da unidade.",
  items: [
    { title: "Consulta", text: "Localização de documentos e materiais disponibilizados para apoiar as atividades jurídicas." },
    { title: "Organização", text: "Estruturação dos arquivos conforme os padrões institucionais de armazenamento e identificação." },
    { title: "Compartilhamento", text: "Acesso a materiais e documentos pelas equipes autorizadas, observadas as permissões aplicáveis." },
  ],
  practices: [
    "Utilize os locais institucionais indicados para armazenamento.",
    "Observe os padrões de nomenclatura de arquivos.",
    "Evite a criação de versões desnecessárias.",
    "Preserve a organização das pastas.",
    "Respeite as permissões de acesso.",
    "Não compartilhe informações sigilosas fora dos ambientes autorizados.",
  ],
};

export const legalProceduralSystems = {
  title: "Sistemas processuais: consulta e acompanhamento",
  introduction: "As atividades contenciosas envolvem a utilização de sistemas processuais eletrônicos para consultar processos, acompanhar movimentações e realizar providências relacionadas à atuação jurídica.",
  items: [
    { title: "Consulta processual", text: "Acesso às informações dos processos sob acompanhamento." },
    { title: "Movimentações", text: "Verificação de decisões, despachos, intimações e demais acontecimentos processuais pertinentes." },
    { title: "Prazos processuais", text: "Identificação das providências e dos prazos relacionados às atividades processuais." },
    { title: "Atos processuais", text: "Utilização dos ambientes próprios para a realização de atos processuais, conforme as atribuições e permissões do profissional." },
  ],
  note: "Os sistemas utilizados dependem da área, da atividade e das atribuições e permissões do profissional. Não são necessariamente os mesmos para toda a equipe. O aprofundamento das rotinas contenciosas ocorrerá no Módulo 06.",
};

export const legalToolsExample = {
  title: "Ferramentas diferentes, informações conectadas",
  introduction: "Na rotina jurídica, uma mesma atividade pode envolver a consulta a diferentes ambientes. Compreender a finalidade de cada ferramenta ajuda a manter as informações organizadas e a continuidade dos trabalhos.",
  situation: "Uma nova demanda consultiva foi encaminhada para análise.",
  steps: [
    { title: "Zeev", text: "O profissional consulta a solicitação recebida e verifica as informações e documentos disponíveis." },
    { title: "Pauta consultiva", text: "O profissional acompanha a demanda e as informações necessárias ao controle de suas atividades." },
    { title: "SharePoint Jurídico", text: "Quando aplicável, consulta os materiais institucionais e organiza os documentos relacionados à análise, conforme os procedimentos internos." },
    { title: "Acompanhamento", text: "Ao longo do atendimento, observa os prazos, registra os encaminhamentos pertinentes e mantém as informações necessárias atualizadas." },
  ],
  note: "Exemplo fictício e didático, não um procedimento obrigatório aplicável a todas as demandas.",
};

export const legalToolsPractices = {
  title: "Informação atualizada, trabalho organizado",
  introduction: "O uso adequado das ferramentas institucionais contribui para a organização das atividades, a segurança das informações e a continuidade do trabalho jurídico.",
  items: [
    "Consulte regularmente os ambientes relacionados às suas atividades.",
    "Mantenha as informações pertinentes atualizadas.",
    "Observe os procedimentos internos de registro e armazenamento.",
    "Utilize os canais institucionais apropriados.",
    "Evite registros incompletos ou inconsistentes.",
    "Preserve a confidencialidade das informações acessadas.",
    "Respeite as permissões e os perfis de acesso.",
    "Comunique dificuldades operacionais pelos canais institucionais aplicáveis.",
  ],
};

export const legalToolsConclusion = {
  title: "Conhecer as ferramentas é o primeiro passo para utilizá-las bem.",
  paragraphs: [
    "O Zeev, as pautas, o SharePoint e os sistemas processuais possuem finalidades distintas e complementares.",
    "Compreender como esses ambientes apoiam a rotina jurídica contribui para a organização das atividades, o acompanhamento das demandas e a manutenção de informações confiáveis.",
    "No próximo módulo, você conhecerá o percurso de recebimento e análise das demandas jurídicas.",
  ],
};