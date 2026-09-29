import Link from "next/link";
import { LuArrowUpRight, LuDownload } from "react-icons/lu";

import type { ResearchPublication } from "@/components/research-publications";

import { Tag } from "@/components/tag";
import { iconButtonClassName } from "@/lib/control-styles";
import { publicationsHref } from "@/lib/research/publications";

export function PublicationItem({
  authors,
  details,
  doi,
  journal,
  tag,
  title,
  year,
}: ResearchPublication) {
  return (
    <article className="border-border gap-label py-inset desktop:flex-row desktop:items-start desktop:gap-block flex flex-col border-b">
      <p className="typo-meta text-text desktop:block hidden w-22 shrink-0">
        {year}
      </p>
      <div className="gap-label flex min-w-0 flex-1 flex-col">
        <div className="gap-item flex items-center">
          <Tag label={tag.label} variant={tag.variant} />
          <p className="typo-meta text-text-muted desktop:hidden">{year}</p>
        </div>
        <h3 className="typo-card-title text-text">{title}</h3>
        <p className="typo-small text-text-2 desktop:block hidden">{authors}</p>
        <p className="typo-meta text-text-muted desktop:block hidden">
          {journal} · {details} · DOI {doi}
        </p>
      </div>
      <div className="gap-item flex items-center justify-between">
        <p className="typo-meta text-text-muted desktop:hidden min-w-0 uppercase">
          {journal}
        </p>
        <div className="gap-control flex shrink-0">
          <Link
            aria-label={`Ver a publicação “${title}”`}
            className={iconButtonClassName("default")}
            href={publicationsHref}
          >
            <LuArrowUpRight aria-hidden className="size-5" />
          </Link>
          <Link
            aria-label={`Baixar o PDF de “${title}”`}
            className={iconButtonClassName("default")}
            href={publicationsHref}
          >
            <LuDownload aria-hidden className="size-5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
