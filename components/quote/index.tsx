import { LuQuote } from "react-icons/lu";

import { type Person, PersonCompact } from "@/components/person-compact";
import { type Copy, ResponsiveCopy } from "@/components/responsive-copy";

type QuoteProps = {
  author: Person;
  text: Copy;
};

export function Quote({ author, text }: QuoteProps) {
  return (
    <figure className="border-border-strong gap-group pt-inset flex flex-col border-t">
      <LuQuote aria-hidden className="text-secondary size-6" />
      <blockquote className="text-text">
        <p className="typo-quote">
          <ResponsiveCopy copy={text} />
        </p>
      </blockquote>
      <figcaption>
        <PersonCompact {...author} />
      </figcaption>
    </figure>
  );
}
