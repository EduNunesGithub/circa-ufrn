import type { MediaImage } from "@/components/media-frame";

import { homeImage } from "@/lib/home/images";

export const restorationContent = {
  description: {
    full: "Unidades de conservação protegem as áreas mais íntegras. Onde a degradação já avançou, é preciso ajudar a natureza: escolher espécies certas, produzir mudas resistentes e acompanhar cada área por anos. É esse o trabalho do CIRCA.",
    short:
      "Onde a degradação já avançou, é preciso ajudar a natureza: escolher espécies certas, produzir mudas resistentes e acompanhar cada área por anos.",
  },
  overline: "Conservação e restauração",
  primaryAction: { href: "/pesquisa", label: "Como restauramos" },
  secondaryAction: { href: "/resultados", label: "Ver resultados" },
  title: "Conservar o que resta, restaurar o que foi perdido",
};

export const restorationImages: MediaImage[] = [
  homeImage(
    "plantio",
    "Pesquisador ajoelhado plantando uma muda nativa em solo seco.",
  ),
  homeImage(
    "restaurada",
    "Pesquisadora caminhando por uma trilha entre árvores de uma área em restauração.",
  ),
];
