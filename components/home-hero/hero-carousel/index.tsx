"use client";

import type { ReactNode } from "react";

import type { HeroSlide } from "@/components/home-hero";

import { Carousel } from "@/components/carousel";
import { CarouselControls } from "@/components/carousel-controls";
import { MediaFrame } from "@/components/media-frame";
import { ResponsiveCopy } from "@/components/responsive-copy";
import { useCarousel } from "@/hooks/use-carousel";

type HeroCarouselProps = {
  children: ReactNode;
  slides: HeroSlide[];
};

const carouselId = "home-hero-slides";

export function HeroCarousel({ children, slides }: HeroCarouselProps) {
  const controller = useCarousel(slides.length);
  const activeSlide = slides[controller.state.current - 1] ?? slides[0];

  return (
    <>
      <Carousel
        className="absolute inset-0 -z-10 h-full -outline-offset-4"
        controller={controller}
        id={carouselId}
        label="Fotografias de campo"
        slideClassName="w-full"
        spaced={false}
        tone="inverse"
      >
        {slides.map((slide, index) => (
          <MediaFrame
            className="h-full"
            image={slide.image}
            key={slide.image.src}
            preload={index === 0}
            sizes="100vw"
          >
            <div
              aria-hidden
              className="from-inverse/70 via-inverse/10 to-inverse/95 absolute inset-0 bg-linear-to-b via-40%"
            />
          </MediaFrame>
        ))}
      </Carousel>
      <div className="gap-block max-w-page px-gutter pt-section pb-section wide:flex-row wide:items-end wide:justify-between pointer-events-none mx-auto flex w-full flex-col">
        <div className="pointer-events-auto">{children}</div>
        <div className="border-hairline-inverse gap-item pt-inset desktop:flex-col desktop:items-end desktop:border-t-0 desktop:pt-0 pointer-events-auto flex shrink-0 items-center justify-between border-t">
          <div className="desktop:w-78 desktop:gap-label desktop:rounded-sm desktop:border desktop:border-hairline-inverse desktop:bg-glass desktop:p-inset desktop:backdrop-blur-md flex flex-col">
            <p className="typo-meta text-text-inverse-2 desktop:typo-overline desktop:text-accent uppercase">
              <ResponsiveCopy copy={activeSlide.figure} />
            </p>
            <p className="typo-small text-text-inverse desktop:block hidden">
              {activeSlide.caption}
            </p>
          </div>
          <CarouselControls
            controller={controller}
            controlsId={carouselId}
            progress="desktop"
            tone="inverse"
          />
        </div>
      </div>
    </>
  );
}
