import type { IconType } from "react-icons/lib";

import { Entrance } from "@/components/entrance";
import { type Copy, ResponsiveCopy } from "@/components/responsive-copy";
import { SectionHeader } from "@/components/section-header";
import { Stagger } from "@/components/stagger";
import { StaggerItem } from "@/components/stagger-item";
import {
  importanceContent,
  importanceReasons,
} from "@/lib/caatinga/importance";

export type ImportanceReason = {
  description: Copy;
  icon: IconType;
  title: string;
};

export function CaatingaImportance() {
  const { overline, title } = importanceContent;

  return (
    <section aria-labelledby="caatinga-importance-title" className="bg-bg-alt">
      <Entrance
        className="gap-block max-w-page px-gutter py-section mx-auto flex flex-wrap"
        entrance="slide"
      >
        <div className="min-w-0 basis-78">
          <SectionHeader
            overline={overline}
            title={title}
            titleId="caatinga-importance-title"
          />
        </div>
        <Stagger className="gap-x-item gap-y-block wide:grid-cols-4 wide:gap-x-block grid min-w-0 grow basis-176 grid-cols-2">
          {importanceReasons.map(({ description, icon: Icon, title }) => (
            <StaggerItem
              className="border-secondary gap-label pl-inset flex flex-col border-l"
              key={title}
            >
              <Icon aria-hidden className="text-secondary size-5" />
              <h3 className="typo-card-title text-text">{title}</h3>
              <p className="text-text-2">
                <ResponsiveCopy copy={description} />
              </p>
            </StaggerItem>
          ))}
        </Stagger>
      </Entrance>
    </section>
  );
}
