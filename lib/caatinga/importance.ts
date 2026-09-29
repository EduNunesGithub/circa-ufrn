import { LuDroplets, LuLayers, LuLeaf, LuUsers } from "react-icons/lu";

import type { ImportanceReason } from "@/components/caatinga-importance";

export const importanceContent = {
  overline: "Importância",
  title: "Por que ela importa",
};

export const importanceReasons: ImportanceReason[] = [
  {
    description: {
      full: "A vegetação protege nascentes e aumenta a infiltração da pouca chuva que cai.",
      short: "Protege nascentes e aumenta a infiltração.",
    },
    icon: LuDroplets,
    title: "Água",
  },
  {
    description: {
      full: "Raízes e serrapilheira seguram o solo raso e evitam a desertificação.",
      short: "Segura o solo raso e evita a desertificação.",
    },
    icon: LuLayers,
    title: "Solo",
  },
  {
    description: {
      full: "Raízes profundas e troncos estocam carbono mesmo em anos secos.",
      short: "Estoca carbono mesmo em anos secos.",
    },
    icon: LuLeaf,
    title: "Carbono",
  },
  {
    description: {
      full: "Alimento, forragem, madeira, mel e remédios para milhões de famílias.",
      short: "Alimento, forragem, mel e remédios.",
    },
    icon: LuUsers,
    title: "Pessoas",
  },
];
