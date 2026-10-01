import {
  LuBookOpen,
  LuClipboardList,
  LuFileText,
  LuFolder,
  LuNewspaper,
  LuPlay,
} from "react-icons/lu";

import type { BreadcrumbItem } from "@/components/breadcrumb";
import type { ContentCategory } from "@/components/publications-hero";

export const publicationsBreadcrumb: BreadcrumbItem[] = [
  { href: "/", label: "Início" },
  { label: "Publicações e conteúdos" },
];

export const publicationsHeroContent = {
  categoriesLabel: "Tipos de conteúdo",
  lead: {
    full: "Artigos científicos, relatórios, notícias, materiais educativos, vídeos e documentos institucionais — organizados por tipo e sempre com acesso livre.",
    short:
      "Artigos, relatórios, notícias, materiais educativos, vídeos e documentos — sempre com acesso livre.",
  },
  overline: "Publicações e conteúdos",
  title: "Tudo o que aprendemos, aberto a quem precisa",
};

export const contentCategories: ContentCategory[] = [
  {
    count: "24",
    href: "#artigos",
    icon: LuFileText,
    label: "Artigos científicos",
    shortLabel: "Artigos",
  },
  {
    count: "08",
    href: "#recentes",
    icon: LuClipboardList,
    label: "Relatórios",
    shortLabel: "Relatórios",
  },
  {
    count: "36",
    href: "#recentes",
    icon: LuNewspaper,
    label: "Notícias",
    shortLabel: "Notícias",
  },
  {
    count: "12",
    desktopOnly: true,
    href: "#materiais",
    icon: LuBookOpen,
    label: "Materiais educativos",
    shortLabel: "Educativos",
  },
  {
    count: "10",
    href: "#videos",
    icon: LuPlay,
    label: "Vídeos",
    shortLabel: "Vídeos",
  },
  {
    count: "18",
    desktopOnly: true,
    href: "#documentos",
    icon: LuFolder,
    label: "Documentos",
    shortLabel: "Documentos",
  },
];

export const publicationsFilterContent = {
  all: { count: "108", href: "/publicacoes", label: "Todos" },
  label: "Filtrar por tipo de conteúdo",
  sort: "Ordem: mais recentes",
};
