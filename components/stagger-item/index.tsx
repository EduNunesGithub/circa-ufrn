"use client";

import type { ReactNode } from "react";

import { motion } from "motion/react";

import { ITEM_VARIANTS } from "@/lib/motion";

type StaggerItemProps = {
  as?: "div" | "li";
  children: ReactNode;
  className?: string;
};

const elements = {
  div: motion.div,
  li: motion.li,
};

export function StaggerItem({
  as = "li",
  children,
  className,
}: StaggerItemProps) {
  const Element = elements[as];

  return (
    <Element className={className} initial={ITEM_VARIANTS.hidden}>
      {children}
    </Element>
  );
}
