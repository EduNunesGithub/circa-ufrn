import { ArrowLink } from "@/components/arrow-link";
import { Entrance } from "@/components/entrance";
import { PeopleMosaic } from "@/components/home-people/people-mosaic";
import { Quote } from "@/components/quote";
import { SectionHeader } from "@/components/section-header";
import { peopleContent } from "@/lib/home/people";

export function HomePeople() {
  const { description, link, overline, quote, title } = peopleContent;

  return (
    <section aria-labelledby="home-people-title">
      <Entrance
        className="gap-block max-w-page px-gutter py-section wide:grid wide:grid-cols-3 mx-auto flex flex-col"
        entrance="slide"
      >
        <div className="gap-block wide:flex wide:min-w-0 wide:flex-col contents">
          <div className="order-1">
            <SectionHeader
              description={description}
              overline={overline}
              title={title}
              titleId="home-people-title"
            />
          </div>
          <div className="order-3">
            <Quote author={quote.author} text={quote.text} />
          </div>
          <div className="order-4">
            <ArrowLink href={link.href} label={link.label} />
          </div>
        </div>
        <div className="wide:col-span-2 wide:min-w-0 order-2">
          <PeopleMosaic />
        </div>
      </Entrance>
    </section>
  );
}
