import { LuFileText, LuTable } from "react-icons/lu";

import type { DownloadData } from "@/components/download-item";

export const reportsContent = {
  body: "Relatórios anuais, planilhas de monitoramento e protocolos estão disponíveis sob licença aberta, com citação recomendada.",
  overline: "Relatórios e dados",
  title: {
    full: "Baixe os relatórios e as bases de dados",
    short: "Relatórios e bases de dados",
  },
};

export const reports: DownloadData[] = [
  {
    href: "/publicacoes",
    icon: LuFileText,
    meta: { full: "PDF · 2,4 MB · Abr 2026", short: "PDF · 2,4 MB" },
    title: {
      full: "Relatório anual de atividades 2025",
      short: "Relatório anual 2025",
    },
  },
  {
    href: "/publicacoes",
    icon: LuFileText,
    meta: { full: "PDF · 2,1 MB · Abr 2025", short: "PDF · 2,1 MB" },
    title: {
      full: "Relatório anual de atividades 2024",
      short: "Relatório anual 2024",
    },
  },
  {
    href: "/publicacoes",
    icon: LuTable,
    meta: { full: "CSV · 840 KB · Dados abertos", short: "CSV · 840 KB" },
    title: {
      full: "Base de monitoramento EXP-03 (2020–2025)",
      short: "Base de monitoramento EXP-03",
    },
  },
  {
    href: "/publicacoes",
    icon: LuFileText,
    meta: { full: "PDF · 1,6 MB · 2024", short: "PDF · 1,6 MB" },
    title: {
      full: "Protocolo de produção de mudas de raízes alongadas",
      short: "Protocolo de raízes alongadas",
    },
  },
];
