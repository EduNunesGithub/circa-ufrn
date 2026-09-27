import type { Swiper as SwiperInstance } from "swiper";

export type CarouselState = {
  current: number;
  isBeginning: boolean;
  isEnd: boolean;
  ready: boolean;
  total: number;
};

export const carouselMessages = {
  containerRoleDescription: "carrossel",
  first: "Este é o primeiro slide",
  last: "Este é o último slide",
  next: "Próximo slide",
  prev: "Slide anterior",
  slideLabel: "{{index}} de {{slidesLength}}",
  slideRoleDescription: "slide",
};

export function bindArrowKeys(swiper: SwiperInstance): void {
  function handleKeyDown(event: KeyboardEvent) {
    if (event.target !== swiper.el) {
      return;
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      swiper.slideNext();
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      swiper.slidePrev();
    }
  }

  swiper.el.addEventListener("keydown", handleKeyDown);
  swiper.on("destroy", () => {
    swiper.el.removeEventListener("keydown", handleKeyDown);
  });
}

export function createCarouselState(total: number): CarouselState {
  return {
    current: 1,
    isBeginning: true,
    isEnd: total <= 1,
    ready: false,
    total,
  };
}

export function formatCounter(value: number): string {
  return String(value).padStart(2, "0");
}

export function readCarouselState(swiper: SwiperInstance): CarouselState {
  const total = Math.max(swiper.snapGrid.length, 1);

  return {
    current: swiper.isEnd ? total : Math.min(swiper.snapIndex + 1, total),
    isBeginning: swiper.isBeginning,
    isEnd: swiper.isEnd,
    ready: true,
    total,
  };
}
