"use client";

import type { ReactNode } from "react";

import { motion, useReducedMotion } from "motion/react";

import {
  DURATION,
  MEDIA_VARIANTS,
  motionTransition,
  VIEWPORT,
} from "@/lib/motion";

type MediaAppearProps = {
  children: ReactNode;
};

export function MediaAppear({ children }: MediaAppearProps) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      className="absolute inset-0"
      initial="hidden"
      transition={motionTransition(DURATION.block, reducedMotion)}
      variants={MEDIA_VARIANTS}
      viewport={VIEWPORT}
      whileInView="visible"
    >
      {children}
    </motion.div>
  );
}
