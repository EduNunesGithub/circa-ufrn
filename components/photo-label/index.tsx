import { type Copy, ResponsiveCopy } from "@/components/responsive-copy";

type PhotoLabelProps = {
  label: Copy;
};

export function PhotoLabel({ label }: PhotoLabelProps) {
  return (
    <p className="typo-overline bg-glass px-control text-text-inverse flex h-6 items-center rounded-sm backdrop-blur-md">
      <ResponsiveCopy copy={label} />
    </p>
  );
}
