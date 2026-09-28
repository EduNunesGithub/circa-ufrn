import type { ReactNode } from "react";

import Image from "next/image";

import { MediaAppear } from "@/components/media-appear";
import { cn } from "@/lib/cn";

export type MediaImage = {
  alt: string;
  src: string;
};

type MediaFrameProps = {
  appear?: boolean;
  children?: ReactNode;
  className?: string;
  image: MediaImage;
  preload?: boolean;
  sizes: string;
};

export function MediaFrame({
  appear = false,
  children,
  className,
  image,
  preload = false,
  sizes,
}: MediaFrameProps) {
  const picture = (
    <Image
      alt={image.alt}
      className="object-cover"
      fill
      preload={preload}
      sizes={sizes}
      src={image.src}
    />
  );

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {appear ? <MediaAppear>{picture}</MediaAppear> : picture}
      {children}
    </div>
  );
}
