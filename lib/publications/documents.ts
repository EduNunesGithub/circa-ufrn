import { LuFileText } from "react-icons/lu";

import type { InstitutionalDocument } from "@/components/publications-documents";

export const documentsContent = {
  body: "Regimento, planos de trabalho, relatórios de gestão e termos de cooperação.",
  overline: "Documentos institucionais",
  title: "Transparência",
};

export const documents: InstitutionalDocument[] = [
  {
    href: "/publicacoes",
    icon: LuFileText,
    meta: { full: "PDF · 480 KB · 2021", short: "PDF · 480 KB" },
    title: { full: "Regimento interno do CIRCA", short: "Regimento interno" },
  },
  {
    href: "/publicacoes",
    icon: LuFileText,
    meta: { full: "PDF · 1,2 MB · 2025", short: "PDF · 1,2 MB" },
    title: "Plano de trabalho 2025–2028",
  },
  {
    href: "/publicacoes",
    icon: LuFileText,
    meta: { full: "PDF · 2,4 MB · 2026", short: "PDF · 2,4 MB" },
    title: "Relatório de gestão 2025",
  },
  {
    href: "/publicacoes",
    icon: LuFileText,
    meta: { full: "PDF · 320 KB · 2024", short: "PDF · 320 KB" },
    title: "Política de dados abertos",
  },
  {
    desktopOnly: true,
    href: "/publicacoes",
    icon: LuFileText,
    meta: "PDF · 890 KB · 2026",
    title: "Termos de cooperação vigentes",
  },
  {
    desktopOnly: true,
    href: "/publicacoes",
    icon: LuFileText,
    meta: "PDF · 3,1 MB · 2026",
    title: "Identidade visual e uso da marca",
  },
];
