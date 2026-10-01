import Link from "next/link";

import { Overline } from "@/components/overline";
import { Tag } from "@/components/tag";
import { articleRail, articleText } from "@/lib/article/body";
import { cn } from "@/lib/cn";
import { focusRingClassName } from "@/lib/control-styles";

export function ArticleRail() {
  const { findings, intro, method, nextSteps } = articleText;
  const { tocLabel, topics, topicsLabel } = articleRail;
  const anchors = [
    { id: intro.id, title: intro.label },
    method,
    findings,
    nextSteps,
  ];

  return (
    <>
      <nav
        aria-label={tocLabel}
        className="gap-label wide:flex order-2 hidden flex-col"
      >
        <Overline className="text-text-muted">{tocLabel}</Overline>
        <ul className="border-border flex flex-col border-l">
          {anchors.map(({ id, title }, index) => (
            <li className="flex" key={id}>
              <Link
                className={cn(
                  "px-inset ease-standard flex min-h-10 flex-1 items-center transition-colors duration-250",
                  index === 0
                    ? "border-primary typo-label-strong text-primary -ml-px border-l-2"
                    : "typo-label text-text-2 hover:text-text",
                  focusRingClassName("default"),
                )}
                href={`#${id}`}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="border-border gap-label pt-inset wide:border-t-0 wide:pt-0 order-3 flex flex-col border-t">
        <Overline className="text-text-muted">{topicsLabel}</Overline>
        <ul className="gap-control wide:flex-col flex flex-wrap">
          {topics.map((topic) => (
            <li key={topic}>
              <Tag label={topic} variant="neutral" />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
