export const legalPracticeId = "reporte-gestao-demandas";

export interface LegalPracticeModule {
  number: number;
  id: string;
  title: string;
  description: string;
  status: "available" | "soon";
}

export const legalPracticeModules: LegalPracticeModule[] = [
  { number: 1, id: "sua-atuacao", title: "Sua atuação na UCJC", description: "Dimensões da atuação, responsabilidades e integração com a gestão e as equipes de apoio.", status: "available" },
  { number: 2, id: "ferramentas", title: "Ferramentas e sistemas de trabalho", description: "Ambientes institucionais, consulta de demandas, pautas e controles internos.", status: "soon" },
  { number: 3, id: "recebimento", title: "Recebimento e análise de demandas", description: "Objeto da solicitação, documentação, complementações e encaminhamentos.", status: "soon" },
  { number: 4, id: "prazos", title: "Gestão de prazos e acompanhamento das pautas", description: "A.N.O., datas, status e cuidados com o preenchimento dos controles.", status: "soon" },
  { number: 5, id: "consultivo", title: "Rotina consultiva", description: "Análises, manifestações, correções, validação e conclusão das demandas.", status: "soon" },
  { number: 6, id: "contencioso", title: "Rotina contenciosa", description: "Processos judiciais, providências, audiências e registros processuais.", status: "soon" },
  { number: 7, id: "registros", title: "Registros, movimentações e reportes", description: "Comunicação, atualização de controles e modelos de reporte e replanejamento.", status: "soon" },
  { number: 8, id: "conclusao", title: "Conclusão das atividades e boas práticas", description: "Formalização dos resultados, organização documental e situações da rotina.", status: "soon" },
];

export const legalPracticeOverview = {
  eyebrow: "Trilha 02 · Jurídico",
  title: "Rotina dos Advogados e Especialistas Jurídicos",
  subtitle: "Conheça as atividades, ferramentas e procedimentos que integram a atuação jurídica na UCJC.",
  introduction: [
    "A atuação dos advogados e especialistas jurídicos envolve diferentes atividades, desde a análise técnica de demandas até o acompanhamento de prazos, atualização de informações e comunicação com as equipes.",
    "Nesta trilha, você conhecerá as principais rotinas da UCJC, compreenderá como elas se relacionam e encontrará orientações para conduzir suas atividades com organização, consistência e rastreabilidade.",
  ],
};

export const legalPracticeOpening = {
  eyebrow: "Módulo 01 · Rotina Jurídica",
  title: "Sua atuação na UCJC",
  paragraphs: [
    "Os advogados e especialistas jurídicos da UCJC contribuem para a segurança jurídica das atividades institucionais por meio da análise de demandas, elaboração de manifestações técnicas, acompanhamento de questões jurídicas e interlocução com as diferentes áreas do Sistema FIEPE.",
    "Além da atuação técnica, a rotina envolve organização das atividades, acompanhamento de prazos, atualização de informações e comunicação com as equipes.",
  ],
  objective: "Compreender as principais dimensões da atuação jurídica, suas responsabilidades gerais e como o trabalho dos profissionais se integra à estrutura e às rotinas da UCJC.",
};

export const legalDimensions = [
  { title: "Análise jurídica", text: "Examinar questões jurídicas, documentos e informações, desenvolvendo manifestações e orientações técnicas pertinentes às demandas recebidas." },
  { title: "Gestão das atividades", text: "Organizar e acompanhar as demandas sob sua responsabilidade, observando os prazos, as prioridades e os encaminhamentos necessários." },
  { title: "Comunicação e articulação", text: "Manter a interlocução com as áreas solicitantes, demais profissionais e gestores, contribuindo para o alinhamento e a continuidade das atividades." },
  { title: "Registros e rastreabilidade", text: "Manter informações relevantes organizadas e atualizadas, permitindo o acompanhamento das demandas e a compreensão de seu histórico." },
];

