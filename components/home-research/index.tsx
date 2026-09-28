import type { MediaImage } from "@/components/media-frame";
import type { Copy } from "@/components/responsive-copy";

import { Entrance } from "@/components/entrance";
import { ResearchFeature } from "@/components/home-research/research-feature";
import { ResearchLineRow } from "@/components/home-research/research-line-row";
import { SectionHeader } from "@/components/section-header";
import { Stagger } from "@/components/stagger";
import { StaggerItem } from "@/components/stagger-item";
import {
  featuredResearchLine,
  researchContent,
  researchLines,
} from "@/lib/home/research";

export type ResearchLine = {
  description: string;
  image: MediaImage;
  number: string;
  title: Copy;
};

export function HomeResearch() {
  const { href, link, overline, title } = researchContent;

  return (
    <section aria-labelledby="home-research-title">
      <Entrance
        className="gap-block max-w-page px-gutter py-section mx-auto flex flex-col"
        entrance="slide"
      >
        <SectionHeader
          link={{ href, label: link }}
          overline={overline}
          title={title}
          titleId="home-research-title"
        />
        <div className="gap-block wide:grid wide:min-h-140 wide:grid-cols-12 flex flex-col">
          <div className="wide:col-span-7">
            <ResearchFeature {...featuredResearchLine} href={href} />
          </div>
          <Stagger className="border-border wide:col-span-5 wide:justify-between flex flex-col border-b">
            {researchLines.map((line) => (
              <StaggerItem key={line.number}>
                <ResearchLineRow {...line} href={href} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Entrance>
    </section>
  );
}
