import type { MediaImage } from "@/components/media-frame";
import type { Copy } from "@/components/responsive-copy";

import { ArrowLink } from "@/components/arrow-link";
import { ProcessCarousel } from "@/components/home-process/process-carousel";
import { ProcessStep } from "@/components/home-process/process-step";
import { SectionHeader } from "@/components/section-header";
import { formatCounter } from "@/lib/carousel";
import { processContent, processSteps } from "@/lib/home/process";

export type ProcessStepData = {
  description: Copy;
  image: MediaImage;
  title: string;
};

export function HomeProcess() {
  const { description, link, overline, title } = processContent;
  const total = processSteps.length;

  return (
    <section
      aria-labelledby="home-process-title"
      className="bg-bg-alt overflow-hidden"
    >
      <div className="gap-block max-w-page px-gutter py-section mx-auto flex flex-col">
        <SectionHeader
          description={description}
          link={{ href: link.href, label: link.label.full }}
          overline={overline}
          title={title}
          titleId="home-process-title"
        />
        <ProcessCarousel
          footerLink={<ArrowLink href={link.href} label={link.label.short} />}
          total={total}
        >
          {processSteps.map((step, index) => (
            <ProcessStep
              {...step}
              index={{
                full: formatCounter(index + 1),
                short: `${formatCounter(index + 1)} / ${formatCounter(total)}`,
              }}
              isLast={index === total - 1}
              key={step.title}
            />
          ))}
        </ProcessCarousel>
      </div>
    </section>
  );
}
