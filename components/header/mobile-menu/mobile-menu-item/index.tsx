import { NavigationMenu } from "@base-ui/react/navigation-menu";
import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";

import { cn } from "@/lib/cn";
import { focusRingClassName } from "@/lib/control-styles";

type MobileMenuItemProps = {
  active: boolean;
  href: string;
  label: string;
  onNavigate: () => void;
};

export function MobileMenuItem({
  active,
  href,
  label,
  onNavigate,
}: MobileMenuItemProps) {
  return (
    <NavigationMenu.Link
      active={active}
      className={cn(
        "border-hairline-inverse text-text-inverse flex h-12 items-center justify-between border-b",
        focusRingClassName("inverse"),
      )}
      onClick={onNavigate}
      render={<Link href={href} />}
    >
      <span className="gap-control flex items-center">
        {active && (
          <span aria-hidden className="bg-accent size-2 rounded-full" />
        )}
        <span className="typo-title">{label}</span>
      </span>
      <LuArrowRight aria-hidden className="text-text-inverse-2 size-4" />
    </NavigationMenu.Link>
  );
}
