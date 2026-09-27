import type { MediaImage } from "@/components/media-frame";
import type { Copy } from "@/components/responsive-copy";
import type { Tone } from "@/lib/control-styles";

import { MediaFrame } from "@/components/media-frame";
import { ResponsiveCopy } from "@/components/responsive-copy";
import { type ProjectStatus, StatusBadge } from "@/components/status-badge";
import { cn } from "@/lib/cn";

export type ProjectCardData = {
  description: string;
  image: MediaImage;
  location: Copy;
  status: ProjectStatus;
  title: string;
};

type ProjectCardProps = {
  tone?: Tone;
} & ProjectCardData;

export function ProjectCard({
  description,
  image,
  location,
  status,
  title,
  tone = "default",
}: ProjectCardProps) {
  const inverse = tone === "inverse";

  return (
    <article className="gap-item flex flex-col">
      <MediaFrame
        className="p-inset desktop:h-90 flex h-80 items-start rounded-sm"
        image={image}
        sizes="(min-width: 45rem) 312px, 272px"
      >
        <div className="relative">
          <StatusBadge status={status} />
        </div>
      </MediaFrame>
      <p
        className={cn("typo-meta", inverse ? "text-accent" : "text-secondary")}
      >
        <ResponsiveCopy copy={location} />
      </p>
      <h3
        className={cn(
          "typo-card-title",
          inverse ? "text-text-inverse" : "text-text",
        )}
      >
        {title}
      </h3>
      <p
        className={cn(
          "desktop:block hidden",
          inverse ? "text-text-inverse-2" : "text-text-muted",
        )}
      >
        {description}
      </p>
    </article>
  );
}
