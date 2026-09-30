import { LuMail } from "react-icons/lu";

import { ButtonLink } from "@/components/button-link";
import { CtaBand } from "@/components/cta-band";
import { Entrance } from "@/components/entrance";
import { ctaContent } from "@/lib/home/cta";

export function HomeCta() {
  const { body, image, overline, primaryAction, secondaryAction, title } =
    ctaContent;

  return (
    <section aria-labelledby="home-cta-title">
      <Entrance
        className="max-w-page px-gutter pb-edge mx-auto"
        entrance="rise"
      >
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
      </Entrance>
    </section>
  );
}
