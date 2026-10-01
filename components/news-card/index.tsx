import Link from "next/link";

import { MediaFrame, type MediaImage } from "@/components/media-frame";
import { type Copy, ResponsiveCopy } from "@/components/responsive-copy";
import { type PublicationTag, Tag } from "@/components/tag";
import { cn } from "@/lib/cn";
import { focusRingClassName } from "@/lib/control-styles";

export type NewsItem = {
  date: string;
  excerpt: string;
  href?: string;
  image: MediaImage;
  tag: PublicationTag;
  title: Copy;
};

type NewsCardProps = {
  layout?: "list" | "stacked";
} & NewsItem;

export function NewsCard({
  date,
  excerpt,
  href,
  image,
  layout = "list",
  tag,
  title,
}: NewsCardProps) {
  const stacked = layout === "stacked";

  return (
    <article
      className={
        stacked
          ? "gap-item flex flex-col"
          : "border-border gap-group py-inset wide:flex-col wide:gap-item wide:border-b-0 wide:py-0 flex border-b"
      }
    >
      <MediaFrame
        className={
          stacked
            ? "aspect-landscape desktop:aspect-video rounded-sm"
            : "wide:aspect-video wide:h-auto wide:w-full size-24 shrink-0 rounded-sm"
        }
        image={image}
        sizes={
          stacked
            ? "(min-width: 45rem) 384px, 272px"
            : "(min-width: 56.75rem) 33vw, 96px"
        }
      />
      <div
        className={cn(
          "flex min-w-0 flex-1 flex-col",
          stacked ? "gap-item" : "gap-label wide:gap-item",
        )}
      >
        <div className="gap-item flex flex-wrap items-center">
          <Tag label={tag.label} variant={tag.variant} />
          <p
            className={cn(
              "typo-meta text-text-muted uppercase",
              stacked && "desktop:block hidden",
            )}
          >
            {date}
          </p>
        </div>
        <h3 className={cn("text-text", !stacked && "max-wide:typo-card-title")}>
          {href ? (
            <Link
              className={cn(
                "rounded-sm hover:underline",
                focusRingClassName("default"),
              )}
              href={href}
            >
              <ResponsiveCopy copy={title} />
            </Link>
          ) : (
            <ResponsiveCopy copy={title} />
          )}
        </h3>
        <p
          className={cn(
            "text-text-2 hidden",
            stacked ? "desktop:block" : "wide:block",
          )}
        >
          {excerpt}
        </p>
      </div>
    </article>
  );
}
