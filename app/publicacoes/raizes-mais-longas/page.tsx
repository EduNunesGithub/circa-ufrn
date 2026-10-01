import type { Metadata } from "next";

import { ArticleBody } from "@/components/article-body";
import { ArticleHero } from "@/components/article-hero";
import { ArticleNavigation } from "@/components/article-navigation";
import { ArticleRelated } from "@/components/article-related";

export const metadata: Metadata = {
  description:
    "Um experimento com 96 parcelas no Seridó potiguar mostra que o comprimento da raiz no plantio explica mais a sobrevivência de árvores nativas do que a espécie escolhida.",
  title: "Raízes mais longas, mudas mais resistentes",
};

export default function LongRootsArticle() {
  return (
    <main>
      <ArticleHero />
      <ArticleBody />
      <ArticleRelated />
      <ArticleNavigation />
    </main>
  );
}
