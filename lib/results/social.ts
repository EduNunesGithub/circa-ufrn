import {
  LuHandCoins,
  LuMessageCircle,
  LuSchool,
  LuUsers,
} from "react-icons/lu";

import type { FigureData } from "@/components/figure";
import type { SocialImpact } from "@/components/results-social";

import { homeImage } from "@/lib/home/images";

export const socialContent = {
  body: "A restauração só dura quando faz sentido para quem vive no território. Por isso, parte dos resultados do CIRCA se mede em pessoas formadas, sementes vendidas e escolas que passaram a cuidar de seus próprios viveiros.",
  overline: "Resultados socioambientais",
  title: {
    full: "Restauração que gera renda, conhecimento e pertencimento",
    short: "Restauração que gera renda e pertencimento",
  },
};

export const socialFigure: FigureData = {
  caption:
    "Família parceira que mantém um viveiro comunitário de espécies nativas.",
  image: homeImage(
    "comunidade",
    "Família agricultora segura mudas nativas diante de sua casa de taipa.",
  ),
  number: "Fig. 04",
};

export const socialImpacts: SocialImpact[] = [
  {
    description:
      "Coletores comunitários fornecem sementes para o viveiro e para outros projetos.",
    icon: LuHandCoins,
    title: "Renda com sementes nativas",
  },
  {
    description: "Escolas mantêm viveiros e usam a Caatinga como tema de aula.",
    icon: LuSchool,
    title: "Viveiros escolares",
  },
  {
    description:
      "Viveiristas e agentes de campo formados em produção e plantio.",
    icon: LuUsers,
    title: "Formação técnica",
  },
  {
    description:
      "Evidências levadas a conselhos municipais e órgãos ambientais.",
    icon: LuMessageCircle,
    title: "Diálogo com gestores",
  },
];
