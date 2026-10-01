import Link from "next/link";

import { PageArrow } from "@/components/publications-pagination/page-arrow";
import { cn } from "@/lib/cn";
import { focusRingClassName } from "@/lib/control-styles";
import { pageHref, paginationContent } from "@/lib/publications/pagination";

export type PaginationContent = {
  compactSummary: string;
  current: number;
  label: string;
  nextLabel: string;
  pages: (null | number)[];
  previousLabel: string;
  summary: string;
};

export function PublicationsPagination() {
  const {
    compactSummary,
    current,
    label,
    nextLabel,
    pages,
    previousLabel,
    summary,
  } = paginationContent;
  const last = Math.max(...pages.map((page) => page ?? 0));
  const previousHref = current > 1 ? pageHref(current - 1) : undefined;
  const nextHref = current < last ? pageHref(current + 1) : undefined;

  return (
    <nav aria-label={label} className="border-border border-t">
      <div className="gap-group max-w-page px-gutter pt-inset pb-edge mx-auto flex items-center justify-between">
        <p className="typo-meta text-text-muted desktop:block hidden uppercase">
          {summary}
        </p>
        <ul className="gap-control desktop:flex hidden items-center">
          <li>
            <PageArrow
              direction="previous"
              href={previousHref}
              label={previousLabel}
              variant="ghost"
            />
          </li>
          {pages.map((page, index) => (
            <li key={page ?? `gap-${index}`}>
              {page === null ? (
                <span
                  aria-hidden
                  className="typo-numeral text-text-2 flex size-10 items-center justify-center"
                >
                  …
                </span>
              ) : (
                <Link
                  aria-current={page === current ? "page" : undefined}
                  className={cn(
                    "typo-numeral ease-standard flex size-10 items-center justify-center rounded-sm transition-colors duration-250",
                    page === current
                      ? "bg-primary text-text-inverse"
                      : "text-text-2 hover:bg-bg-alt",
                    focusRingClassName("default"),
                  )}
                  href={pageHref(page)}
                >
                  <span className="sr-only">Página </span>
                  {page}
                </Link>
              )}
            </li>
          ))}
          <li>
            <PageArrow
              direction="next"
              href={nextHref}
              label={nextLabel}
              variant="ghost"
            />
          </li>
        </ul>
        <PageArrow
          className="desktop:hidden"
          direction="previous"
          href={previousHref}
          label={previousLabel}
          variant="outline"
        />
        <p className="typo-meta text-text desktop:hidden uppercase">
          {compactSummary}
        </p>
        <PageArrow
          className="desktop:hidden"
          direction="next"
          href={nextHref}
          label={nextLabel}
          variant="filled"
        />
      </div>
    </nav>
  );
}
