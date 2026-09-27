import type { Copy } from "@/components/responsive-copy";
import type { Tone } from "@/lib/control-styles";

import { ArrowLink } from "@/components/arrow-link";
import { Overline } from "@/components/overline";
import { ResponsiveCopy } from "@/components/responsive-copy";
import { cn } from "@/lib/cn";

type SectionHeaderProps = {
  description?: Copy;
  descriptionOnMobile?: boolean;
  link?: { href: string; label: string };
  overline: string;
  title: string;
  titleId: string;
  tone?: Tone;
};

export function SectionHeader({
  description,
  descriptionOnMobile = true,
  link,
  overline,
  title,
  titleId,
  tone = "default",
}: SectionHeaderProps) {
  const inverse = tone === "inverse";

  return (
    <div className="gap-group desktop:flex-row desktop:items-end desktop:justify-between flex flex-col">
      <div className="gap-label flex min-w-0 flex-col">
        <Overline tone={tone}>{overline}</Overline>
        <h2
          className={inverse ? "text-text-inverse" : "text-text"}
          id={titleId}
        >
          {title}
        </h2>
        {description && (
          <p
            className={cn(
              "max-w-text",
              inverse ? "text-text-inverse-2" : "text-text-2",
              !descriptionOnMobile && "desktop:block hidden",
            )}
          >
            <ResponsiveCopy copy={description} />
          </p>
        )}
      </div>
      {link && (
        <div className="desktop:block hidden shrink-0">
          <ArrowLink href={link.href} label={link.label} tone={tone} />
        </div>
      )}
    </div>
  );
}
