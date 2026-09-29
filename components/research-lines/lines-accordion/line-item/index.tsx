import { Accordion } from "@base-ui/react/accordion";
import { LuMinus, LuPlus } from "react-icons/lu";

import type { ResearchLineDetail } from "@/components/research-lines";

import { ArrowLink } from "@/components/arrow-link";
import { MediaFrame } from "@/components/media-frame";
import { ResponsiveCopy } from "@/components/responsive-copy";
import { Tag } from "@/components/tag";
import { cn } from "@/lib/cn";
import { focusRingClassName } from "@/lib/control-styles";

type LineItemProps = {
  link: { href: string; label: string };
} & ResearchLineDetail;

export function LineItem({
  description,
  image,
  link,
  number,
  tags,
  title,
}: LineItemProps) {
  return (
    <Accordion.Item
      className="border-border data-open:border-border-strong ease-standard border-t transition-colors duration-250"
      value={number}
    >
      <Accordion.Header className="flex">
        <Accordion.Trigger
          className={cn(
            "group gap-item py-inset flex w-full cursor-pointer items-center rounded-sm text-left",
            focusRingClassName("default"),
          )}
        >
          <span className="typo-overline text-text-muted group-data-panel-open:text-secondary w-6 shrink-0">
            {number}
          </span>
          <span className="typo-card-title text-text-2 group-data-panel-open:text-text min-w-0 flex-1 group-hover:underline">
            <ResponsiveCopy copy={title} />
          </span>
          <LuPlus
            aria-hidden
            className="text-text-muted size-4 shrink-0 group-data-panel-open:hidden"
          />
          <LuMinus
            aria-hidden
            className="text-text-muted hidden size-4 shrink-0 group-data-panel-open:block"
          />
        </Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Panel className="gap-item pb-inset flex flex-col">
        <MediaFrame
          className="wide:hidden h-50 rounded-sm"
          image={image}
          sizes="(min-width: 56.75rem) 1px, 100vw"
        />
        <p className="text-text-2 max-w-text">{description}</p>
        {tags && (
          <ul className="gap-control desktop:flex hidden flex-wrap">
            {tags.map((tag) => (
              <li key={tag}>
                <Tag label={tag} variant="neutral" />
              </li>
            ))}
          </ul>
        )}
        <ArrowLink href={link.href} label={link.label} />
      </Accordion.Panel>
    </Accordion.Item>
  );
}
