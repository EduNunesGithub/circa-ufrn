import { LuBookOpen, LuFlaskConical, LuSprout } from "react-icons/lu";

import type { AboutPillarData } from "@/components/home-about";

import { homeImage } from "@/lib/home/images";

export const aboutContent = {
  figure: {
    caption: {
      full: "Imburana (Commiphora leptophloeos), árvore da Caatinga que dá nome ao centro.",
      short: "Imburana, árvore da Caatinga que dá nome ao centro.",
    },
    image: homeImage(
      "imburana",
      "Imburana de tronco avermelhado em meio à vegetação da Caatinga.",
    ),
    number: "Fig. 02",
  },
  link: { href: "/sobre", label: "Sobre o CIRCA" },
  overline: "01 — Quem somos",
  statement: {
    full: "O CIRCA é o centro da UFRN dedicado a entender e restaurar a Caatinga — unindo experimentos de campo, produção de mudas nativas e educação para devolver função ecológica ao semiárido.",
    short:
      "O CIRCA é o centro da UFRN dedicado a entender e restaurar a Caatinga — unindo experimentos de campo, mudas nativas e educação.",
  },
};

export const aboutPillars: AboutPillarData[] = [
  {
    description: {
      full: "Experimentos de longo prazo em áreas degradadas, com protocolos e dados abertos.",
      short: "Experimentos de longo prazo, dados abertos.",
    },
    icon: LuFlaskConical,
    title: "Pesquisa aplicada",
  },
  {
    description: {
      full: "Sementes e mudas nativas, técnicas adaptadas à seca e ao solo do semiárido.",
      short: "Sementes e mudas nativas adaptadas à seca.",
    },
    icon: LuSprout,
    title: "Restauração ecológica",
  },
  {
    description: {
      full: "Formação de estudantes, visitas guiadas e materiais para escolas e comunidades.",
      short: "Estudantes, escolas e comunidades.",
    },
    icon: LuBookOpen,
    title: "Educação e difusão",
  },
];
