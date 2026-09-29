import type { Metadata } from "next";

import { CaatingaBiodiversity } from "@/components/caatinga-biodiversity";
import { CaatingaClimate } from "@/components/caatinga-climate";
import { CaatingaHero } from "@/components/caatinga-hero";
import { CaatingaImportance } from "@/components/caatinga-importance";
import { CaatingaNumbers } from "@/components/caatinga-numbers";
import { CaatingaRestoration } from "@/components/caatinga-restoration";
import { CaatingaTerritory } from "@/components/caatinga-territory";
import { CaatingaThreats } from "@/components/caatinga-threats";

export const metadata: Metadata = {
  description:
    "Território, clima, biodiversidade e ameaças da Caatinga, o único bioma exclusivamente brasileiro.",
  title: "A Caatinga",
};

export default function Caatinga() {
  return (
    <main>
      <CaatingaHero />
      <CaatingaNumbers />
      <CaatingaTerritory />
      <CaatingaClimate />
      <CaatingaBiodiversity />
      <CaatingaImportance />
      <CaatingaThreats />
      <CaatingaRestoration />
    </main>
  );
}
