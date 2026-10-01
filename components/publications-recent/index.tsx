import { Entrance } from "@/components/entrance";
import { NewsCard } from "@/components/news-card";
import { SectionHeader } from "@/components/section-header";
import { Stagger } from "@/components/stagger";
import { StaggerItem } from "@/components/stagger-item";
import { recentContent, recentNews } from "@/lib/publications/recent";

export function PublicationsRecent() {
  const { link, overline, title } = recentContent;

  return (
    <section aria-labelledby="publications-recent-title" id="recentes">
      <Entrance
        className="gap-block max-w-page px-gutter py-section mx-auto flex flex-col"
        entrance="rise"
      >
        <SectionHeader
          link={link}
          overline={overline}
          title={title}
          titleId="publications-recent-title"
          titleOnMobile={false}
        />
        <Stagger className="wide:grid wide:grid-cols-3 wide:gap-block flex flex-col">
          {recentNews.map((news) => (
            <StaggerItem key={news.date}>
              <NewsCard {...news} />
            </StaggerItem>
          ))}
        </Stagger>
      </Entrance>
    </section>
  );
}
