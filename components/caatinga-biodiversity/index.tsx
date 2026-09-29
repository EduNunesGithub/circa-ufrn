import type { MediaImage } from "@/components/media-frame";

import { SpeciesCard } from "@/components/caatinga-biodiversity/species-card";
import { Entrance } from "@/components/entrance";
import { PhotoCarousel } from "@/components/photo-carousel";
import { SectionHeader } from "@/components/section-header";
import { biodiversityContent, species } from "@/lib/caatinga/biodiversity";
import { formatCounter } from "@/lib/carousel";

export type Species = {
  category: string;
  image: MediaImage;
  name: string;
  scientificName: string;
};

const mosaicColumns = [
  [0, 3],
  [1, 4],
  [2, 5],
];

const mosaicHeights = ["flex-1", "h-80", "flex-1", "h-70", "flex-1", "flex-1"];

export function CaatingaBiodiversity() {
  const { carouselLabel, description, link, overline, title } =
    biodiversityContent;

  return (
    <section
      aria-labelledby="caatinga-biodiversity-title"
      className="overflow-hidden"
      id="biodiversidade"
    >
      <Entrance
        className="gap-block max-w-page px-gutter py-section mx-auto flex flex-col"
        entrance="rise"
      >
        <SectionHeader
          description={description}
          descriptionOnMobile={false}
          link={link}
          overline={overline}
          title={title}
          titleId="caatinga-biodiversity-title"
        />
        <div className="wide:hidden">
          <PhotoCarousel
            id="caatinga-species"
            label={carouselLabel}
            total={species.length}
          >
            {species.map((item, index) => (
              <SpeciesCard
                {...item}
                className="h-90"
                key={item.name}
                number={formatCounter(index + 1)}
                sizes="(min-width: 45rem) 40vw, 272px"
              />
            ))}
          </PhotoCarousel>
        </div>
        <ul className="gap-item wide:grid hidden h-206 grid-cols-3">
          {mosaicColumns.map((column) => (
            <li className="gap-item flex flex-col" key={column.join()}>
              {column.map((index) => (
                <SpeciesCard
                  {...species[index]}
                  appear
                  className={mosaicHeights[index]}
                  key={species[index].name}
                  number={formatCounter(index + 1)}
                  sizes="33vw"
                />
              ))}
            </li>
          ))}
        </ul>
      </Entrance>
    </section>
  );
}
