import { Entrance } from "@/components/entrance";
import { ProjectsCarousel } from "@/components/home-projects/projects-carousel";
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
        <ProjectsCarousel
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
          total={projects.length}
        >
          {projects.map((project) => (
            <ProjectCard {...project} key={project.title} tone="inverse" />
          ))}
        </ProjectsCarousel>
      </Entrance>
    </section>
  );
}
