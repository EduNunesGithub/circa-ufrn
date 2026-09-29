import { GrowBar } from "@/components/grow-bar";
import { PlaceholderBadge } from "@/components/placeholder-badge";
import { ResponsiveCopy } from "@/components/responsive-copy";
import { rainfallChartContent, rainfallMonths } from "@/lib/caatinga/climate";
import { cn } from "@/lib/cn";

type RainfallChartProps = {
  className: string;
};

const plotHeight = "desktop:h-60 h-40";

export function RainfallChart({ className }: RainfallChartProps) {
  const { axisMax, dryLabel, overline, placeholder, rainyLabel, ticks, title } =
    rainfallChartContent;

  return (
    <figure
      className={cn(
        "border-border-subtle bg-surface gap-group p-inset flex min-w-0 flex-col rounded-md border",
        className,
      )}
    >
      <div className="gap-group flex items-start justify-between">
        <figcaption className="gap-label flex min-w-0 flex-col">
          <span className="typo-overline text-text-muted">
            <ResponsiveCopy copy={overline} />
          </span>
          <h3 className="typo-card-title text-text desktop:block hidden">
            {title}
          </h3>
        </figcaption>
        <div className="desktop:block hidden shrink-0">
          <PlaceholderBadge label={placeholder} />
        </div>
      </div>
      <div className="gap-label flex">
        <ul
          aria-hidden
          className={cn(
            "typo-meta text-text-muted flex shrink-0 flex-col justify-between text-right",
            plotHeight,
          )}
        >
          {ticks.map((tick) => (
            <li key={tick}>{tick}</li>
          ))}
        </ul>
        <div className="gap-label flex min-w-0 flex-1 flex-col">
          <ol
            className={cn(
              "border-border-strong gap-item grid grid-cols-12 border-b",
              plotHeight,
            )}
          >
            {rainfallMonths.map(({ name, rainy = false, value }) => (
              <li className="flex items-end" key={name}>
                <div
                  className="w-full"
                  style={{ height: `${(value / axisMax) * 100}%` }}
                >
                  <GrowBar
                    axis="y"
                    className={cn(
                      "h-full rounded-t-sm",
                      rainy ? "bg-primary" : "bg-sage-soft",
                    )}
                  />
                </div>
                <span className="sr-only">
                  {name}: {value} mm
                </span>
              </li>
            ))}
          </ol>
          <ol
            aria-hidden
            className="typo-meta gap-item grid grid-cols-12 text-center"
          >
            {rainfallMonths.map(({ initial, name, rainy = false }) => (
              <li
                className={rainy ? "text-text" : "text-text-muted"}
                key={name}
              >
                {initial}
              </li>
            ))}
          </ol>
        </div>
      </div>
      <div className="gap-group flex flex-wrap items-center justify-between">
        <ul className="gap-item flex flex-wrap">
          <li className="gap-control flex items-center">
            <span aria-hidden className="bg-primary size-3 rounded-sm" />
            <span className="typo-caption text-text-2">
              <ResponsiveCopy copy={rainyLabel} />
            </span>
          </li>
          <li className="gap-control desktop:flex hidden items-center">
            <span aria-hidden className="bg-sage-soft size-3 rounded-sm" />
            <span className="typo-caption text-text-2">{dryLabel}</span>
          </li>
        </ul>
        <div className="desktop:hidden">
          <PlaceholderBadge label={placeholder} />
        </div>
      </div>
    </figure>
  );
}
