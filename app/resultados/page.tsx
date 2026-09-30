import type { Metadata } from "next";

import { ResultsAreas } from "@/components/results-areas";
import { ResultsCharts } from "@/components/results-charts";
import { ResultsComparison } from "@/components/results-comparison";
import { ResultsCta } from "@/components/results-cta";
import { ResultsFindings } from "@/components/results-findings";
import { ResultsHero } from "@/components/results-hero";
import { ResultsIndicators } from "@/components/results-indicators";
import { ResultsReports } from "@/components/results-reports";
import { ResultsSocial } from "@/components/results-social";

export const metadata: Metadata = {
  description:
    "Indicadores, achados científicos, impacto socioambiental e relatórios dos resultados da restauração da Caatinga no CIRCA.",
  title: "Resultados e impacto",
};

export default function Results() {
  return (
    <main>
      <ResultsHero />
      <ResultsIndicators />
      <ResultsCharts />
      <ResultsFindings />
      <ResultsSocial />
      <ResultsComparison />
      <ResultsAreas />
      <ResultsReports />
      <ResultsCta />
    </main>
  );
}
