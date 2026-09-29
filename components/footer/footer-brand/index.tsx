import { Logo } from "@/components/logo";
import { siteInfo } from "@/lib/site-info";

export function FooterBrand() {
  return (
    <div className="gap-group desktop:w-106 flex shrink-0 flex-col">
      <Logo tone="inverse" />
      <p className="text-text-inverse-2">{siteInfo.about}</p>
      <address className="typo-small text-text-inverse-2 desktop:block hidden">
        {siteInfo.addressLines[0]}
        <br />
        {siteInfo.addressLines[1]}
      </address>
    </div>
  );
}
