import type {
  ArticleTextContent,
  PublicationSheetContent,
} from "@/components/article-body";

import { homeImage } from "@/lib/home/images";

export const publicationSheet: PublicationSheetContent = {
  cite: { href: "#", label: "Copiar citação" },
  download: {
    href: "/publicacoes",
    label: {
      full: "Baixar artigo (PDF · 2,1 MB)",
      short: "Baixar artigo (PDF)",
    },
  },
  placeholder: "Referência ilustrativa",
  rows: [
    { desktopOnly: true, label: "Tipo", value: "Artigo científico" },
    { label: "Periódico", value: "Restoration Ecology" },
    { desktopOnly: true, label: "Publicado", value: "14 mar 2026" },
    { label: "DOI", value: "10.0000/rec.00000" },
    { label: "Licença", value: "CC BY 4.0" },
  ],
  title: "Ficha da publicação",
};

export const articleText: ArticleTextContent = {
  findings: {
    after:
      "A espécie também importa, mas menos do que se imaginava: dentro de um mesmo tratamento, a variação entre espécies foi menor que a diferença entre técnicas. Isso simplifica a recomendação para viveiros e projetos da região.",
    body: {
      full: "Depois de 24 meses, 72% das mudas de raízes alongadas estavam vivas, contra 38% das convencionais. A diferença foi maior justamente nos anos com chuva abaixo da média — quando a restauração mais costuma falhar.",
      short:
        "Depois de 24 meses, 72% das mudas de raízes alongadas estavam vivas, contra 38% das convencionais — diferença maior justamente nos anos de pouca chuva.",
    },
    figure: {
      caption: {
        full: "Plantio em cova profunda aberta com perfuratriz, início da estação chuvosa.",
        short: "Plantio em cova profunda, início das chuvas.",
      },
      credit: "Foto: Acervo CIRCA",
      image: homeImage(
        "plantio",
        "Técnico de campo planta uma muda nativa em cova profunda.",
      ),
      number: "Fig. 02",
    },
    id: "o-que-encontramos",
    title: "O que encontramos",
  },
  intro: {
    id: "introducao",
    label: "Introdução",
    paragraphs: [
      {
        full: "Plantar árvores na Caatinga é, antes de tudo, uma aposta contra a primeira seca. Nas áreas degradadas do Seridó, até oito em cada dez mudas convencionais morrem nos meses secos que se seguem ao plantio — e a restauração precisa recomeçar.",
        short:
          "Plantar árvores na Caatinga é, antes de tudo, uma aposta contra a primeira seca. Nas áreas degradadas do Seridó, até oito em cada dez mudas convencionais morrem nos meses secos que se seguem ao plantio.",
      },
      {
        full: "Entre 2020 e 2025, a equipe do CIRCA acompanhou 96 parcelas em que foram testadas oito combinações de técnica e espécie. A pergunta era simples: o que mais pesa para uma muda sobreviver — a espécie escolhida ou a forma como ela chega ao campo?",
        short:
          "Entre 2020 e 2025, a equipe acompanhou 96 parcelas com oito combinações de técnica e espécie. A pergunta: o que mais pesa para uma muda sobreviver?",
      },
    ],
  },
  method: {
    body: "Metade das mudas foi produzida em tubos longos, de até um metro, e a outra metade em sacos plásticos convencionais. Em cada grupo, variaram a época de plantio e o uso de cobertura morta sobre a cova.",
    id: "o-que-foi-testado",
    items: [
      {
        full: "Oito tratamentos com 12 repetições cada",
        short: "Oito tratamentos com 12 repetições",
      },
      {
        full: "24 espécies nativas de árvores e arbustos",
        short: "24 espécies nativas",
      },
      {
        full: "Medições de sobrevivência a cada seis meses",
        short: "Medições a cada seis meses",
      },
    ],
    title: "O que foi testado",
  },
  nextSteps: {
    body: {
      full: "O experimento segue sendo monitorado. A próxima fase testa tubos reutilizáveis de menor custo e a combinação da técnica com núcleos de diversidade, para acelerar a chegada de fauna às áreas restauradas.",
      short:
        "A próxima fase testa tubos reutilizáveis de menor custo e a combinação com núcleos de diversidade.",
    },
    id: "proximos-passos",
    title: "Próximos passos",
  },
  quote: {
    author: {
      avatar: "/publications-assets/retrato-luisa.jpg",
      name: "Luísa Andrade",
      role: {
        full: "Pesquisadora, primeira autora do estudo",
        short: "Pesquisadora, primeira autora",
      },
    },
    text: {
      full: "A raiz é o que a muda leva de reserva para atravessar a seca. Quanto mais fundo ela chega, mais tempo ganha.",
      short: "A raiz é o que a muda leva de reserva para atravessar a seca.",
    },
  },
  summary: {
    items: [
      {
        full: "Raiz longa quase dobra a sobrevivência na primeira seca.",
        short: "Raiz longa quase dobra a sobrevivência.",
      },
      {
        full: "O efeito é maior em anos de pouca chuva.",
        short: "O efeito é maior em anos secos.",
      },
      {
        full: "A técnica pesa mais do que a espécie escolhida.",
        short: "Técnica pesa mais que espécie.",
      },
    ],
    label: "Em resumo",
  },
};

export const articleRail = {
  tocLabel: "Nesta página",
  topics: ["Mudas de raízes alongadas", "Experimentos", "Sobrevivência"],
  topicsLabel: "Temas",
};
