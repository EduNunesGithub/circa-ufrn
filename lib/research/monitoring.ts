import { LuBird, LuHeartPulse, LuRuler, LuScanLine } from "react-icons/lu";

import type { IndicatorData } from "@/components/research-monitoring";

export const monitoringContent = {
  description:
    "Campanhas regulares registram quatro indicadores. A série histórica é o que permite separar tendência de acaso climático.",
  overline: "Monitoramento",
  placeholder: "Séries ilustrativas",
  seriesLabel: "Indicadores monitorados",
  title: "O que medimos em cada parcela",
};

export const seriesYears = { first: "2021", last: "2025" };

export const indicators: IndicatorData[] = [
  {
    bars: [96, 84, 76, 76, 72],
    caption: "Mudas vivas desde o plantio",
    frequency: "Semestral",
    icon: LuHeartPulse,
    name: "Sobrevivência",
    unit: "%",
    value: "68",
  },
  {
    bars: [20, 36, 56, 72, 88],
    caption: "Altura média das árvores",
    frequency: "Anual",
    icon: LuRuler,
    name: "Crescimento",
    unit: "m",
    value: "1,8",
  },
  {
    bars: [12, 24, 36, 52, 60],
    caption: "Área sombreada por copas",
    frequency: "Anual · drone",
    icon: LuScanLine,
    name: { full: "Cobertura do solo", short: "Cobertura" },
    unit: "%",
    value: "54",
  },
  {
    bars: [16, 28, 40, 44, 48],
    caption: "Espécies de aves registradas",
    frequency: "Sazonal",
    icon: LuBird,
    name: "Fauna",
    unit: "spp.",
    value: "41",
  },
];
