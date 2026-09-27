import type { PublicationItem } from "@/components/home-publications";

import { ResponsiveCopy } from "@/components/responsive-copy";
import { Tag } from "@/components/tag";

export function PublicationRow({ date, tag, title }: PublicationItem) {
  return (
    <article className="border-border gap-label py-inset flex flex-col border-t">
      <div className="gap-control flex flex-wrap items-center">
        <Tag label={tag.label} variant={tag.variant} />
        <p className="typo-meta text-text-muted uppercase">{date}</p>
      </div>
      <h3 className="typo-card-title text-text">
        <ResponsiveCopy copy={title} />
      </h3>
    </article>
  );
}
