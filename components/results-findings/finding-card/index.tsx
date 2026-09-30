import { LuFileText } from "react-icons/lu";

import type { Finding } from "@/components/results-findings";

import { ArrowLink } from "@/components/arrow-link";
import { Overline } from "@/components/overline";
import { ResponsiveCopy } from "@/components/responsive-copy";
import { cn } from "@/lib/cn";

type FindingCardProps = {
  linkLabel: string;
  variant: "card" | "rule";
} & Finding;

export function FindingCard({
  href,
  linkLabel,
  number,
  source,
  text,
  title,
  variant,
}: FindingCardProps) {
  const card = variant === "card";

  return (
    <article
      className={cn(
        "gap-item flex h-full flex-col",
        card
          ? "border-border-subtle bg-surface p-inset rounded-md border"
          : "border-border-strong pt-inset border-t",
      )}
    >
      <Overline>{number}</Overline>
      <h3 className="text-text">{title}</h3>
      <p className="text-text-2 max-desktop:typo-small">
        <ResponsiveCopy copy={text} />
      </p>
      <p className="typo-meta text-text-muted gap-control flex items-center">
        {!card && <LuFileText aria-hidden className="size-4 shrink-0" />}
        <ResponsiveCopy copy={source} />
      </p>
      <ArrowLink
        href={href}
        label={
          <>
            {linkLabel}
            <span className="sr-only">: {title}</span>
          </>
        }
      />
    </article>
  );
}
