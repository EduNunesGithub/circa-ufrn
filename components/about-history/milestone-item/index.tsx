import type { Milestone } from "@/components/about-history";

import { ResponsiveCopy } from "@/components/responsive-copy";
import { cn } from "@/lib/cn";

export function MilestoneItem({
  highlight = false,
  text,
  title,
  year,
}: Milestone) {
  const markColor = highlight ? "bg-secondary" : "bg-primary";

  return (
    <article className="gap-label pl-inset pb-inset desktop:gap-item desktop:pl-0 desktop:pb-0 relative flex h-full flex-col group-last:pb-0">
      <span
        aria-hidden
        className={cn(
          "desktop:hidden absolute top-3 left-0 size-2 rounded-full",
          markColor,
        )}
      />
      <span
        aria-hidden
        className="bg-border desktop:hidden absolute top-7 bottom-0 left-1 w-px group-last:hidden"
      />
      <p
        className={cn(
          "typo-feature-title",
          highlight ? "text-secondary" : "text-primary",
        )}
      >
        {year}
      </p>
      <div aria-hidden className="desktop:flex hidden items-center">
        <span className={cn("size-3 shrink-0 rounded-full", markColor)} />
        <span className="bg-border h-px flex-1" />
      </div>
      <h3 className="typo-card-title text-text">{title}</h3>
      <p className="typo-small text-text-muted">
        <ResponsiveCopy copy={text} />
      </p>
    </article>
  );
}
