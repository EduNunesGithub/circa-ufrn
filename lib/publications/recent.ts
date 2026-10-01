import type { NewsItem } from "@/components/publications-recent";

import { homeImage } from "@/lib/home/images";

export const recentContent = {
  link: { href: "/publicacoes", label: "Todas as notícias" },
  overline: "Recentes",
  title: "Últimas notícias e relatórios",
};

export const recentNews: NewsItem[] = [
  {
    date: "04 set 2026",
    excerpt:
      "Mais de trinta espécies nativas entram no ciclo de produção deste ano.",
    image: homeImage(
      "viveiro",
      "Viveirista cuida de mudas nativas no viveiro.",
    ),
    tag: { label: "Notícia", variant: "news" },
    title: {
      full: "Viveiro do CIRCA inicia produção para a nova área experimental",
      short: "Viveiro inicia produção para a nova área experimental",
    },
  },
  {
    date: "18 ago 2026",
    excerpt: "Destaques, números e aprendizados de mais um ciclo de trabalho.",
    image: homeImage(
      "oficina",
      "Agricultores reunidos em roda durante oficina comunitária.",
    ),
    tag: { label: "Relatório", variant: "report" },
    title: {
      full: "Relatório anual 2025: o ano em que a rede de sementes saiu do papel",
      short: "Relatório anual 2025: a rede de sementes sai do papel",
    },
  },
  {
    date: "29 jul 2026",
    excerpt: "Programa educativo chega à rede municipal de seis cidades.",
    image: homeImage(
      "educacao",
      "Crianças e educadora plantam uma muda no pátio da escola.",
    ),
    tag: { label: "Notícia", variant: "news" },
    title: {
      full: "Quarenta escolas passam a manter viveiros de espécies da Caatinga",
      short: "Quarenta escolas passam a manter viveiros",
    },
  },
];
