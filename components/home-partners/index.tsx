import { ArrowLink } from "@/components/arrow-link";
import { Overline } from "@/components/overline";
import { PartnerBadge } from "@/components/partner-badge";
import { PlaceholderBadge } from "@/components/placeholder-badge";
import { ResponsiveCopy } from "@/components/responsive-copy";
import { homePartners, partnersContent } from "@/lib/home/partners";

export function HomePartners() {
  const { link, overline, placeholder, title } = partnersContent;

  return (
    <section aria-labelledby="home-partners-title">
      <div className="gap-group max-w-page px-gutter py-section wide:flex-row wide:items-center wide:gap-block mx-auto flex flex-col">
        <div className="gap-label wide:w-78 wide:shrink-0 flex flex-col">
          <Overline>{overline}</Overline>
          <h2 className="typo-title text-text" id="home-partners-title">
            {title}
          </h2>
        </div>
        <div className="gap-item flex min-w-0 flex-1 flex-col">
          <ul className="gap-item desktop:grid-cols-3 grid grid-cols-2">
            {homePartners.map((partner) => (
              <li key={partner.name}>
                <PartnerBadge
                  icon={partner.icon}
                  name={partner.name}
                  variant="tile"
                />
              </li>
            ))}
          </ul>
          <div className="gap-group flex flex-wrap items-center justify-between">
            <PlaceholderBadge label={placeholder} />
            <ArrowLink
              href={link.href}
              label={<ResponsiveCopy copy={link.label} />}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
