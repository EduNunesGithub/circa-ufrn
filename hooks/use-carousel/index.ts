import type { Swiper as SwiperInstance } from "swiper";

import { useCallback, useRef, useState } from "react";

import {
  type CarouselState,
  createCarouselState,
  readCarouselState,
} from "@/lib/carousel";

export type CarouselController = {
  next: () => void;
  onChange: (swiper: SwiperInstance) => void;
  onSwiper: (swiper: SwiperInstance) => void;
  prev: () => void;
  state: CarouselState;
};

export function useCarousel(total: number): CarouselController {
  const swiperRef = useRef<null | SwiperInstance>(null);
  const [state, setState] = useState<CarouselState>(() =>
    createCarouselState(total),
  );

  const onChange = useCallback((swiper: SwiperInstance) => {
    setState(readCarouselState(swiper));
  }, []);

  const onSwiper = useCallback((swiper: SwiperInstance) => {
    swiperRef.current = swiper;
    setState(readCarouselState(swiper));
  }, []);

  const next = useCallback(() => {
    swiperRef.current?.slideNext();
  }, []);

  const prev = useCallback(() => {
    swiperRef.current?.slidePrev();
  }, []);

  return { next, onChange, onSwiper, prev, state };
}