export const legalIntegration = {
  introduction: [
    "Os advogados e especialistas jurídicos desenvolvem suas atividades no âmbito das respectivas estruturas jurídicas, observando as atribuições e orientações de suas gerências.",
    "Na execução dessas atividades, interagem com outros profissionais e equipes que contribuem para a organização dos fluxos, o acompanhamento das demandas e a gestão das informações.",
  ],
  management: {
    title: "Gerências Jurídicas",
    text: "Os profissionais jurídicos desenvolvem suas atividades vinculados às respectivas estruturas de gestão, de acordo com a organização institucional e as atribuições de cada função.",
    note: "As Gerências Jurídicas do SESI, SENAI e FIEPE/IEL integram a estrutura da UCJC, conforme o organograma institucional. Os vínculos hierárquicos podem variar conforme a função e a estrutura de atuação.",
  },
  support: [
    { id: "assistencia", title: "Assistência Jurídica", relationship: "operational-support", hierarchicalAuthority: false, technicalApproval: false, text: "Atua no suporte às rotinas administrativas e operacionais, colaborando com a organização das informações, o acompanhamento das atividades e os encaminhamentos previstos nos procedimentos internos." },
    { id: "nojc", title: "Núcleo de Operações Jurídicas — NOJC", relationship: "operational-support", hierarchicalAuthority: false, technicalApproval: false, text: "Atua no apoio e no aprimoramento das operações jurídicas, incluindo fluxos de trabalho, ferramentas, controles e informações gerenciais.", note: "Sua relação com os profissionais jurídicos é de natureza operacional e de apoio, não de subordinação hierárquica. O NOJC não constitui instância de aprovação técnica das manifestações jurídicas." },
  ],
};

export const legalRoutine = {
  introduction: "Embora as atividades variem conforme a natureza da demanda e a função desempenhada, alguns cuidados fazem parte da organização cotidiana do trabalho jurídico.",
  note: "A sequência é ilustrativa e não representa um fluxo obrigatório para todas as demandas.",
  steps: [
    { title: "Acompanhar", text: "Verificar as demandas sob sua responsabilidade e identificar prazos, prioridades e pendências." },
    { title: "Analisar", text: "Examinar as informações disponíveis e desenvolver as providências técnicas pertinentes." },
    { title: "Registrar", text: "Manter atualizadas as informações necessárias ao acompanhamento das atividades." },
    { title: "Comunicar", text: "Compartilhar encaminhamentos, solicitar esclarecimentos e sinalizar situações relevantes." },
    { title: "Concluir", text: "Formalizar os resultados e realizar os encaminhamentos aplicáveis à conclusão da atividade." },
  ],
};

export const legalGoodPractices = {
  introduction: "A organização das atividades e a qualidade das informações são fundamentais para a continuidade do trabalho jurídico e para o acompanhamento das demandas.",
  items: [
    "Acompanhe regularmente as demandas sob sua responsabilidade.",
    "Observe os prazos e procedimentos internos aplicáveis.",
    "Registre os encaminhamentos relevantes.",
    "Mantenha as informações atualizadas.",
    "Comunique tempestivamente situações que possam impactar a condução das atividades.",
    "Utilize os canais institucionais adequados (Teams e\ne-mail).",
    "Preserve a confidencialidade das informações.",
    "Organize e salve os documentos relacionados ao seu trabalho no Sharepoint.",
  ],
};

export const legalPracticeConclusion = {
  title: "A atuação jurídica também depende de organização e comunicação.",
  paragraphs: [
    "A qualidade do trabalho jurídico não está apenas na análise técnica. O acompanhamento das demandas, a organização dos registros e a comunicação entre os envolvidos também contribuem para a continuidade das atividades e a confiabilidade das informações da UCJC.",
    "Nos próximos módulos, você conhecerá as ferramentas, os procedimentos e as rotinas que apoiam essa atuação.",
  ],
};