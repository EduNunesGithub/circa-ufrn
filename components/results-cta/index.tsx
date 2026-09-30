import { ButtonLink } from "@/components/button-link";
import { CtaBand } from "@/components/cta-band";
import { Entrance } from "@/components/entrance";
import { resultsCtaContent } from "@/lib/results/cta";

export function ResultsCta() {
  const { action, body, image, overline, title } = resultsCtaContent;

  return (
    <section aria-labelledby="results-cta-title">
      <Entrance
        className="max-w-page px-gutter pt-section pb-edge mx-auto"
        entrance="rise"
      >
        <CtaBand
          actions={
            <ButtonLink
              href={action.href}
              label={action.label}
              tone="inverse"
            />
          }
          body={body}
          image={image}
          overline={overline}
          title={title}
          titleId="results-cta-title"
        />
      </Entrance>
    </section>
  );
}
