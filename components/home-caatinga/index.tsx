import type { MediaImage } from "@/components/media-frame";
import type { Copy } from "@/components/responsive-copy";

import { Entrance } from "@/components/entrance";
import { MediaFrame } from "@/components/media-frame";
import { Metric } from "@/components/metric";
import { ResponsiveCopy } from "@/components/responsive-copy";
import { SectionHeader } from "@/components/section-header";
import {
  caatingaComparison,
  caatingaContent,
  caatingaFacts,
} from "@/lib/home/caatinga";

export type ComparisonPanel = {
  image: MediaImage;
  label: Copy;
};

export function HomeCaatinga() {
  const { description, overline, title } = caatingaContent;

  return (
    <section
      aria-labelledby="home-caatinga-title"
      className="bg-inverse overflow-hidden"
    >
      <Entrance
        className="gap-block max-w-page px-gutter py-section wide:grid wide:grid-cols-12 mx-auto flex flex-col"
        entrance="settle"
      >
        <div className="gap-block wide:col-span-5 flex min-w-0 flex-col">
          <SectionHeader
            description={description}
            overline={overline}
            title={title}
            titleId="home-caatinga-title"
            tone="inverse"
          />
          <ul className="gap-item grid grid-cols-2">
            {caatingaComparison.map(({ image, label }) => (
              <li key={image.src}>
                <figure className="gap-label flex flex-col">
                  <MediaFrame
                    className="desktop:h-45 h-42 rounded-sm"
                    image={image}
                    sizes="(min-width: 56.75rem) 264px, 50vw"
                  />
                  <figcaption className="typo-meta text-text-inverse-2 uppercase">
                    <ResponsiveCopy copy={label} />
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
        <ul className="gap-item wide:col-span-7 grid min-w-0 grid-cols-2 content-start">
          {caatingaFacts.map((fact) => (
            <li key={fact.value}>
              <Metric {...fact} tone="inverse" />
            </li>
          ))}
        </ul>
      </Entrance>
    </section>
  );
}
