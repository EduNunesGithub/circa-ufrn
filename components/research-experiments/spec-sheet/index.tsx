import { LuDownload } from "react-icons/lu";

import { ButtonLink } from "@/components/button-link";
import { DataList } from "@/components/data-list";
import { PlaceholderBadge } from "@/components/placeholder-badge";
import { ResponsiveCopy } from "@/components/responsive-copy";
import { StatusBadge } from "@/components/status-badge";
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
      <DataList rows={specRows} />
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
