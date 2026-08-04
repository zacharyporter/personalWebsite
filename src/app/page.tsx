import Link from "next/link";
import { site } from "@/data/site";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";

export default function Home() {
  const featured = projects.filter((p) => p.featured);

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-20 px-6 py-16">
      <section className="flex flex-col gap-4">
        <span className="w-fit animate-fade-in-up rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-xs font-medium uppercase tracking-wide text-violet-600 dark:text-violet-300">
          {site.title}
        </span>
        <h1 className="animate-fade-in-up text-4xl font-semibold tracking-tight [animation-delay:100ms] sm:text-5xl">
          Hi, I&apos;m{" "}
          <span className="bg-linear-to-r from-violet-500 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent">
            {site.name}
          </span>
          .
        </h1>
        <p className="max-w-xl animate-fade-in-up text-lg text-zinc-600 [animation-delay:200ms] dark:text-zinc-400">
          {site.tagline}
        </p>
        <p className="max-w-xl animate-fade-in-up text-zinc-600 [animation-delay:300ms] dark:text-zinc-400">
          {site.bio}
        </p>
        <div className="flex animate-fade-in-up gap-4 pt-2 text-sm font-medium [animation-delay:400ms]">
          <Link
            href="/projects"
            className="rounded-full bg-linear-to-r from-violet-500 via-fuchsia-500 to-cyan-400 px-5 py-2.5 text-white shadow-lg shadow-fuchsia-500/20 transition-all hover:-translate-y-0.5 hover:shadow-fuchsia-500/40"
          >
            View projects
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-zinc-300 px-5 py-2.5 transition-all hover:-translate-y-0.5 hover:border-fuchsia-400 dark:border-zinc-700 dark:hover:border-fuchsia-500"
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
              className="rounded-full border border-zinc-200 px-3 py-1 text-sm text-zinc-700 transition-all hover:-translate-y-0.5 hover:border-fuchsia-400 hover:text-fuchsia-600 dark:border-zinc-800 dark:text-zinc-300 dark:hover:border-fuchsia-500 dark:hover:text-fuchsia-300"
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
            className="text-sm text-zinc-500 transition-colors hover:text-fuchsia-500"
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
