import { Entrance } from "@/components/entrance";
import { Metric } from "@/components/metric";
import { Stagger } from "@/components/stagger";
import { StaggerItem } from "@/components/stagger-item";
import {
  caatingaNumbers,
  caatingaNumbersContent,
} from "@/lib/caatinga/numbers";

const metricPairs = [caatingaNumbers.slice(0, 2), caatingaNumbers.slice(2)];

export function CaatingaNumbers() {
  return (
    <section aria-labelledby="caatinga-numbers-title">
      <Entrance
        className="max-w-page px-gutter py-section mx-auto"
        entrance="rise"
      >
        <h2 className="sr-only" id="caatinga-numbers-title">
          {caatingaNumbersContent.title}
        </h2>
        <div className="gap-x-item gap-y-block flex flex-wrap">
          {metricPairs.map((pair) => (
            <Stagger
              className="gap-x-item grid min-w-0 grow basis-128 grid-cols-2"
              key={pair[0]?.value}
            >
              {pair.map((metric) => (
                <StaggerItem key={metric.value}>
                  <Metric {...metric} />
                </StaggerItem>
              ))}
            </Stagger>
          ))}
        </div>
      </Entrance>
    </section>
  );
}
