import Link from "next/link";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

import { cn } from "@/lib/cn";
import { focusRingClassName } from "@/lib/control-styles";

type PageArrowProps = {
  className?: string;
  direction: "next" | "previous";
  href?: string;
  label: string;
  variant: "filled" | "ghost" | "outline";
};

const variantClassNames: Record<PageArrowProps["variant"], string> = {
  filled: "bg-primary text-text-inverse hover:bg-primary-hover",
  ghost: "text-text hover:bg-bg-alt",
  outline: "border border-border text-text hover:bg-bg-alt",
};

export function PageArrow({
  className,
  direction,
  href,
  label,
  variant,
}: PageArrowProps) {
  const Icon = direction === "next" ? LuChevronRight : LuChevronLeft;
  const classNames = cn(
    "ease-standard flex size-10 shrink-0 items-center justify-center rounded-sm transition-colors duration-250",
    variantClassNames[variant],
    className,
  );
  const icon = <Icon aria-hidden className="size-5" />;

  if (!href) {
    return (
      <span
        aria-disabled
        aria-label={label}
        className={cn(classNames, "pointer-events-none opacity-40")}
        role="link"
      >
        {icon}
      </span>
    );
  }

  return (
    <Link
      aria-label={label}
      className={cn(classNames, focusRingClassName("default"))}
      href={href}
    >
      {icon}
    </Link>
  );
}
