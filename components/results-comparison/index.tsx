import { Entrance } from "@/components/entrance";
import { ResponsiveCopy } from "@/components/responsive-copy";
import { ComparisonSlider } from "@/components/results-comparison/comparison-slider";
import { SectionHeader } from "@/components/section-header";
import { comparisonContent } from "@/lib/results/comparison";

export function ResultsComparison() {
  const { caption, description, number, overline, title } = comparisonContent;

  return (
    <section aria-labelledby="results-comparison-title" className="bg-inverse">
      <Entrance
        className="gap-block max-w-page px-gutter py-section mx-auto flex flex-col"
        entrance="settle"
      >
        <SectionHeader
          description={description}
          descriptionOnMobile={false}
          overline={overline}
          title={title}
          titleId="results-comparison-title"
          tone="inverse"
        />
        <figure className="gap-block flex flex-col">
          <ComparisonSlider />
          <figcaption className="gap-label flex">
            <span className="typo-overline text-accent desktop:block hidden shrink-0">
              {number}
            </span>
            <span className="typo-caption text-text-inverse-2 min-w-0 flex-1">
              <ResponsiveCopy copy={caption} />
            </span>
          </figcaption>
        </figure>
      </Entrance>
    </section>
  );
}
