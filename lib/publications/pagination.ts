import type { PaginationContent } from "@/components/publications-pagination";

export const paginationContent: PaginationContent = {
  compactSummary: "Página 1 de 9",
  current: 1,
  label: "Paginação do acervo",
  nextLabel: "Próxima página",
  pages: [1, 2, 3, 4, null, 9],
  previousLabel: "Página anterior",
  summary: "Mostrando 1–12 de 108 itens",
};

export function pageHref(page: number): string {
  return page === 1 ? "/publicacoes" : `/publicacoes?pagina=${page}`;
}
