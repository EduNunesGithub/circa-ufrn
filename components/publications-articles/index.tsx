import { ArrowLink } from "@/components/arrow-link";
import { Entrance } from "@/components/entrance";
import {
  type PublicationData,
  PublicationItem,
} from "@/components/publication-item";
import { SectionHeader } from "@/components/section-header";
import { Stagger } from "@/components/stagger";
import { StaggerItem } from "@/components/stagger-item";
import { cn } from "@/lib/cn";
import { articles, articlesContent } from "@/lib/publications/articles";

export type ListedPublication = {
  desktopOnly?: boolean;
} & PublicationData;

export function PublicationsArticles() {
  const { description, link, overline, title } = articlesContent;

  return (
    <section
      aria-labelledby="publications-articles-title"
      className="bg-bg-alt"
      id="artigos"
    >
      <Entrance
        className="gap-block max-w-page px-gutter py-section mx-auto flex flex-col"
        entrance="slide"
      >
        <SectionHeader
          description={description}
          descriptionOnMobile={false}
          link={link}
          overline={overline}
          title={title}
          titleId="publications-articles-title"
        />
        <Stagger className="border-border flex flex-col border-t">
          {articles.map(({ desktopOnly = false, ...publication }) => (
            <StaggerItem
              className={cn(desktopOnly && "desktop:block hidden")}
              key={publication.doi}
            >
              <PublicationItem {...publication} />
            </StaggerItem>
          ))}
        </Stagger>
        <div className="desktop:hidden">
          <ArrowLink href={link.href} label={link.label} />
        </div>
      </Entrance>
    </section>
  );
}
