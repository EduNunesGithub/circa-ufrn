import type { IconType } from "react-icons/lib";

import type { Copy } from "@/components/responsive-copy";

import { Entrance } from "@/components/entrance";
import { PlaceholderBadge } from "@/components/placeholder-badge";
import { IndicatorCard } from "@/components/research-monitoring/indicator-card";
import { SectionHeader } from "@/components/section-header";
import { Stagger } from "@/components/stagger";
import { StaggerItem } from "@/components/stagger-item";
import { indicators, monitoringContent } from "@/lib/research/monitoring";

export type IndicatorData = {
  bars: number[];
  caption: string;
  frequency: string;
  icon: IconType;
  name: Copy;
  unit: string;
  value: string;
};

export function ResearchMonitoring() {
  const { description, overline, placeholder, title } = monitoringContent;

  return (
    <section
      aria-labelledby="research-monitoring-title"
      className="overflow-hidden"
      id="monitoramento"
    >
      <Entrance
        className="gap-block max-w-page px-gutter py-section mx-auto flex flex-col"
        entrance="rise"
      >
        <div className="gap-group desktop:flex-row desktop:items-end desktop:justify-between flex flex-col">
          <SectionHeader
            description={description}
            descriptionOnMobile={false}
            overline={overline}
            title={title}
            titleId="research-monitoring-title"
          />
          <div className="shrink-0">
            <PlaceholderBadge label={placeholder} />
          </div>
        </div>
        <Stagger className="gap-item desktop:grid desktop:grid-cols-3 wide:grid-cols-4 flex flex-wrap">
          {indicators.map((indicator) => (
            <StaggerItem
              className="min-w-0 grow basis-60"
              key={indicator.caption}
            >
              <IndicatorCard {...indicator} />
            </StaggerItem>
          ))}
        </Stagger>
      </Entrance>
    </section>
  );
}
