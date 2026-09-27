import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";

import type { ResearchLine } from "@/components/home-research";

import { MediaFrame } from "@/components/media-frame";
import { ResponsiveCopy } from "@/components/responsive-copy";
import { cn } from "@/lib/cn";
import { focusRingClassName } from "@/lib/control-styles";

type ResearchLineRowProps = {
  href: string;
} & ResearchLine;

export function ResearchLineRow({
  description,
  href,
  image,
  number,
  title,
}: ResearchLineRowProps) {
  return (
    <Link
      className={cn(
        "border-border gap-item py-inset desktop:items-start desktop:gap-group group flex items-center border-t",
        focusRingClassName("default"),
      )}
      href={href}
    >
      <MediaFrame
        className="desktop:order-3 desktop:size-22 size-14 shrink-0 rounded-sm"
        image={image}
        sizes="(min-width: 45rem) 88px, 56px"
      />
      <span className="typo-overline text-secondary desktop:order-1 desktop:block hidden w-8 shrink-0">
        {number}
      </span>
      <div className="gap-label desktop:order-2 flex min-w-0 flex-1 flex-col">
        <span className="typo-overline text-secondary desktop:hidden">
          Linha {number}
        </span>
        <h3 className="typo-card-title text-text group-hover:underline">
          <ResponsiveCopy copy={title} />
        </h3>
        <p className="text-text-2 desktop:block hidden">{description}</p>
      </div>
      <LuArrowRight
        aria-hidden
        className="text-text-muted desktop:hidden size-4 shrink-0"
      />
    </Link>
  );
}
