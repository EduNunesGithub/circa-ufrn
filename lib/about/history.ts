import type { Milestone } from "@/components/about-history";
import type { FigureData } from "@/components/figure";

import { homeImage } from "@/lib/home/images";

export const historyContent = {
  description:
    "Uma trajetória construída parcela a parcela, com parceiros que acreditaram na restauração como ciência de longo prazo.",
  overline: "História",
  photosLabel: "Registros da história do CIRCA",
  placeholder: "Datas ilustrativas",
  title: "De um grupo de pesquisa a um centro",
};

export const milestones: Milestone[] = [
  {
    text: {
      full: "Grupo de ecologia da restauração inicia estudos de campo no semiárido.",
      short: "Grupo de ecologia da restauração inicia estudos no semiárido.",
    },
    title: "Origem",
    year: "2014",
  },
  {
    text: {
      full: "Experimentos-piloto testam espécies e técnicas em solo degradado.",
      short: "Experimentos-piloto testam espécies e técnicas.",
    },
    title: "Primeiras parcelas",
    year: "2016",
  },
  {
    text: {
      full: "Estrutura própria para mudas e testes com raízes alongadas.",
      short: "Estrutura própria para mudas e raízes alongadas.",
    },
    title: "Viveiro de pesquisa",
    year: "2019",
  },
  {
    highlight: true,
    text: {
      full: "O grupo se torna centro, com equipe e laboratórios dedicados.",
      short: "O grupo se torna centro, com equipe dedicada.",
    },
    title: "Nasce o CIRCA",
    year: "2021",
  },
  {
    text: {
      full: "Programa educativo leva viveiros e formação à rede pública.",
      short: "Programa educativo chega à rede pública.",
    },
    title: "Caatinga na escola",
    year: "2023",
  },
  {
    text: {
      full: "Coleta comunitária amplia a oferta de sementes nativas.",
      short: "Coleta comunitária de sementes nativas.",
    },
    title: "Rede de sementes",
    year: "2026",
  },
];

export const historyPhotos: FigureData[] = [
  {
    caption: {
      full: "2016 — Primeiras parcelas experimentais, Seridó/RN.",
      short: "2016 — Primeiras parcelas, Seridó/RN.",
    },
    image: homeImage(
      "parcelas",
      "Parcelas experimentais demarcadas em área de Caatinga.",
    ),
    number: "Fig. 02",
  },
  {
    caption: {
      full: "2019 — Viveiro de pesquisa em operação.",
      short: "2019 — Viveiro de pesquisa.",
    },
    image: homeImage("viveiro", "Mudas nativas enfileiradas no viveiro."),
    number: "Fig. 03",
  },
  {
    caption: {
      full: "2023 — Primeira turma do programa Caatinga na escola.",
      short: "2023 — Caatinga na escola.",
    },
    image: homeImage(
      "educacao",
      "Estudantes participando de atividade educativa sobre a Caatinga.",
    ),
    number: "Fig. 04",
  },
];
