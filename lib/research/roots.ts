import type { RootPlant, SoilLayer } from "@/components/research-roots";

export const rootsContent = {
  body: {
    full: "Na Caatinga, a água que resta depois das chuvas está nas camadas mais profundas do solo. Mudas produzidas em tubos de até um metro chegam ao campo com raízes longas o suficiente para alcançá-la — e atravessam a primeira seca com muito mais chance de sobreviver.",
    short:
      "A água que resta depois das chuvas está nas camadas profundas do solo. Mudas produzidas em tubos de até um metro chegam ao campo com raízes longas o suficiente para alcançá-la.",
  },
  bullets: [
    "Tubos de PVC de 60 a 100 cm, reutilizáveis",
    "Plantio em covas abertas com perfuratriz",
    "Menor necessidade de irrigação após o plantio",
  ],
  link: { href: "/publicacoes", label: "Ler o artigo completo" },
  overline: "Tecnologia em destaque",
  title: "Mudas de raízes alongadas",
};

export const rootProfileContent = {
  overline: "Diagrama",
  placeholder: "Profundidades ilustrativas",
  summary:
    "Perfil do solo em três camadas. A raiz da muda convencional fica na superfície seca, com 38% de sobrevivência à primeira seca; a raiz alongada chega à camada úmida, com 72%.",
  title: {
    full: "Perfil do solo e alcance das raízes no plantio",
    short: "Perfil do solo e alcance das raízes",
  },
};

export const soilLayers: SoilLayer[] = [
  {
    color: "dry",
    label: { full: "Superfície seca · 0–30 cm", short: "Seca · 0–30 cm" },
  },
  {
    color: "middle",
    label: {
      full: "Camada intermediária · 30–70 cm",
      short: "Intermediária · 30–70 cm",
    },
  },
  {
    color: "moist",
    label: { full: "Camada úmida · 70 cm ou mais", short: "Úmida · +70 cm" },
  },
];

export const rootPlants: RootPlant[] = [
  {
    depth: "shallow",
    description: "Raiz de ~20 cm, restrita à camada que seca primeiro.",
    survival: "38%",
    title: "Muda convencional",
  },
  {
    depth: "deep",
    description: {
      full: "Raiz de até 1 m, alcança a umidade residual profunda.",
      short: "Raiz de até 1 m, alcança a umidade profunda.",
    },
    survival: "72%",
    title: "Muda de raiz alongada",
  },
];

export const survivalLabel = {
  full: "sobrevivem à 1ª seca",
  short: "vivas",
};
