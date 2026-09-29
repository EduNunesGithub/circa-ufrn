import type { FigureData } from "@/components/figure";
import type { StatBarData } from "@/components/stat-bar";

import { homeImage } from "@/lib/home/images";

export const threatsContent = {
  description: {
    full: "A combinação de desmatamento, uso intenso do solo e secas mais longas empurra áreas inteiras para a desertificação — um processo que, sem intervenção, pode levar décadas para se reverter.",
    short:
      "Desmatamento, uso intenso do solo e secas mais longas empurram áreas inteiras para a desertificação.",
  },
  overline: "Ameaças e degradação",
  placeholder: "Escala ilustrativa",
  source: "Intensidade relativa das pressões, segundo a equipe do CIRCA.",
  title: "O que ameaça a Caatinga",
};

export const threatsFigure: FigureData = {
  caption: "Solo exposto e erosão após décadas de uso intensivo, Seridó/RN.",
  image: homeImage(
    "degradada",
    "Área degradada de Caatinga com solo exposto, rachado e vegetação esparsa.",
  ),
  number: "Fig. 08",
};

export const threats: StatBarData[] = [
  {
    color: "accent",
    label: {
      full: "Desmatamento para lenha e carvão",
      short: "Desmatamento para lenha",
    },
    value: 90,
    valueText: "Muito alta",
  },
  {
    color: "accent",
    label: {
      full: "Sobrepastoreio de caprinos e bovinos",
      short: "Sobrepastoreio",
    },
    value: 72,
    valueText: "Alta",
  },
  {
    color: "accent",
    label: {
      full: "Agricultura sem manejo do solo",
      short: "Agricultura sem manejo",
    },
    value: 64,
    valueText: "Alta",
  },
  { color: "accent", label: "Queimadas", value: 48, valueText: "Média" },
  {
    color: "accent",
    label: {
      full: "Mudanças climáticas e secas extremas",
      short: "Secas extremas",
    },
    value: 60,
    valueText: "Crescente",
  },
];
