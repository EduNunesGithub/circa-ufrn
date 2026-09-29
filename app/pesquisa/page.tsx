import type { Metadata } from "next";

import { ResearchCta } from "@/components/research-cta";
import { ResearchExperiments } from "@/components/research-experiments";
import { ResearchHero } from "@/components/research-hero";
import { ResearchLines } from "@/components/research-lines";
import { ResearchMethod } from "@/components/research-method";
import { ResearchMonitoring } from "@/components/research-monitoring";
import { ResearchPublications } from "@/components/research-publications";
import { ResearchRoots } from "@/components/research-roots";
import { ResearchTechnologies } from "@/components/research-technologies";

export const metadata: Metadata = {
  description:
    "Linhas de pesquisa, método, experimentos e monitoramento do CIRCA para restaurar a Caatinga com base em evidências.",
  title: "Pesquisa e restauração",
};

export default function Research() {
  return (
    <main>
      <ResearchHero />
      <ResearchLines />
      <ResearchMethod />
      <ResearchRoots />
      <ResearchExperiments />
      <ResearchMonitoring />
      <ResearchTechnologies />
      <ResearchPublications />
      <ResearchCta />
    </main>
  );
}
