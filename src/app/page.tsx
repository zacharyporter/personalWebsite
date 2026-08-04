import Link from "next/link";
import { site } from "@/data/site";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";

export default function Home() {
  const featured = projects.filter((p) => p.featured);

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-20 px-6 py-16">
      <section className="flex flex-col gap-4">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Hi, I&apos;m {site.name}.
        </h1>
        <p className="max-w-xl text-lg text-zinc-600 dark:text-zinc-400">
          {site.tagline}
        </p>
        <p className="max-w-xl text-zinc-600 dark:text-zinc-400">{site.bio}</p>
        <div className="flex gap-4 pt-2 text-sm font-medium">
          <Link
            href="/projects"
            className="rounded-full bg-zinc-900 px-5 py-2.5 text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
          >
            View projects
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-zinc-300 px-5 py-2.5 transition-colors hover:border-zinc-400 dark:border-zinc-700 dark:hover:border-zinc-500"
          >
            Get in touch
          </Link>
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
          Skills
        </h2>
        <ul className="flex flex-wrap gap-2">
          {site.skills.map((skill) => (
            <li
              key={skill}
              className="rounded-full border border-zinc-200 px-3 py-1 text-sm text-zinc-700 dark:border-zinc-800 dark:text-zinc-300"
            >
              {skill}
            </li>
          ))}
        </ul>
      </section>

      <section className="flex flex-col gap-6">
        <div className="flex items-baseline justify-between">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
            Featured projects
          </h2>
          <Link
            href="/projects"
            className="text-sm text-zinc-500 transition-colors hover:text-zinc-950 dark:hover:text-zinc-50"
          >
            View all &rarr;
          </Link>
        </div>
        <div className="flex flex-col gap-6">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
