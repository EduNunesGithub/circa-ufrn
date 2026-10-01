import type { Person } from "@/components/person-compact";
import type { PublicationTag } from "@/components/tag";
import type { IconLink } from "@/lib/site-info";

import { ArticleByline } from "@/components/article-hero/article-byline";
import { Breadcrumb } from "@/components/breadcrumb";
import { Entrance } from "@/components/entrance";
import { Figure, type FigureData } from "@/components/figure";
import { type Copy, ResponsiveCopy } from "@/components/responsive-copy";
import { Tag } from "@/components/tag";
import { articleBreadcrumb, articleHeroContent } from "@/lib/article/hero";

export type ArticleHeroContent = {
  authors: Person[];
  date: Copy;
  figure: FigureData;
  lead: Copy;
  share: { label: string; links: IconLink[] };
  tag: PublicationTag;
  title: string;
};

export function ArticleHero() {
  const { authors, date, figure, lead, share, tag, title } = articleHeroContent;

  return (
    <Entrance
      aria-labelledby="article-title"
      as="section"
      entrance="reveal"
      hero
    >
      <div className="gap-block max-w-page px-gutter pt-edge mx-auto flex flex-col">
        <Breadcrumb items={articleBreadcrumb} />
        <div className="gap-group flex flex-col">
          <div className="gap-item flex flex-wrap items-center">
            <Tag label={tag.label} variant={tag.variant} />
            <p className="typo-meta text-text-muted uppercase">
              <ResponsiveCopy copy={date} />
            </p>
          </div>
          <h1 className="typo-display text-text max-w-246" id="article-title">
            {title}
          </h1>
          <p className="typo-lead text-text-2 max-w-190">
            <ResponsiveCopy copy={lead} />
          </p>
        </div>
        <ArticleByline authors={authors} share={share} />
        <Figure
          {...figure}
          mediaClassName="max-desktop:-mx-gutter desktop:h-100 desktop:rounded-sm wide:h-150 h-70"
          preload
          sizes="(min-width: 45rem) 92vw, 100vw"
        />
      </div>
    </Entrance>
  );
}
