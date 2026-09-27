"use client";

import type { ReactNode } from "react";

import { Carousel } from "@/components/carousel";
import { CarouselControls } from "@/components/carousel-controls";
import { useCarousel } from "@/hooks/use-carousel";

type ProjectsCarouselProps = {
  children: ReactNode;
  header: ReactNode;
  total: number;
};

const carouselId = "home-projects-slides";

export function ProjectsCarousel({
  children,
  header,
  total,
}: ProjectsCarouselProps) {
  const controller = useCarousel(total);

  return (
    <div className="gap-block flex flex-wrap items-end justify-between">
      <div className="desktop:basis-0 min-w-0 grow basis-full">{header}</div>
      <div className="desktop:order-2 desktop:w-auto order-3 flex w-full justify-end">
        <CarouselControls
          controller={controller}
          controlsId={carouselId}
          tone="inverse"
        />
      </div>
      <div className="desktop:order-3 order-2 min-w-0 basis-full">
        <Carousel
          bleed
          className="-mr-gutter w-auto -outline-offset-4"
          controller={controller}
          id={carouselId}
          label="Projetos em andamento"
          slideClassName="w-68 desktop:w-78"
          tone="inverse"
        >
          {children}
        </Carousel>
      </div>
    </div>
  );
}
