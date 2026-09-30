import { Entrance } from "@/components/entrance";
import { Metric } from "@/components/metric";
import { PlaceholderBadge } from "@/components/placeholder-badge";
import { SectionHeader } from "@/components/section-header";
import { Stagger } from "@/components/stagger";
import { StaggerItem } from "@/components/stagger-item";
import { indicators, indicatorsContent } from "@/lib/results/indicators";

export function ResultsIndicators() {
  const { description, overline, placeholder, title } = indicatorsContent;

  return (
    <section aria-labelledby="results-indicators-title" className="bg-inverse">
      <Entrance
        className="gap-block max-w-page px-gutter py-section mx-auto flex flex-col"
        entrance="rise"
      >
        <SectionHeader
          description={description}
          descriptionOnMobile={false}
          overline={overline}
          title={title}
          titleId="results-indicators-title"
          tone="inverse"
        />
        <Stagger className="gap-x-item gap-y-block wide:grid-cols-4 grid grid-cols-2">
          {indicators.map((indicator) => (
            <StaggerItem key={indicator.value}>
              <Metric {...indicator} tone="inverse" />
            </StaggerItem>
          ))}
        </Stagger>
        <div className="desktop:hidden">
          <PlaceholderBadge label={placeholder} />
        </div>
      </Entrance>
    </section>
  );
}
