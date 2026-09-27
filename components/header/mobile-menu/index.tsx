"use client";

import { Dialog } from "@base-ui/react/dialog";
import { NavigationMenu } from "@base-ui/react/navigation-menu";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { LuMenu, LuX } from "react-icons/lu";

import { ButtonLink } from "@/components/button-link";
import { MobileMenuItem } from "@/components/header/mobile-menu/mobile-menu-item";
import { Logo } from "@/components/logo";
import { SocialLinks } from "@/components/social-links";
import { cn } from "@/lib/cn";
import {
  focusRingClassName,
  iconButtonClassName,
  type Tone,
} from "@/lib/control-styles";
import { isActivePath, menuCta, menuLinks } from "@/lib/navigation";
import { siteInfo } from "@/lib/site-info";

type MobileMenuProps = {
  tone: Tone;
};

export function MobileMenu({ tone }: MobileMenuProps) {
  const pathname = usePathname();
  const [openedAt, setOpenedAt] = useState<null | string>(null);
  if (openedAt !== null && openedAt !== pathname) {
    setOpenedAt(null);
  }
  const open = openedAt === pathname;
  const close = () => setOpenedAt(null);
  const handleOpenChange = (nextOpen: boolean) =>
    setOpenedAt(nextOpen ? pathname : null);

  return (
    <Dialog.Root onOpenChange={handleOpenChange} open={open}>
      <Dialog.Trigger
        aria-label="Abrir menu"
        className={iconButtonClassName(tone)}
      >
        <LuMenu aria-hidden className="size-5" />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Backdrop className="bg-scrim fixed inset-0 z-50 transition-opacity duration-300 ease-out data-ending-style:opacity-0 data-starting-style:opacity-0 motion-reduce:transition-none" />
        <Dialog.Popup className="bg-inverse text-text-inverse shadow-overlay fixed inset-y-0 right-0 z-50 flex w-11/12 max-w-sm flex-col overflow-y-auto overscroll-contain transition-transform duration-300 ease-out data-ending-style:translate-x-full data-starting-style:translate-x-full motion-reduce:transition-none">
          <div className="border-hairline-inverse h-header px-gutter flex shrink-0 items-center justify-between border-b">
            <Logo size="compact" tone="inverse" />
            <Dialog.Close
              aria-label="Fechar menu"
              className={iconButtonClassName("inverse")}
            >
              <LuX aria-hidden className="size-5" />
            </Dialog.Close>
          </div>
          <div className="gap-block px-gutter py-inset flex flex-col">
            <Dialog.Title className="typo-overline text-accent">
              Navegação
            </Dialog.Title>
            <NavigationMenu.Root aria-label="Principal" orientation="vertical">
              <NavigationMenu.List className="flex flex-col">
                {menuLinks.map((link) => (
                  <NavigationMenu.Item key={link.href}>
                    <MobileMenuItem
                      active={isActivePath(pathname, link.href)}
                      href={link.href}
                      label={link.menuLabel}
                      onNavigate={close}
                    />
                  </NavigationMenu.Item>
                ))}
              </NavigationMenu.List>
            </NavigationMenu.Root>
            <ButtonLink
              className="w-full"
              href={menuCta.href}
              label={menuCta.label}
              onClick={close}
              tone="inverse"
            />
            <div className="gap-label flex flex-col">
              <p className="typo-meta text-text-inverse-2 uppercase">Contato</p>
              <a
                className={cn(
                  "typo-label w-fit rounded-sm hover:underline",
                  focusRingClassName("inverse"),
                )}
                href={`mailto:${siteInfo.email}`}
              >
                {siteInfo.email}
              </a>
              <SocialLinks />
            </div>
          </div>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
