import Link from "next/link";
import { LuDownload } from "react-icons/lu";

import type {
  Material,
  MaterialCover,
} from "@/components/publications-materials";

import { MediaFrame } from "@/components/media-frame";
import { ResponsiveCopy } from "@/components/responsive-copy";
import { cn } from "@/lib/cn";
import { iconButtonClassName } from "@/lib/control-styles";

type MaterialCardProps = {
  downloadLabel: string;
} & Material;

const coverClassNames: Record<
  MaterialCover,
  { cover: string; kicker: string; title: string }
> = {
  clay: {
    cover: "bg-secondary",
    kicker: "text-accent-soft",
    title: "text-text-inverse",
  },
  forest: {
    cover: "bg-primary",
    kicker: "text-accent",
    title: "text-text-inverse",
  },
  sky: {
    cover: "bg-sky",
    kicker: "text-accent-soft",
    title: "text-text-inverse",
  },
  sun: { cover: "bg-accent", kicker: "text-primary", title: "text-text" },
};

export function MaterialCard({
  cover,
  downloadLabel,
  href,
  image,
  info,
  kicker,
  title,
}: MaterialCardProps) {
  const classNames = coverClassNames[cover];

  return (
    <article className="gap-label desktop:gap-item flex h-full flex-col">
      <div
        className={cn(
          "p-inset desktop:h-100 flex h-78 flex-col justify-between rounded-sm",
          classNames.cover,
        )}
      >
        <div className="gap-label flex flex-col">
          <p className={cn("typo-overline", classNames.kicker)}>
            <ResponsiveCopy copy={kicker} />
          </p>
          <h3 className={cn("typo-feature-title", classNames.title)}>
            <ResponsiveCopy copy={title} />
          </h3>
        </div>
        <MediaFrame
          className="desktop:h-34 h-26 rounded-sm"
          image={image}
          sizes="(min-width: 45rem) 240px, 200px"
        />
      </div>
      <p
        aria-hidden
        className="typo-card-title text-text desktop:block hidden flex-1"
      >
        <ResponsiveCopy copy={title} />
      </p>
      <div className="gap-item flex items-center justify-between">
        <p className="typo-meta text-text-muted uppercase">
          <ResponsiveCopy copy={info} />
        </p>
        <Link className={iconButtonClassName("default")} href={href}>
          <LuDownload aria-hidden className="size-5" />
          <span className="sr-only">
            {downloadLabel}: <ResponsiveCopy copy={title} />
          </span>
        </Link>
      </div>
    </article>
  );
}
