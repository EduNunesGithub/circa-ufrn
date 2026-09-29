import type { BreadcrumbItem } from "@/components/breadcrumb";
import type { SeasonPanel } from "@/components/caatinga-hero";

import { homeImage } from "@/lib/home/images";

export const caatingaBreadcrumb: BreadcrumbItem[] = [
  { href: "/", label: "Início" },
  { label: "A Caatinga" },
];

export const caatingaHeroContent = {
  anchorsLabel: "Nesta página",
  lead: {
    full: "Dois tempos da mesma paisagem: a floresta que parece morta na seca e explode em verde com as primeiras chuvas. O único bioma exclusivamente brasileiro.",
    short:
      "Dois tempos da mesma paisagem: a floresta que parece morta na seca e explode em verde com as chuvas.",
  },
  title: "A Caatinga",
};

export const caatingaAnchors = [
  { href: "#territorio", label: "Território" },
  { href: "#clima", label: "Clima" },
  { href: "#biodiversidade", label: "Biodiversidade" },
  { href: "#ameacas", label: "Ameaças" },
];

export const drySeason: SeasonPanel = {
  image: {
    alt: "Caatinga na seca: galhos sem folhas sobre o solo claro e seco.",
    src: "/caatinga-assets/seca.jpg",
  },
  label: { full: "Seca · julho a janeiro", short: "Seca · jul–jan" },
};

export const rainySeason: SeasonPanel = {
  image: homeImage(
    "caatinga-chuva",
    "Caatinga na chuva: a mesma vegetação coberta de folhas verdes.",
  ),
  label: { full: "Chuva · fevereiro a junho", short: "Chuva · fev–jun" },
};
