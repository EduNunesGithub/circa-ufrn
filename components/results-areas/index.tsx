import type { Copy } from "@/components/responsive-copy";
import type { BadgeStatus } from "@/components/status-badge";

import { Entrance } from "@/components/entrance";
import { PlaceholderBadge } from "@/components/placeholder-badge";
import { ResponsiveCopy } from "@/components/responsive-copy";
import { AreasTable } from "@/components/results-areas/areas-table";
import { SectionHeader } from "@/components/section-header";
import { Stagger } from "@/components/stagger";
import { StaggerItem } from "@/components/stagger-item";
import { StatusBadge } from "@/components/status-badge";
import { actionAreas, areasContent } from "@/lib/results/areas";

export type ActionArea = {
  hectares: string;
  name: string;
  period: string;
  region: string;
  start: string;
  status: BadgeStatus;
  type: Copy;
};

export function ResultsAreas() {
  const { link, overline, placeholder, title } = areasContent;

  return (
    <section aria-labelledby="results-areas-title">
      <Entrance
        className="gap-block max-w-page px-gutter py-section mx-auto flex flex-col"
        entrance="rise"
      >
        <SectionHeader
          link={link}
          overline={overline}
          title={title}
          titleId="results-areas-title"
        />
        <Stagger className="border-border wide:hidden flex flex-col border-t">
          {actionAreas.map((item) => (
            <StaggerItem
              className="border-border gap-label py-inset flex flex-col border-b"
              key={item.name}
            >
              <div className="gap-control flex items-center justify-between">
                <p className="typo-meta text-text-muted uppercase">
                  {item.hectares} ha · {item.period}
                </p>
                <StatusBadge status={item.status} />
              </div>
              <h3 className="typo-card-title text-text">{item.name}</h3>
              <p className="typo-small text-text-2">
                {item.region} · <ResponsiveCopy copy={item.type} />
              </p>
            </StaggerItem>
          ))}
        </Stagger>
        <AreasTable />
        <PlaceholderBadge label={placeholder} />
      </Entrance>
    </section>
  );
}
