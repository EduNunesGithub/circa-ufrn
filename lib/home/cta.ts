import { homeImage } from "@/lib/home/images";
import { siteInfo } from "@/lib/site-info";

export const ctaContent = {
  body: "Visitas guiadas para escolas, pesquisadores e comunidades, com percursos pelo viveiro e pelas áreas experimentais.",
  image: homeImage(
    "estacao",
    "Estação de campo do CIRCA, construção simples cercada pela Caatinga.",
  ),
  overline: "Visite o CIRCA",
  primaryAction: { href: "/visitacao", label: "Como visitar" },
  secondaryAction: {
    href: `mailto:${siteInfo.email}`,
    label: "Escrever para a equipe",
  },
  title: "Conheça a Caatinga em restauração de perto",
};
