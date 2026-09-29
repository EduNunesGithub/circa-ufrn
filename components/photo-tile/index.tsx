import type { ReactNode } from "react";

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
  image: MediaImage;
  sizes: string;
} & (
  | { caption: Copy; children?: undefined }
  | { caption?: undefined; children: ReactNode }
);

export function PhotoTile({
  appear = false,
  caption,
  children,
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
      <figcaption
        className={
          children ? "flex flex-col" : "typo-caption-strong text-text-inverse"
        }
      >
        {children ?? (caption && <ResponsiveCopy copy={caption} />)}
      </figcaption>
    </figure>
  );
}
