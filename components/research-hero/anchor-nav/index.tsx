import type { PageAnchor } from "@/components/research-hero";

import { ResponsiveCopy } from "@/components/responsive-copy";
import { cn } from "@/lib/cn";
import { focusRingClassName } from "@/lib/control-styles";

type AnchorNavProps = {
  anchors: PageAnchor[];
  label: string;
};

export function AnchorNav({ anchors, label }: AnchorNavProps) {
  return (
    <nav
      aria-label={label}
      className="border-border gap-group py-inset max-desktop:-mx-gutter flex items-center border-y"
    >
      <p className="typo-meta text-text-muted desktop:block hidden w-28 shrink-0 uppercase">
        {label}
      </p>
      <ul className="gap-control max-desktop:px-gutter desktop:flex-wrap max-desktop:overflow-x-auto flex min-w-0 flex-1">
        {anchors.map(
          ({ desktopOnly = false, id, label: anchorLabel }, index) => {
            const featured = index === 0;

            return (
              <li
                className={cn(
                  "shrink-0",
                  desktopOnly && "desktop:block hidden",
                )}
                key={id}
              >
                <a
                  className={cn(
                    "typo-label px-inset ease-standard flex h-10 items-center rounded-full border whitespace-nowrap transition-colors duration-250",
                    featured
                      ? "border-text bg-text text-text-inverse"
                      : "border-border text-text-2 hover:bg-bg-alt",
                    focusRingClassName("default"),
                    "max-desktop:-outline-offset-4",
                  )}
                  href={`#${id}`}
                >
                  <ResponsiveCopy copy={anchorLabel} />
                </a>
              </li>
            );
          },
        )}
      </ul>
    </nav>
  );
}
