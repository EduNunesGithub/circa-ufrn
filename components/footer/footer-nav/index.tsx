import Link from "next/link";

import { ExternalLink } from "@/components/external-link";
import { FooterLinkColumn } from "@/components/footer/footer-nav/footer-link-column";
import { ResponsiveLabel } from "@/components/responsive-label";
import { SocialLinks } from "@/components/social-links";
import { cn } from "@/lib/cn";
import { focusRingClassName } from "@/lib/control-styles";
import { footerSections } from "@/lib/navigation";
import { siteInfo, usefulLinks } from "@/lib/site-info";

const linkClassName = cn(
  "w-fit rounded-sm hover:underline",
  focusRingClassName("inverse"),
);

export function FooterNav() {
  return (
    <nav
      aria-label="Rodapé"
      className="gap-block desktop:grow desktop:basis-184 wide:flex grid grid-cols-2"
    >
      {footerSections.map((section) => (
        <FooterLinkColumn heading={section.heading} key={section.heading}>
          <ul className="gap-item flex flex-col">
            {section.links.map((link) => (
              <li key={link.href}>
                <Link className={linkClassName} href={link.href}>
                  <ResponsiveLabel full={link.footerLabel} short={link.label} />
                </Link>
              </li>
            ))}
          </ul>
        </FooterLinkColumn>
      ))}
      <FooterLinkColumn className="desktop:flex hidden" heading="Links úteis">
        <ul className="gap-item flex flex-col">
          {usefulLinks.map((link) => (
            <li key={link.label}>
              <ExternalLink
                href={link.href}
                label={link.label}
                tone="inverse"
              />
            </li>
          ))}
        </ul>
      </FooterLinkColumn>
      <FooterLinkColumn
        className="desktop:col-span-1 col-span-2"
        heading="Contato"
      >
        <ul className="gap-item flex flex-col">
          <li>
            <a
              className={cn(linkClassName, "typo-label desktop:typo-long")}
              href={`mailto:${siteInfo.email}`}
            >
              {siteInfo.email}
            </a>
          </li>
          <li className="text-text-inverse-2 desktop:text-text-inverse">
            {siteInfo.phone}
            <span className="desktop:hidden"> · {siteInfo.hoursShort}</span>
          </li>
          <li className="desktop:list-item hidden">{siteInfo.hours}</li>
        </ul>
        <SocialLinks />
      </FooterLinkColumn>
    </nav>
  );
}
