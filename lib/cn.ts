import { type ClassNameValue, extendTailwindMerge } from "tailwind-merge";

const twMerge = extendTailwindMerge({
  extend: {
    theme: {
      spacing: [
        "block",
        "control",
        "group",
        "gutter",
        "inset",
        "item",
        "label",
        "section",
      ],
    },
  },
});

export function cn(...inputs: ClassNameValue[]): string {
  return twMerge(...inputs);
}
