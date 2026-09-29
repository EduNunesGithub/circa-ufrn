import {
  LuFlaskConical,
  LuGraduationCap,
  LuLandmark,
  LuTrees,
} from "react-icons/lu";

import type { Institution } from "@/components/about-institutions";

export const institutionsContent = {
  description:
    "O CIRCA integra a estrutura de pesquisa da UFRN e atua em rede com programas de pós-graduação, laboratórios e unidades de conservação.",
  link: { href: "/parceiros", label: "Parceiros e apoiadores" },
  overline: "Vínculos",
  title: "Instituições envolvidas",
};

export const institutions: Institution[] = [
  {
    description: {
      full: "Abriga o centro, seus laboratórios e a gestão administrativa.",
      short: "Laboratórios, equipe e gestão do centro.",
    },
    href: "https://www.ufrn.br",
    icon: LuLandmark,
    name: "Universidade Federal do Rio Grande do Norte",
    role: "Instituição sede",
  },
  {
    description: {
      full: "Mestrado e doutorado com projetos desenvolvidos nas áreas do CIRCA.",
      short: "Mestrado e doutorado nas áreas do CIRCA.",
    },
    icon: LuGraduationCap,
    name: "Programa de pós-graduação associado",
    role: "Formação",
  },
  {
    description: {
      full: "Infraestrutura compartilhada para análises e experimentos controlados.",
      short: "Infraestrutura compartilhada.",
    },
    icon: LuFlaskConical,
    name: {
      full: "Laboratórios de ecologia, sementes e solos",
      short: "Ecologia, sementes e solos",
    },
    role: "Laboratórios",
  },
  {
    description: {
      full: "Áreas de referência e locais de estudo de longo prazo.",
      short: "Áreas de referência e estudo.",
    },
    icon: LuTrees,
    name: "Unidades de conservação parceiras",
    role: "Território",
  },
];
