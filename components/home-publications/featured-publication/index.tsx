import type { FeaturedPublicationData } from "@/components/home-publications";

import { ArrowLink } from "@/components/arrow-link";
import { MediaFrame } from "@/components/media-frame";
import { ResponsiveCopy } from "@/components/responsive-copy";
import { Tag } from "@/components/tag";

export function FeaturedPublication({
  date,
  excerpt,
  image,
  link,
  tag,
  title,
}: FeaturedPublicationData) {
  return (
    <article className="gap-item flex flex-col">
      <MediaFrame
        className="desktop:h-90 h-58 rounded-sm"
        image={image}
        sizes="(min-width: 56.75rem) 50vw, 100vw"
      />
      <div className="gap-control flex flex-wrap items-center">
        <Tag label={tag.label} variant={tag.variant} />
        <p className="typo-meta text-text-muted uppercase">
          <ResponsiveCopy copy={date} />
        </p>
      </div>
      <h3 className="typo-feature-title text-text">
        <ResponsiveCopy copy={title} />
      </h3>
      <p className="text-text-2 desktop:block hidden">{excerpt}</p>
      <div className="desktop:block hidden">
        <ArrowLink href={link.href} label={link.label} />
      </div>
    </article>
  );
}
