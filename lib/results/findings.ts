import type { Finding } from "@/components/results-findings";

export const findingsContent = {
  carouselLabel: "Achados científicos",
  link: { href: "/publicacoes", label: "Todas as publicações" },
  linkLabel: "Ler o artigo",
  overline: "Resultados científicos",
  title: "Três achados que mudaram nossa prática",
};

export const findings: Finding[] = [
  {
    href: "/publicacoes",
    number: "Achado 01",
    source: "Restoration Ecology, 2025",
    text: {
      full: "Mudas com raízes de até 1 m tiveram quase o dobro de sobrevivência das convencionais em anos de chuva abaixo da média.",
      short: "Quase o dobro de sobrevivência em anos de pouca chuva.",
    },
    title: "Raízes profundas vencem a primeira seca",
  },
  {
    href: "/publicacoes",
    number: "Achado 02",
    source: {
      full: "Forest Ecology and Management, 2024",
      short: "For. Ecol. Manag., 2024",
    },
    text: {
      full: "Plantios nas duas primeiras semanas de chuva regular superaram os tardios em todas as espécies testadas.",
      short: "Plantios nas primeiras semanas de chuva superaram os tardios.",
    },
    title: "Plantar cedo faz diferença",
  },
  {
    href: "/publicacoes",
    number: "Achado 03",
    source: {
      full: "Journal of Arid Environments, 2024",
      short: "J. Arid Environ., 2024",
    },
    text: {
      full: "Poleiros artificiais aumentaram a chegada de sementes dispersas por aves nas parcelas degradadas.",
      short: "Mais sementes dispersas por aves nas parcelas degradadas.",
    },
    title: "Poleiros trazem sementes",
  },
];
