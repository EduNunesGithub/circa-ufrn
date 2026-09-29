import {
  LuClipboardList,
  LuDroplets,
  LuHand,
  LuMapPin,
  LuShovel,
  LuSprout,
} from "react-icons/lu";

import type { MethodStepData } from "@/components/research-method";

export const methodContent = {
  description:
    "Um ciclo de restauração leva de dois a três anos até as mudas se estabelecerem — e o monitoramento continua por pelo menos uma década.",
  overline: "Método",
  title: "Do diagnóstico ao monitoramento",
};

export const methodSteps: MethodStepData[] = [
  {
    description:
      "Diagnóstico do solo, da vegetação remanescente e escolha de árvores-mãe.",
    icon: LuMapPin,
    meta: "Etapa 01 · 3 meses",
    title: "Seleção de áreas e matrizes",
  },
  {
    description:
      "Coleta na estação seca, beneficiamento e testes de germinação.",
    icon: LuHand,
    meta: "Etapa 02 · estação seca",
    title: "Coleta de sementes",
  },
  {
    description: "Mudas em tubos longos, rustificadas ao sol antes do plantio.",
    highlighted: true,
    icon: LuSprout,
    meta: "Etapa 03 · 6–10 meses",
    title: "Produção de mudas",
  },
  {
    description:
      "Covas profundas abertas no início das chuvas, com cobertura morta.",
    icon: LuShovel,
    meta: "Etapa 04 · início das chuvas",
    title: "Preparo e plantio",
  },
  {
    description:
      "Irrigação de salvamento na primeira seca e controle de competidoras.",
    icon: LuDroplets,
    meta: "Etapa 05 · 1º ano",
    title: "Manutenção",
  },
  {
    description:
      "Sobrevivência, crescimento, cobertura e fauna medidos em campanhas.",
    icon: LuClipboardList,
    meta: "Etapa 06 · anual · 10 anos",
    title: "Monitoramento",
  },
];
