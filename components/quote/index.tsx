import Image from "next/image";
import { LuQuote } from "react-icons/lu";

type QuoteProps = {
  author: { avatar: string; name: string; role: string };
  text: string;
};

export function Quote({ author, text }: QuoteProps) {
  return (
    <figure className="border-border-strong gap-group pt-inset flex flex-col border-t">
      <LuQuote aria-hidden className="text-secondary size-6" />
      <blockquote className="text-text">
        <p className="typo-quote">{text}</p>
      </blockquote>
      <figcaption className="gap-item flex items-center">
        <Image
          alt=""
          className="size-10 shrink-0 rounded-full object-cover"
          height={40}
          src={author.avatar}
          width={40}
        />
        <span className="flex flex-col">
          <span className="typo-label-strong text-text">{author.name}</span>
          <span className="typo-caption text-text-muted">{author.role}</span>
        </span>
      </figcaption>
    </figure>
  );
}
