import type { Copy } from "@/components/responsive-copy";

import { MilestoneItem } from "@/components/about-history/milestone-item";
import { Entrance } from "@/components/entrance";
import { Figure } from "@/components/figure";
import { PlaceholderBadge } from "@/components/placeholder-badge";
import { SectionHeader } from "@/components/section-header";
import { Stagger } from "@/components/stagger";
import { StaggerItem } from "@/components/stagger-item";
import { historyContent, historyPhotos, milestones } from "@/lib/about/history";
import { cn } from "@/lib/cn";
import { focusRingClassName } from "@/lib/control-styles";

export type Milestone = {
  highlight?: boolean;
  text: Copy;
  title: string;
  year: string;
};

export function AboutHistory() {
  const { description, overline, photosLabel, placeholder, title } =
    historyContent;

  return (
    <section aria-labelledby="about-history-title">
      <Entrance
        className="gap-block max-w-page px-gutter py-section mx-auto flex flex-col"
        entrance="rise"
      >
        <div className="gap-group desktop:flex-row desktop:items-end flex flex-col">
          <div className="min-w-0 flex-1">
            <SectionHeader
              description={description}
              descriptionOnMobile={false}
              overline={overline}
              title={title}
              titleId="about-history-title"
            />
          </div>
          <PlaceholderBadge label={placeholder} />
        </div>
        <Stagger
          as="ol"
          className="desktop:grid desktop:grid-cols-3 desktop:gap-x-block desktop:gap-y-block wide:grid-cols-6 flex flex-col"
        >
          {milestones.map((milestone) => (
            <StaggerItem className="group" key={milestone.year}>
              <MilestoneItem {...milestone} />
            </StaggerItem>
          ))}
        </Stagger>
        <div
          aria-label={photosLabel}
          className={cn(
            "max-desktop:-mx-gutter max-desktop:px-gutter overflow-x-auto",
            focusRingClassName("default"),
          )}
          role="region"
          tabIndex={0}
        >
          <ul className="gap-item desktop:grid desktop:grid-cols-3 desktop:gap-block flex">
            {historyPhotos.map((photo) => (
              <li className="desktop:w-auto w-68 shrink-0" key={photo.number}>
                <Figure
                  {...photo}
                  mediaClassName="desktop:h-70 h-50 rounded-sm"
                  sizes="(min-width: 45rem) 33vw, 272px"
                />
              </li>
            ))}
          </ul>
        </div>
      </Entrance>
    </section>
  );
}
