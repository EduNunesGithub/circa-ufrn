import { Meter } from "@base-ui/react/meter";

import type { Copy } from "@/components/responsive-copy";

import { ResponsiveCopy } from "@/components/responsive-copy";
import { cn } from "@/lib/cn";

export type StatBarData = {
  label: Copy;
  tone: StatBarTone;
  value: number;
};

type StatBarTone = "muted" | "primary" | "sage";

const indicatorClassNames: Record<StatBarTone, string> = {
  muted: "bg-text-disabled",
  primary: "bg-primary",
  sage: "bg-sage",
};

export function StatBar({ label, tone, value }: StatBarData) {
  return (
    <Meter.Root
      className="gap-label flex flex-col"
      locale="pt-BR"
      value={value}
    >
      <div className="gap-item flex items-baseline justify-between">
        <Meter.Label className="typo-long text-text">
          <ResponsiveCopy copy={label} />
        </Meter.Label>
        <Meter.Value className="typo-meta text-text shrink-0" />
      </div>
      <Meter.Track className="bg-bg-alt h-2 overflow-hidden rounded-sm">
        <Meter.Indicator
          className={cn("h-full rounded-sm", indicatorClassNames[tone])}
        />
      </Meter.Track>
    </Meter.Root>
  );
}
