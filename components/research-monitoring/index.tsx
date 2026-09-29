import type { IconType } from "react-icons/lib";

import type { Copy } from "@/components/responsive-copy";

import { Entrance } from "@/components/entrance";
import { PlaceholderBadge } from "@/components/placeholder-badge";
import { IndicatorCard } from "@/components/research-monitoring/indicator-card";
import { SectionHeader } from "@/components/section-header";
import { Stagger } from "@/components/stagger";
import { StaggerItem } from "@/components/stagger-item";
import { cn } from "@/lib/cn";
import { focusRingClassName } from "@/lib/control-styles";
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
  const { description, overline, placeholder, seriesLabel, title } =
    monitoringContent;

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
        <div
          aria-label={seriesLabel}
          className={cn(
            "max-desktop:-mx-gutter max-desktop:overflow-x-auto",
            focusRingClassName("default"),
            "-outline-offset-4",
          )}
          role="region"
          tabIndex={0}
        >
          <Stagger className="gap-item max-desktop:w-max max-desktop:px-gutter desktop:grid desktop:grid-cols-2 wide:grid-cols-4 flex">
            {indicators.map((indicator) => (
              <StaggerItem
                className="desktop:w-auto w-68 shrink-0"
                key={indicator.caption}
              >
                <IndicatorCard {...indicator} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Entrance>
    </section>
  );
}
