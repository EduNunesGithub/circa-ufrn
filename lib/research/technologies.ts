import { LuBird, LuCircleDot, LuHand, LuSprout } from "react-icons/lu";

import type { TechnologyData } from "@/components/research-technologies";

export const technologiesContent = {
  link: { href: "/publicacoes", label: "Ver protocolos" },
  overline: { full: "Tecnologias de restauração", short: "Tecnologias" },
  title: "Técnicas em teste e validadas",
};

export const technologies: TechnologyData[] = [
  {
    description: {
      full: "Tubos longos para raízes profundas; maior sobrevivência na primeira seca.",
      short: "Maior sobrevivência na primeira seca.",
    },
    icon: LuSprout,
    id: "raizes-alongadas",
    status: "validated",
    title: { full: "Mudas de raízes alongadas", short: "Raízes alongadas" },
  },
  {
    description: {
      full: "Ilhas de diversidade com plantio adensado que irradiam regeneração.",
      short: "Ilhas de diversidade que irradiam regeneração.",
    },
    icon: LuCircleDot,
    id: "nucleacao",
    status: "testing",
    title: "Nucleação",
  },
  {
    description: {
      full: "Atraem aves dispersoras e aumentam a chuva de sementes.",
      short: "Atraem aves dispersoras de sementes.",
    },
    icon: LuBird,
    id: "poleiros",
    status: "testing",
    title: "Poleiros artificiais",
  },
  {
    description: {
      full: "Sementes lançadas no solo: custo menor, útil em grandes áreas.",
      short: "Custo menor para grandes áreas.",
    },
    icon: LuHand,
    id: "semeadura-direta",
    status: "testing",
    title: "Semeadura direta",
  },
];
