import {
  LuGraduationCap,
  LuLandmark,
  LuMicroscope,
  LuSprout,
} from "react-icons/lu";

import type { ApproachFront } from "@/components/about-approach";

export const approachContent = {
  overline: "Atuação",
  title: "Como atuamos",
};

export const approachFronts: ApproachFront[] = [
  {
    description: {
      full: "Experimentos de campo e laboratório sobre sementes, raízes, solo e fauna.",
      short: "Campo e laboratório: sementes, raízes, solo e fauna.",
    },
    icon: LuMicroscope,
    title: "Pesquisa",
  },
  {
    description: {
      full: "Produção de mudas, plantios demonstrativos e assistência a iniciativas locais.",
      short: "Mudas, plantios demonstrativos e assistência técnica.",
    },
    icon: LuSprout,
    title: "Restauração",
  },
  {
    description: {
      full: "Orientação de estudantes, cursos para viveiristas e técnicos de campo.",
      short: "Estudantes, viveiristas e técnicos de campo.",
    },
    icon: LuGraduationCap,
    title: "Formação",
  },
  {
    description: {
      full: "Evidências e protocolos para órgãos ambientais e programas de restauração.",
      short: "Evidências e protocolos para órgãos ambientais.",
    },
    icon: LuLandmark,
    title: "Políticas públicas",
  },
];
