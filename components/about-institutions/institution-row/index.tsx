import { LuArrowUpRight } from "react-icons/lu";

import type { Institution } from "@/components/about-institutions";

import { ResponsiveCopy } from "@/components/responsive-copy";
import { cn } from "@/lib/cn";
import { iconButtonClassName } from "@/lib/control-styles";

export function InstitutionRow({
  description,
  href,
  icon: Icon,
  name,
  role,
}: Institution) {
  return (
    <article className="border-border gap-group py-inset flex items-start border-t">
      <span className="border-border-subtle bg-surface desktop:size-16 flex size-12 shrink-0 items-center justify-center rounded-sm border">
        <Icon aria-hidden className="text-primary size-6" />
      </span>
      <div className="gap-control flex min-w-0 flex-1 flex-col">
        <p className="typo-overline text-secondary">{role}</p>
        <h3 className="typo-card-title text-text">
          <ResponsiveCopy copy={name} />
        </h3>
        <p className="typo-small text-text-muted">
          <ResponsiveCopy copy={description} />
        </p>
      </div>
      {href && (
        <a
          className={cn(
            iconButtonClassName("default"),
            "desktop:flex hidden border-transparent",
          )}
          href={href}
          rel="noopener noreferrer"
          target="_blank"
        >
          <LuArrowUpRight aria-hidden className="size-4" />
          <span className="sr-only">
            Site da instituição (abre em nova aba)
          </span>
        </a>
      )}
    </article>
  );
}
