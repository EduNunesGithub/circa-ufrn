import { LuLink, LuLinkedin, LuMail, LuMessageCircle } from "react-icons/lu";

import type { ArticleHeroContent } from "@/components/article-hero";
import type { BreadcrumbItem } from "@/components/breadcrumb";

import { homeImage } from "@/lib/home/images";

export const articleBreadcrumb: BreadcrumbItem[] = [
  { href: "/", label: "Início" },
  { href: "/publicacoes", label: "Publicações" },
  {
    label: {
      full: "Raízes mais longas, mudas mais resistentes",
      short: "Artigo científico",
    },
  },
];

export const articleHeroContent: ArticleHeroContent = {
  authors: [
    {
      avatar: "/home-assets/retrato-helena.jpg",
      name: "Helena Duarte",
      role: "Coordenação científica",
    },
    {
      avatar: "/publications-assets/retrato-luisa.jpg",
      name: "Luísa Andrade",
      role: "Pesquisadora · ecofisiologia",
    },
    {
      avatar: "/publications-assets/retrato-ana.jpg",
      name: "Ana Beatriz Lins",
      role: "Pesquisadora · sementes",
    },
  ],
  date: {
    full: "14 mar 2026 · 8 min de leitura",
    short: "14 mar 2026 · 8 min",
  },
  figure: {
    caption: {
      full: "Mudas de raízes alongadas prontas para o plantio, viveiro de pesquisa do CIRCA.",
      short: "Mudas de raízes alongadas prontas para o plantio.",
    },
    credit: "Foto: Acervo CIRCA",
    image: homeImage(
      "raizes-alongadas",
      "Pesquisadora retira do tubo uma muda de raiz alongada no viveiro.",
    ),
    number: "Fig. 01",
  },
  lead: {
    full: "Um experimento com 96 parcelas no Seridó potiguar mostra que o comprimento da raiz no plantio explica mais a sobrevivência de árvores nativas do que a espécie escolhida.",
    short:
      "O comprimento da raiz no plantio explica mais a sobrevivência de árvores nativas do que a espécie escolhida.",
  },
  share: {
    label: "Compartilhar",
    links: [
      { href: "#", icon: LuLink, label: "Copiar link" },
      { href: "#", icon: LuMail, label: "Compartilhar por e-mail" },
      { href: "#", icon: LuLinkedin, label: "Compartilhar no LinkedIn" },
      {
        href: "#",
        icon: LuMessageCircle,
        label: "Compartilhar por mensagem",
      },
    ],
  },
  tag: { label: "Artigo científico", variant: "article" },
  title:
    "Raízes mais longas, mudas mais resistentes: o que aprendemos em cinco anos de experimentos",
};
