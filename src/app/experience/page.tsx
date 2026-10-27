import type { Metadata } from "next";
import { experience } from "@/data/experience";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Experience",
};

export default function ExperiencePage() {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-10 px-6 py-16">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-semibold tracking-tight">
          Professional{" "}
          <span className="bg-linear-to-r from-blue-600 via-sky-500 to-cyan-400 bg-clip-text text-transparent">
            experience
          </span>
        </h1>
        <p className="max-w-xl text-zinc-600 dark:text-zinc-400">
          From process automation in manufacturing to enterprise content
          management in banking &mdash; a career spent building the systems
          other teams depend on.
        </p>
      </div>

      <ol className="relative flex flex-col gap-10 border-l border-zinc-200 pl-8 dark:border-zinc-800">
        {experience.map((role) => (
          <li
            key={`${role.company}-${role.title}`}
            className="relative flex flex-col gap-3"
          >
            <span
              aria-hidden
              className={`absolute top-1.5 -left-[38px] h-3 w-3 rounded-full ring-4 ring-white dark:ring-black ${
                role.current
                  ? "bg-linear-to-r from-blue-600 via-sky-500 to-cyan-400"
                  : "bg-zinc-300 dark:bg-zinc-700"
              }`}
            />
            <div className="flex flex-col gap-1">
              <div className="flex flex-wrap items-center gap-2">
                <h2 className="text-lg font-semibold">{role.title}</h2>
                {role.current && (
                  <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-2 py-0.5 text-xs font-medium uppercase tracking-wide text-blue-600 dark:text-blue-300">
                    Current
                  </span>
                )}
              </div>
              <p className="text-sm text-zinc-500">
                {role.company} &middot; {role.industry}
                {role.period && <> &middot; {role.period}</>}
              </p>
            </div>
            <p className="text-zinc-600 dark:text-zinc-400">{role.summary}</p>
            <ul className="flex list-disc flex-col gap-1.5 pl-5 text-sm text-zinc-600 marker:text-blue-500 dark:text-zinc-400">
              {role.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 pt-1">
              {role.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-zinc-200 px-2.5 py-0.5 text-xs text-zinc-600 dark:border-zinc-800 dark:text-zinc-400"
                >
                  {tech}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ol>

      <section className="flex flex-col gap-6 border-t border-zinc-200 pt-10 dark:border-zinc-800">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
          Skills
        </h2>
        <div className="grid gap-6 sm:grid-cols-3">
          {site.skillGroups.map((group) => (
            <div key={group.label} className="flex flex-col gap-2">
              <h3 className="font-medium">{group.label}</h3>
              <ul className="flex flex-col gap-1 text-sm text-zinc-600 dark:text-zinc-400">
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
