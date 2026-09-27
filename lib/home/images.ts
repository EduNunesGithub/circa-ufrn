import type { MediaImage } from "@/components/media-frame";

export function homeImage(name: string, alt: string): MediaImage {
  return { alt, src: `/home-assets/${name}.jpg` };
}
