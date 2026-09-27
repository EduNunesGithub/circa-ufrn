import { cn } from "@/lib/cn";

export type ButtonVariant = "outline" | "solid";

export type Tone = "default" | "inverse";

const buttonVariantClassNames: Record<ButtonVariant, Record<Tone, string>> = {
  outline: {
    default: "border border-border-strong text-text hover:bg-bg-alt",
    inverse: "border border-text-inverse text-text-inverse hover:bg-inverse-2",
  },
  solid: {
    default:
      "bg-primary text-text-inverse hover:bg-primary-hover active:bg-primary-active",
    inverse: "bg-bg text-primary hover:bg-bg-alt",
  },
};

export function buttonClassName(
  tone: Tone,
  variant: ButtonVariant = "solid",
): string {
  return cn(
    "typo-label gap-control px-inset flex h-10 items-center justify-center rounded-sm transition-colors",
    buttonVariantClassNames[variant][tone],
    focusRingClassName(tone),
  );
}

export function focusRingClassName(tone: Tone): string {
  return cn(
    "outline-offset-2 focus-visible:outline-2",
    tone === "inverse"
      ? "focus-visible:outline-focus-inverse"
      : "focus-visible:outline-focus",
  );
}

export function iconButtonClassName(tone: Tone): string {
  return cn(
    "flex size-10 shrink-0 items-center justify-center rounded-sm border transition-colors",
    tone === "inverse"
      ? "border-hairline-inverse bg-glass text-text-inverse hover:bg-inverse-2 backdrop-blur-md"
      : "border-border text-text hover:bg-bg-alt",
    focusRingClassName(tone),
  );
}
