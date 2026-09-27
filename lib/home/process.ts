import type { ProcessStepData } from "@/components/home-process";

import { homeImage } from "@/lib/home/images";

export const processContent = {
  description: {
    full: "Cada etapa do processo gera dados e é testada em campo. O que funciona vira protocolo aberto para outros viveiros, gestores e comunidades.",
    short:
      "Cada etapa gera dados e é testada em campo antes de virar protocolo.",
  },
  link: {
    href: "/pesquisa",
    label: { full: "Conheça a metodologia", short: "Metodologia" },
  },
  overline: "03 — Como trabalhamos",
  title: "Da semente à paisagem",
};

export const processSteps: ProcessStepData[] = [
  {
    description: {
      full: "Matrizes marcadas em áreas conservadas garantem diversidade genética.",
      short: "Matrizes marcadas garantem diversidade genética.",
    },
    image: homeImage(
      "sementes",
      "Sementes nativas da Caatinga sendo separadas.",
    ),
    title: "Coleta de sementes",
  },
  {
    description: {
      full: "Produção de mudas de mais de 30 espécies nativas em ciclos anuais.",
      short: "Mais de 30 espécies nativas por ciclo.",
    },
    image: homeImage("viveiro", "Mudas nativas enfileiradas no viveiro."),
    title: "Viveiro",
  },
  {
    description: {
      full: "Mudas em tubos longos chegam ao campo com raízes mais profundas.",
      short: "Tubos longos para raízes profundas.",
    },
    image: homeImage(
      "raizes-alongadas",
      "Mudas cultivadas em tubos longos para alongar as raízes.",
    ),
    title: "Raízes alongadas",
  },
  {
    description: {
      full: "Parcelas comparam técnicas, espécies e épocas de plantio.",
      short: "Parcelas comparam técnicas e épocas.",
    },
    image: homeImage(
      "plantio",
      "Plantio de mudas nativas em parcela experimental.",
    ),
    title: "Plantio experimental",
  },
  {
    description: {
      full: "Sobrevivência, crescimento e retorno da fauna medidos por anos.",
      short: "Sobrevivência e fauna medidas por anos.",
    },
    image: homeImage(
      "monitoramento",
      "Pesquisadora medindo o crescimento de uma muda em campo.",
    ),
    title: "Monitoramento",
  },
];
