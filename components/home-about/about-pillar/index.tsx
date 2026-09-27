import type { AboutPillarData } from "@/components/home-about";

import { ResponsiveCopy } from "@/components/responsive-copy";

export function AboutPillar({
  description,
  icon: Icon,
  title,
}: AboutPillarData) {
  return (
    <div className="border-border gap-item py-inset desktop:flex-col desktop:gap-label desktop:border-border-strong desktop:pb-0 flex h-full border-t">
      <Icon aria-hidden className="text-secondary size-5 shrink-0" />
      <div className="gap-label flex flex-col">
        <h3 className="typo-card-title text-text">{title}</h3>
        <p className="text-text-2">
          <ResponsiveCopy copy={description} />
        </p>
      </div>
    </div>
  );
}
