import type { ProjectCardData } from "@/components/project-card";

import { homeImage } from "@/lib/home/images";

export const projectsContent = {
  description:
    "Áreas experimentais, viveiros e ações com comunidades espalhadas pelo semiárido potiguar.",
  overline: "06 — Em campo",
  title: "Projetos em andamento",
};

export const projects: ProjectCardData[] = [
  {
    description: "Plantio em ilhas de diversidade para acelerar a regeneração.",
    image: homeImage(
      "parcelas",
      "Parcelas de plantio com mudas nativas em pastagem abandonada.",
    ),
    location: {
      full: "Seridó · RN · desde 2021",
      short: "Seridó · desde 2021",
    },
    status: "active",
    title: "Núcleos de restauração em pastagens abandonadas",
  },
  {
    description: "Tubos de 1 m para raízes que alcançam a umidade profunda.",
    image: homeImage(
      "raizes-alongadas",
      "Mudas cultivadas em tubos longos no viveiro.",
    ),
    location: {
      full: "Viveiro CIRCA · desde 2019",
      short: "Viveiro · desde 2019",
    },
    status: "active",
    title: "Mudas de raízes alongadas",
  },
  {
    description: "Comparação de 8 tratamentos de plantio ao longo de 4 anos.",
    image: homeImage(
      "aerea",
      "Vista aérea da grade experimental dividida em parcelas.",
    ),
    location: {
      full: "Área experimental · 2020–2024",
      short: "Área experimental",
    },
    status: "done",
    title: "Grade experimental de 12 hectares",
  },
  {
    description:
      "Viveiros escolares e formação de professores da rede pública.",
    image: homeImage(
      "educacao",
      "Estudantes e professores em atividade ao ar livre.",
    ),
    location: {
      full: "Escolas rurais · desde 2022",
      short: "Escolas rurais",
    },
    status: "active",
    title: "Caatinga na escola",
  },
  {
    description:
      "Coleta comunitária e comercialização justa de sementes nativas.",
    image: homeImage("sementes", "Sementes nativas coletadas pela comunidade."),
    location: {
      full: "Rede de coletores · 2026",
      short: "Rede de coletores",
    },
    status: "planned",
    title: "Rede de sementes do Seridó",
  },
];
