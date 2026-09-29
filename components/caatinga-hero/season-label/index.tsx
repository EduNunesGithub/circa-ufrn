import { type Copy, ResponsiveCopy } from "@/components/responsive-copy";
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
      <p className="typo-overline bg-glass px-control text-text-inverse flex h-6 items-center rounded-sm backdrop-blur-md">
        <ResponsiveCopy copy={label} />
      </p>
    </div>
  );
}
