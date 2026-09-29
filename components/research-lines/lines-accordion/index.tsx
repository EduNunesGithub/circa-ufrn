"use client";

import { Accordion } from "@base-ui/react/accordion";
import { type ReactNode, useState } from "react";

import type { ResearchLineDetail } from "@/components/research-lines";

import { Figure } from "@/components/figure";
import { LineItem } from "@/components/research-lines/lines-accordion/line-item";

type LinesAccordionProps = {
  header: ReactNode;
  lines: ResearchLineDetail[];
  link: { href: string; label: string };
};

export function LinesAccordion({ header, lines, link }: LinesAccordionProps) {
  const [open, setOpen] = useState<string[]>(() => [lines[0].number]);
  const [shown, setShown] = useState(lines[0].number);
  const featured = lines.find(({ number }) => number === shown) ?? lines[0];

  function handleValueChange(next: string[]) {
    setOpen(next);
    if (next[0]) {
      setShown(next[0]);
    }
  }

  return (
    <div className="gap-block wide:grid wide:grid-cols-12 wide:items-start flex flex-col">
      <div className="gap-block wide:col-span-5 flex flex-col">
        {header}
        <Accordion.Root
          className="border-border flex flex-col border-b"
          onValueChange={handleValueChange}
          value={open}
        >
          {lines.map((line) => (
            <LineItem {...line} key={line.number} link={link} />
          ))}
        </Accordion.Root>
      </div>
      <Figure
        caption={featured.caption}
        className="wide:col-span-7 wide:flex hidden"
        image={featured.image}
        mediaClassName="h-160 rounded-sm"
        number={`Linha ${featured.number}`}
        sizes="(min-width: 56.75rem) 55vw, 1px"
      />
    </div>
  );
}
