import { LuDownload } from "react-icons/lu";

import type { PublicationTag } from "@/components/tag";

import { ButtonLink } from "@/components/button-link";
import { Entrance } from "@/components/entrance";
import { MediaFrame, type MediaImage } from "@/components/media-frame";
import { Overline } from "@/components/overline";
import { type Copy, ResponsiveCopy } from "@/components/responsive-copy";
import { Tag } from "@/components/tag";
import { featuredContent } from "@/lib/publications/featured";

export type FeaturedContent = {
  byline: Copy;
  excerpt: Copy;
  image: MediaImage;
  overline: string;
  pdf: { href: string; label: string };
  read: { href: string; label: string };
  tag: PublicationTag;
  title: string;
};

export function PublicationsFeatured() {
  const { byline, excerpt, image, overline, pdf, read, tag, title } =
    featuredContent;

  return (
    <section aria-labelledby="publications-featured-title">
      <Entrance
        className="gap-block max-w-page px-gutter pt-section wide:grid wide:grid-cols-12 wide:items-center mx-auto flex flex-col"
        entrance="settle"
      >
        <MediaFrame
          className="desktop:h-90 wide:col-span-7 wide:h-114 h-60 rounded-sm"
          image={image}
          sizes="(min-width: 56.75rem) 60vw, 100vw"
        />
        <div className="gap-group wide:col-span-5 flex flex-col">
          <div className="gap-item flex flex-wrap items-center">
            <Overline>{overline}</Overline>
            <Tag label={tag.label} variant={tag.variant} />
          </div>
          <h2
            className="typo-headline text-text"
            id="publications-featured-title"
          >
            {title}
          </h2>
          <p className="text-text-2">
            <ResponsiveCopy copy={excerpt} />
          </p>
          <p className="typo-meta text-text-muted uppercase">
            <ResponsiveCopy copy={byline} />
          </p>
          <div className="gap-item flex flex-wrap">
            <ButtonLink
              className="max-desktop:w-full"
              href={read.href}
              label={read.label}
            />
            <ButtonLink
              className="desktop:flex hidden"
              href={pdf.href}
              icon={LuDownload}
              label={pdf.label}
              variant="outline"
            />
          </div>
        </div>
      </Entrance>
    </section>
  );
}
