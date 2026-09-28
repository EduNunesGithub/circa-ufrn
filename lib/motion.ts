import type {
  BezierDefinition,
  Transition,
  UseInViewOptions,
  Variants,
} from "motion/react";

export type EntranceName = "reveal" | "rise" | "settle" | "slide";

export const DURATION = {
  block: 0.75,
  countUp: 1,
  hero: 1,
  item: 0.5,
  micro: 0.25,
} as const;

export const EASE: BezierDefinition = [0.22, 1, 0.36, 1];

export const DISTANCE = {
  item: 16,
  rise: 24,
  slide: 32,
} as const;

export const SETTLE_SCALE = 1.04;

export const MEDIA_SCALE = 1.04;

export const STAGGER = 0.25;

export const COUNT_START = 0;

export const INSTANT: Transition = { duration: 0 };

export const VIEWPORT: UseInViewOptions = {
  amount: "some",
  margin: "0px 0px -64px 0px",
  once: true,
};

export const ENTRANCES: Record<EntranceName, Variants> = {
  reveal: {
    hidden: { clipPath: "inset(0% 0% 100% 0%)", opacity: 0 },
    visible: {
      clipPath: "inset(0% 0% 0% 0%)",
      opacity: 1,
      transitionEnd: { clipPath: "none" },
    },
  },
  rise: {
    hidden: { opacity: 0, y: DISTANCE.rise },
    visible: { opacity: 1, y: 0 },
  },
  settle: {
    hidden: { opacity: 0, scale: SETTLE_SCALE },
    visible: { opacity: 1, scale: 1 },
  },
  slide: {
    hidden: { opacity: 0, x: -DISTANCE.slide },
    visible: { opacity: 1, x: 0 },
  },
};

export const ITEM_VARIANTS = {
  hidden: { opacity: 0, y: DISTANCE.item },
  visible: { opacity: 1, y: 0 },
} satisfies Variants;

export const MEDIA_VARIANTS: Variants = {
  hidden: { opacity: 0, scale: MEDIA_SCALE },
  visible: { opacity: 1, scale: 1 },
};

export const BAR_VARIANTS: Variants = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1 },
};

export function motionTransition(
  duration: number,
  reducedMotion: boolean | null,
): Transition {
  if (reducedMotion) {
    return {
      default: INSTANT,
      opacity: { duration: DURATION.micro, ease: EASE },
    };
  }

  return { duration, ease: EASE };
}
