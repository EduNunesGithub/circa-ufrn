import { Meter } from "@base-ui/react/meter";

import type { Copy } from "@/components/responsive-copy";
import type { Tone } from "@/lib/control-styles";

import { GrowBar } from "@/components/grow-bar";
import { ResponsiveCopy } from "@/components/responsive-copy";
import { cn } from "@/lib/cn";

export type StatBarData = {
  color: StatBarColor;
  label: Copy;
  value: number;
  valueText?: string;
};

type StatBarColor = "accent" | "muted" | "primary" | "sage";

type StatBarProps = {
  tone?: Tone;
} & StatBarData;

const indicatorClassNames: Record<StatBarColor, string> = {
  accent: "bg-accent",
  muted: "bg-text-disabled",
  primary: "bg-primary",
  sage: "bg-sage",
};

export function StatBar({
  color,
  label,
  tone = "default",
  value,
  valueText,
}: StatBarProps) {
  const inverse = tone === "inverse";
  const valueClassName = cn(
    "typo-meta shrink-0",
    inverse ? "text-accent" : "text-text",
  );

  return (
    <Meter.Root
      {...(valueText && { "aria-valuetext": valueText })}
      className="gap-label flex flex-col"
      locale="pt-BR"
      value={value}
    >
      <div className="gap-item flex items-baseline justify-between">
        <Meter.Label
          className={cn(
            "typo-long",
            inverse ? "text-text-inverse" : "text-text",
          )}
        >
          <ResponsiveCopy copy={label} />
        </Meter.Label>
        {valueText ? (
          <span aria-hidden className={valueClassName}>
            {valueText}
          </span>
        ) : (
          <Meter.Value className={valueClassName} />
        )}
      </div>
      <Meter.Track
        className={cn("h-2 rounded-sm", inverse ? "bg-inverse-2" : "bg-bg-alt")}
      >
        <Meter.Indicator className="h-full">
          <GrowBar
            className={cn("h-full rounded-sm", indicatorClassNames[color])}
          />
        </Meter.Indicator>
      </Meter.Track>
    </Meter.Root>
  );
}
