import { cn } from "@/lib/cn";

export type PublicationTag = {
  label: string;
  variant: TagVariant;
};

export type TagVariant =
  "accent" | "article" | "education" | "neutral" | "news" | "report" | "video";

type TagProps = {
  label: string;
  variant: TagVariant;
};

const variantClassNames: Record<TagVariant, string> = {
  accent: "bg-accent text-inverse",
  article: "bg-primary-soft text-primary",
  education: "bg-accent-soft text-warning",
  neutral: "bg-bg-alt text-text-2",
  news: "bg-secondary-soft text-secondary-hover",
  report: "bg-sky-soft text-info",
  video: "bg-inverse text-text-inverse",
};

export function Tag({ label, variant }: TagProps) {
  return (
    <span
      className={cn(
        "typo-caption-strong px-control flex h-6 w-fit shrink-0 items-center rounded-sm",
        variantClassNames[variant],
      )}
    >
      {label}
    </span>
  );
}
