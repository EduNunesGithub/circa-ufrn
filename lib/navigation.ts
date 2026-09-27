export type LinkSection = {
  heading: string;
  links: SiteLink[];
};

export type ResponsiveLink = {
  fullLabel: string;
  href: string;
  label: string;
};

export type SiteLink = {
  footerLabel: string;
  href: string;
  label: string;
  menuLabel: string;
};

const home: SiteLink = {
  footerLabel: "Início",
  href: "/",
  label: "Início",
  menuLabel: "Início",
};
const about: SiteLink = {
  footerLabel: "Sobre o CIRCA",
  href: "/sobre",
  label: "Sobre",
  menuLabel: "Sobre o CIRCA",
};
const caatinga: SiteLink = {
  footerLabel: "A Caatinga",
  href: "/a-caatinga",
  label: "A Caatinga",
  menuLabel: "A Caatinga",
};
const research: SiteLink = {
  footerLabel: "Pesquisa e restauração",
  href: "/pesquisa",
  label: "Pesquisa",
  menuLabel: "Pesquisa e restauração",
};
const results: SiteLink = {
  footerLabel: "Resultados e impacto",
  href: "/resultados",
  label: "Resultados",
  menuLabel: "Resultados e impacto",
};
const publications: SiteLink = {
  footerLabel: "Publicações e conteúdos",
  href: "/publicacoes",
  label: "Publicações",
  menuLabel: "Publicações",
};
const team: SiteLink = {
  footerLabel: "Equipe e colaboradores",
  href: "/equipe",
  label: "Equipe",
  menuLabel: "Equipe",
};
const partners: SiteLink = {
  footerLabel: "Parceiros e apoiadores",
  href: "/parceiros",
  label: "Parceiros",
  menuLabel: "Parceiros",
};
const gallery: SiteLink = {
  footerLabel: "Galeria de campo",
  href: "/galeria",
  label: "Galeria",
  menuLabel: "Galeria de campo",
};
const visit: SiteLink = {
  footerLabel: "Visitação e contato",
  href: "/visitacao",
  label: "Visitação",
  menuLabel: "Visitação e contato",
};

export const headerLinks: SiteLink[] = [
  about,
  caatinga,
  research,
  results,
  publications,
  team,
  partners,
  gallery,
];

export const menuLinks: SiteLink[] = [home, ...headerLinks, visit];

export const footerSections: LinkSection[] = [
  { heading: "O CIRCA", links: [about, team, partners, visit] },
  {
    heading: "Conhecimento",
    links: [caatinga, research, results, publications, gallery],
  },
];

export const legalLinks: ResponsiveLink[] = [
  {
    fullLabel: "Acessibilidade",
    href: "/acessibilidade",
    label: "Acessibilidade",
  },
  {
    fullLabel: "Créditos das imagens",
    href: "/creditos",
    label: "Créditos",
  },
  {
    fullLabel: "Política de privacidade",
    href: "/privacidade",
    label: "Privacidade",
  },
];

export const headerCta = { href: visit.href, label: "Visite o CIRCA" };

export const menuCta = { href: visit.href, label: "Planeje sua visita" };

export const backToTopHref = "#top";

const transparentHeaderPaths = new Set(["/"]);

export function hasTransparentHeader(pathname: string): boolean {
  return transparentHeaderPaths.has(pathname);
}

export function isActivePath(pathname: string, href: string): boolean {
  if (href === "/") {
    return pathname === "/";
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function isWebUrl(href: string): boolean {
  return href.startsWith("http");
}
