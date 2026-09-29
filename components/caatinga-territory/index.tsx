import type { IconType } from "react-icons/lib";

import type { Copy } from "@/components/responsive-copy";

import { TerritoryMap } from "@/components/caatinga-territory/territory-map";
import { Entrance } from "@/components/entrance";
import { SectionHeader } from "@/components/section-header";
import { territoryContent, territoryFacts } from "@/lib/caatinga/territory";

export type LevelId = "high" | "low" | "mid";

export type StateTile = {
  code: string;
  level: LevelId;
  name: string;
};

export type TerritoryFact = {
  icon: IconType;
  text: string;
};

export type TerritoryLevel = {
  id: LevelId;
  label: Copy;
};

export function CaatingaTerritory() {
  const { description, overline, title } = territoryContent;

  return (
    <section aria-labelledby="caatinga-territory-title" id="territorio">
      <Entrance
        className="gap-block max-w-page px-gutter py-section mx-auto flex flex-wrap"
        entrance="slide"
      >
        <div className="gap-group flex min-w-0 grow basis-80 flex-col">
          <SectionHeader
            description={description}
            overline={overline}
            title={title}
            titleId="caatinga-territory-title"
          />
          <ul className="desktop:flex hidden flex-col">
            {territoryFacts.map(({ icon: Icon, text }) => (
              <li
                className="border-border gap-item py-inset flex items-center border-b"
                key={text}
              >
                <Icon aria-hidden className="text-secondary size-4 shrink-0" />
                <p className="text-text">{text}</p>
              </li>
            ))}
          </ul>
        </div>
        <TerritoryMap className="min-w-0 grow-2 basis-176" />
      </Entrance>
    </section>
  );
}
