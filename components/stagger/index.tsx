"use client";

import type { AnimationPlaybackControls } from "motion/react";
import type { ReactNode } from "react";

import { stagger, useAnimate, useInView, useReducedMotion } from "motion/react";
import { createElement, useEffect } from "react";

import {
  DURATION,
  INSTANT,
  ITEM_VARIANTS,
  motionTransition,
  STAGGER,
  VIEWPORT,
} from "@/lib/motion";

type StaggerProps = {
  as?: "div" | "dl" | "ol" | "ul";
  children: ReactNode;
  className?: string;
};

export function Stagger({ as = "ul", children, className }: StaggerProps) {
  const [scope, animate] = useAnimate<HTMLElement>();
  const inView = useInView(scope, VIEWPORT);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (!inView) return;
    const items = Array.from(scope.current.children);
    const shown = items.filter((item) => item.getClientRects().length > 0);
    const skipped = items.filter((item) => !shown.includes(item));
    const transition = motionTransition(DURATION.item, reducedMotion);
    const controls: AnimationPlaybackControls[] = [];
    if (shown.length > 0) {
      controls.push(
        animate(
          shown,
          ITEM_VARIANTS.visible,
          reducedMotion
            ? transition
            : { ...transition, delay: stagger(STAGGER) },
        ),
      );
    }
    if (skipped.length > 0) {
      controls.push(animate(skipped, ITEM_VARIANTS.visible, INSTANT));
    }
    return () => controls.forEach((control) => control.stop());
  }, [animate, inView, reducedMotion, scope]);

  return createElement(as, { className, ref: scope }, children);
}
