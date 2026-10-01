import type { Material } from "@/components/publications-materials";

import { homeImage } from "@/lib/home/images";

export const materialsContent = {
  carouselLabel: "Materiais educativos",
  description:
    "Guias, cartilhas e pranchas ilustradas para escolas, viveiros comunitários e agentes ambientais.",
  downloadLabel: "Baixar",
  link: { href: "/publicacoes", label: "Todos os materiais (12)" },
  overline: "Materiais educativos",
  title: "Para usar em sala de aula e em campo",
};

export const materials: Material[] = [
  {
    cover: "forest",
    href: "/publicacoes",
    image: {
      alt: "Catingueira florida em meio à vegetação da Caatinga.",
      src: "/caatinga-assets/catingueira.jpg",
    },
    info: { full: "PDF · 32 páginas", short: "PDF" },
    kicker: { full: "CIRCA · Guia ilustrado", short: "CIRCA · Guia" },
    title: "20 árvores da Caatinga para plantar na escola",
  },
  {
    cover: "clay",
    href: "/publicacoes",
    image: {
      alt: "Mãos seguram sementes nativas recém-coletadas.",
      src: "/publications-assets/coleta-sementes.jpg",
    },
    info: { full: "PDF · 16 páginas", short: "PDF" },
    kicker: "CIRCA · Cartilha",
    title: "Como coletar e guardar sementes nativas",
  },
  {
    cover: "sun",
    href: "/publicacoes",
    image: homeImage("viveiro", "Mudas nativas enfileiradas no viveiro."),
    info: { full: "PDF · 24 páginas", short: "PDF" },
    kicker: "CIRCA · Manual",
    title: {
      full: "Montando um viveiro escolar passo a passo",
      short: "Montando um viveiro escolar",
    },
  },
  {
    cover: "sky",
    href: "/publicacoes",
    image: homeImage("galo-de-campina", "Galo-de-campina pousado em um galho."),
    info: { full: "PDF · 12 pranchas", short: "PDF" },
    kicker: "CIRCA · Pranchas",
    title: "Quem vive na Caatinga? Pranchas de fauna",
  },
];
