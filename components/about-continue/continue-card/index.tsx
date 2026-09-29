import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";

import type { NextPage } from "@/components/about-continue";

import { MediaFrame } from "@/components/media-frame";
import { cn } from "@/lib/cn";
import { focusRingClassName, iconButtonClassName } from "@/lib/control-styles";

export function ContinueCard({ description, href, image, title }: NextPage) {
  return (
    <Link
      className={cn(
        "gap-group p-inset desktop:h-60 group relative isolate flex h-40 items-end overflow-hidden rounded-md",
        focusRingClassName("default"),
      )}
      href={href}
    >
      <MediaFrame
        className="absolute inset-0 -z-10"
        image={{ ...image, alt: "" }}
        sizes="(min-width: 45rem) 50vw, 100vw"
      >
        <div
          aria-hidden
          className="from-inverse/15 to-inverse/90 absolute inset-0 bg-linear-to-b"
        />
      </MediaFrame>
      <span className="gap-control flex min-w-0 flex-1 flex-col">
        <span className="typo-feature-title text-text-inverse group-hover:underline">
          {title}
        </span>
        <span className="text-text-inverse-2 desktop:block hidden">
          {description}
        </span>
      </span>
      <span aria-hidden className={iconButtonClassName("inverse")}>
        <LuArrowRight className="size-4" />
      </span>
    </Link>
  );
}
