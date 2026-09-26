import { type ClassNameValue, twMerge } from "tailwind-merge";

export function cn(...inputs: ClassNameValue[]): string {
  return twMerge(...inputs);
}
