import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

type FooterLinkColumnProps = {
  children: ReactNode;
  className?: string;
  heading: string;
};

export function FooterLinkColumn({
  children,
  className,
  heading,
}: FooterLinkColumnProps) {
  return (
    <div className={cn("gap-label wide:flex-1 flex flex-col", className)}>
      <p className="typo-overline text-accent">{heading}</p>
      {children}
    </div>
  );
}
