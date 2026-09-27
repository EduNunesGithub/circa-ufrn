import { iconButtonClassName, type Tone } from "@/lib/control-styles";
import { isWebUrl } from "@/lib/navigation";
import { socialLinks } from "@/lib/site-info";

type SocialLinksProps = {
  tone?: Tone;
};

export function SocialLinks({ tone = "inverse" }: SocialLinksProps) {
  return (
    <ul className="gap-control flex">
      {socialLinks.map(({ href, icon: Icon, label }) => (
        <li key={label}>
          <a
            aria-label={label}
            className={iconButtonClassName(tone)}
            href={href}
            {...(isWebUrl(href)
              ? { rel: "noopener noreferrer", target: "_blank" }
              : {})}
          >
            <Icon aria-hidden className="size-5" />
          </a>
        </li>
      ))}
    </ul>
  );
}
