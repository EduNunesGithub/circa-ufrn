import { Entrance } from "@/components/entrance";
import { Figure } from "@/components/figure";
import { PlaceholderBadge } from "@/components/placeholder-badge";
import { SectionHeader } from "@/components/section-header";
import { StatBar } from "@/components/stat-bar";
import { threats, threatsContent, threatsFigure } from "@/lib/caatinga/threats";

export function CaatingaThreats() {
  const { description, overline, placeholder, source, title } = threatsContent;

  return (
    <section
      aria-labelledby="caatinga-threats-title"
      className="bg-inverse overflow-hidden"
      id="ameacas"
    >
      <Entrance
        className="max-w-page wide:grid wide:grid-cols-12 desktop:gap-block desktop:px-gutter desktop:py-section mx-auto flex flex-col"
        entrance="settle"
      >
        <Figure
          {...threatsFigure}
          captionOnMobile={false}
          className="wide:col-span-5"
          mediaClassName="desktop:h-100 wide:h-140 desktop:rounded-sm h-70"
          sizes="(min-width: 56.75rem) 40vw, 100vw"
          tone="inverse"
        />
        <div className="gap-block px-gutter py-section wide:col-span-7 desktop:p-0 flex flex-col">
          <SectionHeader
            description={description}
            overline={overline}
            title={title}
            titleId="caatinga-threats-title"
            tone="inverse"
          />
          <ul className="gap-group flex flex-col">
            {threats.map((threat) => (
              <li key={threat.value}>
                <StatBar {...threat} tone="inverse" />
              </li>
            ))}
          </ul>
          <div className="border-hairline-inverse gap-group desktop:border-t desktop:pt-label flex flex-wrap items-center justify-between">
            <p className="typo-caption text-text-inverse-2 desktop:block hidden">
              {source}
            </p>
            <PlaceholderBadge label={placeholder} />
          </div>
        </div>
      </Entrance>
    </section>
  );
}
