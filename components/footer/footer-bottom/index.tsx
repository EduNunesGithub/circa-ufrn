import Link from "next/link";
import { LuArrowUp } from "react-icons/lu";

import { ArrowLink } from "@/components/arrow-link";
import { ResponsiveLabel } from "@/components/responsive-label";
import { cn } from "@/lib/cn";
import { focusRingClassName } from "@/lib/control-styles";
import { backToTopHref, legalLinks } from "@/lib/navigation";
import { siteInfo } from "@/lib/site-info";

export function FooterBottom() {
  const year = new Date().getFullYear();

  return (
    <div className="border-hairline-inverse gap-item pt-group typo-small text-text-inverse-2 desktop:flex-row desktop:flex-wrap desktop:items-center desktop:justify-between desktop:gap-block flex flex-col border-t">
      <p className="typo-small">
        © {year} {siteInfo.name}
        <span className="desktop:inline hidden">
          {" "}
          · {siteInfo.descriptorLines.join(" ")}
        </span>{" "}
        · {siteInfo.university}
      </p>
      <div className="gap-item desktop:flex-row desktop:flex-wrap desktop:items-center desktop:gap-group flex flex-col">
        <ul className="gap-group flex flex-wrap">
          {legalLinks.map((link) => (
            <li key={link.href}>
              <Link
                className={cn(
                  "rounded-sm hover:underline",
                  focusRingClassName("inverse"),
                )}
                href={link.href}
              >
                <ResponsiveLabel full={link.fullLabel} short={link.label} />
              </Link>
            </li>
          ))}
        </ul>
        <ArrowLink
          href={backToTopHref}
          icon={LuArrowUp}
          label="Voltar ao topo"
          tone="inverse"
        />
      </div>
    </div>
  );
}
