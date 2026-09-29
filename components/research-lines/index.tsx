import type { MediaImage } from "@/components/media-frame";
import type { Copy } from "@/components/responsive-copy";

import { Entrance } from "@/components/entrance";
import { LinesAccordion } from "@/components/research-lines/lines-accordion";
import { SectionHeader } from "@/components/section-header";
import { linesContent, researchLineDetails } from "@/lib/research/lines";

export type ResearchLineDetail = {
  caption: string;
  description: string;
  image: MediaImage;
  number: string;
  tags?: string[];
  title: Copy;
};

export function ResearchLines() {
  const { link, overline, title } = linesContent;

  return (
    <section aria-labelledby="research-lines-title" id="linhas">
      <Entrance
        className="max-w-page px-gutter py-section mx-auto"
        entrance="slide"
      >
        <LinesAccordion
          header={
            <SectionHeader
              overline={overline}
              title={title}
              titleId="research-lines-title"
            />
          }
          lines={researchLineDetails}
          link={link}
        />
      </Entrance>
    </section>
  );
}
