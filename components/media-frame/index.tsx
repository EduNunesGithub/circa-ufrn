import type { ReactNode } from "react";

import Image from "next/image";

import { cn } from "@/lib/cn";

export type MediaImage = {
  alt: string;
  src: string;
};

type MediaFrameProps = {
  children?: ReactNode;
  className?: string;
  image: MediaImage;
  preload?: boolean;
  sizes: string;
};

export function MediaFrame({
  children,
  className,
  image,
  preload = false,
  sizes,
}: MediaFrameProps) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <Image
        alt={image.alt}
        className="object-cover"
        fill
        preload={preload}
        sizes={sizes}
        src={image.src}
      />
      {children}
    </div>
  );
}
