import type { BreadcrumbItem } from "@/components/breadcrumb";
import type { FigureData } from "@/components/figure";
import type { PageAnchor } from "@/components/research-hero";

import { homeImage } from "@/lib/home/images";

export const researchBreadcrumb: BreadcrumbItem[] = [
  { href: "/", label: "Início" },
  { label: "Pesquisa e restauração" },
];

export const researchHeroContent = {
  anchorsLabel: "Nesta página",
  lead: {
    full: "Seis linhas de pesquisa conectam laboratório, viveiro e áreas experimentais. Cada técnica é testada com repetição, comparada com alternativas e acompanhada por anos antes de virar recomendação.",
    short:
      "Seis linhas de pesquisa conectam laboratório, viveiro e áreas experimentais — cada técnica é testada por anos antes de virar recomendação.",
  },
  overline: "Pesquisa e restauração",
  title: "Ciência que se mede em campo",
};

export const researchHeroFigure: FigureData = {
  caption: "Teste de germinação de sementes nativas no laboratório.",
  image: homeImage(
    "laboratorio",
    "Pesquisadora anota resultados diante de bandejas com sementes nativas no laboratório.",
  ),
  number: "Fig. 01",
};

export const researchAnchors: PageAnchor[] = [
  {
    id: "linhas",
    label: { full: "Linhas de pesquisa", short: "Linhas" },
  },
  { id: "metodo", label: "Método" },
  { id: "raizes-alongadas", label: "Raízes alongadas" },
  { id: "experimentos", label: "Experimentos" },
  { id: "monitoramento", label: "Monitoramento" },
  { desktopOnly: true, id: "tecnologias", label: "Tecnologias" },
];
