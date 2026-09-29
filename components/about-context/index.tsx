import { ArrowLink } from "@/components/arrow-link";
import { Entrance } from "@/components/entrance";
import { Figure } from "@/components/figure";
import { Overline } from "@/components/overline";
import { ResponsiveCopy } from "@/components/responsive-copy";
import { contextContent, contextFigure } from "@/lib/about/context";

export function AboutContext() {
  const { link, overline, paragraphs, title } = contextContent;
  const [firstParagraph, secondParagraph] = paragraphs;

  return (
    <section aria-labelledby="about-context-title" className="bg-bg-alt">
      <Entrance
        className="gap-group max-w-page px-gutter py-section wide:grid wide:grid-cols-12 wide:gap-block mx-auto flex flex-col"
        entrance="slide"
      >
        <div className="gap-group wide:col-span-5 wide:flex wide:flex-col contents">
          <div className="gap-label order-1 flex flex-col">
            <Overline>{overline}</Overline>
            <h2 className="text-text" id="about-context-title">
              <ResponsiveCopy copy={title} />
            </h2>
          </div>
          <p className="text-text-2 order-2">
            <ResponsiveCopy copy={firstParagraph} />
          </p>
          <p className="text-text-2 order-4">
            <ResponsiveCopy copy={secondParagraph} />
          </p>
          <div className="order-5">
            <ArrowLink href={link.href} label={link.label} />
          </div>
        </div>
        <Figure
          {...contextFigure}
          className="wide:order-none wide:col-span-6 wide:col-start-7 order-3"
          mediaClassName="desktop:h-100 h-58 rounded-sm"
          sizes="(min-width: 56.75rem) 50vw, 100vw"
        />
      </Entrance>
    </section>
  );
}
