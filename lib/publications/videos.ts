import type { VideoItem } from "@/components/publications-videos";

import { homeImage } from "@/lib/home/images";

export const videosContent = {
  carouselLabel: "Vídeos",
  description:
    "Registros de campo, aulas abertas e minidocumentários produzidos com estudantes.",
  overline: "Vídeos",
  tagLabel: "Vídeo",
  title: "A Caatinga em movimento",
  watchLabel: "Assistir ao vídeo",
};

export const videos: VideoItem[] = [
  {
    duration: "12:40",
    href: "/publicacoes",
    image: homeImage(
      "trilha-equipe",
      "Equipe de campo caminha por uma trilha na Caatinga.",
    ),
    title: {
      full: "Um dia de monitoramento nas parcelas experimentais",
      short: "Um dia de monitoramento nas parcelas",
    },
  },
  {
    duration: "06:15",
    href: "/publicacoes",
    image: homeImage(
      "raizes-alongadas",
      "Pesquisadora retira do tubo uma muda de raiz alongada.",
    ),
    title: "Como produzir mudas de raízes alongadas",
  },
  {
    duration: "18:02",
    href: "/publicacoes",
    image: {
      alt: "Pôr do sol sobre a vegetação da Caatinga.",
      src: "/about-assets/horizonte.jpg",
    },
    title: "Caatinga: a floresta que dorme na seca",
  },
  {
    duration: "09:30",
    href: "/publicacoes",
    image: homeImage(
      "educacao",
      "Crianças e educadora plantam uma muda no pátio da escola.",
    ),
    title: "Viveiros escolares: a experiência de três escolas",
  },
];
