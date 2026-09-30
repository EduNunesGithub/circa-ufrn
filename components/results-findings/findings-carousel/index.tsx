"use client";

import type { ReactNode } from "react";

import { Carousel } from "@/components/carousel";
import { useCarousel } from "@/hooks/use-carousel";

type FindingsCarouselProps = {
  children: ReactNode;
  label: string;
  total: number;
};

export function FindingsCarousel({
  children,
  label,
  total,
}: FindingsCarouselProps) {
  const controller = useCarousel(total);

  return (
    <Carousel
      bleed
      className="-outline-offset-4"
      controller={controller}
      id="results-findings-slides"
      label={label}
      slideClassName="w-68"
    >
      {children}
    </Carousel>
  );
}
