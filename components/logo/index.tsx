import type { Tone } from "@/lib/control-styles";

import { LogoMark } from "@/components/logo-mark";
import { cn } from "@/lib/cn";
import { siteInfo } from "@/lib/site-info";

type LogoProps = {
  size?: "compact" | "full" | "responsive";
  tone?: Tone;
};

export function Logo({ size = "full", tone = "default" }: LogoProps) {
  const inverse = tone === "inverse";
  const descriptorColor = inverse ? "text-text-inverse-2" : "text-text-2";

  return (
    <span className="gap-item flex items-center">
      <LogoMark tone={tone} />
      <span
        className={cn(
          "typo-wordmark",
          inverse ? "text-text-inverse" : "text-primary",
        )}
      >
        {siteInfo.name}
      </span>
      <span
        aria-hidden
        className={cn(
          "h-7 w-px",
          inverse ? "bg-hairline-inverse" : "bg-border",
        )}
      />
      {size !== "full" && (
        <span
          className={cn(
            "typo-overline",
            descriptorColor,
            size === "responsive" && "desktop:hidden",
          )}
        >
          {siteInfo.university}
        </span>
      )}
      {size !== "compact" && (
        <span
          className={cn(
            "typo-caption-medium",
            descriptorColor,
            size === "responsive" && "desktop:inline hidden",
          )}
        >
          {siteInfo.descriptorLines[0]}
          <br />
          {siteInfo.descriptorLines[1]} · {siteInfo.university}
        </span>
      )}
    </span>
  );
}
