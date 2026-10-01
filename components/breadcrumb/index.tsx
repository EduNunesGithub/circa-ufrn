import Link from "next/link";
import { Fragment } from "react";
import { LuChevronRight } from "react-icons/lu";

import { type Copy, ResponsiveCopy } from "@/components/responsive-copy";
import { cn } from "@/lib/cn";
import { focusRingClassName, type Tone } from "@/lib/control-styles";

export type BreadcrumbItem = {
  href?: string;
  label: Copy;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
  tone?: Tone;
};

export function Breadcrumb({ items, tone = "default" }: BreadcrumbProps) {
  const inverse = tone === "inverse";

  return (
    <nav aria-label="Trilha de navegação">
      <ol className="gap-control flex flex-wrap items-center">
        {items.map(({ href, label }, index) => (
          <Fragment key={href ?? "current"}>
            {index > 0 && (
              <li aria-hidden className="flex">
                <LuChevronRight
                  className={cn(
                    "size-3",
                    inverse ? "text-text-inverse-2" : "text-text-disabled",
                  )}
                />
              </li>
            )}
            <li>
              {href ? (
                <Link
                  className={cn(
                    "typo-small rounded-sm hover:underline",
                    inverse ? "text-text-inverse-2" : "text-text-muted",
                    focusRingClassName(tone),
                  )}
                  href={href}
                >
                  <ResponsiveCopy copy={label} />
                </Link>
              ) : (
                <span
                  aria-current="page"
                  className={cn(
                    "typo-caption-medium",
                    inverse && "text-text-inverse",
                  )}
                >
                  <ResponsiveCopy copy={label} />
                </span>
              )}
            </li>
          </Fragment>
        ))}
      </ol>
    </nav>
  );
}
