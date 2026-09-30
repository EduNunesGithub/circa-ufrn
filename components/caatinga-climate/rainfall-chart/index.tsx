import { ChartCard } from "@/components/chart-card";
import { ColumnPlot } from "@/components/column-plot";
import { ResponsiveCopy } from "@/components/responsive-copy";
import { rainfallChartContent, rainfallMonths } from "@/lib/caatinga/climate";

type RainfallChartProps = {
  className: string;
};

export function RainfallChart({ className }: RainfallChartProps) {
  const { axisMax, dryLabel, overline, placeholder, rainyLabel, ticks, title } =
    rainfallChartContent;

  return (
    <ChartCard
      className={className}
      footer={
        <ul className="gap-item flex flex-wrap">
          <li className="gap-control flex items-center">
            <span aria-hidden className="bg-primary size-3 rounded-sm" />
            <span className="typo-caption text-text-2">
              <ResponsiveCopy copy={rainyLabel} />
            </span>
          </li>
          <li className="gap-control desktop:flex hidden items-center">
            <span aria-hidden className="bg-sage-soft size-3 rounded-sm" />
            <span className="typo-caption text-text-2">{dryLabel}</span>
          </li>
        </ul>
      }
      overline={overline}
      placeholder={placeholder}
      title={title}
      titleOnMobile={false}
    >
      <ColumnPlot
        axisMax={axisMax}
        color="sage-soft"
        columns={rainfallMonths}
        plotClassName="desktop:h-60 h-40"
        ticks={ticks}
        unit="mm"
      />
    </ChartCard>
  );
}
