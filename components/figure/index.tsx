import type { Copy } from "@/components/responsive-copy";
import type { Tone } from "@/lib/control-styles";

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
  captionOnMobile?: boolean;
  className?: string;
  mediaClassName: string;
  preload?: boolean;
  sizes: string;
  tone?: Tone;
} & FigureData;

export function Figure({
  caption,
  captionOnMobile = true,
  className,
  credit,
  image,
  mediaClassName,
  number,
  preload = false,
  sizes,
  tone = "default",
}: FigureProps) {
  const inverse = tone === "inverse";

  return (
    <figure className={cn("gap-label flex flex-col", className)}>
      <MediaFrame
        className={mediaClassName}
        image={image}
        preload={preload}
        sizes={sizes}
      />
      <figcaption
        className={cn(
          "gap-label flex",
          !captionOnMobile && "desktop:flex hidden",
        )}
      >
        <span
          className={cn(
            "typo-overline shrink-0",
            inverse ? "text-accent" : "text-secondary",
          )}
        >
          {number}
        </span>
        <span
          className={cn(
            "typo-caption min-w-0 flex-1",
            inverse ? "text-text-inverse-2" : "text-text-2",
          )}
        >
          <ResponsiveCopy copy={caption} />
        </span>
        {credit && (
          <span
            className={cn(
              "typo-meta desktop:block hidden shrink-0",
              inverse ? "text-text-inverse-2" : "text-text-muted",
            )}
          >
            {credit}
          </span>
        )}
      </figcaption>
    </figure>
  );
}
