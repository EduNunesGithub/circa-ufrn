import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";

import { cn } from "@/lib/cn";
import { buttonClassName, type Tone } from "@/lib/control-styles";

type ButtonLinkProps = {
  className?: string;
  href: string;
  label: string;
  onClick?: () => void;
  tone?: Tone;
};

export function ButtonLink({
  className,
  href,
  label,
  onClick,
  tone = "default",
}: ButtonLinkProps) {
  return (
    <Link
      className={cn(buttonClassName(tone), className)}
      href={href}
      onClick={onClick}
    >
      {label}
      <LuArrowRight aria-hidden className="size-4" />
    </Link>
  );
}
