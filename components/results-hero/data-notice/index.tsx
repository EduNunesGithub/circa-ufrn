import { LuDownload, LuInfo } from "react-icons/lu";

import { ButtonLink } from "@/components/button-link";
import { ResponsiveCopy } from "@/components/responsive-copy";
import { cn } from "@/lib/cn";
import { dataNoticeContent } from "@/lib/results/hero";

type DataNoticeProps = {
  className: string;
};

export function DataNotice({ className }: DataNoticeProps) {
  const { action, text, title } = dataNoticeContent;

  return (
    <aside
      aria-labelledby="results-data-notice-title"
      className={cn(
        "border-accent bg-accent-soft gap-item p-inset flex flex-col rounded-md border",
        className,
      )}
    >
      <p
        className="typo-overline text-warning gap-control flex items-center"
        id="results-data-notice-title"
      >
        <LuInfo aria-hidden className="size-4 shrink-0" />
        <ResponsiveCopy copy={title} />
      </p>
      <p className="text-text">
        <ResponsiveCopy copy={text} />
      </p>
      <ButtonLink
        className="wide:w-fit"
        href={action.href}
        icon={LuDownload}
        label={action.label}
        variant="outline"
      />
    </aside>
  );
}
