import type { IndicatorData } from "@/components/research-monitoring";

import { CountUp } from "@/components/count-up";
import { GrowBar } from "@/components/grow-bar";
import { ResponsiveCopy } from "@/components/responsive-copy";
import { cn } from "@/lib/cn";
import { seriesYears } from "@/lib/research/monitoring";

const integerPattern = /^\d+$/;

export function IndicatorCard({
  bars,
  caption,
  frequency,
  icon: Icon,
  name,
  unit,
  value,
}: IndicatorData) {
  const latest = bars.length - 1;

  return (
    <article className="border-border-subtle bg-surface gap-item p-inset flex h-full flex-col rounded-md border">
      <div className="gap-x-control gap-y-label flex flex-wrap items-center justify-between">
        <h3 className="gap-control typo-card-title text-text flex min-w-0 items-center wrap-anywhere">
          <Icon aria-hidden className="text-secondary size-4 shrink-0" />
          <ResponsiveCopy copy={name} />
        </h3>
        <p className="typo-meta text-text-muted shrink-0 uppercase">
          {frequency}
        </p>
      </div>
      <p className="gap-control text-primary flex items-baseline">
        <span className="typo-stat">
          {integerPattern.test(value) ? <CountUp value={value} /> : value}
        </span>
        <span className="typo-unit">{unit}</span>
      </p>
      <div aria-hidden className="gap-label flex flex-col">
        <ol className="border-border gap-control flex h-24 items-end border-b">
          {bars.map((height, index) => (
            <li className="flex h-full flex-1 items-end" key={index}>
              <div className="w-full" style={{ height: `${height}%` }}>
                <GrowBar
                  axis="y"
                  className={cn(
                    "h-full rounded-t-sm",
                    index === latest ? "bg-primary" : "bg-sage-soft",
                  )}
                />
              </div>
            </li>
          ))}
        </ol>
        <div className="typo-meta text-text-muted flex justify-between">
          <span>{seriesYears.first}</span>
          <span>{seriesYears.last}</span>
        </div>
      </div>
      <p className="typo-caption text-text-muted desktop:block hidden">
        {caption}
      </p>
    </article>
  );
}
