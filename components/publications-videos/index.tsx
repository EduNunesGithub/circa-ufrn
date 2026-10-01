import type { MediaImage } from "@/components/media-frame";
import type { Copy } from "@/components/responsive-copy";

import { Entrance } from "@/components/entrance";
import { HeaderCarousel } from "@/components/header-carousel";
import { VideoCard } from "@/components/publications-videos/video-card";
import { SectionHeader } from "@/components/section-header";
import { videos, videosContent } from "@/lib/publications/videos";

export type VideoItem = {
  duration: string;
  href: string;
  image: MediaImage;
  title: Copy;
};

export function PublicationsVideos() {
  const { carouselLabel, description, overline, tagLabel, title, watchLabel } =
    videosContent;

  return (
    <section
      aria-labelledby="publications-videos-title"
      className="bg-inverse overflow-hidden"
      id="videos"
    >
      <Entrance
        className="max-w-page px-gutter py-section mx-auto"
        entrance="rise"
      >
        <HeaderCarousel
          header={
            <SectionHeader
              description={description}
              descriptionOnMobile={false}
              overline={overline}
              title={title}
              titleId="publications-videos-title"
              tone="inverse"
            />
          }
          id="publications-videos-slides"
          label={carouselLabel}
          slideClassName="w-68 desktop:w-106"
          tone="inverse"
          total={videos.length}
        >
          {videos.map((video) => (
            <VideoCard
              {...video}
              key={video.duration}
              tagLabel={tagLabel}
              watchLabel={watchLabel}
            />
          ))}
        </HeaderCarousel>
      </Entrance>
    </section>
  );
}
