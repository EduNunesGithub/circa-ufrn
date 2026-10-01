import { type DownloadData, DownloadItem } from "@/components/download-item";
import { Entrance } from "@/components/entrance";
import { SectionHeader } from "@/components/section-header";
import { Stagger } from "@/components/stagger";
import { StaggerItem } from "@/components/stagger-item";
import { cn } from "@/lib/cn";
import { documents, documentsContent } from "@/lib/publications/documents";

export type InstitutionalDocument = {
  desktopOnly?: boolean;
} & DownloadData;

export function PublicationsDocuments() {
  const { body, overline, title } = documentsContent;

  return (
    <section
      aria-labelledby="publications-documents-title"
      className="bg-bg-alt"
      id="documentos"
    >
      <Entrance
        className="gap-block max-w-page px-gutter py-section wide:grid wide:grid-cols-4 wide:items-start mx-auto flex flex-col"
        entrance="slide"
      >
        <SectionHeader
          description={body}
          descriptionOnMobile={false}
          overline={overline}
          title={title}
          titleId="publications-documents-title"
        />
        <Stagger className="border-border desktop:grid desktop:grid-flow-col desktop:grid-cols-2 desktop:grid-rows-3 desktop:gap-x-block wide:col-span-3 flex flex-col border-t">
          {documents.map(({ desktopOnly = false, ...document }, index) => (
            <StaggerItem
              className={cn(desktopOnly && "desktop:block hidden")}
              key={index}
            >
              <DownloadItem {...document} />
            </StaggerItem>
          ))}
        </Stagger>
      </Entrance>
    </section>
  );
}
