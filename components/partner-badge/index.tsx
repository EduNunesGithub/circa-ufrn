import type { IconType } from "react-icons/lib";

type PartnerBadgeProps = {
  icon: IconType;
  name: string;
};

export function PartnerBadge({ icon: Icon, name }: PartnerBadgeProps) {
  return (
    <span className="gap-control px-inset border-hairline-inverse flex h-10 items-center rounded-sm border">
      <Icon aria-hidden className="text-text-inverse-2 size-4 shrink-0" />
      <span className="typo-caption-strong text-text-inverse">{name}</span>
    </span>
  );
}
