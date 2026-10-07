export interface OrganizationRole {
  title: string;
  specialty?: string;
  accent?: boolean;
}

export interface OrganizationArea {
  id: string;
  name: string;
  roles: OrganizationRole[];
}

export const organizationRoot = "Gestão Jurídico e Compliance";

export const organizationAreas: OrganizationArea[] = [
  {
    id: "compliance",
    name: "Coordenação Compliance",
    roles: [
      { title: "Especialista", specialty: "Compliance", accent: true },
      { title: "Analista II" },
      { title: "Analista II" },
      { title: "Analista II" },
      { title: "Estagiário" },
    ],
  },
  {
    id: "juridico-sesi",
    name: "Gerência de Negócios Jurídicos – SESI",
    roles: [
      { title: "Especialista", specialty: "Educacional e Trabalhista", accent: true },
      { title: "Advogado", specialty: "Inovação" },
      { title: "Advogado Cível", specialty: "Consultivo e Contencioso" },
      { title: "Advogado Administrativo", specialty: "Consultivo e Contencioso" },
      { title: "Assistente Jurídico" },
      { title: "Estagiário" },
    ],
  },
  {
    id: "juridico-senai",
    name: "Gerência de Negócios Jurídicos – SENAI",
    roles: [
      { title: "Especialista", specialty: "Inovação", accent: true },
      { title: "Especialista", specialty: "Trabalhista", accent: true },
      { title: "Advogado Cível", specialty: "Consultivo e Contencioso" },
      { title: "Advogado Administrativo", specialty: "Consultivo e Contencioso" },
      { title: "Assistente Jurídico" },
      { title: "Estagiário" },
    ],
  },
  {
    id: "operacoes",
    name: "Coordenação de Operações Jurídicas e de Compliance",
    roles: [
      {
        title: "Especialista",
        specialty: "Fiscalização Contínua e Controle Externo",
        accent: true,
      },
      { title: "Advogado", specialty: "Transversal" },
      { title: "Analista de Compliance e Transparência I" },
      { title: "Assistente Jurídico" },
      { title: "Assistente Administrativo" },
      { title: "Estagiário" },
    ],
  },
];