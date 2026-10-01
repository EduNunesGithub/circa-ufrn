import { Entrance } from "@/components/entrance";
import { HeaderCarousel } from "@/components/header-carousel";
import { ProjectCard } from "@/components/project-card";
import { SectionHeader } from "@/components/section-header";
import { projects, projectsContent } from "@/lib/home/projects";

export function HomeProjects() {
  const { description, overline, title } = projectsContent;

  return (
    <section
      aria-labelledby="home-projects-title"
      className="bg-inverse overflow-hidden"
    >
      <Entrance
        className="max-w-page px-gutter py-section mx-auto"
        entrance="rise"
      >
        <HeaderCarousel
          header={
            <SectionHeader
              description={description}
              descriptionOnMobile={false}
              overline={overline}
              title={title}
              titleId="home-projects-title"
              tone="inverse"
            />
          }
          id="home-projects-slides"
          label="Projetos em andamento"
          slideClassName="w-68 desktop:w-78"
          tone="inverse"
          total={projects.length}
        >
          {projects.map((project) => (
            <ProjectCard {...project} key={project.title} tone="inverse" />
          ))}
        </HeaderCarousel>
      </Entrance>
    </section>
  );
}
