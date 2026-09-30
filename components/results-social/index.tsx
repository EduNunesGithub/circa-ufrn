import type { IconType } from "react-icons/lib";

import { Entrance } from "@/components/entrance";
import { Figure } from "@/components/figure";
import { Overline } from "@/components/overline";
import { ResponsiveCopy } from "@/components/responsive-copy";
import { Stagger } from "@/components/stagger";
import { StaggerItem } from "@/components/stagger-item";
import {
  socialContent,
  socialFigure,
  socialImpacts,
} from "@/lib/results/social";

export type SocialImpact = {
  description: string;
  icon: IconType;
  title: string;
};

export function ResultsSocial() {
  const { body, overline, title } = socialContent;

  return (
    <section aria-labelledby="results-social-title">
      <Entrance
        className="gap-block max-w-page px-gutter py-section wide:grid wide:grid-cols-2 wide:items-start mx-auto flex flex-col"
        entrance="slide"
      >
        <div className="gap-block wide:col-start-2 wide:flex wide:flex-col contents">
          <div className="gap-group order-1 flex flex-col">
            <div className="gap-label flex flex-col">
              <Overline>{overline}</Overline>
              <h2 className="text-text" id="results-social-title">
                <ResponsiveCopy copy={title} />
              </h2>
            </div>
            <p className="text-text-2 desktop:block hidden">{body}</p>
          </div>
          <Stagger className="border-border wide:border-t-0 order-3 flex flex-col border-t">
            {socialImpacts.map(({ description, icon: Icon, title }) => (
              <StaggerItem
                className="border-border gap-item py-inset desktop:items-start flex items-center border-b"
                key={title}
              >
                <span className="bg-primary-soft text-primary desktop:size-10 flex size-8 shrink-0 items-center justify-center rounded-full">
                  <Icon aria-hidden className="desktop:size-5 size-4" />
                </span>
                <div className="flex min-w-0 flex-col">
                  <h3 className="typo-card-title text-text">{title}</h3>
                  <p className="typo-small text-text-2 desktop:block hidden">
                    {description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
        <Figure
          {...socialFigure}
          captionOnMobile={false}
          className="wide:order-first order-2"
          mediaClassName="desktop:h-100 wide:h-130 h-60 rounded-sm"
          sizes="(min-width: 56.75rem) 50vw, 100vw"
        />
      </Entrance>
    </section>
  );
}
