import type { PhotoTileData } from "@/components/photo-tile";

import { homeImage } from "@/lib/home/images";

export const peopleContent = {
  description: {
    full: "Pesquisadoras, estudantes, técnicos de campo, viveiristas e agricultores parceiros. A restauração da Caatinga é um trabalho coletivo — e de longo prazo.",
    short:
      "Pesquisadoras, estudantes, técnicos, viveiristas e agricultores parceiros.",
  },
  link: { href: "/equipe", label: "Conheça a equipe" },
  overline: "07 — Pessoas",
  quote: {
    author: {
      avatar: "/home-assets/retrato-helena.jpg",
      name: "Helena Duarte",
      role: "Coordenação científica",
    },
    text: "Cada muda que sobrevive à primeira seca é um dado — e uma promessa.",
  },
  title: "Quem faz o CIRCA",
};

export const peoplePhotos = {
  community: {
    caption: {
      full: "Famílias agricultoras parceiras",
      short: "Agricultores parceiros",
    },
    image: homeImage("comunidade", "Famílias agricultoras reunidas no campo."),
  },
  lab: {
    caption: { full: "Laboratório de sementes", short: "Laboratório" },
    image: homeImage("laboratorio", "Pesquisadora no laboratório de sementes."),
  },
  monitoring: {
    caption: { full: "Monitoramento de parcelas", short: "Monitoramento" },
    image: homeImage(
      "monitoramento",
      "Técnica medindo mudas em parcela de monitoramento.",
    ),
  },
  nursery: {
    caption: {
      full: "Viveiristas · produção de mudas",
      short: "Viveiristas",
    },
    image: homeImage("viveiro", "Viveiristas cuidando das mudas nativas."),
  },
  planting: {
    caption: "Técnicos de campo · plantio",
    image: homeImage("plantio", "Técnicos de campo plantando mudas nativas."),
  },
  workshop: {
    caption: "Oficina comunitária",
    image: homeImage("oficina", "Oficina comunitária sobre restauração."),
  },
} satisfies Record<string, PhotoTileData>;
