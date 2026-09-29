import type { PublicationTag } from "@/components/tag";

import { ArrowLink } from "@/components/arrow-link";
import { Entrance } from "@/components/entrance";
import { PublicationItem } from "@/components/research-publications/publication-item";
import { SectionHeader } from "@/components/section-header";
import { Stagger } from "@/components/stagger";
import { StaggerItem } from "@/components/stagger-item";
import {
  researchPublications,
  researchPublicationsContent,
} from "@/lib/research/publications";

export type ResearchPublication = {
  authors: string;
  details: string;
  doi: string;
  journal: string;
  tag: PublicationTag;
  title: string;
  year: string;
};

export function ResearchPublications() {
  const { link, overline, title } = researchPublicationsContent;

  return (
    <section aria-labelledby="research-publications-title">
      <Entrance
        className="gap-block max-w-page px-gutter py-section mx-auto flex flex-col"
        entrance="slide"
      >
        <SectionHeader
          link={link}
          overline={overline}
          title={title}
          titleId="research-publications-title"
          titleOnMobile={false}
        />
        <Stagger className="border-border flex flex-col border-t">
          {researchPublications.map((publication) => (
            <StaggerItem key={publication.doi}>
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
