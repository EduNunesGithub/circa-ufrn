import type { MediaImage } from "@/components/media-frame";

import { ContinueCard } from "@/components/about-continue/continue-card";
import { Entrance } from "@/components/entrance";
import { Stagger } from "@/components/stagger";
import { StaggerItem } from "@/components/stagger-item";
import { continueContent, nextPages } from "@/lib/about/continue";

export type NextPage = {
  description: string;
  href: string;
  image: MediaImage;
  title: string;
};

export function AboutContinue() {
  return (
    <section aria-labelledby="about-continue-title">
      <Entrance
        className="gap-block max-w-page px-gutter pt-section pb-edge mx-auto flex flex-col"
        entrance="rise"
      >
        <h2 className="typo-overline text-secondary" id="about-continue-title">
          {continueContent.overline}
        </h2>
        <Stagger className="gap-item desktop:grid-cols-2 desktop:gap-block grid">
          {nextPages.map((page) => (
            <StaggerItem key={page.href}>
              <ContinueCard {...page} />
            </StaggerItem>
          ))}
        </Stagger>
      </Entrance>
    </section>
  );
}
