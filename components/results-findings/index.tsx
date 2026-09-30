import type { Copy } from "@/components/responsive-copy";

import { Entrance } from "@/components/entrance";
import { FindingCard } from "@/components/results-findings/finding-card";
import { FindingsCarousel } from "@/components/results-findings/findings-carousel";
import { SectionHeader } from "@/components/section-header";
import { Stagger } from "@/components/stagger";
import { StaggerItem } from "@/components/stagger-item";
import { findings, findingsContent } from "@/lib/results/findings";

export type Finding = {
  href: string;
  number: string;
  source: Copy;
  text: Copy;
  title: string;
};

export function ResultsFindings() {
  const { carouselLabel, link, linkLabel, overline, title } = findingsContent;

  return (
    <section
      aria-labelledby="results-findings-title"
      className="bg-bg-alt overflow-hidden"
    >
      <Entrance
        className="gap-block max-w-page px-gutter py-section mx-auto flex flex-col"
        entrance="rise"
      >
        <SectionHeader
          link={link}
          overline={overline}
          title={title}
          titleId="results-findings-title"
        />
        <div className="wide:hidden">
          <FindingsCarousel label={carouselLabel} total={findings.length}>
            {findings.map((finding) => (
              <FindingCard
                {...finding}
                key={finding.number}
                linkLabel={linkLabel}
                variant="card"
              />
            ))}
          </FindingsCarousel>
        </div>
        <Stagger className="gap-block wide:grid hidden grid-cols-3">
          {findings.map((finding) => (
            <StaggerItem key={finding.number}>
              <FindingCard {...finding} linkLabel={linkLabel} variant="rule" />
            </StaggerItem>
          ))}
        </Stagger>
      </Entrance>
    </section>
  );
}
