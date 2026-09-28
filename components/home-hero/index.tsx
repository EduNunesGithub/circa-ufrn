import type { MediaImage } from "@/components/media-frame";

import { ButtonLink } from "@/components/button-link";
import { Entrance } from "@/components/entrance";
import { HeroCarousel } from "@/components/home-hero/hero-carousel";
import { Overline } from "@/components/overline";
import { type Copy, ResponsiveCopy } from "@/components/responsive-copy";
import { heroContent, heroSlides } from "@/lib/home/hero";

export type HeroSlide = {
  caption: string;
  figure: Copy;
  image: MediaImage;
};

export function HomeHero() {
  const { lead, overline, primaryAction, secondaryAction, title } = heroContent;

  return (
    <Entrance
      aria-labelledby="home-hero-title"
      as="section"
      className="bg-inverse relative isolate flex min-h-170 flex-col justify-end overflow-hidden"
      entrance="reveal"
      hero
    >
      <HeroCarousel slides={heroSlides}>
        <div className="gap-group flex max-w-190 min-w-0 flex-col">
          <Overline tone="inverse">
            <ResponsiveCopy copy={overline} />
          </Overline>
          <h1 className="typo-display text-text-inverse" id="home-hero-title">
            {title}
          </h1>
          <p className="typo-lead text-text-inverse-2 max-w-150">
            <ResponsiveCopy copy={lead} />
          </p>
          <div className="gap-item flex">
            <ButtonLink
              className="desktop:flex-none flex-1"
              href={primaryAction.href}
              label={<ResponsiveCopy copy={primaryAction.label} />}
              tone="inverse"
            />
            <ButtonLink
              className="desktop:flex-none flex-1"
              href={secondaryAction.href}
              label={<ResponsiveCopy copy={secondaryAction.label} />}
              tone="inverse"
              variant="outline"
            />
          </div>
        </div>
      </HeroCarousel>
    </Entrance>
  );
}
