import type { FigureData } from "@/components/figure";

import { homeImage } from "@/lib/home/images";

export const contextContent = {
  link: { href: "/pesquisa", label: "Pesquisa e restauração" },
  overline: "Contexto científico",
  paragraphs: [
    {
      full: "A Caatinga concentra espécies adaptadas a secas prolongadas, mas os métodos de restauração mais usados no Brasil foram desenvolvidos para florestas úmidas. Plantar como na Mata Atlântica, no semiárido, costuma significar perder a maior parte das mudas no primeiro ano.",
      short:
        "Os métodos de restauração mais usados no Brasil foram criados para florestas úmidas. Plantar como na Mata Atlântica, no semiárido, costuma significar perder a maior parte das mudas no primeiro ano.",
    },
    {
      full: "O CIRCA testa alternativas em experimentos replicados — raízes mais longas, épocas de plantio, combinações de espécies e técnicas de nucleação — e acompanha os resultados por anos, porque na Caatinga uma única estação chuvosa não conta a história inteira.",
      short:
        "O CIRCA testa alternativas em experimentos replicados e acompanha os resultados por anos — porque na Caatinga uma única estação chuvosa não conta a história inteira.",
    },
  ],
  title: {
    full: "Ciência de longo prazo para um bioma ainda pouco estudado",
    short: "Ciência de longo prazo para um bioma pouco estudado",
  },
};

export const contextFigure: FigureData = {
  caption: {
    full: "Vista aérea da grade experimental: cada quadrado recebe um tratamento de plantio diferente.",
    short: "Grade experimental: cada quadrado recebe um tratamento.",
  },
  credit: "Foto: Acervo CIRCA",
  image: homeImage(
    "aerea",
    "Vista aérea da grade de parcelas experimentais na Caatinga.",
  ),
  number: "Fig. 05",
};
