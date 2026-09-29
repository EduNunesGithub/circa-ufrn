import type { MediaImage } from "@/components/media-frame";
import type { Copy } from "@/components/responsive-copy";
import type { PublicationTag } from "@/components/tag";

import { ArrowLink } from "@/components/arrow-link";
import { Entrance } from "@/components/entrance";
import { FeaturedPublication } from "@/components/home-publications/featured-publication";
import { PublicationRow } from "@/components/home-publications/publication-row";
import { SectionHeader } from "@/components/section-header";
import { Stagger } from "@/components/stagger";
import { StaggerItem } from "@/components/stagger-item";
import { cn } from "@/lib/cn";
import {
  featuredPublication,
  publications,
  publicationsContent,
} from "@/lib/home/publications";

export type FeaturedPublicationData = {
  date: Copy;
  excerpt: string;
  image: MediaImage;
  link: { href: string; label: string };
  tag: PublicationTag;
  title: Copy;
};

export type PublicationItem = {
  date: string;
  showOnMobile: boolean;
  tag: PublicationTag;
  title: Copy;
};

export function HomePublications() {
  const { link, overline, title } = publicationsContent;

  return (
    <section
      aria-labelledby="home-publications-title"
      className="bg-bg-alt overflow-hidden"
    >
      <Entrance
        className="gap-block max-w-page px-gutter py-section mx-auto flex flex-col"
        entrance="settle"
      >
        <SectionHeader
          link={link}
          overline={overline}
          title={title}
          titleId="home-publications-title"
        />
        <div className="gap-block wide:grid wide:grid-cols-2 wide:items-start flex flex-col">
          <FeaturedPublication {...featuredPublication} />
          <Stagger className="flex flex-col">
            {publications.map((publication) => (
              <StaggerItem
                className={cn(
                  !publication.showOnMobile && "desktop:block hidden",
                )}
                key={publication.date}
              >
                <PublicationRow {...publication} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
        <div className="desktop:hidden">
          <ArrowLink href={link.href} label={link.label} />
        </div>
      </Entrance>
    </section>
  );
}
