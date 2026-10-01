import type { ListedPublication } from "@/components/publications-articles";

export const articlesContent = {
  description:
    "Artigos publicados pela equipe e por estudantes vinculados ao centro. Todos com acesso aberto ou versão do autor.",
  link: { href: "/publicacoes", label: "Todos os artigos (24)" },
  overline: "Artigos científicos",
  title: {
    full: "Produção científica revisada por pares",
    short: "Produção revisada por pares",
  },
};

const article = { label: "Artigo científico", variant: "article" } as const;

export const articles: ListedPublication[] = [
  {
    authors: "Duarte, H.; Moura, R.; Lins, A. B.; Costa, J. P.",
    details: "v. 33 · e14210",
    doi: "10.0000/rec.00000",
    href: "/publicacoes",
    journal: "Restoration Ecology",
    tag: article,
    title:
      "Long-root seedlings increase survival of native trees in a semi-arid restoration experiment",
    year: "2025",
  },
  {
    authors: "Moura, R.; Duarte, H.; Almeida, F.",
    details: "v. 561",
    doi: "10.0000/fem.00000",
    href: "/publicacoes",
    journal: "Forest Ecology and Management",
    tag: article,
    title:
      "Planting date and rainfall pulses shape early establishment of Caatinga trees",
    year: "2024",
  },
  {
    authors: "Lins, A. B.; Moura, R.; Duarte, H.",
    details: "v. 221",
    doi: "10.0000/jae.00000",
    href: "/publicacoes",
    journal: "Journal of Arid Environments",
    tag: article,
    title:
      "Seed rain and artificial bird perches in semi-arid restoration sites",
    year: "2024",
  },
  {
    authors: "Costa, J. P.; Duarte, H.",
    desktopOnly: true,
    details: "v. 489",
    doi: "10.0000/pls.00000",
    href: "/publicacoes",
    journal: "Plant and Soil",
    tag: article,
    title:
      "Root architecture of dry forest seedlings under contrasting nursery containers",
    year: "2023",
  },
];
