import type { ResearchLineDetail } from "@/components/research-lines";

import { homeImage } from "@/lib/home/images";

export const linesContent = {
  link: { href: "/galeria", label: "Projetos desta linha" },
  overline: "Linhas de pesquisa",
  title: "Seis frentes, uma pergunta: o que funciona no semiárido?",
};

export const researchLineDetails: ResearchLineDetail[] = [
  {
    caption:
      "Parcelas com mudas identificadas: cada etiqueta registra espécie, tratamento e data de plantio.",
    description:
      "Compara técnicas de plantio, arranjos de espécies e épocas para devolver cobertura e função ao solo.",
    image: homeImage(
      "parcelas",
      "Pesquisador agachado entre mudas identificadas em uma parcela experimental.",
    ),
    number: "01",
    tags: ["Experimentos replicados", "Nucleação", "Longo prazo"],
    title: {
      full: "Restauração ecológica de áreas degradadas",
      short: "Restauração de áreas degradadas",
    },
  },
  {
    caption: "Sementes nativas separadas por espécie antes dos testes.",
    description: "Coleta, beneficiamento, germinação e protocolos de viveiro.",
    image: homeImage("sementes", "Sementes nativas da Caatinga."),
    number: "02",
    title: "Sementes e produção de mudas",
  },
  {
    caption: "Medições de raízes e de resposta à seca no laboratório.",
    description:
      "Como as plantas enfrentam a seca — e como ajudá-las a enraizar.",
    image: homeImage("laboratorio", "Laboratório de sementes do CIRCA."),
    number: "03",
    title: {
      full: "Ecofisiologia e sistemas radiculares",
      short: "Ecofisiologia e raízes",
    },
  },
  {
    caption: "Galo-de-campina registrado em área em restauração.",
    description:
      "Polinizadores, dispersores e o retorno da fauna às áreas restauradas.",
    image: homeImage("galo-de-campina", "Galo-de-campina pousado em um galho."),
    number: "04",
    title: "Biodiversidade e interações",
  },
  {
    caption: "Leito seco que concentra a água nas poucas semanas de chuva.",
    description: "Umidade, erosão e carbono em áreas degradadas e restauradas.",
    image: homeImage("rio-seco", "Leito de rio seco na Caatinga."),
    number: "05",
    title: "Solo, água e paisagem",
  },
  {
    caption: "Encontro com famílias agricultoras sobre restauração.",
    description:
      "Viveiros comunitários, saberes locais e restauração em propriedades rurais.",
    image: homeImage("comunidade", "Famílias agricultoras reunidas no campo."),
    number: "06",
    title: "Restauração com comunidades",
  },
];
