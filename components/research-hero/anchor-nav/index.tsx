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
      className="border-border gap-group py-inset flex items-center border-y"
    >
      <p className="typo-meta text-text-muted desktop:block hidden w-28 shrink-0 uppercase">
        {label}
      </p>
      <ul className="gap-control flex min-w-0 flex-1 flex-wrap">
        {anchors.map(
          ({ desktopOnly = false, id, label: anchorLabel }, index) => {
            const featured = index === 0;

            return (
              <li
                className={cn(desktopOnly && "desktop:block hidden")}
                key={id}
              >
                <a
                  className={cn(
                    "typo-label px-inset ease-standard flex h-10 items-center rounded-full border whitespace-nowrap transition-colors duration-250",
                    featured
                      ? "border-border-strong bg-text text-text-inverse"
                      : "border-border text-text-2 hover:bg-bg-alt",
                    focusRingClassName("default"),
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
