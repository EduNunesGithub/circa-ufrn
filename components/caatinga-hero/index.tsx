import { LuArrowDown } from "react-icons/lu";

import { Breadcrumb } from "@/components/breadcrumb";
import { ButtonLink } from "@/components/button-link";
import { SeasonLabel } from "@/components/caatinga-hero/season-label";
import { Entrance } from "@/components/entrance";
import { MediaFrame, type MediaImage } from "@/components/media-frame";
import { type Copy, ResponsiveCopy } from "@/components/responsive-copy";
import {
  caatingaAnchors,
  caatingaBreadcrumb,
  caatingaHeroContent,
  drySeason,
  rainySeason,
} from "@/lib/caatinga/hero";

export type SeasonPanel = {
  image: MediaImage;
  label: Copy;
};

const panelSizes = "(min-width: 45rem) 50vw, 100vw";

export function CaatingaHero() {
  const { anchorsLabel, lead, title } = caatingaHeroContent;

  return (
    <Entrance
      aria-labelledby="caatinga-hero-title"
      as="section"
      className="bg-inverse desktop:min-h-160 relative isolate flex min-h-180 flex-col justify-end overflow-hidden"
      entrance="reveal"
      hero
    >
      <div className="desktop:grid-cols-2 desktop:grid-rows-1 absolute inset-0 -z-10 grid grid-rows-2">
        <MediaFrame image={drySeason.image} preload sizes={panelSizes}>
          <SeasonLabel
            className="desktop:top-22 desktop:justify-start top-18"
            label={drySeason.label}
          />
        </MediaFrame>
        <MediaFrame image={rainySeason.image} preload sizes={panelSizes}>
          <SeasonLabel
            className="desktop:top-22 top-4"
            label={rainySeason.label}
          />
        </MediaFrame>
        <div
          aria-hidden
          className="from-inverse/60 via-inverse/0 to-inverse/95 absolute inset-0 bg-linear-to-b via-40%"
        />
      </div>
      <div className="gap-block max-w-page px-gutter py-section mx-auto flex w-full flex-wrap items-end justify-between">
        <div className="gap-group flex max-w-190 min-w-0 flex-col">
          <Breadcrumb items={caatingaBreadcrumb} tone="inverse" />
          <h1
            className="typo-display text-text-inverse"
            id="caatinga-hero-title"
          >
            {title}
          </h1>
          <p className="typo-lead text-text-inverse-2 max-w-150">
            <ResponsiveCopy copy={lead} />
          </p>
        </div>
        <nav aria-label={anchorsLabel} className="desktop:block hidden">
          <ul className="gap-group flex flex-wrap">
            {caatingaAnchors.map(({ href, label }) => (
              <li key={href}>
                <ButtonLink
                  href={href}
                  icon={LuArrowDown}
                  label={label}
                  tone="inverse"
                  variant="outline"
                />
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </Entrance>
  );
}
