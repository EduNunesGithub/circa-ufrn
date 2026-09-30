import type { Copy } from "@/components/responsive-copy";

import { Breadcrumb } from "@/components/breadcrumb";
import { Entrance } from "@/components/entrance";
import { Figure } from "@/components/figure";
import { Overline } from "@/components/overline";
import { PlaceholderBadge } from "@/components/placeholder-badge";
import { ResponsiveCopy } from "@/components/responsive-copy";
import { Stagger } from "@/components/stagger";
import { StaggerItem } from "@/components/stagger-item";
import {
  aboutBreadcrumb,
  aboutFacts,
  aboutHeroContent,
  aboutHeroFigure,
} from "@/lib/about/hero";

export type AboutFact = {
  label: string;
  placeholder?: Copy;
  value: string;
};

export function AboutHero() {
  const { lead, overline, title } = aboutHeroContent;

  return (
    <Entrance
      aria-labelledby="about-hero-title"
      as="section"
      entrance="reveal"
      hero
    >
      <div className="gap-block max-w-page px-gutter pt-edge pb-section mx-auto flex flex-col">
        <Breadcrumb items={aboutBreadcrumb} />
        <div className="gap-block wide:grid wide:grid-cols-2 wide:items-start flex flex-col">
          <div className="gap-group flex flex-col">
            <Overline>{overline}</Overline>
            <h1 className="typo-display text-text" id="about-hero-title">
              {title}
            </h1>
            <p className="typo-lead text-text-2">
              <ResponsiveCopy copy={lead} />
            </p>
          </div>
          <Figure
            {...aboutHeroFigure}
            mediaClassName="desktop:h-90 wide:h-110 h-60"
            preload
            sizes="(min-width: 56.75rem) 50vw, 100vw"
          />
        </div>
        <Stagger
          as="dl"
          className="border-border-strong desktop:grid desktop:grid-cols-2 desktop:gap-x-block wide:grid-cols-4 wide:gap-x-0 wide:border-b flex flex-col border-t"
        >
          {aboutFacts.map(({ label, placeholder, value }) => (
            <StaggerItem
              as="div"
              className="border-border gap-label py-inset wide:border-b-0 wide:border-l wide:px-inset wide:first:border-l-0 wide:first:pl-0 wide:last:pr-0 flex flex-col border-b"
              key={label}
            >
              <dt className="gap-control flex min-h-6 flex-wrap items-center justify-between">
                <span className="typo-meta text-text-muted uppercase">
                  {label}
                </span>
                {placeholder && <PlaceholderBadge label={placeholder} />}
              </dt>
              <dd className="typo-card-title text-text">{value}</dd>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </Entrance>
  );
}
