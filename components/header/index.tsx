import Link from "next/link";

import { ButtonLink } from "@/components/button-link";
import { HeaderNav } from "@/components/header/header-nav";
import { MobileMenu } from "@/components/header/mobile-menu";
import { Logo } from "@/components/logo";
import { cn } from "@/lib/cn";
import { focusRingClassName, type Tone } from "@/lib/control-styles";
import { headerCta } from "@/lib/navigation";

type HeaderProps = {
  variant?: "solid" | "transparent";
};

export function Header({ variant = "solid" }: HeaderProps) {
  const tone: Tone = variant === "transparent" ? "inverse" : "default";

  return (
    <header
      className={cn(
        "border-b",
        variant === "transparent"
          ? "border-hairline-inverse absolute inset-x-0 top-0 z-10"
          : "border-border-subtle bg-bg",
      )}
      id="top"
    >
      <div className="gap-block min-h-header max-w-page px-gutter py-control mx-auto flex items-center justify-between">
        <Link
          aria-label="CIRCA, página inicial"
          className={cn("shrink-0 rounded-sm", focusRingClassName(tone))}
          href="/"
        >
          <Logo size="responsive" tone={tone} />
        </Link>
        <div className="gap-x-group gap-y-control desktop:flex hidden min-w-0 flex-1 flex-wrap items-center justify-end">
          <HeaderNav tone={tone} />
          <ButtonLink
            className="shrink-0"
            href={headerCta.href}
            label={headerCta.label}
            tone={tone}
          />
        </div>
        <div className="desktop:hidden">
          <MobileMenu tone={tone} />
        </div>
      </div>
    </header>
  );
}
