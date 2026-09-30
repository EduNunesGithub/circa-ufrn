import type { ReactNode } from "react";

import { PlaceholderBadge } from "@/components/placeholder-badge";
import { type Copy, ResponsiveCopy } from "@/components/responsive-copy";
import { cn } from "@/lib/cn";

type ChartCardProps = {
  children: ReactNode;
  className?: string;
  footer?: ReactNode;
  overline: Copy;
  placeholder?: Copy;
  title: Copy;
  titleOnMobile?: boolean;
};

export function ChartCard({
  children,
  className,
  footer,
  overline,
  placeholder,
  title,
  titleOnMobile = true,
}: ChartCardProps) {
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
          <h3
            className={cn(
              "typo-card-title text-text",
              !titleOnMobile && "desktop:block hidden",
            )}
          >
            <ResponsiveCopy copy={title} />
          </h3>
        </figcaption>
        <div className="desktop:block hidden shrink-0">
          <PlaceholderBadge label={placeholder} />
        </div>
      </div>
      {children}
      <div className="gap-group flex flex-wrap items-center justify-between">
        {footer}
        <div className="desktop:hidden">
          <PlaceholderBadge label={placeholder} />
        </div>
      </div>
    </figure>
  );
}
