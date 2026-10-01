"use client";

import type { ReactNode } from "react";

import type { Tone } from "@/lib/control-styles";

import { Carousel } from "@/components/carousel";
import { CarouselControls } from "@/components/carousel-controls";
import { useCarousel } from "@/hooks/use-carousel";

type HeaderCarouselProps = {
  children: ReactNode;
  header: ReactNode;
  id: string;
  label: string;
  slideClassName: string;
  tone?: Tone;
  total: number;
};

export function HeaderCarousel({
  children,
  header,
  id,
  label,
  slideClassName,
  tone = "default",
  total,
}: HeaderCarouselProps) {
  const controller = useCarousel(total);

  return (
    <div className="gap-block flex flex-wrap items-end justify-between">
      <div className="desktop:basis-0 min-w-0 grow basis-full">{header}</div>
      <div className="desktop:order-2 desktop:w-auto order-3 flex w-full justify-end">
        <CarouselControls controller={controller} controlsId={id} tone={tone} />
      </div>
      <div className="desktop:order-3 order-2 min-w-0 basis-full">
        <Carousel
          bleed
          className="-outline-offset-4"
          controller={controller}
          id={id}
          label={label}
          slideClassName={slideClassName}
          tone={tone}
        >
          {children}
        </Carousel>
      </div>
    </div>
  );
}
