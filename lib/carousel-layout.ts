import type { Swiper as SwiperInstance } from "swiper";

type LayoutOptions = {
  bleed: boolean;
  spaced: boolean;
};

export function syncCarouselLayout(
  swiper: SwiperInstance,
  { bleed, spaced }: LayoutOptions,
): void {
  const { el, params } = swiper;
  const [before, after] = bleed ? measureBleed(el) : [0, 0];
  el.style.marginLeft = before > 0 ? `${-before}px` : "";
  el.style.marginRight = after > 0 ? `${-after}px` : "";

  const spacing = spaced ? readSpacing(el) : 0;
  const trackWidth = measureTrack(swiper, spacing);
  const size = el.clientWidth;
  const offsetAfter = resolveOffsetAfter({ after, before, size, trackWidth });

  if (
    params.spaceBetween !== spacing ||
    params.slidesOffsetBefore !== before ||
    params.slidesOffsetAfter !== offsetAfter
  ) {
    params.spaceBetween = spacing;
    params.slidesOffsetBefore = before;
    params.slidesOffsetAfter = offsetAfter;
    const wasAtStart = swiper.isBeginning;
    swiper.update();
    if (wasAtStart) {
      swiper.slideTo(0, 0);
    }
  }
}

function measureBleed(el: HTMLElement): [number, number] {
  const column = el.parentElement;

  if (!column) {
    return [0, 0];
  }

  const { left, right } = column.getBoundingClientRect();
  const viewportWidth = document.documentElement.clientWidth;

  return [Math.max(0, left), Math.max(0, viewportWidth - right)];
}

function measureTrack(swiper: SwiperInstance, spacing: number): number {
  const slides = Array.from(swiper.slides);
  const widths = slides.reduce((sum, slide) => sum + slide.offsetWidth, 0);

  return widths + spacing * Math.max(slides.length - 1, 0);
}

function readSpacing(el: HTMLElement): number {
  return (
    Number.parseFloat(
      getComputedStyle(el).getPropertyValue("--spacing-item"),
    ) || 0
  );
}

function resolveOffsetAfter({
  after,
  before,
  size,
  trackWidth,
}: {
  after: number;
  before: number;
  size: number;
  trackWidth: number;
}): number {
  if (before + trackWidth <= size) {
    return -before;
  }

  return trackWidth < size ? trackWidth + after - size : after;
}
