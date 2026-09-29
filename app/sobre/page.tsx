import type { Metadata } from "next";

import { AboutApproach } from "@/components/about-approach";
import { AboutContext } from "@/components/about-context";
import { AboutContinue } from "@/components/about-continue";
import { AboutHero } from "@/components/about-hero";
import { AboutHistory } from "@/components/about-history";
import { AboutHorizon } from "@/components/about-horizon";
import { AboutInstitutions } from "@/components/about-institutions";
import { AboutObjectives } from "@/components/about-objectives";
import { AboutPrinciples } from "@/components/about-principles";

export const metadata: Metadata = {
  description:
    "Missão, objetivos, história e vínculos institucionais do Centro Imburana de Restauração da Caatinga.",
  title: "Sobre o CIRCA",
};

export default function About() {
  return (
    <main>
      <AboutHero />
      <AboutPrinciples />
      <AboutObjectives />
      <AboutHistory />
      <AboutContext />
      <AboutApproach />
      <AboutInstitutions />
      <AboutHorizon />
      <AboutContinue />
    </main>
  );
}
