import { type ClassNameValue, extendTailwindMerge } from "tailwind-merge";

const twMerge = extendTailwindMerge({
  extend: {
    theme: {
      aspect: ["landscape", "panorama"],
      color: [
        "clay",
        "focus",
        "forest",
        "forest-hover",
        "ink",
        "line",
        "muted",
        "paper",
        "sage",
        "sand",
        "sun",
      ],
      container: ["page", "text"],
      font: ["display", "sans"],
      radius: ["sm"],
      shadow: ["overlay"],
      spacing: [
        "block",
        "control",
        "group",
        "gutter",
        "header",
        "inset",
        "item",
        "label",
        "section",
        "target",
      ],
    },
  },
});

export function cn(...inputs: ClassNameValue[]): string {
  return twMerge(...inputs);
}
