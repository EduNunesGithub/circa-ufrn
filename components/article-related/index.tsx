import { Entrance } from "@/components/entrance";
import { HeaderCarousel } from "@/components/header-carousel";
import { NewsCard } from "@/components/news-card";
import { SectionHeader } from "@/components/section-header";
import { relatedContent, relatedItems } from "@/lib/article/related";

export function ArticleRelated() {
  const { carouselLabel, overline, title } = relatedContent;

  return (
    <section
      aria-labelledby="article-related-title"
      className="bg-bg-alt overflow-hidden"
    >
      <Entrance
        className="max-w-page px-gutter py-section mx-auto"
        entrance="settle"
      >
        <HeaderCarousel
          header={
            <SectionHeader
              overline={overline}
              title={title}
              titleId="article-related-title"
              titleOnMobile={false}
            />
          }
          id="article-related-slides"
          label={carouselLabel}
          slideClassName="w-68 desktop:w-96"
          total={relatedItems.length}
        >
          {relatedItems.map((item) => (
            <NewsCard {...item} key={item.date} layout="stacked" />
          ))}
        </HeaderCarousel>
      </Entrance>
    </section>
  );
}
