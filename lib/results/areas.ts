import type { ActionArea } from "@/components/results-areas";

export const areasContent = {
  columns: {
    area: "Área",
    hectares: "Área (ha)",
    region: "Município / região",
    start: "Início",
    status: "Status",
    type: "Tipo",
  },
  link: { href: "/galeria", label: "Ver galeria de campo" },
  overline: "Áreas de atuação",
  placeholder: "Áreas e datas ilustrativas",
  title: "Onde estamos",
};

export const actionAreas: ActionArea[] = [
  {
    hectares: "12",
    name: "EXP-03 · Grade de tratamentos",
    period: "Desde 2020",
    region: "Seridó/RN",
    start: "2020",
    status: "active",
    type: "Área experimental",
  },
  {
    hectares: "8",
    name: "EXP-05 · Núcleos em pastagem",
    period: "Desde 2021",
    region: "Seridó/RN",
    start: "2021",
    status: "active",
    type: "Propriedade parceira",
  },
  {
    hectares: "4",
    name: "EXP-01 · Parcelas-piloto",
    period: "2016–2019",
    region: "Agreste/RN",
    start: "2016",
    status: "done",
    type: "Unidade de conservação",
  },
  {
    hectares: "12",
    name: "EXP-07 · Mata ciliar",
    period: "2026",
    region: "Vale do Açu/RN",
    start: "2026",
    status: "planned",
    type: { full: "Margem de rio temporário", short: "Rio temporário" },
  },
];
