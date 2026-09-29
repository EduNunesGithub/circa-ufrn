import type { Species } from "@/components/caatinga-biodiversity";

import { PhotoTile } from "@/components/photo-tile";

type SpeciesCardProps = {
  appear?: boolean;
  className: string;
  number: string;
  sizes: string;
} & Species;

export function SpeciesCard({
  appear = false,
  category,
  className,
  image,
  name,
  number,
  scientificName,
  sizes,
}: SpeciesCardProps) {
  return (
    <PhotoTile
      appear={appear}
      className={className}
      image={image}
      sizes={sizes}
    >
      <span className="typo-overline text-accent">
        {number} · {category}
      </span>
      <h3 className="text-text-inverse">{name}</h3>
      <span className="typo-small-italic text-text-inverse-2">
        {scientificName}
      </span>
    </PhotoTile>
  );
}
