import Image from "next/image";

import type { ArticleHeroContent } from "@/components/article-hero";

import { PersonCompact } from "@/components/person-compact";
import { SocialLinks } from "@/components/social-links";

type ArticleBylineProps = Pick<ArticleHeroContent, "authors" | "share">;

const authorList = new Intl.ListFormat("pt-BR", { type: "conjunction" });

export function ArticleByline({ authors, share }: ArticleBylineProps) {
  return (
    <div className="border-border gap-item pt-inset desktop:flex-row desktop:flex-wrap desktop:items-center desktop:justify-between flex flex-col border-t">
      <div className="gap-item desktop:hidden flex items-center">
        <span aria-hidden className="flex shrink-0">
          {authors.map(({ avatar, name }) => (
            <Image
              alt=""
              className="border-bg size-8 rounded-full border object-cover"
              height={32}
              key={name}
              src={avatar}
              width={32}
            />
          ))}
        </span>
        <p className="typo-small text-text">
          {authorList.format(authors.map(({ name }) => name))}
        </p>
      </div>
      <ul className="gap-item desktop:flex hidden flex-wrap">
        {authors.map((author) => (
          <li key={author.name}>
            <PersonCompact {...author} />
          </li>
        ))}
      </ul>
      <div className="gap-label flex items-center">
        <p className="typo-meta text-text-muted desktop:block hidden uppercase">
          {share.label}
        </p>
        <SocialLinks links={share.links} tone="default" />
      </div>
    </div>
  );
}
