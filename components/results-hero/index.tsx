import { Breadcrumb } from "@/components/breadcrumb";
import { Entrance } from "@/components/entrance";
import { Overline } from "@/components/overline";
import { ResponsiveCopy } from "@/components/responsive-copy";
import { DataNotice } from "@/components/results-hero/data-notice";
import { resultsBreadcrumb, resultsHeroContent } from "@/lib/results/hero";

export function ResultsHero() {
  const { lead, overline, title } = resultsHeroContent;

  return (
    <Entrance
      aria-labelledby="results-hero-title"
      as="section"
      entrance="reveal"
      hero
    >
      <div className="gap-block max-w-page px-gutter pt-edge pb-section mx-auto flex flex-col">
        <Breadcrumb items={resultsBreadcrumb} />
        <div className="gap-block wide:grid wide:grid-cols-3 wide:items-end flex flex-col">
          <div className="gap-group wide:col-span-2 flex flex-col">
            <div className="gap-label flex flex-col">
              <Overline>{overline}</Overline>
              <h1
                className="typo-display text-text max-w-190"
                id="results-hero-title"
              >
                <ResponsiveCopy copy={title} />
              </h1>
            </div>
            <p className="typo-lead text-text-2 max-w-190">
              <ResponsiveCopy copy={lead} />
            </p>
          </div>
          <DataNotice className="wide:col-span-1" />
        </div>
      </div>
    </Entrance>
  );
}
