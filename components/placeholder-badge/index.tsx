import { LuInfo } from "react-icons/lu";

import { type Copy, ResponsiveCopy } from "@/components/responsive-copy";

type PlaceholderBadgeProps = {
  label?: Copy;
};

export function PlaceholderBadge({
  label = "Dado ilustrativo",
}: PlaceholderBadgeProps) {
  return (
    <span className="gap-control px-control border-accent bg-accent-soft text-warning typo-meta flex min-h-6 w-fit max-w-full items-center rounded-sm border">
      <LuInfo aria-hidden className="size-3 shrink-0" />
      <ResponsiveCopy copy={label} />
    </span>
  );
}
