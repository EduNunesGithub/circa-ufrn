import { ArrowLink } from "@/components/arrow-link";
import { SurvivalChart } from "@/components/home-results/survival-chart";
import { Metric } from "@/components/metric";
import { SectionHeader } from "@/components/section-header";
import { resultsContent, resultsMetrics } from "@/lib/home/results";

export function HomeResults() {
  const { description, link, overline, title } = resultsContent;

  return (
    <section
      aria-labelledby="home-results-title"
      className="border-border border-t"
    >
      <div className="gap-block max-w-page px-gutter py-section mx-auto flex flex-col">
        <SectionHeader
          description={description}
          link={link}
          overline={overline}
          title={title}
          titleId="home-results-title"
        />
        <div className="gap-block wide:grid wide:grid-cols-3 wide:items-start flex flex-col">
          <ul className="gap-item wide:col-span-2 grid grid-cols-2">
            {resultsMetrics.map((metric) => (
              <li key={metric.value}>
                <Metric {...metric} />
              </li>
            ))}
          </ul>
          <SurvivalChart />
        </div>
        <div className="desktop:hidden">
          <ArrowLink href={link.href} label={link.label} />
        </div>
      </div>
    </section>
  );
}
