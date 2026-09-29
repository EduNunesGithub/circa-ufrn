import { LuSprout } from "react-icons/lu";

import type { RootDepth, SoilMoisture } from "@/components/research-roots";

import { PlaceholderBadge } from "@/components/placeholder-badge";
import { ResponsiveCopy } from "@/components/responsive-copy";
import { cn } from "@/lib/cn";
import {
  rootPlants,
  rootProfileContent,
  soilLayers,
  survivalLabel,
} from "@/lib/research/roots";

const layerClassNames: Record<SoilMoisture, string> = {
  dry: "bg-accent-soft grow-6",
  middle: "bg-secondary-soft grow-7",
  moist: "bg-sky-soft grow-8",
};

const plantClassNames: Record<RootDepth, string> = {
  deep: "left-1/3 h-7/8",
  shallow: "left-1/12 h-1/4",
};

export function RootProfile() {
  const { overline, placeholder, summary, title } = rootProfileContent;

  return (
    <figure className="border-border-subtle bg-surface gap-group p-inset flex min-w-0 flex-col rounded-md border">
      <figcaption className="gap-label desktop:flex-row desktop:items-start desktop:justify-between flex flex-col">
        <div className="gap-label flex min-w-0 flex-col">
          <span className="typo-overline text-text-muted desktop:block hidden">
            {overline}
          </span>
          <span className="typo-card-title text-text">
            <ResponsiveCopy copy={title} />
          </span>
        </div>
        <div className="shrink-0">
          <PlaceholderBadge label={placeholder} />
        </div>
      </figcaption>
      <div
        aria-label={summary}
        className="desktop:h-100 relative flex h-86 flex-col overflow-hidden rounded-sm"
        role="img"
      >
        <div className="bg-bg h-1/6 shrink-0" />
        <div className="border-text-2 relative flex flex-1 flex-col border-t-2">
          {soilLayers.map(({ color, label }) => (
            <div
              className={cn(
                "px-inset pt-label flex basis-0 justify-end",
                layerClassNames[color],
              )}
              key={color}
            >
              <span className="typo-overline text-text-2 desktop:max-w-40 max-w-28 text-right">
                <ResponsiveCopy copy={label} />
              </span>
            </div>
          ))}
          {rootPlants.map(({ depth, survival }) => (
            <div
              className={cn(
                "absolute top-0 flex w-8 flex-col items-center",
                plantClassNames[depth],
              )}
              key={depth}
            >
              <LuSprout className="text-primary desktop:size-8 absolute bottom-full size-6" />
              <span className="bg-primary w-1 flex-1" />
              <span className="bg-primary -mt-2 size-3 shrink-0 rounded-full" />
              <span className="border-border bg-surface gap-control px-control typo-caption text-text-2 absolute -bottom-1 left-full flex h-6 items-center rounded-sm border whitespace-nowrap">
                <span className="typo-caption-strong text-primary">
                  {survival}
                </span>
                <ResponsiveCopy copy={survivalLabel} />
              </span>
            </div>
          ))}
        </div>
      </div>
      <ul className="gap-item desktop:grid-cols-2 desktop:gap-block grid">
        {rootPlants.map(({ depth, description, title: plantTitle }) => (
          <li
            className="border-border-strong gap-label pt-label flex flex-col border-t"
            key={depth}
          >
            <span className="typo-card-title text-text">{plantTitle}</span>
            <span className="typo-small text-text-2">
              <ResponsiveCopy copy={description} />
            </span>
          </li>
        ))}
      </ul>
    </figure>
  );
}
