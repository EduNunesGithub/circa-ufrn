import Link from "next/link";

import { type Copy, ResponsiveCopy } from "@/components/responsive-copy";
import { cn } from "@/lib/cn";
import { focusRingClassName } from "@/lib/control-styles";

type ChipProps = {
  active?: boolean;
  count?: string;
  current?: boolean;
  href: string;
  label: Copy;
};

export function Chip({
  active = false,
  count,
  current = false,
  href,
  label,
}: ChipProps) {
  return (
    <Link
      aria-current={current ? "page" : undefined}
      className={cn(
        "typo-label gap-control px-inset ease-standard flex h-10 shrink-0 items-center rounded-full border whitespace-nowrap transition-colors duration-250",
        active
          ? "border-border-strong bg-text text-text-inverse"
          : "border-border text-text-2 hover:bg-bg-alt",
        focusRingClassName("default"),
      )}
      href={href}
    >
      <ResponsiveCopy copy={label} />
      {count && (
        <span
          className={cn(
            "typo-meta",
            active ? "text-text-inverse-2" : "text-text-muted",
          )}
        >
          {count}
        </span>
      )}
    </Link>
  );
}
