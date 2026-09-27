import type { IconType } from "react-icons/lib";

import {
  LuBuilding2,
  LuCoins,
  LuInstagram,
  LuLandmark,
  LuLinkedin,
  LuMail,
  LuSprout,
  LuTrees,
  LuYoutube,
} from "react-icons/lu";

export type ExternalResource = {
  href: string;
  label: string;
};

export type IconLink = {
  href: string;
  icon: IconType;
  label: string;
};

export type Partner = {
  icon: IconType;
  name: string;
  showOnMobile: boolean;
};

export const siteInfo = {
  about:
    "Centro de pesquisa da Universidade Federal do Rio Grande do Norte dedicado a compreender, restaurar e divulgar a Caatinga.",
  addressLines: [
    "Universidade Federal do Rio Grande do Norte",
    "Natal/RN · Brasil",
  ],
  descriptorLines: ["Centro Imburana de Restauração", "da Caatinga"],
  email: "contato@circa.ufrn.br",
  hours: "Seg–sex · 8h às 17h",
  hoursShort: "Seg–sex, 8h–17h",
  name: "CIRCA",
  phone: "+55 (84) 0000-0000",
  university: "UFRN",
};

export const socialLinks: IconLink[] = [
  { href: "#", icon: LuInstagram, label: "Instagram" },
  { href: "#", icon: LuYoutube, label: "YouTube" },
  { href: "#", icon: LuLinkedin, label: "LinkedIn" },
  { href: `mailto:${siteInfo.email}`, icon: LuMail, label: "E-mail" },
];

export const usefulLinks: ExternalResource[] = [
  { href: "https://www.ufrn.br", label: "Portal da UFRN" },
  { href: "#", label: "Pós-Graduação em Ecologia" },
  { href: "https://lattes.cnpq.br", label: "Plataforma Lattes" },
  { href: "#", label: "Dados abertos do CIRCA" },
];

export const partners: Partner[] = [
  { icon: LuLandmark, name: "UFRN", showOnMobile: true },
  { icon: LuCoins, name: "Fomento federal", showOnMobile: true },
  { icon: LuBuilding2, name: "Fundação estadual", showOnMobile: true },
  { icon: LuTrees, name: "Unidade de conservação", showOnMobile: false },
  { icon: LuSprout, name: "Rede de sementes", showOnMobile: true },
];
