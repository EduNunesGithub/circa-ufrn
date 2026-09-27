import type { IconType } from "react-icons/lib";

import { cn } from "@/lib/cn";

export type PartnerData = {
  icon: IconType;
  name: string;
};

type PartnerBadgeProps = {
  variant?: PartnerBadgeVariant;
} & PartnerData;

type PartnerBadgeVariant = "outline" | "tile";

const variantClassNames: Record<
  PartnerBadgeVariant,
  { icon: string; name: string; root: string }
> = {
  outline: {
    icon: "text-text-inverse-2 size-4",
    name: "text-text-inverse",
    root: "border-hairline-inverse h-10",
  },
  tile: {
    icon: "text-primary desktop:size-5 size-4",
    name: "text-text min-w-0",
    root: "border-border-subtle bg-surface desktop:h-14 h-12",
  },
};

export function PartnerBadge({
  icon: Icon,
  name,
  variant = "outline",
}: PartnerBadgeProps) {
  const classNames = variantClassNames[variant];

  return (
    <span
      className={cn(
        "gap-control px-inset flex items-center rounded-sm border",
        classNames.root,
      )}
    >
      <Icon aria-hidden className={cn("shrink-0", classNames.icon)} />
      <span className={cn("typo-caption-strong", classNames.name)}>{name}</span>
    </span>
  );
}
