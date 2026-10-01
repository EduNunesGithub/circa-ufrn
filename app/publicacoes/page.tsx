import type { Metadata } from "next";

import { PublicationsArticles } from "@/components/publications-articles";
import { PublicationsDocuments } from "@/components/publications-documents";
import { PublicationsFeatured } from "@/components/publications-featured";
import { PublicationsFilters } from "@/components/publications-filters";
import { PublicationsHero } from "@/components/publications-hero";
import { PublicationsMaterials } from "@/components/publications-materials";
import { PublicationsPagination } from "@/components/publications-pagination";
import { PublicationsRecent } from "@/components/publications-recent";
import { PublicationsVideos } from "@/components/publications-videos";

export const metadata: Metadata = {
  description:
    "Artigos científicos, relatórios, notícias, vídeos, materiais educativos e documentos institucionais do CIRCA, com acesso livre.",
  title: "Publicações e conteúdos",
};

export default function Publications() {
  return (
    <main>
      <PublicationsHero />
      <PublicationsFilters />
      <PublicationsFeatured />
      <PublicationsRecent />
      <PublicationsArticles />
      <PublicationsVideos />
      <PublicationsMaterials />
      <PublicationsDocuments />
      <PublicationsPagination />
    </main>
  );
}
