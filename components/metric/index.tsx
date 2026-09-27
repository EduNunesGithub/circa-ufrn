import type { Copy } from "@/components/responsive-copy";
import type { Tone } from "@/lib/control-styles";

import { PlaceholderBadge } from "@/components/placeholder-badge";
import { ResponsiveCopy } from "@/components/responsive-copy";
import { cn } from "@/lib/cn";

export type MetricData = {
  illustrative?: boolean;
  label: Copy;
  note?: Copy;
  noteOnMobile?: boolean;
  unit?: string;
  value: string;
};

type MetricProps = {
  tone?: Tone;
} & MetricData;

export function Metric({
  illustrative = false,
  label,
  note,
  noteOnMobile = true,
  tone = "default",
  unit,
  value,
}: MetricProps) {
  const inverse = tone === "inverse";
  const figureColor = inverse ? "text-accent" : "text-primary";

  return (
    <div
      className={cn(
        "gap-label pt-inset flex h-full flex-col border-t",
        inverse ? "border-hairline-inverse" : "border-border-strong",
      )}
    >
      <p className="gap-label flex flex-wrap items-baseline">
        <span className={cn("typo-display", figureColor)}>{value}</span>
        {unit && <span className={cn("typo-unit", figureColor)}>{unit}</span>}
      </p>
      <p
        className={cn(
          "typo-label",
          inverse ? "text-text-inverse" : "text-text",
        )}
      >
        <ResponsiveCopy copy={label} />
      </p>
      {note && (
        <p
          className={cn(
            "typo-caption",
            inverse ? "text-text-inverse-2" : "text-text-muted",
            !noteOnMobile && "desktop:block hidden",
          )}
        >
          <ResponsiveCopy copy={note} />
        </p>
      )}
      {illustrative && <PlaceholderBadge />}
    </div>
  );
}
