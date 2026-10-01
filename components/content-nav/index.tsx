import Link from "next/link";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";

import { type Copy, ResponsiveCopy } from "@/components/responsive-copy";
import { cn } from "@/lib/cn";
import { focusRingClassName } from "@/lib/control-styles";

export type ContentNavContent = {
  label: string;
  next: ContentNavLink;
  previous: ContentNavLink;
};

type ContentNavLink = {
  href: string;
  label: string;
  title: Copy;
};

export function ContentNav({ label, next, previous }: ContentNavContent) {
  const linkClassName = cn(
    "gap-label py-inset group flex flex-col",
    focusRingClassName("default"),
  );
  const labelClassName =
    "typo-meta text-text-muted gap-control flex items-center uppercase";
  const titleClassName = "typo-title text-text group-hover:underline";

  return (
    <nav
      aria-label={label}
      className="border-border desktop:grid-cols-2 grid border-y"
    >
      <Link
        className={cn(
          linkClassName,
          "border-border desktop:border-r desktop:border-b-0 desktop:pr-inset border-b",
        )}
        href={previous.href}
      >
        <span className={labelClassName}>
          <LuArrowLeft aria-hidden className="size-3" />
          {previous.label}
        </span>
        <span className={titleClassName}>
          <ResponsiveCopy copy={previous.title} />
        </span>
      </Link>
      <Link
        className={cn(
          linkClassName,
          "desktop:items-end desktop:pl-inset desktop:text-right",
        )}
        href={next.href}
      >
        <span className={labelClassName}>
          {next.label}
          <LuArrowRight aria-hidden className="size-3" />
        </span>
        <span className={titleClassName}>
          <ResponsiveCopy copy={next.title} />
        </span>
      </Link>
    </nav>
  );
}
