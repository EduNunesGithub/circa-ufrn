import type { DataRow } from "@/components/data-list";
import type { MediaImage } from "@/components/media-frame";

import { homeImage } from "@/lib/home/images";

export const experimentsContent = {
  body: "O principal experimento do centro compara oito formas de restaurar a mesma área, com repetições suficientes para separar o efeito da técnica do acaso de cada ano.",
  overline: "Experimentos em campo",
  title: "Grade experimental de tratamentos",
};

export const specSheetContent = {
  action: { href: "/publicacoes", label: "Baixar protocolo" },
  code: { full: "Ficha técnica · EXP-03", short: "EXP-03" },
  placeholder: "Dados ilustrativos",
};

export const experimentPhotos: {
  details: MediaImage[];
  main: MediaImage;
} = {
  details: [
    homeImage(
      "monitoramento",
      "Pesquisadora medindo o crescimento de uma muda em campo.",
    ),
    {
      alt: "Pesquisadora de chapéu consulta um GPS em uma trilha na Caatinga.",
      src: "/research-assets/gps.jpg",
    },
  ],
  main: homeImage(
    "aerea",
    "Vista aérea da grade de parcelas experimentais no meio da Caatinga.",
  ),
};

export const specRows: DataRow[] = [
  {
    label: "Local",
    value: { full: "Área experimental · Seridó/RN", short: "Seridó/RN" },
  },
  { label: "Área", value: "12 hectares" },
  {
    label: "Tratamentos",
    value: {
      full: "8 combinações de técnica e espécies",
      short: "8 combinações",
    },
  },
  {
    label: "Parcelas",
    value: { full: "96 parcelas de 20 × 20 m", short: "96 de 20 × 20 m" },
  },
  {
    label: "Espécies",
    value: { full: "24 árvores e arbustos nativos", short: "24 nativas" },
  },
  { label: "Início", value: "Março de 2020" },
  {
    desktopOnly: true,
    label: "Coordenação",
    value: "Helena Duarte · Rafael Moura",
  },
];
