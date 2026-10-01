import { LuCopy, LuDownload } from "react-icons/lu";

import { ButtonLink } from "@/components/button-link";
import { DataList } from "@/components/data-list";
import { Overline } from "@/components/overline";
import { PlaceholderBadge } from "@/components/placeholder-badge";
import { ResponsiveCopy } from "@/components/responsive-copy";
import { publicationSheet } from "@/lib/article/body";

export function PublicationSheet() {
  const { cite, download, placeholder, rows, title } = publicationSheet;

  return (
    <div className="border-border-subtle bg-surface p-inset flex flex-col rounded-md border">
      <Overline className="text-text-muted">{title}</Overline>
      <DataList rows={rows} stackOnWide />
      <div className="gap-item pt-inset flex flex-col">
        <ButtonLink
          href={download.href}
          icon={LuDownload}
          label={<ResponsiveCopy copy={download.label} />}
        />
        <ButtonLink
          href={cite.href}
          icon={LuCopy}
          label={cite.label}
          variant="outline"
        />
        <PlaceholderBadge label={placeholder} />
      </div>
    </div>
  );
}
