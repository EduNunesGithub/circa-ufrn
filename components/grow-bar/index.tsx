"use client";

import { motion, useReducedMotion } from "motion/react";

import { cn } from "@/lib/cn";
import {
  BAR_VARIANTS,
  type BarAxis,
  DURATION,
  motionTransition,
  VIEWPORT,
} from "@/lib/motion";

type GrowBarProps = {
  axis?: BarAxis;
  className?: string;
};

export function GrowBar({ axis = "x", className }: GrowBarProps) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      className={cn(axis === "x" ? "origin-left" : "origin-bottom", className)}
      initial="hidden"
      transition={motionTransition(DURATION.block, reducedMotion)}
      variants={BAR_VARIANTS[axis]}
      viewport={VIEWPORT}
      whileInView="visible"
    />
  );
}
