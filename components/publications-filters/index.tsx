import { Chip } from "@/components/chip";
import { cn } from "@/lib/cn";
import {
  contentCategories,
  publicationsFilterContent,
} from "@/lib/publications/hero";

export function PublicationsFilters() {
  const { all, label, sort } = publicationsFilterContent;

  return (
    <div className="border-border bg-bg-alt border-y">
      <nav
        aria-label={label}
        className="gap-group max-w-page pl-gutter py-inset wide:pr-gutter mx-auto flex items-center justify-between"
      >
        <ul className="gap-control wide:flex-wrap max-wide:pr-gutter max-wide:pl-control max-wide:py-control max-wide:-my-control max-wide:-ml-control wide:overflow-visible flex min-w-0 flex-1 overflow-x-auto">
          <li className="flex">
            <Chip
              active
              count={all.count}
              current
              href={all.href}
              label={all.label}
            />
          </li>
          {contentCategories.map(
            ({ count, desktopOnly = false, href, shortLabel }) => (
              <li
                className={cn("flex", desktopOnly && "max-desktop:hidden")}
                key={shortLabel}
              >
                <Chip count={count} href={href} label={shortLabel} />
              </li>
            ),
          )}
        </ul>
        <p className="typo-meta text-text-muted wide:block hidden shrink-0 uppercase">
          {sort}
        </p>
      </nav>
    </div>
  );
}
