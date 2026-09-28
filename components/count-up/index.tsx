"use client";

import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "motion/react";
import { useEffect, useRef } from "react";

import { COUNT_START, DURATION, EASE, VIEWPORT } from "@/lib/motion";

export type IntegerText = string;

type CountUpProps = {
  value: IntegerText;
};

const integerPattern = /^(\D*)(\d+)(.*)$/;

export function CountUp({ value }: CountUpProps) {
  const match = integerPattern.exec(value);
  const [, prefix = "", digits = "", suffix = ""] = match ?? [];
  const countable = match !== null;
  const target = Number(digits);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, VIEWPORT);
  const reducedMotion = useReducedMotion();
  const count = useMotionValue(COUNT_START);
  const text = useTransform(
    count,
    (latest) => `${prefix}${Math.round(latest)}${suffix}`,
  );

  useEffect(() => {
    if (!countable || !inView) return;
    if (reducedMotion) {
      count.jump(target);
      return;
    }
    const controls = animate(count, target, {
      duration: DURATION.countUp,
      ease: EASE,
    });
    return () => controls.stop();
  }, [count, countable, inView, reducedMotion, target]);

  if (!countable) return value;

  return (
    <span className="relative inline-block" ref={ref}>
      <span className="sr-only">{value}</span>
      <span aria-hidden className="motion-safe:invisible">
        {value}
      </span>
      <motion.span
        aria-hidden
        className="absolute inset-0 whitespace-nowrap motion-reduce:hidden"
      >
        {text}
      </motion.span>
    </span>
  );
}
