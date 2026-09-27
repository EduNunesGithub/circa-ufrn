import { NavigationMenu } from "@base-ui/react/navigation-menu";
import Link from "next/link";

import { cn } from "@/lib/cn";
import { focusRingClassName, type Tone } from "@/lib/control-styles";

type NavItemProps = {
  active: boolean;
  href: string;
  label: string;
  tone?: Tone;
};

export function NavItem({
  active,
  href,
  label,
  tone = "default",
}: NavItemProps) {
  const inverse = tone === "inverse";

  return (
    <NavigationMenu.Link
      active={active}
      className={cn(
        "gap-control flex h-10 shrink-0 items-center rounded-sm whitespace-nowrap transition-colors",
        active ? "typo-label-strong" : "typo-label",
        inverse
          ? "text-text-inverse-2 hover:text-text-inverse data-active:text-text-inverse"
          : "text-text-2 hover:text-text data-active:text-text",
        focusRingClassName(tone),
      )}
      render={<Link href={href} />}
    >
      {active && (
        <span
          aria-hidden
          className={cn(
            "size-2 rounded-full",
            inverse ? "bg-accent" : "bg-secondary",
          )}
        />
      )}
      {label}
    </NavigationMenu.Link>
  );
}
