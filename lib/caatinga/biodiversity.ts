import type { Species } from "@/components/caatinga-biodiversity";

import { homeImage } from "@/lib/home/images";

export const biodiversityContent = {
  carouselLabel: "Espécies da Caatinga",
  description:
    "Cactos, árvores que perdem as folhas, aves de canto marcante e répteis que vivem sobre os lajedos: boa parte dessas espécies não existe em nenhum outro lugar.",
  link: { href: "/pesquisa", label: "Espécies usadas na restauração" },
  overline: "Biodiversidade",
  title: "Adaptada à seca, rica em espécies únicas",
};

export const species: Species[] = [
  {
    category: "Cactácea",
    image: {
      alt: "Mandacaru de vários braços contra o céu azul.",
      src: "/caatinga-assets/mandacaru.jpg",
    },
    name: "Mandacaru",
    scientificName: "Cereus jamacaru",
  },
  {
    category: "Ave",
    image: homeImage(
      "galo-de-campina",
      "Galo-de-campina, ave de cabeça vermelha, pousado num galho.",
    ),
    name: "Galo-de-campina",
    scientificName: "Paroaria dominicana",
  },
  {
    category: "Árvore",
    image: {
      alt: "Catingueira coberta de flores amarelas.",
      src: "/caatinga-assets/catingueira.jpg",
    },
    name: "Catingueira",
    scientificName: "Cenostigma pyramidale",
  },
  {
    category: "Réptil",
    image: {
      alt: "Calango sobre uma rocha ao sol.",
      src: "/caatinga-assets/calango.jpg",
    },
    name: "Calango",
    scientificName: "Tropidurus hispidus",
  },
  {
    category: "Árvore",
    image: homeImage(
      "imburana",
      "Tronco avermelhado e descascado de uma imburana.",
    ),
    name: "Imburana",
    scientificName: "Commiphora leptophloeos",
  },
  {
    category: "Ambiente",
    image: {
      alt: "Lajedo de granito com bromélias e cactos ao entardecer.",
      src: "/caatinga-assets/lajedos.jpg",
    },
    name: "Lajedos",
    scientificName: "Bromélias e cactos sobre granito",
  },
];
