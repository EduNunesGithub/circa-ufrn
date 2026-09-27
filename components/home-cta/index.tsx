import { LuMail } from "react-icons/lu";

import { ButtonLink } from "@/components/button-link";
import { CtaBand } from "@/components/cta-band";
import { ctaContent } from "@/lib/home/cta";

export function HomeCta() {
  const { body, image, overline, primaryAction, secondaryAction, title } =
    ctaContent;

  return (
    <section aria-labelledby="home-cta-title">
      <div className="max-w-page px-gutter pb-section mx-auto">
        <CtaBand
          actions={
            <>
              <ButtonLink
                href={primaryAction.href}
                label={primaryAction.label}
                tone="inverse"
              />
              <ButtonLink
                href={secondaryAction.href}
                icon={LuMail}
                label={secondaryAction.label}
                tone="inverse"
                variant="outline"
              />
            </>
          }
          body={body}
          image={image}
          overline={overline}
          title={title}
          titleId="home-cta-title"
        />
      </div>
    </section>
  );
}
