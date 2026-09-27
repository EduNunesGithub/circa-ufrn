import { LuArrowRight } from "react-icons/lu";

import type { ProcessStepData } from "@/components/home-process";

import { MediaFrame } from "@/components/media-frame";
import { type Copy, ResponsiveCopy } from "@/components/responsive-copy";
import { cn } from "@/lib/cn";

type ProcessStepProps = {
  index: Copy;
  isLast: boolean;
} & ProcessStepData;

export function ProcessStep({
  description,
  image,
  index,
  isLast,
  title,
}: ProcessStepProps) {
  return (
    <article className="gap-item flex flex-col">
      <MediaFrame
        className="h-50 rounded-sm"
        image={image}
        sizes="(min-width: 56.75rem) 288px, 272px"
      />
      <div className="gap-item flex items-center">
        <span className="typo-overline text-secondary shrink-0">
          <ResponsiveCopy copy={index} />
        </span>
        <span
          aria-hidden
          className={cn(
            "bg-border-strong h-px flex-1",
            isLast && "desktop:bg-border",
          )}
        />
        {!isLast && (
          <LuArrowRight
            aria-hidden
            className="text-text-muted desktop:block hidden size-4 shrink-0"
          />
        )}
      </div>
      <h3 className="typo-card-title text-text">{title}</h3>
      <p className="text-text-2">
        <ResponsiveCopy copy={description} />
      </p>
    </article>
  );
}
