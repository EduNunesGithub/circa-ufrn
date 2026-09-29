import { Entrance } from "@/components/entrance";
import { Overline } from "@/components/overline";
import { Stagger } from "@/components/stagger";
import { StaggerItem } from "@/components/stagger-item";
import { principles } from "@/lib/about/principles";

export type Principle = {
  label: string;
  statement: string;
  text: string;
};

export function AboutPrinciples() {
  return (
    <section aria-labelledby="about-principles-title">
      <Entrance
        className="max-w-page px-gutter pb-section mx-auto"
        entrance="slide"
      >
        <h2 className="sr-only" id="about-principles-title">
          Missão, visão e valores
        </h2>
        <Stagger className="gap-block wide:grid-cols-3 grid">
          {principles.map(({ label, statement, text }) => (
            <StaggerItem
              className="border-border-strong gap-label pt-inset flex flex-col border-t"
              key={label}
            >
              <Overline>{label}</Overline>
              <h3 className="text-text">{statement}</h3>
              <p className="text-text-2 desktop:block hidden">{text}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </Entrance>
    </section>
  );
}
