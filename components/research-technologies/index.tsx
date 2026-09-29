import type { IconType } from "react-icons/lib";

import type { Copy } from "@/components/responsive-copy";
import type { BadgeStatus } from "@/components/status-badge";

import { Entrance } from "@/components/entrance";
import { TechnologyItem } from "@/components/research-technologies/technology-item";
import { SectionHeader } from "@/components/section-header";
import { Stagger } from "@/components/stagger";
import { StaggerItem } from "@/components/stagger-item";
import { technologies, technologiesContent } from "@/lib/research/technologies";

export type TechnologyData = {
  description: Copy;
  icon: IconType;
  id: string;
  status: BadgeStatus;
  title: Copy;
};

export function ResearchTechnologies() {
  const { link, overline, title } = technologiesContent;

  return (
    <section
      aria-labelledby="research-technologies-title"
      className="bg-bg-alt"
      id="tecnologias"
    >
      <Entrance
        className="gap-block max-w-page px-gutter py-section mx-auto flex flex-col"
        entrance="settle"
      >
        <SectionHeader
          link={link}
          overline={overline}
          title={title}
          titleId="research-technologies-title"
        />
        <Stagger className="desktop:grid desktop:grid-cols-2 desktop:gap-block wide:grid-cols-4 flex flex-col">
          {technologies.map((technology) => (
            <StaggerItem key={technology.id}>
              <TechnologyItem {...technology} />
            </StaggerItem>
          ))}
        </Stagger>
      </Entrance>
    </section>
  );
}
