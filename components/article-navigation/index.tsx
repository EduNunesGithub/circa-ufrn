import { ContentNav } from "@/components/content-nav";
import { Entrance } from "@/components/entrance";
import { articleNavigation } from "@/lib/article/navigation";

export function ArticleNavigation() {
  return (
    <section>
      <Entrance
        className="max-w-page px-gutter pt-section pb-edge mx-auto"
        entrance="rise"
      >
        <ContentNav {...articleNavigation} />
      </Entrance>
    </section>
  );
}
