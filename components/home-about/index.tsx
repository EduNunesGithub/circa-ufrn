import type { IconType } from "react-icons/lib";

import { ArrowLink } from "@/components/arrow-link";
import { AboutFigure } from "@/components/home-about/about-figure";
import { AboutPillar } from "@/components/home-about/about-pillar";
import { Overline } from "@/components/overline";
import { type Copy, ResponsiveCopy } from "@/components/responsive-copy";
import { aboutContent, aboutPillars } from "@/lib/home/about";

export type AboutPillarData = {
  description: Copy;
  icon: IconType;
  title: string;
};

export function HomeAbout() {
  const { figure, link, overline, statement } = aboutContent;

  return (
    <section aria-labelledby="home-about-title">
      <div className="gap-block max-w-page px-gutter py-section wide:flex-row mx-auto flex flex-col">
        <div className="gap-label wide:flex wide:w-78 wide:shrink-0 wide:flex-col contents">
          <Overline className="wide:block hidden">{overline}</Overline>
          <AboutFigure
            caption={figure.caption}
            className="wide:order-none order-3"
            image={figure.image}
            number={figure.number}
          />
        </div>
        <div className="gap-block wide:flex wide:min-w-0 wide:flex-1 wide:flex-col contents">
          <div className="gap-label order-1 flex flex-col">
            <Overline className="wide:hidden">{overline}</Overline>
            <h2 className="text-text" id="home-about-title">
              <ResponsiveCopy copy={statement} />
            </h2>
          </div>
          <ul className="border-border desktop:grid desktop:grid-cols-3 desktop:gap-block desktop:border-b-0 order-2 flex flex-col border-b">
            {aboutPillars.map((pillar) => (
              <li key={pillar.title}>
                <AboutPillar {...pillar} />
              </li>
            ))}
          </ul>
          <div className="order-4">
            <ArrowLink href={link.href} label={link.label} />
          </div>
        </div>
      </div>
    </section>
  );
}
