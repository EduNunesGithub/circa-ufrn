import type { LevelId } from "@/components/caatinga-territory";

import { PlaceholderBadge } from "@/components/placeholder-badge";
import { ResponsiveCopy } from "@/components/responsive-copy";
import {
  stateTiles,
  territoryLevels,
  territoryMapContent,
} from "@/lib/caatinga/territory";
import { cn } from "@/lib/cn";

type TerritoryMapProps = {
  className: string;
};

const levelClassNames: Record<
  LevelId,
  { code: string; name: string; swatch: string }
> = {
  high: {
    code: "text-text-inverse",
    name: "text-text-inverse-2",
    swatch: "bg-primary",
  },
  low: { code: "text-text-2", name: "text-text-muted", swatch: "bg-sage-soft" },
  mid: { code: "text-text", name: "text-text", swatch: "bg-sage" },
};

export function TerritoryMap({ className }: TerritoryMapProps) {
  const { note, overline, placeholder, title } = territoryMapContent;

  return (
    <figure
      className={cn(
        "border-border-subtle bg-surface gap-block p-inset desktop:justify-start flex flex-wrap justify-center rounded-md border",
        className,
      )}
    >
      <ul className="gap-item desktop:w-92 grid w-70 max-w-full grid-cols-3 content-start">
        {stateTiles.map(({ code, level, name }) => {
          const colors = levelClassNames[level];
          const levelLabel = territoryLevels.find(({ id }) => id === level);

          return (
            <li
              className={cn(
                "p-inset desktop:aspect-square desktop:h-auto flex h-18 flex-col justify-between rounded-sm",
                colors.swatch,
              )}
              key={code}
            >
              <span aria-hidden className={cn("typo-unit", colors.code)}>
                {code}
              </span>
              <span
                className={cn(
                  "typo-caption desktop:not-sr-only sr-only",
                  colors.name,
                )}
              >
                {name}
              </span>
              {levelLabel && (
                <span className="sr-only">
                  : <ResponsiveCopy copy={levelLabel.label} />
                </span>
              )}
            </li>
          );
        })}
      </ul>
      <figcaption className="gap-group flex min-w-0 grow basis-60 flex-col">
        <div className="gap-label desktop:flex hidden flex-col">
          <p className="typo-overline text-text-muted">{overline}</p>
          <h3 className="typo-card-title text-text">{title}</h3>
        </div>
        <ul className="gap-item flex flex-col">
          {territoryLevels.map(({ id, label }) => (
            <li className="gap-item flex items-center" key={id}>
              <span
                aria-hidden
                className={cn(
                  "border-border desktop:size-6 size-4 shrink-0 rounded-sm border",
                  levelClassNames[id].swatch,
                )}
              />
              <span className="text-text">
                <ResponsiveCopy copy={label} />
              </span>
            </li>
          ))}
        </ul>
        <p className="typo-small text-text-muted desktop:block hidden">
          {note}
        </p>
        <PlaceholderBadge label={placeholder} />
      </figcaption>
    </figure>
  );
}
