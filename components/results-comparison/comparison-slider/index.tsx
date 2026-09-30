"use client";

import { Slider } from "@base-ui/react/slider";
import { useState } from "react";
import { LuChevronsLeftRight } from "react-icons/lu";

import { MediaFrame } from "@/components/media-frame";
import { PhotoLabel } from "@/components/photo-label";
import { comparisonSlider } from "@/lib/results/comparison";

const initialPosition = 50;

export function ComparisonSlider() {
  const { after, before, label } = comparisonSlider;
  const [position, setPosition] = useState(initialPosition);

  return (
    <div className="desktop:h-140 relative h-70 overflow-hidden rounded-md">
      <MediaFrame
        className="absolute inset-0"
        image={before.image}
        sizes="(min-width: 90rem) 1320px, 100vw"
      />
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 0 0 ${position}%)` }}
      >
        <MediaFrame
          className="absolute inset-0"
          image={after.image}
          sizes="(min-width: 90rem) 1320px, 100vw"
        />
      </div>
      <div
        aria-hidden
        className="gap-control p-inset pointer-events-none absolute inset-0 flex items-start justify-between"
      >
        <PhotoLabel label={before.label} />
        <PhotoLabel label={after.label} />
      </div>
      <Slider.Root
        className="absolute inset-0"
        onValueChange={setPosition}
        value={position}
      >
        <Slider.Control className="h-full cursor-ew-resize touch-pan-y">
          <Slider.Track className="relative h-full">
            <Slider.Thumb
              aria-label={label}
              className="group flex h-full w-10 justify-center"
            >
              <span
                aria-hidden
                className="border-text-inverse h-full border-l-2"
              />
              <span
                aria-hidden
                className="bg-bg text-primary group-has-focus-visible:outline-focus-inverse absolute top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-full outline-offset-2 group-has-focus-visible:outline-2"
              >
                <LuChevronsLeftRight className="size-5" />
              </span>
            </Slider.Thumb>
          </Slider.Track>
        </Slider.Control>
      </Slider.Root>
    </div>
  );
}
