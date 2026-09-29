"use client";

import type { ReactNode } from "react";

import { Carousel } from "@/components/carousel";
import { CarouselControls } from "@/components/carousel-controls";
import { useCarousel } from "@/hooks/use-carousel";

type PhotoCarouselProps = {
  children: ReactNode;
  id: string;
  label: string;
  total: number;
};

export function PhotoCarousel({
  children,
  id,
  label,
  total,
}: PhotoCarouselProps) {
  const controller = useCarousel(total);

  return (
    <div className="gap-block flex flex-col">
      <Carousel
        bleed
        className="-outline-offset-4"
        controller={controller}
        id={id}
        label={label}
        slideClassName="w-68 desktop:w-2/5"
      >
        {children}
      </Carousel>
      <div className="flex justify-end">
        <CarouselControls controller={controller} controlsId={id} />
      </div>
    </div>
  );
}
