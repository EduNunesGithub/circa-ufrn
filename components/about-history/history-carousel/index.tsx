"use client";

import type { ReactNode } from "react";

import { Carousel } from "@/components/carousel";
import { CarouselControls } from "@/components/carousel-controls";
import { useCarousel } from "@/hooks/use-carousel";

type HistoryCarouselProps = {
  children: ReactNode;
  label: string;
  total: number;
};

const carouselId = "about-history-photos";

export function HistoryCarousel({
  children,
  label,
  total,
}: HistoryCarouselProps) {
  const controller = useCarousel(total);

  return (
    <div className="gap-block flex flex-col">
      <Carousel
        bleed
        className="-outline-offset-4"
        controller={controller}
        id={carouselId}
        label={label}
        slideClassName="w-68 desktop:w-2/5"
      >
        {children}
      </Carousel>
      <div className="flex justify-end">
        <CarouselControls controller={controller} controlsId={carouselId} />
      </div>
    </div>
  );
}
