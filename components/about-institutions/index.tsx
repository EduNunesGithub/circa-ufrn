import type { IconType } from "react-icons/lib";

import type { Copy } from "@/components/responsive-copy";

import { InstitutionRow } from "@/components/about-institutions/institution-row";
import { ArrowLink } from "@/components/arrow-link";
import { Entrance } from "@/components/entrance";
import { SectionHeader } from "@/components/section-header";
import { Stagger } from "@/components/stagger";
import { StaggerItem } from "@/components/stagger-item";
import { institutions, institutionsContent } from "@/lib/about/institutions";

export type Institution = {
  description: Copy;
  href?: string;
  icon: IconType;
  name: Copy;
  role: string;
};

export function AboutInstitutions() {
  const { description, link, overline, title } = institutionsContent;

  return (
    <section aria-labelledby="about-institutions-title">
      <Entrance
        className="gap-group max-w-page px-gutter pb-section wide:grid wide:grid-cols-3 wide:gap-block mx-auto flex flex-col"
        entrance="slide"
      >
        <div className="gap-group wide:flex wide:flex-col contents">
          <div className="order-1">
            <SectionHeader
              description={description}
              descriptionOnMobile={false}
              overline={overline}
              title={title}
              titleId="about-institutions-title"
            />
          </div>
          <div className="order-3">
            <ArrowLink href={link.href} label={link.label} />
          </div>
        </div>
        <Stagger className="border-border wide:order-none wide:col-span-2 order-2 flex flex-col border-b">
          {institutions.map((institution) => (
            <StaggerItem key={institution.role}>
              <InstitutionRow {...institution} />
            </StaggerItem>
          ))}
        </Stagger>
      </Entrance>
    </section>
  );
}
