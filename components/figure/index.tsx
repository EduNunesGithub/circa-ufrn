import type { Copy } from "@/components/responsive-copy";

import { MediaFrame, type MediaImage } from "@/components/media-frame";
import { ResponsiveCopy } from "@/components/responsive-copy";
import { cn } from "@/lib/cn";

export type FigureData = {
  caption: Copy;
  credit?: string;
  image: MediaImage;
  number: string;
};

type FigureProps = {
  className?: string;
  mediaClassName: string;
  preload?: boolean;
  sizes: string;
} & FigureData;

export function Figure({
  caption,
  className,
  credit,
  image,
  mediaClassName,
  number,
  preload = false,
  sizes,
}: FigureProps) {
  return (
    <figure className={cn("gap-label flex flex-col", className)}>
      <MediaFrame
        className={mediaClassName}
        image={image}
        preload={preload}
        sizes={sizes}
      />
      <figcaption className="gap-label flex">
        <span className="typo-overline text-secondary shrink-0">{number}</span>
        <span className="typo-caption text-text-2 min-w-0 flex-1">
          <ResponsiveCopy copy={caption} />
        </span>
        {credit && (
          <span className="typo-meta text-text-muted desktop:block hidden shrink-0">
            {credit}
          </span>
        )}
      </figcaption>
    </figure>
  );
}
