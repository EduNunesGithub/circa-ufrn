import { cn } from "@/lib/cn";

export type Tone = "default" | "inverse";

export function buttonClassName(tone: Tone): string {
  return cn(
    "typo-label gap-control px-inset flex h-10 items-center justify-center rounded-sm transition-colors",
    tone === "inverse"
      ? "bg-bg text-primary hover:bg-bg-alt"
      : "bg-primary text-text-inverse hover:bg-primary-hover active:bg-primary-active",
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
