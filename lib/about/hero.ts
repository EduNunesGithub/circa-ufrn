import type { AboutFact } from "@/components/about-hero";
import type { BreadcrumbItem } from "@/components/breadcrumb";
import type { FigureData } from "@/components/figure";

import { homeImage } from "@/lib/home/images";

export const aboutBreadcrumb: BreadcrumbItem[] = [
  { href: "/", label: "Início" },
  { label: "Sobre o CIRCA" },
];

export const aboutHeroContent = {
  lead: {
    full: "O Centro Imburana de Restauração da Caatinga reúne pesquisadores, estudantes e comunidades em torno de uma pergunta prática: como recuperar, com base em evidências, as áreas degradadas do semiárido?",
    short:
      "Pesquisadores, estudantes e comunidades em torno de uma pergunta prática: como recuperar, com base em evidências, as áreas degradadas do semiárido?",
  },
  overline: "Sobre o CIRCA",
  title: "Um centro para devolver tempo à Caatinga",
};

export const aboutHeroFigure: FigureData = {
  caption: {
    full: "Equipe a caminho das parcelas experimentais, início da manhã.",
    short: "Equipe a caminho das parcelas, início da manhã.",
  },
  image: homeImage(
    "trilha-equipe",
    "Equipe do CIRCA caminhando por uma trilha na Caatinga rumo às parcelas experimentais.",
  ),
  number: "Fig. 01",
};

const unconfirmed = { full: "Dado ilustrativo", short: "A confirmar" };

export const aboutFacts: AboutFact[] = [
  { label: "Vínculo", value: "Universidade Federal do Rio Grande do Norte" },
  {
    label: "Criação",
    placeholder: unconfirmed,
    value: "2021 · centro formalizado",
  },
  {
    label: "Sede",
    placeholder: unconfirmed,
    value: "Natal/RN, com bases no Seridó",
  },
  { label: "Frentes", value: "Pesquisa · Restauração · Educação" },
];
