import { ResponsiveLabel } from "@/components/responsive-label";

export type Copy = CopyVariants | string;

export type CopyVariants = {
  full: string;
  short: string;
};

type ResponsiveCopyProps = {
  copy: Copy;
};

export function ResponsiveCopy({ copy }: ResponsiveCopyProps) {
  if (typeof copy === "string") {
    return copy;
  }

  return <ResponsiveLabel full={copy.full} short={copy.short} />;
}
