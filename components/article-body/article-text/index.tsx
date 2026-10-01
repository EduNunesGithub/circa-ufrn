import { LuCheck } from "react-icons/lu";

import { Figure } from "@/components/figure";
import { Overline } from "@/components/overline";
import { Quote } from "@/components/quote";
import { ResponsiveCopy } from "@/components/responsive-copy";
import { articleText } from "@/lib/article/body";

export function ArticleText() {
  const { findings, intro, method, nextSteps, quote, summary } = articleText;

  return (
    <article className="order-2 flex min-w-0 flex-1">
      <div className="gap-group max-w-text flex w-full flex-col" id={intro.id}>
        {intro.paragraphs.map((paragraph, index) => (
          <p className="text-text-2" key={index}>
            <ResponsiveCopy copy={paragraph} />
          </p>
        ))}
        <h2 className="typo-title text-text" id={method.id}>
          {method.title}
        </h2>
        <p className="text-text-2">
          <ResponsiveCopy copy={method.body} />
        </p>
        <ul className="gap-item flex flex-col">
          {method.items.map((item, index) => (
            <li className="gap-item text-text flex" key={index}>
              <span aria-hidden className="flex h-5 shrink-0 items-center">
                <span className="bg-secondary h-px w-2" />
              </span>
              <span>
                <ResponsiveCopy copy={item} />
              </span>
            </li>
          ))}
        </ul>
        <Quote author={quote.author} text={quote.text} />
        <h2 className="typo-title text-text" id={findings.id}>
          {findings.title}
        </h2>
        <p className="text-text-2">
          <ResponsiveCopy copy={findings.body} />
        </p>
        <Figure
          {...findings.figure}
          mediaClassName="desktop:h-90 h-58 rounded-sm"
          sizes="(min-width: 45rem) 536px, 100vw"
        />
        <p className="text-text-2">
          <ResponsiveCopy copy={findings.after} />
        </p>
        <div className="bg-primary-soft gap-item p-inset flex flex-col rounded-md">
          <Overline className="text-primary">{summary.label}</Overline>
          <ul className="gap-item flex flex-col">
            {summary.items.map((item, index) => (
              <li className="gap-item text-text flex" key={index}>
                <span aria-hidden className="flex h-5 shrink-0 items-center">
                  <LuCheck className="text-primary size-4" />
                </span>
                <span>
                  <ResponsiveCopy copy={item} />
                </span>
              </li>
            ))}
          </ul>
        </div>
        <h2 className="typo-title text-text" id={nextSteps.id}>
          {nextSteps.title}
        </h2>
        <p className="text-text-2">
          <ResponsiveCopy copy={nextSteps.body} />
        </p>
      </div>
    </article>
  );
}
