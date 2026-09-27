import type { ReactNode } from "react";
import type { IconType } from "react-icons/lib";

import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";

import { cn } from "@/lib/cn";
import { focusRingClassName, type Tone } from "@/lib/control-styles";

type ArrowLinkProps = {
  href: string;
  icon?: IconType;
  label: ReactNode;
  tone?: Tone;
};

export function ArrowLink({
  href,
  icon: Icon = LuArrowRight,
  label,
  tone = "default",
}: ArrowLinkProps) {
  return (
    <Link
      className={cn(
        "typo-label gap-control flex h-10 w-fit items-center rounded-sm hover:underline",
        tone === "inverse" ? "text-text-inverse" : "text-primary",
        focusRingClassName(tone),
      )}
      href={href}
    >
      {label}
      <Icon aria-hidden className="size-4" />
    </Link>
  );
}
