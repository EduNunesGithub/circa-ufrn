import type { BreadcrumbItem } from "@/components/breadcrumb";

export const resultsBreadcrumb: BreadcrumbItem[] = [
  { href: "/", label: "Início" },
  { label: "Resultados e impacto" },
];

export const resultsHeroContent = {
  lead: {
    full: "Resultados científicos e socioambientais acompanhados desde os primeiros plantios, apresentados com fontes, métodos e limites.",
    short:
      "Resultados científicos e socioambientais, com fontes, métodos e limites.",
  },
  overline: "Resultados e impacto",
  title: {
    full: "O que a restauração já mudou — no solo e nas pessoas",
    short: "O que a restauração já mudou",
  },
};

export const dataNoticeContent = {
  action: { href: "/publicacoes", label: "Relatório 2025 (PDF)" },
  text: {
    full: "Todos os números são ilustrativos e serão substituídos pelos valores do relatório consolidado. Métodos e fontes acompanham cada indicador.",
    short:
      "Os números desta página são ilustrativos e serão substituídos pelos valores do relatório consolidado.",
  },
  title: { full: "Sobre os dados desta página", short: "Sobre os dados" },
};
