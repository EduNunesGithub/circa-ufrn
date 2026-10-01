import type { DataRow } from "@/components/data-list";
import type { FigureData } from "@/components/figure";
import type { Person } from "@/components/person-compact";
import type { Copy } from "@/components/responsive-copy";

import { ArticleRail } from "@/components/article-body/article-rail";
import { ArticleText } from "@/components/article-body/article-text";
import { PublicationSheet } from "@/components/article-body/publication-sheet";
import { Entrance } from "@/components/entrance";

export type ArticleSection = {
  id: string;
  title: string;
};

export type ArticleTextContent = {
  findings: {
    after: Copy;
    body: Copy;
    figure: FigureData;
  } & ArticleSection;
  intro: { id: string; label: string; paragraphs: Copy[] };
  method: { body: Copy; items: Copy[] } & ArticleSection;
  nextSteps: { body: Copy } & ArticleSection;
  quote: { author: Person; text: Copy };
  summary: { items: Copy[]; label: string };
};

export type PublicationSheetContent = {
  cite: { href: string; label: string };
  download: { href: string; label: Copy };
  placeholder: string;
  rows: DataRow[];
  title: string;
};

export function ArticleBody() {
  return (
    <section>
      <Entrance
        className="max-w-page px-gutter py-section mx-auto"
        entrance="rise"
      >
        <div className="gap-block max-w-text wide:max-w-none wide:flex-row wide:items-start flex flex-col">
          <div className="wide:flex wide:w-78 wide:shrink-0 wide:flex-col wide:gap-block contents">
            <aside className="order-1">
              <PublicationSheet />
            </aside>
            <ArticleRail />
          </div>
          <ArticleText />
        </div>
      </Entrance>
    </section>
  );
}
