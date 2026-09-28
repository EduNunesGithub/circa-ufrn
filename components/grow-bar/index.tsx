"use client";

import { motion, useReducedMotion } from "motion/react";

import { cn } from "@/lib/cn";
import {
  BAR_VARIANTS,
  DURATION,
  motionTransition,
  VIEWPORT,
} from "@/lib/motion";

type GrowBarProps = {
  className?: string;
};

export function GrowBar({ className }: GrowBarProps) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      className={cn("origin-left", className)}
      initial="hidden"
      transition={motionTransition(DURATION.block, reducedMotion)}
      variants={BAR_VARIANTS}
      viewport={VIEWPORT}
      whileInView="visible"
    />
  );
}
