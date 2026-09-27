import type { HeroSlide } from "@/components/home-hero";

import { homeImage } from "@/lib/home/images";

export const heroContent = {
  lead: {
    full: "Pesquisamos como devolver vida às áreas degradadas do semiárido — das sementes nativas ao monitoramento de longo prazo — e compartilhamos tudo o que aprendemos.",
    short:
      "Pesquisamos como devolver vida às áreas degradadas do semiárido — e compartilhamos tudo o que aprendemos.",
  },
  overline: {
    full: "Centro Imburana de Restauração da Caatinga · UFRN",
    short: "CIRCA · UFRN",
  },
  primaryAction: {
    href: "/pesquisa",
    label: { full: "Conheça a pesquisa", short: "A pesquisa" },
  },
  secondaryAction: {
    href: "/visitacao",
    label: { full: "Visite o CIRCA", short: "Visite" },
  },
  title: "Restaurar a Caatinga com ciência, tempo e gente.",
};

export const heroSlides: HeroSlide[] = [
  {
    caption:
      "Equipe de campo entre parcelas de plantio de mudas nativas no Seridó potiguar.",
    figure: {
      full: "Fig. 01 · Área experimental",
      short: "Fig. 01 · Seridó/RN",
    },
    image: homeImage(
      "hero-restauracao",
      "Equipe de campo caminhando entre mudas nativas plantadas em área de Caatinga em restauração.",
    ),
  },
  {
    caption:
      "Pesquisadores percorrem a trilha até as parcelas de monitoramento.",
    figure: { full: "Fig. 02 · Trilha de campo", short: "Fig. 02 · Campo" },
    image: homeImage(
      "trilha-equipe",
      "Pesquisadores caminhando por uma trilha na Caatinga.",
    ),
  },
  {
    caption:
      "Mudas nativas crescem no viveiro do CIRCA antes de seguir para o campo.",
    figure: { full: "Fig. 03 · Viveiro CIRCA", short: "Fig. 03 · Viveiro" },
    image: homeImage("viveiro", "Mudas nativas enfileiradas no viveiro."),
  },
  {
    caption: "A Caatinga verde logo após as primeiras chuvas do ano.",
    figure: {
      full: "Fig. 04 · Caatinga na chuva",
      short: "Fig. 04 · Chuva",
    },
    image: homeImage(
      "caatinga-chuva",
      "Paisagem de Caatinga verde após as chuvas.",
    ),
  },
];
