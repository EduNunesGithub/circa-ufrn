import type { Copy } from "@/components/responsive-copy";

import { MilestoneItem } from "@/components/about-history/milestone-item";
import { Entrance } from "@/components/entrance";
import { Figure } from "@/components/figure";
import { PhotoCarousel } from "@/components/photo-carousel";
import { PlaceholderBadge } from "@/components/placeholder-badge";
import { SectionHeader } from "@/components/section-header";
import { Stagger } from "@/components/stagger";
import { StaggerItem } from "@/components/stagger-item";
import { historyContent, historyPhotos, milestones } from "@/lib/about/history";

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
    <section aria-labelledby="about-history-title" className="overflow-hidden">
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
        <PhotoCarousel
          id="about-history-photos"
          label={photosLabel}
          total={historyPhotos.length}
        >
          {historyPhotos.map((photo) => (
            <Figure
              {...photo}
              key={photo.number}
              mediaClassName="desktop:h-70 h-50 rounded-sm"
              sizes="(min-width: 45rem) 40vw, 272px"
            />
          ))}
        </PhotoCarousel>
      </Entrance>
    </section>
  );
}
