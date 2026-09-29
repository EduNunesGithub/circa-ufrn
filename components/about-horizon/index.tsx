import { Entrance } from "@/components/entrance";
import { MediaFrame } from "@/components/media-frame";
import { Overline } from "@/components/overline";
import { ResponsiveCopy } from "@/components/responsive-copy";
import { Stagger } from "@/components/stagger";
import { StaggerItem } from "@/components/stagger-item";
import { horizonContent, horizonGoals } from "@/lib/about/horizon";
import { formatCounter } from "@/lib/carousel";

export function AboutHorizon() {
  const { image, overline, title } = horizonContent;

  return (
    <section
      aria-labelledby="about-horizon-title"
      className="bg-inverse overflow-hidden"
    >
      <Entrance
        className="wide:grid wide:grid-cols-2 flex flex-col"
        entrance="settle"
      >
        <div className="gap-block px-gutter py-section wide:order-none wide:w-full wide:max-w-165 wide:justify-self-end wide:pr-block order-2 flex flex-col justify-center">
          <div className="gap-group flex flex-col">
            <Overline tone="inverse">{overline}</Overline>
            <h2 className="text-text-inverse" id="about-horizon-title">
              {title}
            </h2>
          </div>
          <Stagger as="ol" className="flex flex-col">
            {horizonGoals.map((goal, index) => (
              <StaggerItem
                className="border-hairline-inverse gap-group py-inset flex items-baseline border-b"
                key={formatCounter(index + 1)}
              >
                <span
                  aria-hidden
                  className="typo-overline text-accent shrink-0"
                >
                  {formatCounter(index + 1)}
                </span>
                <p className="text-text-inverse">
                  <ResponsiveCopy copy={goal} />
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
        <MediaFrame
          appear
          className="desktop:h-100 wide:order-none wide:h-auto wide:min-h-130 order-1 h-60"
          image={image}
          sizes="(min-width: 56.75rem) 50vw, 100vw"
        />
      </Entrance>
    </section>
  );
}
