import type { NewsItem } from "@/components/publications-recent";

import { MediaFrame } from "@/components/media-frame";
import { ResponsiveCopy } from "@/components/responsive-copy";
import { Tag } from "@/components/tag";

export function NewsCard({ date, excerpt, image, tag, title }: NewsItem) {
  return (
    <article className="border-border gap-group py-inset wide:flex-col wide:gap-item wide:border-b-0 wide:py-0 flex border-b">
      <MediaFrame
        className="wide:aspect-video wide:h-auto wide:w-full size-24 shrink-0 rounded-sm"
        image={image}
        sizes="(min-width: 56.75rem) 33vw, 96px"
      />
      <div className="gap-label wide:gap-item flex min-w-0 flex-1 flex-col">
        <div className="gap-item flex flex-wrap items-center">
          <Tag label={tag.label} variant={tag.variant} />
          <p className="typo-meta text-text-muted uppercase">{date}</p>
        </div>
        <h3 className="max-wide:typo-card-title text-text">
          <ResponsiveCopy copy={title} />
        </h3>
        <p className="text-text-2 wide:block hidden">{excerpt}</p>
      </div>
    </article>
  );
}
