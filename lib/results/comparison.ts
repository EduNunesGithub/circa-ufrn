import { homeImage } from "@/lib/home/images";

export const comparisonContent = {
  caption: {
    full: "Área experimental EXP-03, mesma posição de câmera. Imagens ilustrativas.",
    short: "Arraste para comparar. Imagens ilustrativas.",
  },
  description:
    "Arraste o controle para comparar a área experimental em 2019, antes do plantio, e em 2025.",
  number: "Fig. 06",
  overline: "Antes e depois",
  title: "A mesma encosta, seis anos depois",
};

export const comparisonSlider = {
  after: {
    image: homeImage(
      "restaurada",
      "A mesma encosta em 2025, coberta por árvores nativas jovens ao longo de uma trilha.",
    ),
    label: { full: "2025 · Seis anos depois", short: "2025" },
  },
  before: {
    image: homeImage(
      "degradada",
      "Encosta em 2019, com solo exposto, rachado e erodido antes do plantio.",
    ),
    label: { full: "2019 · Antes do plantio", short: "2019" },
  },
  label: "Posição da comparação entre 2019 e 2025",
};
