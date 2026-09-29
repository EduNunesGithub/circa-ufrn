import type { IconType } from "react-icons/lib";

import { Entrance } from "@/components/entrance";
import { MethodStep } from "@/components/research-method/method-step";
import { SectionHeader } from "@/components/section-header";
import { Stagger } from "@/components/stagger";
import { StaggerItem } from "@/components/stagger-item";
import { methodContent, methodSteps } from "@/lib/research/method";

export type MethodStepData = {
  description: string;
  highlighted?: boolean;
  icon: IconType;
  meta: string;
  title: string;
};

export function ResearchMethod() {
  const { description, overline, title } = methodContent;

  return (
    <section
      aria-labelledby="research-method-title"
      className="bg-inverse"
      id="metodo"
    >
      <Entrance
        className="gap-block max-w-page px-gutter py-section mx-auto flex flex-col"
        entrance="rise"
      >
        <SectionHeader
          description={description}
          descriptionOnMobile={false}
          overline={overline}
          title={title}
          titleId="research-method-title"
          tone="inverse"
        />
        <Stagger
          as="ol"
          className="wide:grid wide:grid-cols-6 wide:gap-item flex flex-col"
        >
          {methodSteps.map((step, index) => (
            <StaggerItem className="flex" key={step.title}>
              <MethodStep {...step} isLast={index === methodSteps.length - 1} />
            </StaggerItem>
          ))}
        </Stagger>
      </Entrance>
    </section>
  );
}
