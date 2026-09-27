"use client";

import type { Swiper as SwiperInstance } from "swiper";

import { Children, isValidElement, type ReactNode } from "react";
import { A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import type { CarouselController } from "@/hooks/use-carousel";

import { bindArrowKeys, carouselMessages } from "@/lib/carousel";
import { syncCarouselLayout } from "@/lib/carousel-layout";
import { cn } from "@/lib/cn";
import { focusRingClassName, type Tone } from "@/lib/control-styles";

type CarouselProps = {
  bleed?: boolean;
  children: ReactNode;
  className?: string;
  controller: CarouselController;
  id: string;
  label: string;
  slideClassName?: string;
  spaced?: boolean;
  tone?: Tone;
};

export function Carousel({
  bleed = false,
  children,
  className,
  controller,
  id,
  label,
  slideClassName,
  spaced = true,
  tone = "default",
}: CarouselProps) {
  const { onChange, onSwiper } = controller;

  function handleSwiper(swiper: SwiperInstance) {
    bindArrowKeys(swiper);
    onSwiper(swiper);
  }

  function handleResize(swiper: SwiperInstance) {
    syncCarouselLayout(swiper, { bleed, spaced });
    onChange(swiper);
  }

  return (
    <Swiper
      a11y={{
        containerMessage: label,
        containerRole: "region",
        containerRoleDescriptionMessage:
          carouselMessages.containerRoleDescription,
        firstSlideMessage: carouselMessages.first,
        id,
        itemRoleDescriptionMessage: carouselMessages.slideRoleDescription,
        lastSlideMessage: carouselMessages.last,
        nextSlideMessage: carouselMessages.next,
        prevSlideMessage: carouselMessages.prev,
        slideLabelMessage: carouselMessages.slideLabel,
      }}
      className={cn(focusRingClassName(tone), className)}
      modules={[A11y]}
      onFromEdge={onChange}
      onInit={(swiper) => syncCarouselLayout(swiper, { bleed, spaced })}
      onReachBeginning={onChange}
      onReachEnd={onChange}
      onResize={handleResize}
      onSlideChange={onChange}
      onSnapGridLengthChange={onChange}
      onSwiper={handleSwiper}
      resizeObserver={false}
      slidesPerView="auto"
      spaceBetween={0}
      tabIndex={0}
      touchEventsTarget="container"
      watchSlidesProgress
    >
      {Children.toArray(children).map((child, index) => (
        <SwiperSlide
          className={cn("h-auto", slideClassName)}
          key={isValidElement(child) ? child.key : index}
        >
          {child}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
