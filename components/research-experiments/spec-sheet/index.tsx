import { LuDownload } from "react-icons/lu";

import { ButtonLink } from "@/components/button-link";
import { PlaceholderBadge } from "@/components/placeholder-badge";
import { ResponsiveCopy } from "@/components/responsive-copy";
import { StatusBadge } from "@/components/status-badge";
import { cn } from "@/lib/cn";
import { specRows, specSheetContent } from "@/lib/research/experiments";

export function SpecSheet() {
  const { action, code, placeholder } = specSheetContent;

  return (
    <div className="border-border-subtle bg-surface p-inset flex flex-col rounded-md border">
      <div className="border-border-strong gap-item pb-inset flex items-center justify-between border-b">
        <p className="typo-overline text-text">
          <ResponsiveCopy copy={code} />
        </p>
        <StatusBadge status="active" />
      </div>
      <dl className="flex flex-col">
        {specRows.map(({ desktopOnly = false, label, value }) => (
          <div
            className={cn(
              "border-border-subtle gap-item py-inset flex border-b",
              desktopOnly && "desktop:flex hidden",
            )}
            key={label}
          >
            <dt className="typo-meta text-text-muted desktop:w-30 w-26 shrink-0 uppercase">
              {label}
            </dt>
            <dd className="text-text min-w-0 flex-1">
              <ResponsiveCopy copy={value} />
            </dd>
          </div>
        ))}
      </dl>
      <div className="gap-item pt-inset desktop:flex-row desktop:flex-wrap desktop:items-center desktop:justify-between flex flex-col">
        <PlaceholderBadge label={placeholder} />
        <ButtonLink
          href={action.href}
          icon={LuDownload}
          label={action.label}
          variant="outline"
        />
      </div>
    </div>
  );
}
