import { LuArrowUpRight } from "react-icons/lu";

import { cn } from "@/lib/cn";
import { focusRingClassName, type Tone } from "@/lib/control-styles";
import { isWebUrl } from "@/lib/navigation";

type ExternalLinkProps = {
  href: string;
  label: string;
  tone?: Tone;
};

export function ExternalLink({
  href,
  label,
  tone = "default",
}: ExternalLinkProps) {
  const inverse = tone === "inverse";
  const opensNewTab = isWebUrl(href);

  return (
    <a
      className={cn(
        "gap-control flex w-fit items-center rounded-sm hover:underline",
        inverse ? "text-text-inverse" : "text-text",
        focusRingClassName(tone),
      )}
      href={href}
      {...(opensNewTab ? { rel: "noopener noreferrer", target: "_blank" } : {})}
    >
      {label}
      {opensNewTab && <span className="sr-only">(abre em nova aba)</span>}
      <LuArrowUpRight
        aria-hidden
        className={cn(
          "size-3",
          inverse ? "text-text-inverse-2" : "text-text-muted",
        )}
      />
    </a>
  );
}
