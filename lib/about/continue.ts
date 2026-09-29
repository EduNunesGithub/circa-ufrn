import type { NextPage } from "@/components/about-continue";

import { homeImage } from "@/lib/home/images";

export const continueContent = {
  overline: "Continue explorando",
};

export const nextPages: NextPage[] = [
  {
    description: "Conheça quem pesquisa, planta e monitora.",
    href: "/equipe",
    image: homeImage(
      "trilha-equipe",
      "Equipe do CIRCA caminhando por uma trilha na Caatinga.",
    ),
    title: "Equipe e colaboradores",
  },
  {
    description: "Instituições e comunidades que sustentam o trabalho.",
    href: "/parceiros",
    image: homeImage("oficina", "Oficina comunitária sobre restauração."),
    title: "Parceiros e apoiadores",
  },
];
