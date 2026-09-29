import type { TechnologyData } from "@/components/research-technologies";

import { ResponsiveCopy } from "@/components/responsive-copy";
import { StatusBadge } from "@/components/status-badge";

export function TechnologyItem({
  description,
  icon: Icon,
  status,
  title,
}: TechnologyData) {
  return (
    <article className="border-border gap-item py-inset desktop:flex-col desktop:border-b-0 desktop:border-t desktop:border-border-strong desktop:pb-0 flex h-full border-b">
      <div className="desktop:flex desktop:items-center desktop:justify-between shrink-0">
        <Icon aria-hidden className="text-primary size-5" />
        <div className="desktop:block hidden">
          <StatusBadge status={status} />
        </div>
      </div>
      <div className="gap-label flex min-w-0 flex-1 flex-col">
        <div className="gap-control flex items-center justify-between">
          <h3 className="typo-card-title text-text">
            <ResponsiveCopy copy={title} />
          </h3>
          <div className="desktop:hidden shrink-0">
            <StatusBadge status={status} />
          </div>
        </div>
        <p className="text-text-2 max-desktop:typo-small">
          <ResponsiveCopy copy={description} />
        </p>
      </div>
    </article>
  );
}
