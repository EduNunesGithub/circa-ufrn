import { Entrance } from "@/components/entrance";
import { ResponsiveCopy } from "@/components/responsive-copy";
import { SectionHeader } from "@/components/section-header";
import { Stagger } from "@/components/stagger";
import { StaggerItem } from "@/components/stagger-item";
import { objectives, objectivesContent } from "@/lib/about/objectives";
import { formatCounter } from "@/lib/carousel";

export function AboutObjectives() {
  const { description, overline, title } = objectivesContent;

  return (
    <section
      aria-labelledby="about-objectives-title"
      className="bg-bg-alt overflow-hidden"
    >
      <Entrance
        className="gap-block max-w-page px-gutter py-section wide:grid wide:grid-cols-3 wide:items-start mx-auto flex flex-col"
        entrance="settle"
      >
        <SectionHeader
          description={description}
          descriptionOnMobile={false}
          overline={overline}
          title={title}
          titleId="about-objectives-title"
        />
        <Stagger
          as="ol"
          className="border-border desktop:grid-cols-2 desktop:gap-x-block desktop:border-t-0 wide:col-span-2 grid content-start border-t"
        >
          {objectives.map((objective, index) => (
            <StaggerItem
              className="border-border gap-group py-inset flex border-b"
              key={formatCounter(index + 1)}
            >
              <span aria-hidden className="typo-title text-secondary shrink-0">
                {formatCounter(index + 1)}
              </span>
              <p className="text-text">
                <ResponsiveCopy copy={objective} />
              </p>
            </StaggerItem>
          ))}
        </Stagger>
      </Entrance>
    </section>
  );
}
