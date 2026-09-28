"use client";

import type { ReactNode } from "react";

import { motion, useReducedMotion } from "motion/react";

import {
  DURATION,
  type EntranceName,
  ENTRANCES,
  motionTransition,
  VIEWPORT,
} from "@/lib/motion";

type EntranceProps = {
  "aria-labelledby"?: string;
  as?: "div" | "section";
  children: ReactNode;
  className?: string;
  entrance: EntranceName;
  hero?: boolean;
};

const elements = {
  div: motion.div,
  section: motion.section,
};

export function Entrance({
  "aria-labelledby": labelledBy,
  as = "div",
  children,
  className,
  entrance,
  hero = false,
}: EntranceProps) {
  const reducedMotion = useReducedMotion();
  const Element = elements[as];

  return (
    <Element
      aria-labelledby={labelledBy}
      className={className}
      initial="hidden"
      transition={motionTransition(
        hero ? DURATION.hero : DURATION.block,
        reducedMotion,
      )}
      variants={ENTRANCES[entrance]}
      viewport={VIEWPORT}
      whileInView="visible"
    >
      {children}
    </Element>
  );
}
