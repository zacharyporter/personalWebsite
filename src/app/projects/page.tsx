import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <>
      <section className="page-head" aria-labelledby="projects-title">
        <div className="container head">
          <h1 id="projects-title">Integrations, automations and archives.</h1>
          <p className="lead">
            Six projects from three years at Parker Hannifin, newest first.
          </p>
        </div>
      </section>

      <section aria-labelledby="parker-title">
        <div className="container">
          <h2 id="parker-title" className="visually-hidden">
            Projects at Parker Hannifin
          </h2>
          <ol className="index">
            {projects.map((project, i) => (
              <ProjectCard key={project.slug} project={project} lead={i === 0} />
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
