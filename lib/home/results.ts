import type { MetricData } from "@/components/metric";
import type { StatBarData } from "@/components/stat-bar";

export const resultsContent = {
  chart: {
    overline: "Sobrevivência após 12 meses",
    source: "Parcelas experimentais · n ilustrativo",
    title: {
      full: "Mudas de raízes alongadas sobrevivem quase o dobro em anos secos",
      short: "Raízes alongadas sobrevivem quase o dobro",
    },
  },
  description: {
    full: "Indicadores acompanhados desde os primeiros plantios. Os valores abaixo são ilustrativos até a publicação do relatório consolidado.",
    short: "Valores ilustrativos até a publicação do relatório consolidado.",
  },
  link: { href: "/resultados", label: "Resultados e impacto" },
  overline: "05 — Resultados",
  title: "O que já mudou no campo",
};

export const resultsMetrics: MetricData[] = [
  {
    illustrative: true,
    label: {
      full: "mudas nativas produzidas no viveiro",
      short: "mudas produzidas",
    },
    note: "Acumulado 2019–2025",
    noteOnMobile: false,
    unit: "mil",
    value: "48",
  },
  {
    illustrative: true,
    label: { full: "em restauração ativa", short: "em restauração" },
    note: "Três áreas experimentais",
    noteOnMobile: false,
    unit: "ha",
    value: "36",
  },
  {
    illustrative: true,
    label: { full: "espécies nativas em uso", short: "espécies nativas" },
    note: "Árvores, arbustos e cactáceas",
    noteOnMobile: false,
    value: "64",
  },
  {
    illustrative: true,
    label: {
      full: "estudantes formados em campo",
      short: "estudantes formados",
    },
    note: "Graduação e pós-graduação",
    noteOnMobile: false,
    value: "120",
  },
];

export const survivalBars: StatBarData[] = [
  {
    label: {
      full: "Raízes alongadas (tubo de 1 m)",
      short: "Raízes alongadas",
    },
    tone: "primary",
    value: 72,
  },
  {
    label: {
      full: "Muda convencional (saco plástico)",
      short: "Convencional",
    },
    tone: "sage",
    value: 38,
  },
  { label: "Semeadura direta", tone: "muted", value: 21 },
];
