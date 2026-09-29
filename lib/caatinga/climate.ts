import { LuDroplets, LuSun, LuThermometerSun } from "react-icons/lu";

import type { ClimateFact, RainfallMonth } from "@/components/caatinga-climate";

export const climateContent = {
  confirmation: "Valores a confirmar",
  description: {
    full: "Chove pouco, de forma irregular e em poucos meses. O sol intenso evapora mais água do que cai, e anos de seca severa se repetem. As plantas respondem perdendo as folhas, guardando água e aprofundando raízes.",
    short:
      "Chove pouco, de forma irregular e em poucos meses. O sol evapora mais água do que cai — e as plantas perdem as folhas para atravessar a seca.",
  },
  overline: "Clima",
  title: "O ritmo das chuvas",
};

export const rainfallChartContent = {
  axisMax: 200,
  dryLabel: "Estação seca",
  overline: {
    full: "Precipitação média mensal · mm",
    short: "Chuva média mensal · mm",
  },
  placeholder: "Série ilustrativa",
  rainyLabel: { full: "Estação chuvosa (fev–mai)", short: "Estação chuvosa" },
  ticks: ["200", "100", "0"],
  title: "Quatro meses concentram quase toda a chuva do ano",
};

export const rainfallMonths: RainfallMonth[] = [
  { initial: "J", name: "Janeiro", value: 80 },
  { initial: "F", name: "Fevereiro", rainy: true, value: 120 },
  { initial: "M", name: "Março", rainy: true, value: 180 },
  { initial: "A", name: "Abril", rainy: true, value: 160 },
  { initial: "M", name: "Maio", rainy: true, value: 90 },
  { initial: "J", name: "Junho", value: 40 },
  { initial: "J", name: "Julho", value: 20 },
  { initial: "A", name: "Agosto", value: 7 },
  { initial: "S", name: "Setembro", value: 4 },
  { initial: "O", name: "Outubro", value: 7 },
  { initial: "N", name: "Novembro", value: 16 },
  { initial: "D", name: "Dezembro", value: 40 },
];

export const climateFacts: ClimateFact[] = [
  {
    icon: LuThermometerSun,
    label: "temperatura média anual",
    value: "26–30 °C",
  },
  { icon: LuSun, label: "de sol por ano", value: "2.800 h" },
  { icon: LuDroplets, label: "mais evaporação do que chuva", value: "3×" },
];
