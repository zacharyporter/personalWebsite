import type { Project } from "@/data/projects";

export function ProjectCard({
  project,
  lead = false,
}: {
  project: Project;
  lead?: boolean;
}) {
  const href = project.href ?? project.repo;

  return (
    <li className={`index__row${lead ? " index__row--lead" : ""}`}>
      <div className="index__name">
        <h3>
          {href ? (
            <a
              className="index__link"
              href={href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.name}
            </a>
          ) : (
            project.name
          )}
        </h3>
        <span className="index__where">{project.where}</span>
      </div>
      <div className="index__desc">
        <p>{project.description}</p>
        <ul className="stack" aria-label="Stack">
          {project.stack.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </div>
      <span className="index__year">{project.year}</span>
    </li>
  );
}
