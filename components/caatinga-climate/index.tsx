import type { IconType } from "react-icons/lib";

import { RainfallChart } from "@/components/caatinga-climate/rainfall-chart";
import { Entrance } from "@/components/entrance";
import { PlaceholderBadge } from "@/components/placeholder-badge";
import { SectionHeader } from "@/components/section-header";
import { climateContent, climateFacts } from "@/lib/caatinga/climate";

export type ClimateFact = {
  icon: IconType;
  label: string;
  value: string;
};

export type RainfallMonth = {
  initial: string;
  name: string;
  rainy?: boolean;
  value: number;
};

export function CaatingaClimate() {
  const { confirmation, description, overline, title } = climateContent;

  return (
    <section
      aria-labelledby="caatinga-climate-title"
      className="bg-bg-alt overflow-hidden"
      id="clima"
    >
      <Entrance
        className="gap-block max-w-page px-gutter py-section wide:grid wide:grid-cols-3 wide:items-start mx-auto flex flex-col"
        entrance="settle"
      >
        <div className="gap-group wide:order-last wide:flex wide:flex-col contents">
          <div className="order-1">
            <SectionHeader
              description={description}
              overline={overline}
              title={title}
              titleId="caatinga-climate-title"
            />
          </div>
          <ul className="order-3 flex flex-col">
            {climateFacts.map(({ icon: Icon, label, value }) => (
              <li
                className="border-border gap-item py-inset flex items-center border-b"
                key={label}
              >
                <Icon aria-hidden className="text-secondary size-5 shrink-0" />
                <div className="gap-x-item flex min-w-0 flex-1 flex-wrap items-baseline">
                  <span className="typo-card-title text-text desktop:w-28 w-24 shrink-0">
                    {value}
                  </span>
                  <span className="typo-small text-text-2 min-w-0 grow basis-40">
                    {label}
                  </span>
                </div>
              </li>
            ))}
          </ul>
          <div className="desktop:block order-4 hidden">
            <PlaceholderBadge label={confirmation} />
          </div>
        </div>
        <RainfallChart className="wide:order-first wide:col-span-2 order-2" />
      </Entrance>
    </section>
  );
}
