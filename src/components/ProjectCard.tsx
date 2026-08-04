import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  const href = project.href ?? project.repo;

  const content = (
    <>
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="font-medium group-hover:underline">{project.name}</h3>
        {project.context && (
          <span className="shrink-0 text-xs text-zinc-500">
            {project.context}
          </span>
        )}
      </div>
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 pt-1">
        {project.stack.map((tech) => (
          <span key={tech} className="text-xs text-zinc-500 dark:text-zinc-500">
            {tech}
          </span>
        ))}
      </div>
    </>
  );

  const className =
    "group flex flex-col gap-2 rounded-lg border border-zinc-200 p-5 transition-all hover:-translate-y-1 hover:border-fuchsia-400 hover:shadow-lg hover:shadow-fuchsia-500/10 dark:border-zinc-800 dark:hover:border-fuchsia-500 dark:hover:shadow-fuchsia-500/10";

  if (!href) {
    return <div className={className}>{content}</div>;
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {content}
    </a>
  );
}
