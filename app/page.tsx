import { HomeAbout } from "@/components/home-about";
import { HomeCaatinga } from "@/components/home-caatinga";
import { HomeCta } from "@/components/home-cta";
import { HomeHero } from "@/components/home-hero";
import { HomePartners } from "@/components/home-partners";
import { HomePeople } from "@/components/home-people";
import { HomeProcess } from "@/components/home-process";
import { HomeProjects } from "@/components/home-projects";
import { HomePublications } from "@/components/home-publications";
import { HomeResearch } from "@/components/home-research";
import { HomeResults } from "@/components/home-results";

export default function Home() {
  return (
    <main>
      <HomeHero />
      <HomeAbout />
      <HomeCaatinga />
      <HomeProcess />
      <HomeResearch />
      <HomeResults />
      <HomeProjects />
      <HomePeople />
      <HomePublications />
      <HomePartners />
      <HomeCta />
    </main>
  );
}
