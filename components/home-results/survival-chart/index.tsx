import { PlaceholderBadge } from "@/components/placeholder-badge";
import { ResponsiveCopy } from "@/components/responsive-copy";
import { StatBar } from "@/components/stat-bar";
import { resultsContent, survivalBars } from "@/lib/home/results";

export function SurvivalChart() {
  const { overline, source, title } = resultsContent.chart;

  return (
    <figure className="border-border-subtle bg-surface gap-group p-inset flex flex-col rounded-md border">
      <figcaption className="gap-label flex flex-col">
        <span className="typo-overline text-text-muted">{overline}</span>
        <h3 className="typo-card-title text-text">
          <ResponsiveCopy copy={title} />
        </h3>
      </figcaption>
      <ul className="gap-group flex flex-col">
        {survivalBars.map((bar) => (
          <li key={bar.value}>
            <StatBar {...bar} />
          </li>
        ))}
      </ul>
      <div className="gap-control flex flex-wrap items-center justify-between">
        <p className="typo-caption text-text-muted desktop:block hidden">
          {source}
        </p>
        <PlaceholderBadge />
      </div>
    </figure>
  );
}
