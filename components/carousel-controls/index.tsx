"use client";

import { Button } from "@base-ui/react/button";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";

import type { CarouselController } from "@/hooks/use-carousel";

import { carouselMessages, formatCounter } from "@/lib/carousel";
import { cn } from "@/lib/cn";
import { iconButtonClassName, type Tone } from "@/lib/control-styles";

type CarouselControlsProps = {
  controller: CarouselController;
  controlsId: string;
  progress?: "always" | "desktop" | "never";
  tone?: Tone;
};

export function CarouselControls({
  controller: { next, prev, state },
  controlsId,
  progress = "always",
  tone = "default",
}: CarouselControlsProps) {
  const inverse = tone === "inverse";
  const buttonClassName = cn(
    iconButtonClassName(tone),
    "data-disabled:cursor-not-allowed data-disabled:opacity-40",
  );

  return (
    <div className="gap-group flex items-center">
      <p
        aria-hidden
        className={cn(
          "typo-meta whitespace-nowrap",
          inverse ? "text-text-inverse-2" : "text-text-muted",
          !state.ready && "invisible",
        )}
      >
        {formatCounter(state.current)} / {formatCounter(state.total)}
      </p>
      {progress !== "never" && (
        <div
          aria-hidden
          className={cn(
            "h-px w-24 overflow-hidden",
            inverse ? "bg-hairline-inverse" : "bg-border",
            progress === "desktop" && "desktop:block hidden",
            !state.ready && "invisible",
          )}
        >
          <div
            className={cn(
              "h-full origin-left transition-transform",
              inverse ? "bg-text-inverse" : "bg-text",
            )}
            style={{
              transform: `scaleX(${state.total > 0 ? state.current / state.total : 0})`,
            }}
          />
        </div>
      )}
      <div className="gap-control flex">
        <Button
          aria-controls={controlsId}
          aria-label={carouselMessages.prev}
          className={buttonClassName}
          disabled={state.isBeginning}
          focusableWhenDisabled
          onClick={prev}
        >
          <LuArrowLeft aria-hidden className="size-5" />
        </Button>
        <Button
          aria-controls={controlsId}
          aria-label={carouselMessages.next}
          className={buttonClassName}
          disabled={state.isEnd}
          focusableWhenDisabled
          onClick={next}
        >
          <LuArrowRight aria-hidden className="size-5" />
        </Button>
      </div>
    </div>
  );
}
