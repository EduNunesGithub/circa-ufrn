import type { ResearchLine } from "@/components/home-research";

import { ArrowLink } from "@/components/arrow-link";
import { MediaFrame } from "@/components/media-frame";
import { ResponsiveCopy } from "@/components/responsive-copy";

type ResearchFeatureProps = {
  href: string;
} & ResearchLine;

export function ResearchFeature({
  description,
  href,
  image,
  number,
  title,
}: ResearchFeatureProps) {
  return (
    <article className="gap-item p-inset wide:h-full relative isolate flex h-100 flex-col justify-end overflow-hidden rounded-sm">
      <MediaFrame
        className="absolute inset-0 -z-10"
        image={image}
        sizes="(min-width: 56.75rem) 58vw, 100vw"
      >
        <div
          aria-hidden
          className="to-inverse/95 absolute inset-0 bg-linear-to-b from-transparent from-30%"
        />
      </MediaFrame>
      <p className="typo-overline text-accent">Linha {number}</p>
      <h3 className="typo-feature-title text-text-inverse max-w-text">
        <ResponsiveCopy copy={title} />
      </h3>
      <p className="text-text-inverse-2 desktop:block max-w-text hidden">
        {description}
      </p>
      <ArrowLink href={href} label="Ler sobre a linha" tone="inverse" />
    </article>
  );
}
