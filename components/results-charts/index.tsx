import { ChartCard } from "@/components/chart-card";
import { ColumnPlot } from "@/components/column-plot";
import { Entrance } from "@/components/entrance";
import { StatBar } from "@/components/stat-bar";
import {
  productionChartContent,
  productionYears,
  survivalChartContent,
  survivalTechniques,
} from "@/lib/results/charts";

const sourceClassName = "typo-caption text-text-muted desktop:block hidden";

export function ResultsCharts() {
  const production = productionChartContent;
  const survival = survivalChartContent;

  return (
    <section aria-label="Gráficos de resultados">
      <Entrance
        className="gap-block max-w-page px-gutter py-section wide:grid wide:grid-cols-2 wide:items-start mx-auto flex flex-col"
        entrance="settle"
      >
        <ChartCard
          footer={<p className={sourceClassName}>{production.source}</p>}
          overline={production.overline}
          title={production.title}
        >
          <ColumnPlot
            axisMax={production.axisMax}
            baseline={false}
            color="sage"
            columns={productionYears}
            plotClassName="desktop:h-60 h-44"
            ticks={production.ticks}
            ticksOnMobile={false}
            unit={production.unit}
            valuesOnBars
          />
        </ChartCard>
        <ChartCard
          footer={<p className={sourceClassName}>{survival.source}</p>}
          overline={survival.overline}
          title={survival.title}
        >
          <ul className="gap-group flex flex-col">
            {survivalTechniques.map((technique) => (
              <li key={technique.value}>
                <StatBar {...technique} />
              </li>
            ))}
          </ul>
        </ChartCard>
      </Entrance>
    </section>
  );
}
