import type { ReactNode } from "react";

import type { Tone } from "@/lib/control-styles";

import { cn } from "@/lib/cn";

type OverlineProps = {
  children: ReactNode;
  className?: string;
  tone?: Tone;
};

export function Overline({
  children,
  className,
  tone = "default",
}: OverlineProps) {
  return (
    <p
      className={cn(
        "typo-overline",
        tone === "inverse" ? "text-accent" : "text-secondary",
        className,
      )}
    >
      {children}
    </p>
  );
}
