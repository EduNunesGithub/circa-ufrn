import type { Copy } from "@/components/responsive-copy";

import { PhotoLabel } from "@/components/photo-label";
import { cn } from "@/lib/cn";

type SeasonLabelProps = {
  className: string;
  label: Copy;
};

export function SeasonLabel({ className, label }: SeasonLabelProps) {
  return (
    <div
      className={cn("px-gutter absolute inset-x-0 flex justify-end", className)}
    >
      <PhotoLabel label={label} />
    </div>
  );
}
