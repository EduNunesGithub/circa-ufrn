import type { FeaturedContent } from "@/components/publications-featured";

import { homeImage } from "@/lib/home/images";

export const featuredContent: FeaturedContent = {
  byline: {
    full: "Duarte, H.; Moura, R.; Lins, A. B. · 14 mar 2026 · 8 min de leitura",
    short: "14 mar 2026 · 8 min",
  },
  excerpt: {
    full: "Cinco anos de experimentos mostram que o comprimento da raiz no momento do plantio é o fator que mais explica a sobrevivência de árvores nativas na primeira seca. Resumo em linguagem acessível do artigo publicado em 2025.",
    short:
      "Cinco anos de experimentos mostram que o comprimento da raiz no plantio é o que mais explica a sobrevivência na primeira seca.",
  },
  image: homeImage(
    "raizes-alongadas",
    "Pesquisadora retira do tubo uma muda de raiz alongada no viveiro.",
  ),
  overline: "Em destaque",
  pdf: { href: "/publicacoes", label: "Artigo (PDF)" },
  read: { href: "/publicacoes", label: "Ler o resumo" },
  tag: { label: "Artigo científico", variant: "article" },
  title: "Raízes mais longas, mudas mais resistentes",
};
