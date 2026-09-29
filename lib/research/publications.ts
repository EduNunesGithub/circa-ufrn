import type { ResearchPublication } from "@/components/research-publications";

export const researchPublicationsContent = {
  link: { href: "/publicacoes", label: "Todas as publicações" },
  overline: "Publicações relacionadas",
  title: "Para ir mais fundo",
};

export const publicationsHref = "/publicacoes";

export const researchPublications: ResearchPublication[] = [
  {
    authors: "Silva, A. M.; Oliveira, R. T.; Andrade, L. C.; Costa, J. P.",
    details: "v. 33 · e14210",
    doi: "10.0000/rec.00000",
    journal: "Restoration Ecology",
    tag: { label: "Artigo científico", variant: "article" },
    title:
      "Long-root seedlings increase survival of native trees in a semi-arid restoration experiment",
    year: "2025",
  },
  {
    authors: "Lins, A. B.; Moura, R.; Duarte, H.",
    details: "v. 221",
    doi: "10.0000/jae.00000",
    journal: "Journal of Arid Environments",
    tag: { label: "Artigo científico", variant: "article" },
    title:
      "Seed rain and artificial bird perches in semi-arid restoration sites",
    year: "2024",
  },
];
