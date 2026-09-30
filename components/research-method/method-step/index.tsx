import type { MethodStepData } from "@/components/research-method";

import { cn } from "@/lib/cn";

type MethodStepProps = {
  isLast: boolean;
} & MethodStepData;

export function MethodStep({
  description,
  highlighted = false,
  icon: Icon,
  isLast,
  meta,
  title,
}: MethodStepProps) {
  return (
    <article className="gap-group wide:flex-col flex w-full">
      <div
        aria-hidden
        className="wide:flex-row flex shrink-0 flex-col items-center"
      >
        <span
          className={cn(
            "border-hairline-inverse flex size-10 shrink-0 items-center justify-center rounded-full border",
            highlighted ? "bg-accent text-inverse" : "bg-inverse-2 text-accent",
          )}
        >
          <Icon className="size-5" />
        </span>
        {!isLast && (
          <span className="bg-hairline-inverse wide:h-px wide:min-h-0 wide:w-auto min-h-6 w-px flex-1" />
        )}
      </div>
      <div className="gap-label flex min-w-0 flex-col">
        <p className="typo-meta text-accent uppercase">{meta}</p>
        <h3 className="typo-card-title text-text-inverse wrap-break-word hyphens-auto">
          {title}
        </h3>
        <p className="typo-small text-text-inverse-2 desktop:block hidden">
          {description}
        </p>
      </div>
    </article>
  );
}
