"use client";

import type { ReactNode } from "react";

import { Carousel } from "@/components/carousel";
import { useCarousel } from "@/hooks/use-carousel";

type SwipeCarouselProps = {
  children: ReactNode;
  id: string;
  label: string;
  slideClassName: string;
  total: number;
};

export function SwipeCarousel({
  children,
  id,
  label,
  slideClassName,
  total,
}: SwipeCarouselProps) {
  const controller = useCarousel(total);

  return (
    <div className="min-w-0">
      <Carousel
        bleed
        className="-outline-offset-4"
        controller={controller}
        id={id}
        label={label}
        slideClassName={slideClassName}
      >
        {children}
      </Carousel>
    </div>
  );
}
