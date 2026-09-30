import type { IconType } from "react-icons/lib";

import Link from "next/link";
import { LuDownload } from "react-icons/lu";

import { type Copy, ResponsiveCopy } from "@/components/responsive-copy";
import { iconButtonClassName } from "@/lib/control-styles";

export type DownloadData = {
  href: string;
  icon: IconType;
  meta: Copy;
  title: Copy;
};

export function DownloadItem({ href, icon: Icon, meta, title }: DownloadData) {
  return (
    <article className="border-border gap-item py-inset flex items-center border-b">
      <span className="bg-bg-alt text-text-2 flex size-10 shrink-0 items-center justify-center rounded-sm">
        <Icon aria-hidden className="size-5" />
      </span>
      <div className="flex min-w-0 flex-1 flex-col">
        <h3 className="typo-label-strong text-text">
          <ResponsiveCopy copy={title} />
        </h3>
        <p className="typo-meta text-text-muted uppercase">
          <ResponsiveCopy copy={meta} />
        </p>
      </div>
      <Link className={iconButtonClassName("default")} href={href}>
        <LuDownload aria-hidden className="size-5" />
        <span className="sr-only">
          Baixar <ResponsiveCopy copy={title} />
        </span>
      </Link>
    </article>
  );
}
