import { LuMap, LuMountain, LuSun } from "react-icons/lu";

import type {
  StateTile,
  TerritoryFact,
  TerritoryLevel,
} from "@/components/caatinga-territory";

export const territoryContent = {
  description: {
    full: "O bioma ocupa a maior parte do interior do Nordeste e alcança o norte de Minas Gerais. Entre planícies, serras e lajedos, forma um mosaico de paisagens com enclaves úmidos — os brejos de altitude.",
    short:
      "O bioma ocupa a maior parte do interior do Nordeste e alcança o norte de Minas Gerais, com serras, lajedos e brejos de altitude.",
  },
  overline: "Território",
  title: "Onde está a Caatinga",
};

export const territoryFacts: TerritoryFact[] = [
  { icon: LuMap, text: "Faz fronteira com o Cerrado e a Mata Atlântica" },
  { icon: LuMountain, text: "Inclui serras, chapadas e brejos de altitude" },
  { icon: LuSun, text: "Clima semiárido, com alta insolação o ano inteiro" },
];

export const territoryMapContent = {
  note: "Grade esquemática: cada estado é um quadrado de mesmo tamanho, posicionado de forma aproximada. Não representa área nem limites reais.",
  overline: "Mapa conceitual",
  placeholder: {
    full: "Faixas ilustrativas",
    short: "Mapa conceitual · faixas ilustrativas",
  },
  title: "Participação da Caatinga no território de cada estado",
};

export const territoryLevels: TerritoryLevel[] = [
  {
    id: "high",
    label: { full: "Mais de 80%", short: "Mais de 80% do estado" },
  },
  { id: "mid", label: "Entre 40% e 80%" },
  { id: "low", label: "Menos de 10%" },
];

export const stateTiles: StateTile[] = [
  { code: "MA", level: "low", name: "Maranhão" },
  { code: "CE", level: "high", name: "Ceará" },
  { code: "RN", level: "high", name: "Rio Grande do Norte" },
  { code: "PI", level: "mid", name: "Piauí" },
  { code: "PE", level: "high", name: "Pernambuco" },
  { code: "PB", level: "high", name: "Paraíba" },
  { code: "BA", level: "mid", name: "Bahia" },
  { code: "SE", level: "mid", name: "Sergipe" },
  { code: "AL", level: "mid", name: "Alagoas" },
  { code: "MG", level: "low", name: "Minas Gerais" },
];
