import type { ReactNode } from "react";
import type { IconType } from "react-icons/lib";

import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";

import { cn } from "@/lib/cn";
import {
  buttonClassName,
  type ButtonVariant,
  type Tone,
} from "@/lib/control-styles";

type ButtonLinkProps = {
  className?: string;
  href: string;
  icon?: IconType;
  label: ReactNode;
  onClick?: () => void;
  tone?: Tone;
  variant?: ButtonVariant;
};

export function ButtonLink({
  className,
  href,
  icon: Icon = LuArrowRight,
  label,
  onClick,
  tone = "default",
  variant = "solid",
}: ButtonLinkProps) {
  return (
    <Link
      className={cn(buttonClassName(tone, variant), className)}
      href={href}
      onClick={onClick}
    >
      {label}
      <Icon aria-hidden className="size-4 shrink-0" />
    </Link>
  );
}
