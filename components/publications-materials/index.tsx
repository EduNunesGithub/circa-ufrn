import type { MediaImage } from "@/components/media-frame";
import type { Copy } from "@/components/responsive-copy";

import { Entrance } from "@/components/entrance";
import { MaterialCard } from "@/components/publications-materials/material-card";
import { SectionHeader } from "@/components/section-header";
import { SwipeCarousel } from "@/components/swipe-carousel";
import { materials, materialsContent } from "@/lib/publications/materials";

export type Material = {
  cover: MaterialCover;
  href: string;
  image: MediaImage;
  info: Copy;
  kicker: Copy;
  title: Copy;
};

export type MaterialCover = "clay" | "forest" | "sky" | "sun";

export function PublicationsMaterials() {
  const { carouselLabel, description, downloadLabel, link, overline, title } =
    materialsContent;

  return (
    <section
      aria-labelledby="publications-materials-title"
      className="overflow-hidden"
      id="materiais"
    >
      <Entrance
        className="gap-block max-w-page px-gutter py-section mx-auto flex flex-col"
        entrance="settle"
      >
        <SectionHeader
          description={description}
          descriptionOnMobile={false}
          link={link}
          overline={overline}
          title={title}
          titleId="publications-materials-title"
        />
        <SwipeCarousel
          id="publications-materials-slides"
          label={carouselLabel}
          slideClassName="w-58 desktop:w-72"
          total={materials.length}
        >
          {materials.map((material) => (
            <MaterialCard
              {...material}
              downloadLabel={downloadLabel}
              key={material.cover}
            />
          ))}
        </SwipeCarousel>
      </Entrance>
    </section>
  );
}
