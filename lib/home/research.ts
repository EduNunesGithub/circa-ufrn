import type { ResearchLine } from "@/components/home-research";

import { homeImage } from "@/lib/home/images";

export const researchContent = {
  href: "/pesquisa",
  link: "Todas as linhas",
  overline: "04 — Pesquisa",
  title: "Linhas de pesquisa",
};

export const featuredResearchLine: ResearchLine = {
  description:
    "Quais espécies, técnicas e arranjos devolvem mais rápido a cobertura vegetal e as funções do solo? Experimentos comparativos respondem em escala de paisagem.",
  image: homeImage(
    "restaurada",
    "Área de Caatinga em restauração com vegetação nativa recomposta.",
  ),
  number: "01",
  title: "Restauração ecológica de áreas degradadas",
};

export const researchLines: ResearchLine[] = [
  {
    description: "Coleta, beneficiamento, germinação e protocolos de viveiro.",
    image: homeImage("sementes", "Sementes nativas da Caatinga."),
    number: "02",
    title: "Sementes e produção de mudas",
  },
  {
    description:
      "Como as plantas enfrentam a seca — e como ajudá-las a enraizar.",
    image: homeImage("laboratorio", "Laboratório de sementes do CIRCA."),
    number: "03",
    title: {
      full: "Ecofisiologia e sistemas radiculares",
      short: "Ecofisiologia e raízes",
    },
  },
  {
    description:
      "Polinizadores, dispersores e o retorno da fauna às áreas restauradas.",
    image: homeImage("galo-de-campina", "Galo-de-campina pousado em um galho."),
    number: "04",
    title: "Biodiversidade e interações",
  },
  {
    description: "Umidade, erosão e carbono em áreas degradadas e restauradas.",
    image: homeImage("rio-seco", "Leito de rio seco na Caatinga."),
    number: "05",
    title: "Solo, água e paisagem",
  },
];
