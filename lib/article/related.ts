import type { NewsItem } from "@/components/news-card";

import { homeImage } from "@/lib/home/images";

export const relatedContent = {
  carouselLabel: "Conteúdos relacionados",
  overline: { full: "Conteúdos relacionados", short: "Continue lendo" },
  title: "Continue lendo",
};

export const relatedItems: NewsItem[] = [
  {
    date: "02 jul 2026",
    excerpt: "Cartilha com o passo a passo usado pela rede de coletores.",
    href: "/publicacoes",
    image: homeImage("sementes", "Mãos seguram sementes nativas coletadas."),
    tag: { label: "Material educativo", variant: "education" },
    title: "Como coletar e guardar sementes nativas",
  },
  {
    date: "21 jun 2026",
    excerpt: "O que a equipe mede, como mede e por que isso importa.",
    href: "/publicacoes",
    image: homeImage(
      "monitoramento",
      "Técnica mede mudas em uma parcela de monitoramento.",
    ),
    tag: { label: "Notícia", variant: "news" },
    title: {
      full: "Um dia de monitoramento nas parcelas experimentais",
      short: "Um dia de monitoramento nas parcelas",
    },
  },
  {
    date: "30 mai 2026",
    excerpt: "Estudo de viveiro que deu origem à técnica de raízes alongadas.",
    href: "/publicacoes",
    image: homeImage(
      "laboratorio",
      "Pesquisadora analisa raízes de mudas no laboratório.",
    ),
    tag: { label: "Artigo científico", variant: "article" },
    title: {
      full: "Arquitetura de raízes de mudas em diferentes recipientes",
      short: "Arquitetura de raízes em diferentes recipientes",
    },
  },
];
