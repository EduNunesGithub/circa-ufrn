import { GrowBar } from "@/components/grow-bar";
import { type Copy, ResponsiveCopy } from "@/components/responsive-copy";
import { cn } from "@/lib/cn";

export type ColumnDatum = {
  highlight?: boolean;
  label: Copy;
  name: string;
  value: number;
  valueText?: string;
};

type ColumnColor = "sage-soft" | "sage";

type ColumnPlotProps = {
  axisMax: number;
  baseline?: boolean;
  color: ColumnColor;
  columns: ColumnDatum[];
  plotClassName: string;
  ticks: string[];
  ticksOnMobile?: boolean;
  unit: string;
  valuesOnBars?: boolean;
};

const colorClassNames: Record<ColumnColor, string> = {
  sage: "bg-sage",
  "sage-soft": "bg-sage-soft",
};

export function ColumnPlot({
  axisMax,
  baseline = true,
  color,
  columns,
  plotClassName,
  ticks,
  ticksOnMobile = true,
  unit,
  valuesOnBars = false,
}: ColumnPlotProps) {
  return (
    <div className="gap-label flex">
      <ul
        aria-hidden
        className={cn(
          "typo-meta text-text-muted flex shrink-0 flex-col justify-between text-right",
          !ticksOnMobile && "desktop:flex hidden",
          plotClassName,
        )}
      >
        {ticks.map((tick) => (
          <li key={tick}>{tick}</li>
        ))}
      </ul>
      <div className="gap-label flex min-w-0 flex-1 flex-col">
        <ol
          className={cn(
            "gap-item flex",
            baseline && "border-border-strong border-b",
            plotClassName,
          )}
        >
          {columns.map(({ highlight = false, name, value, valueText }) => (
            <li className="flex min-w-0 flex-1 items-end" key={name}>
              <div
                className="relative w-full"
                style={{ height: `${(value / axisMax) * 100}%` }}
              >
                <GrowBar
                  axis="y"
                  className={cn(
                    "h-full rounded-t-sm",
                    highlight ? "bg-primary" : colorClassNames[color],
                  )}
                />
                {valuesOnBars && (
                  <span
                    aria-hidden
                    className={cn(
                      "typo-meta pt-label desktop:block absolute inset-x-0 top-0 hidden text-center",
                      highlight ? "text-text-inverse" : "text-text",
                    )}
                  >
                    {valueText ?? value}
                  </span>
                )}
              </div>
              <span className="sr-only">
                {name}: {valueText ?? value} {unit}
              </span>
            </li>
          ))}
        </ol>
        <ol aria-hidden className="typo-meta gap-item flex text-center">
          {columns.map(({ highlight = false, label, name }) => (
            <li
              className={cn(
                "min-w-0 flex-1",
                highlight ? "text-text" : "text-text-muted",
              )}
              key={name}
            >
              <ResponsiveCopy copy={label} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
