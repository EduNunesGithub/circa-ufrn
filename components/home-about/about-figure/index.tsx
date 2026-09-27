import type { MediaImage } from "@/components/media-frame";
import type { Copy } from "@/components/responsive-copy";

import { MediaFrame } from "@/components/media-frame";
import { ResponsiveCopy } from "@/components/responsive-copy";
import { cn } from "@/lib/cn";

type AboutFigureProps = {
  caption: Copy;
  className?: string;
  image: MediaImage;
  number: string;
};

export function AboutFigure({
  caption,
  className,
  image,
  number,
}: AboutFigureProps) {
  return (
    <figure className={cn("gap-label flex flex-col", className)}>
      <MediaFrame
        className="wide:h-52 h-56 rounded-sm"
        image={image}
        sizes="(min-width: 56.75rem) 312px, 100vw"
      />
      <figcaption className="gap-label flex">
        <span className="typo-overline text-secondary shrink-0">{number}</span>
        <span className="typo-caption text-text-2">
          <ResponsiveCopy copy={caption} />
        </span>
      </figcaption>
    </figure>
  );
}
