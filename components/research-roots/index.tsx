import { LuCheck } from "react-icons/lu";

import type { Copy } from "@/components/responsive-copy";

import { ArrowLink } from "@/components/arrow-link";
import { Entrance } from "@/components/entrance";
import { RootProfile } from "@/components/research-roots/root-profile";
import { ResponsiveCopy } from "@/components/responsive-copy";
import { SectionHeader } from "@/components/section-header";
import { rootsContent } from "@/lib/research/roots";

export type RootDepth = "deep" | "shallow";

export type RootPlant = {
  depth: RootDepth;
  description: Copy;
  survival: string;
  title: string;
};

export type SoilLayer = {
  color: SoilMoisture;
  label: Copy;
};

export type SoilMoisture = "dry" | "middle" | "moist";

export function ResearchRoots() {
  const { body, bullets, link, overline, title } = rootsContent;

  return (
    <section aria-labelledby="research-roots-title" id="raizes-alongadas">
      <Entrance
        className="gap-block max-w-page px-gutter py-section wide:flex-row wide:items-center mx-auto flex flex-col"
        entrance="settle"
      >
        <div className="gap-group wide:basis-2/5 wide:max-w-text flex flex-col">
          <SectionHeader
            overline={overline}
            title={title}
            titleId="research-roots-title"
          />
          <p className="text-text-2">
            <ResponsiveCopy copy={body} />
          </p>
          <ul className="desktop:flex hidden flex-col">
            {bullets.map((bullet) => (
              <li
                className="border-border gap-item py-inset flex items-center border-b"
                key={bullet}
              >
                <LuCheck aria-hidden className="text-primary size-4 shrink-0" />
                <span className="text-text">{bullet}</span>
              </li>
            ))}
          </ul>
          <div className="desktop:block hidden">
            <ArrowLink href={link.href} label={link.label} />
          </div>
        </div>
        <div className="wide:min-w-120 min-w-0 flex-1">
          <RootProfile />
        </div>
      </Entrance>
    </section>
  );
}
