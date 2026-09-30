import type { ColumnDatum } from "@/components/column-plot";
import type { StatBarData } from "@/components/stat-bar";

export const productionChartContent = {
  axisMax: 12,
  overline: "Mudas produzidas por ano · mil",
  source: "Fonte: registros do viveiro de pesquisa do CIRCA.",
  ticks: ["12", "6", "0"],
  title: {
    full: "A produção do viveiro triplicou desde 2019",
    short: "A produção triplicou desde 2019",
  },
  unit: "mil mudas",
};

export const productionYears: ColumnDatum[] = [
  { label: { full: "2019", short: "’19" }, name: "2019", value: 3 },
  {
    label: { full: "2020", short: "’20" },
    name: "2020",
    value: 4.4,
    valueText: "4,4",
  },
  { label: { full: "2021", short: "’21" }, name: "2021", value: 6 },
  {
    label: { full: "2022", short: "’22" },
    name: "2022",
    value: 7.4,
    valueText: "7,4",
  },
  {
    label: { full: "2023", short: "’23" },
    name: "2023",
    value: 8.6,
    valueText: "8,6",
  },
  {
    label: { full: "2024", short: "’24" },
    name: "2024",
    value: 9.8,
    valueText: "9,8",
  },
  {
    highlight: true,
    label: { full: "2025", short: "’25" },
    name: "2025",
    value: 11.2,
    valueText: "11,2",
  },
];

export const survivalChartContent = {
  overline: {
    full: "Sobrevivência após 24 meses · %",
    short: "Sobrevivência após 24 meses",
  },
  source: "Fonte: EXP-03, 96 parcelas, medições de 2022 a 2024.",
  title: {
    full: "Técnica importa mais que espécie na primeira seca",
    short: "Técnica importa mais que espécie",
  },
};

export const survivalTechniques: StatBarData[] = [
  {
    color: "primary",
    label: {
      full: "Raiz alongada + cobertura morta",
      short: "Raiz alongada + cobertura",
    },
    value: 78,
  },
  { color: "primary", label: "Raiz alongada", value: 72 },
  {
    color: "sage",
    label: {
      full: "Nucleação com mudas convencionais",
      short: "Nucleação",
    },
    value: 46,
  },
  {
    color: "sage",
    label: { full: "Muda convencional", short: "Convencional" },
    value: 38,
  },
  { color: "muted", label: "Semeadura direta", value: 21 },
];
