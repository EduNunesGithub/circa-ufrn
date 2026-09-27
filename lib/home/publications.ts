import type {
  FeaturedPublicationData,
  PublicationItem,
} from "@/components/home-publications";

import { homeImage } from "@/lib/home/images";

export const publicationsContent = {
  link: { href: "/publicacoes", label: "Ver todo o acervo" },
  overline: "08 — Conhecimento",
  title: "Publicações e conteúdos",
};

export const featuredPublication: FeaturedPublicationData = {
  date: { full: "Restoration Ecology · 2025", short: "2025" },
  excerpt:
    "Resumo em linguagem acessível do artigo que compara técnicas de produção e plantio de mudas em anos secos e chuvosos.",
  image: homeImage(
    "raizes-alongadas",
    "Mudas de raízes alongadas preparadas para o plantio.",
  ),
  link: { href: "/publicacoes", label: "Ler o resumo" },
  tag: { label: "Artigo científico", variant: "article" },
  title: {
    full: "Raízes mais longas, mudas mais resistentes: o que aprendemos em cinco anos de experimentos",
    short:
      "Raízes mais longas, mudas mais resistentes: o que aprendemos em cinco anos",
  },
};

export const publications: PublicationItem[] = [
  {
    date: "04 set 2026",
    showOnMobile: true,
    tag: { label: "Notícia", variant: "news" },
    title: {
      full: "Viveiro do CIRCA inicia produção para a nova área experimental",
      short: "Viveiro inicia produção para a nova área experimental",
    },
  },
  {
    date: "18 ago 2026",
    showOnMobile: true,
    tag: { label: "Relatório", variant: "report" },
    title: {
      full: "Relatório anual de atividades 2025 já está disponível",
      short: "Relatório anual 2025 já está disponível",
    },
  },
  {
    date: "02 jul 2026",
    showOnMobile: false,
    tag: { label: "Material educativo", variant: "education" },
    title: "Guia ilustrado: 20 árvores da Caatinga para plantar na escola",
  },
  {
    date: "21 jun 2026",
    showOnMobile: true,
    tag: { label: "Vídeo", variant: "video" },
    title: {
      full: "Um dia de monitoramento nas parcelas experimentais",
      short: "Um dia de monitoramento nas parcelas",
    },
  },
  {
    date: "30 mai 2026",
    showOnMobile: false,
    tag: { label: "Artigo científico", variant: "article" },
    title: "Seed rain and bird perches in semi-arid restoration sites",
  },
];
