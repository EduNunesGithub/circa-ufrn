import { ButtonLink } from "@/components/button-link";
import { CtaBand } from "@/components/cta-band";
import { Entrance } from "@/components/entrance";
import { researchCtaContent } from "@/lib/research/cta";

export function ResearchCta() {
  const { action, body, image, overline, title } = researchCtaContent;

  return (
    <section aria-labelledby="research-cta-title">
      <Entrance
        className="max-w-page px-gutter pb-section mx-auto"
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
          titleId="research-cta-title"
        />
      </Entrance>
    </section>
  );
}
