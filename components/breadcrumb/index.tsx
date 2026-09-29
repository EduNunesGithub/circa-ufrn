import Link from "next/link";
import { Fragment } from "react";
import { LuChevronRight } from "react-icons/lu";

import { cn } from "@/lib/cn";
import { focusRingClassName } from "@/lib/control-styles";

export type BreadcrumbItem = {
  href?: string;
  label: string;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
};

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Trilha de navegação">
      <ol className="gap-control flex flex-wrap items-center">
        {items.map(({ href, label }, index) => (
          <Fragment key={label}>
            {index > 0 && (
              <li aria-hidden className="flex">
                <LuChevronRight className="text-text-disabled size-3" />
              </li>
            )}
            <li>
              {href ? (
                <Link
                  className={cn(
                    "typo-small text-text-muted rounded-sm hover:underline",
                    focusRingClassName("default"),
                  )}
                  href={href}
                >
                  {label}
                </Link>
              ) : (
                <span aria-current="page" className="typo-caption-medium">
                  {label}
                </span>
              )}
            </li>
          </Fragment>
        ))}
      </ol>
    </nav>
  );
}
