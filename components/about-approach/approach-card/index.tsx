import type { ApproachFront } from "@/components/about-approach";

import { ResponsiveCopy } from "@/components/responsive-copy";

export function ApproachCard({
  description,
  icon: Icon,
  title,
}: ApproachFront) {
  return (
    <article className="border-border-subtle bg-surface gap-label p-inset flex h-full flex-col rounded-md border">
      <span className="bg-primary-soft text-primary desktop:size-10 flex size-8 items-center justify-center rounded-full">
        <Icon aria-hidden className="desktop:size-5 size-4" />
      </span>
      <h3 className="typo-card-title text-text">{title}</h3>
      <p className="text-text-2">
        <ResponsiveCopy copy={description} />
      </p>
    </article>
  );
}
