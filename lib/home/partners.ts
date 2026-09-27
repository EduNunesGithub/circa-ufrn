import { LuUsers } from "react-icons/lu";

import type { PartnerData } from "@/components/partner-badge";

import { partners } from "@/lib/site-info";

export const partnersContent = {
  link: {
    href: "/parceiros",
    label: { full: "Parceiros e apoiadores", short: "Parceiros" },
  },
  overline: "09 — Parceiros",
  placeholder: "Logos ilustrativos",
  title: "Uma rede de instituições sustenta a restauração",
};

const homeLabels: Record<string, string> = { UFRN: "UFRN · Sede" };

export const homePartners: PartnerData[] = [
  ...partners.map(({ icon, name }) => ({
    icon,
    name: homeLabels[name] ?? name,
  })),
  { icon: LuUsers, name: "Associação comunitária" },
];
