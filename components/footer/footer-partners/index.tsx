import { PartnerBadge } from "@/components/partner-badge";
import { cn } from "@/lib/cn";
import { partners } from "@/lib/site-info";

export function FooterPartners() {
  return (
    <section
      aria-labelledby="footer-partners-label"
      className="border-hairline-inverse gap-label pt-block desktop:flex-row desktop:flex-wrap desktop:items-center flex flex-col border-t"
    >
      <p
        className="typo-meta text-text-inverse-2 desktop:w-50 shrink-0 uppercase"
        id="footer-partners-label"
      >
        Realização e apoio
      </p>
      <ul className="gap-control desktop:flex desktop:grow desktop:basis-228 desktop:flex-wrap desktop:gap-item grid grid-cols-2">
        {partners.map((partner) => (
          <li
            className={cn(!partner.showOnMobile && "desktop:block hidden")}
            key={partner.name}
          >
            <PartnerBadge icon={partner.icon} name={partner.name} />
          </li>
        ))}
      </ul>
    </section>
  );
}
