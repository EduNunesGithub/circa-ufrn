import type { ComparisonPanel } from "@/components/home-caatinga";
import type { MetricData } from "@/components/metric";

import { homeImage } from "@/lib/home/images";

export const caatingaContent = {
  description: {
    full: "A Caatinga guarda espécies que só existem aqui e sustenta milhões de pessoas. Décadas de desmatamento e uso intensivo do solo abriram áreas que não se recuperam sozinhas — é nelas que a restauração faz diferença.",
    short:
      "Décadas de desmatamento abriram áreas que não se recuperam sozinhas — é nelas que a restauração faz diferença.",
  },
  overline: "02 — Por que a Caatinga",
  title: "Um bioma único, vivo e sob pressão",
};

export const caatingaComparison: ComparisonPanel[] = [
  {
    image: homeImage(
      "degradada",
      "Área degradada de Caatinga com solo exposto e vegetação esparsa.",
    ),
    label: { full: "Antes · Área degradada", short: "Antes" },
  },
  {
    image: homeImage(
      "restaurada",
      "Área de Caatinga em restauração com vegetação nativa recomposta.",
    ),
    label: { full: "Depois · Em restauração", short: "Depois" },
  },
];

export const caatingaFacts: MetricData[] = [
  {
    illustrative: true,
    label: {
      full: "do território brasileiro é coberto pela Caatinga",
      short: "do território brasileiro",
    },
    note: {
      full: "Estimativa de referência · verificar fonte oficial",
      short: "Estimativa · verificar fonte",
    },
    unit: "%",
    value: "~11",
  },
  {
    illustrative: true,
    label: {
      full: "de pessoas vivem na região semiárida",
      short: "de pessoas no semiárido",
    },
    note: {
      full: "Estimativa de referência · verificar fonte oficial",
      short: "Estimativa · verificar fonte",
    },
    unit: "mi",
    value: "27",
  },
  {
    label: {
      full: "da Caatinga está no Brasil — o único bioma exclusivamente brasileiro",
      short: "da Caatinga está no Brasil",
    },
    note: { full: "Não ocorre em nenhum outro país", short: "Bioma exclusivo" },
    unit: "%",
    value: "100",
  },
  {
    label: {
      full: "vulnerabilidade à desertificação em áreas degradadas",
      short: "vulnerabilidade à desertificação",
    },
    note: {
      full: "Solos rasos, chuvas irregulares e perda de cobertura",
      short: "Solos rasos e chuva irregular",
    },
    value: "Alta",
  },
];
