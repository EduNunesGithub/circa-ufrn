import type { IconType } from "react-icons/lib";

import type { Copy } from "@/components/responsive-copy";

import { ApproachCard } from "@/components/about-approach/approach-card";
import { Entrance } from "@/components/entrance";
import { SectionHeader } from "@/components/section-header";
import { Stagger } from "@/components/stagger";
import { StaggerItem } from "@/components/stagger-item";
import { approachContent, approachFronts } from "@/lib/about/approach";

export type ApproachFront = {
  description: Copy;
  icon: IconType;
  title: string;
};

export function AboutApproach() {
  const { overline, title } = approachContent;

  return (
    <section aria-labelledby="about-approach-title">
      <Entrance
        className="gap-block max-w-page px-gutter py-section mx-auto flex flex-col"
        entrance="rise"
      >
        <SectionHeader
          overline={overline}
          title={title}
          titleId="about-approach-title"
        />
        <Stagger className="gap-item wide:grid-cols-4 grid grid-cols-2">
          {approachFronts.map((front) => (
            <StaggerItem key={front.title}>
              <ApproachCard {...front} />
            </StaggerItem>
          ))}
        </Stagger>
      </Entrance>
    </section>
  );
}
