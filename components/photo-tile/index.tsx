import type { Copy } from "@/components/responsive-copy";

import { MediaFrame, type MediaImage } from "@/components/media-frame";
import { ResponsiveCopy } from "@/components/responsive-copy";
import { cn } from "@/lib/cn";

export type PhotoTileData = {
  caption: Copy;
  image: MediaImage;
};

type PhotoTileProps = {
  appear?: boolean;
  className?: string;
  sizes: string;
} & PhotoTileData;

export function PhotoTile({
  appear = false,
  caption,
  className,
  image,
  sizes,
}: PhotoTileProps) {
  return (
    <figure
      className={cn(
        "p-inset relative isolate flex flex-col justify-end overflow-hidden rounded-sm",
        className,
      )}
    >
      <MediaFrame
        appear={appear}
        className="absolute inset-0 -z-10"
        image={image}
        sizes={sizes}
      >
        <div
          aria-hidden
          className="to-inverse/85 absolute inset-0 bg-linear-to-b from-transparent from-55%"
        />
      </MediaFrame>
      <figcaption className="typo-caption-strong text-text-inverse">
        <ResponsiveCopy copy={caption} />
      </figcaption>
    </figure>
  );
}
