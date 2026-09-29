import type { MediaImage } from "@/components/media-frame";
import type { Copy } from "@/components/responsive-copy";

export const horizonContent = {
  image: {
    alt: "Silhueta de cactos e árvores da Caatinga contra o céu do entardecer.",
    src: "/about-assets/horizonte.jpg",
  } satisfies MediaImage,
  overline: "Horizonte 2035",
  title: "Uma Caatinga em recuperação, medida e compartilhada",
};

export const horizonGoals: Copy[] = [
  {
    full: "Áreas restauradas monitoradas por pelo menos dez anos",
    short: "Áreas restauradas monitoradas por dez anos",
  },
  {
    full: "Protocolos adotados por viveiros e órgãos públicos da região",
    short: "Protocolos adotados por viveiros e órgãos públicos",
  },
  {
    full: "Uma geração de profissionais formada em restauração do semiárido",
    short: "Uma geração formada em restauração do semiárido",
  },
];
