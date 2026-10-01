import type { PageAnchor } from "@/components/research-hero";

import { Chip } from "@/components/chip";
import { cn } from "@/lib/cn";

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
          ({ desktopOnly = false, id, label: anchorLabel }, index) => (
            <li className={cn(desktopOnly && "desktop:block hidden")} key={id}>
              <Chip active={index === 0} href={`#${id}`} label={anchorLabel} />
            </li>
          ),
        )}
      </ul>
    </nav>
  );
}
