import type { MetricData } from "@/components/metric";

export const caatingaNumbersContent = {
  title: "A Caatinga em números",
};

export const caatingaNumbers: MetricData[] = [
  {
    label: {
      full: "estados com ocorrência do bioma",
      short: "estados com ocorrência",
    },
    note: {
      full: "Nordeste e norte de Minas Gerais",
      short: "Nordeste e norte de MG",
    },
    value: "10",
  },
  {
    illustrative: true,
    label: "do território nacional",
    note: "Estimativa de referência",
    unit: "%",
    value: "~11",
  },
  {
    illustrative: true,
    label: {
      full: "espécies de plantas registradas",
      short: "espécies de plantas",
    },
    note: "Estimativa de referência",
    unit: "mil+",
    value: "3",
  },
  {
    illustrative: true,
    label: {
      full: "de chuva por ano, concentrada em poucos meses",
      short: "de chuva por ano",
    },
    note: "Faixa ilustrativa",
    unit: "mm",
    value: "300–800",
  },
];
