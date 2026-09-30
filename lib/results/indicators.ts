import type { MetricData } from "@/components/metric";

export const indicatorsContent = {
  description:
    "Acumulado 2019–2025 nas três áreas experimentais e nas ações educativas.",
  overline: { full: "Indicadores", short: "Indicadores · 2019–2025" },
  placeholder: "Todos os valores ilustrativos",
  title: "Seis anos de restauração em números",
};

const illustrative = {
  illustrative: true,
  illustrativeOnMobile: false,
  noteOnMobile: false,
};

export const indicators: MetricData[] = [
  {
    ...illustrative,
    label: { full: "mudas nativas produzidas", short: "mudas produzidas" },
    note: "Viveiro de pesquisa",
    unit: "mil",
    value: "48",
  },
  {
    ...illustrative,
    label: { full: "em restauração ativa", short: "em restauração" },
    note: "3 áreas experimentais",
    unit: "ha",
    value: "36",
  },
  {
    ...illustrative,
    label: { full: "espécies nativas utilizadas", short: "espécies nativas" },
    note: "Árvores, arbustos e cactos",
    value: "64",
  },
  {
    ...illustrative,
    label: { full: "de sobrevivência média", short: "sobrevivência média" },
    note: "Mudas de raízes alongadas, 24 meses",
    unit: "%",
    value: "72",
  },
  {
    ...illustrative,
    label: "comunidades parceiras",
    note: "Seridó e Agreste potiguar",
    value: "18",
  },
  {
    ...illustrative,
    label: {
      full: "escolas no programa educativo",
      short: "escolas no programa",
    },
    note: "Rede pública municipal",
    value: "40",
  },
  {
    ...illustrative,
    label: {
      full: "estudantes da educação básica",
      short: "estudantes atendidos",
    },
    note: "Visitas e oficinas",
    unit: "mil",
    value: "1,2",
  },
  {
    ...illustrative,
    label: "viveiristas formados",
    note: "Cursos de 40 horas",
    value: "25",
  },
];
