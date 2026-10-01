import type { IconType } from "react-icons/lib";

import { Breadcrumb } from "@/components/breadcrumb";
import { Entrance } from "@/components/entrance";
import { Overline } from "@/components/overline";
import { CategoryList } from "@/components/publications-hero/category-list";
import { ResponsiveCopy } from "@/components/responsive-copy";
import {
  contentCategories,
  publicationsBreadcrumb,
  publicationsHeroContent,
} from "@/lib/publications/hero";

export type ContentCategory = {
  count: string;
  href: string;
  icon: IconType;
  label: string;
  shortLabel: string;
};

export function PublicationsHero() {
  const { categoriesLabel, lead, overline, title } = publicationsHeroContent;

  return (
    <Entrance
      aria-labelledby="publications-hero-title"
      as="section"
      entrance="reveal"
      hero
    >
      <div className="gap-block max-w-page px-gutter pt-edge pb-section mx-auto flex flex-col">
        <Breadcrumb items={publicationsBreadcrumb} />
        <div className="gap-block wide:grid wide:grid-cols-12 wide:items-end flex flex-col">
          <div className="gap-group wide:col-span-7 flex flex-col">
            <div className="gap-label flex flex-col">
              <Overline>{overline}</Overline>
              <h1
                className="typo-display text-text max-w-168"
                id="publications-hero-title"
              >
                {title}
              </h1>
            </div>
            <p className="typo-lead text-text-2 max-w-168">
              <ResponsiveCopy copy={lead} />
            </p>
          </div>
          <CategoryList
            categories={contentCategories}
            className="wide:col-span-5"
            label={categoriesLabel}
          />
        </div>
      </div>
    </Entrance>
  );
}
