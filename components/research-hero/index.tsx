import type { Copy } from "@/components/responsive-copy";

import { Breadcrumb } from "@/components/breadcrumb";
import { Entrance } from "@/components/entrance";
import { Figure } from "@/components/figure";
import { Overline } from "@/components/overline";
import { AnchorNav } from "@/components/research-hero/anchor-nav";
import { ResponsiveCopy } from "@/components/responsive-copy";
import {
  researchAnchors,
  researchBreadcrumb,
  researchHeroContent,
  researchHeroFigure,
} from "@/lib/research/hero";

export type PageAnchor = {
  desktopOnly?: boolean;
  id: string;
  label: Copy;
};

export function ResearchHero() {
  const { anchorsLabel, lead, overline, title } = researchHeroContent;

  return (
    <Entrance
      aria-labelledby="research-hero-title"
      as="section"
      entrance="reveal"
      hero
    >
      <div className="gap-block max-w-page px-gutter pt-section mx-auto flex flex-col">
        <Breadcrumb items={researchBreadcrumb} />
        <div className="gap-block wide:grid wide:grid-cols-12 wide:items-end flex flex-col">
          <div className="gap-group wide:col-span-7 flex flex-col">
            <Overline>{overline}</Overline>
            <h1 className="typo-display text-text" id="research-hero-title">
              {title}
            </h1>
            <p className="typo-lead text-text-2 max-w-150">
              <ResponsiveCopy copy={lead} />
            </p>
          </div>
          <Figure
            {...researchHeroFigure}
            captionOnMobile={false}
            className="wide:col-span-5"
            mediaClassName="desktop:h-90 h-58 rounded-sm"
            preload
            sizes="(min-width: 56.75rem) 40vw, 100vw"
          />
        </div>
        <AnchorNav anchors={researchAnchors} label={anchorsLabel} />
      </div>
    </Entrance>
  );
}
