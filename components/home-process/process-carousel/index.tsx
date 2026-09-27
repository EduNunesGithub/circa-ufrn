"use client";

import type { ReactNode } from "react";

import { Carousel } from "@/components/carousel";
import { CarouselControls } from "@/components/carousel-controls";
import { useCarousel } from "@/hooks/use-carousel";

type ProcessCarouselProps = {
  children: ReactNode;
  footerLink: ReactNode;
  total: number;
};

const carouselId = "home-process-slides";

export function ProcessCarousel({
  children,
  footerLink,
  total,
}: ProcessCarouselProps) {
  const controller = useCarousel(total);

  return (
    <div className="gap-block flex flex-col">
      <Carousel
        bleed
        className="-outline-offset-4"
        controller={controller}
        id={carouselId}
        label="Etapas do processo de restauração"
        slideClassName="w-68 wide:w-72"
      >
        {children}
      </Carousel>
      <div className="gap-item flex items-center justify-end">
        <div className="desktop:hidden min-w-0 flex-1">{footerLink}</div>
        <CarouselControls
          controller={controller}
          controlsId={carouselId}
          progress="never"
        />
      </div>
    </div>
  );
}
