"use client";

import { NavigationMenu } from "@base-ui/react/navigation-menu";
import { usePathname } from "next/navigation";

import type { Tone } from "@/lib/control-styles";

import { NavItem } from "@/components/nav-item";
import { headerLinks, isActivePath } from "@/lib/navigation";

type HeaderNavProps = {
  tone: Tone;
};

export function HeaderNav({ tone }: HeaderNavProps) {
  const pathname = usePathname();

  return (
    <NavigationMenu.Root aria-label="Principal" className="min-w-0">
      <NavigationMenu.List className="gap-x-group gap-y-control flex flex-wrap items-center justify-end">
        {headerLinks.map((link) => (
          <NavigationMenu.Item key={link.href}>
            <NavItem
              active={isActivePath(pathname, link.href)}
              href={link.href}
              label={link.label}
              tone={tone}
            />
          </NavigationMenu.Item>
        ))}
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
}
