import { Chip } from "@/components/chip";
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
        className="gap-group max-w-page px-gutter py-inset mx-auto flex items-center justify-between"
      >
        <ul className="gap-control flex min-w-0 flex-1 flex-wrap">
          <li className="flex">
            <Chip
              active
              count={all.count}
              current
              href={all.href}
              label={all.label}
            />
          </li>
          {contentCategories.map(({ count, href, shortLabel }) => (
            <li className="flex" key={shortLabel}>
              <Chip count={count} href={href} label={shortLabel} />
            </li>
          ))}
        </ul>
        <p className="typo-meta text-text-muted wide:block hidden shrink-0 uppercase">
          {sort}
        </p>
      </nav>
    </div>
  );
}
