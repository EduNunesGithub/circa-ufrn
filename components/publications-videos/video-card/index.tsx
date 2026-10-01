import Link from "next/link";
import { LuPlay } from "react-icons/lu";

import type { VideoItem } from "@/components/publications-videos";

import { MediaFrame } from "@/components/media-frame";
import { ResponsiveCopy } from "@/components/responsive-copy";
import { Tag } from "@/components/tag";
import { cn } from "@/lib/cn";
import { focusRingClassName } from "@/lib/control-styles";

type VideoCardProps = {
  tagLabel: string;
  watchLabel: string;
} & VideoItem;

export function VideoCard({
  duration,
  href,
  image,
  tagLabel,
  title,
  watchLabel,
}: VideoCardProps) {
  return (
    <article className="gap-item flex flex-col">
      <MediaFrame
        className="aspect-landscape desktop:aspect-video rounded-sm"
        image={image}
        sizes="(min-width: 45rem) 424px, 272px"
      >
        <div className="bg-inverse/20 absolute inset-0 flex items-center justify-center">
          <Link
            className={cn(
              "bg-bg text-primary ease-standard hover:bg-bg-alt flex size-10 items-center justify-center rounded-sm transition-colors duration-250",
              focusRingClassName("inverse"),
            )}
            href={href}
          >
            <LuPlay aria-hidden className="size-5" />
            <span className="sr-only">
              {watchLabel}: <ResponsiveCopy copy={title} />
            </span>
          </Link>
        </div>
      </MediaFrame>
      <div className="gap-item flex items-center">
        <Tag label={tagLabel} variant="accent" />
        <p className="typo-meta text-text-inverse-2">{duration}</p>
      </div>
      <h3 className="typo-card-title text-text-inverse">
        <ResponsiveCopy copy={title} />
      </h3>
    </article>
  );
}
