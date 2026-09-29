import type { ReactNode } from "react";

import type { MediaImage } from "@/components/media-frame";
import type { Copy } from "@/components/responsive-copy";

import { MediaFrame } from "@/components/media-frame";
import { Overline } from "@/components/overline";
import { ResponsiveCopy } from "@/components/responsive-copy";

type CtaBandProps = {
  actions: ReactNode;
  body: Copy;
  image: MediaImage;
  overline: string;
  title: string;
  titleId: string;
};

export function CtaBand({
  actions,
  body,
  image,
  overline,
  title,
  titleId,
}: CtaBandProps) {
  return (
    <div className="bg-inverse desktop:flex-row flex flex-col overflow-hidden rounded-md">
      <div className="gap-group p-inset desktop:flex-1 flex flex-col justify-center">
        <Overline tone="inverse">{overline}</Overline>
        <h2 className="text-text-inverse" id={titleId}>
          {title}
        </h2>
        <p className="text-text-inverse-2">
          <ResponsiveCopy copy={body} />
        </p>
        <div className="gap-item wide:flex-row flex flex-col">{actions}</div>
      </div>
      <MediaFrame
        className="desktop:h-auto desktop:min-h-100 desktop:flex-1 h-50"
        image={image}
        sizes="(min-width: 45rem) 50vw, 100vw"
      />
    </div>
  );
}
