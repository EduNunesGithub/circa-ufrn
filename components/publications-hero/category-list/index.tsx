import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";

import type { ContentCategory } from "@/components/publications-hero";

import { cn } from "@/lib/cn";
import { focusRingClassName } from "@/lib/control-styles";

type CategoryListProps = {
  categories: ContentCategory[];
  className: string;
  label: string;
};

export function CategoryList({
  categories,
  className,
  label,
}: CategoryListProps) {
  return (
    <nav
      aria-label={label}
      className={cn("desktop:block hidden min-w-0", className)}
    >
      <ul className="border-border-strong flex flex-col border-t">
        {categories.map(({ count, href, icon: Icon, label: categoryLabel }) => (
          <li className="border-border border-b" key={categoryLabel}>
            <Link
              className={cn(
                "gap-item ease-standard hover:bg-bg-alt flex h-10 items-center transition-colors duration-250",
                focusRingClassName("default"),
              )}
              href={href}
            >
              <Icon aria-hidden className="text-secondary size-4 shrink-0" />
              <span className="typo-label text-text min-w-0 flex-1">
                {categoryLabel}
              </span>
              <span className="typo-meta text-text-muted">{count}</span>
              <LuArrowRight aria-hidden className="text-text-muted size-4" />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
