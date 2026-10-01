import { Entrance } from "@/components/entrance";
import { MediaFrame } from "@/components/media-frame";
import { SpecSheet } from "@/components/research-experiments/spec-sheet";
import { SectionHeader } from "@/components/section-header";
import {
  experimentPhotos,
  experimentsContent,
} from "@/lib/research/experiments";

export function ResearchExperiments() {
  const { body, overline, title } = experimentsContent;

  return (
    <section
      aria-labelledby="research-experiments-title"
      className="bg-bg-alt"
      id="experimentos"
    >
      <Entrance
        className="gap-block max-w-page px-gutter py-section wide:grid wide:grid-cols-2 wide:items-start mx-auto flex flex-col"
        entrance="slide"
      >
        <div className="gap-group wide:flex wide:flex-col contents">
          <div className="order-1">
            <SectionHeader
              overline={overline}
              title={title}
              titleId="research-experiments-title"
            />
          </div>
          <p className="text-text-2 desktop:block order-3 hidden">{body}</p>
          <div className="order-4">
            <SpecSheet />
          </div>
        </div>
        <div className="gap-block wide:order-first order-2 flex flex-col">
          <MediaFrame
            appear
            className="desktop:h-90 h-58 rounded-sm"
            image={experimentPhotos.main}
            sizes="(min-width: 56.75rem) 50vw, 100vw"
          />
          <ul className="gap-block desktop:grid hidden grid-cols-2">
            {experimentPhotos.details.map((image) => (
              <li key={image.src}>
                <MediaFrame
                  appear
                  className="h-50 rounded-sm"
                  image={image}
                  sizes="(min-width: 56.75rem) 25vw, 50vw"
                />
              </li>
            ))}
          </ul>
        </div>
      </Entrance>
    </section>
  );
}
