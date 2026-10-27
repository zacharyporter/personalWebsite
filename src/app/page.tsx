import Link from "next/link";
import { site } from "@/data/site";

export default function Home() {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col justify-center px-6 py-16">
      <section className="flex flex-col gap-4">
        <span className="w-fit animate-fade-in-up rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-medium uppercase tracking-wide text-blue-600 dark:text-blue-300">
          {site.title}
        </span>
        <h1 className="animate-fade-in-up text-4xl font-semibold tracking-tight [animation-delay:100ms] sm:text-5xl">
          Hi, I&apos;m{" "}
          <span className="bg-linear-to-r from-blue-600 via-sky-500 to-cyan-400 bg-clip-text text-transparent">
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
        <div className="flex animate-fade-in-up flex-wrap gap-3 pt-2 text-sm font-medium [animation-delay:400ms]">
          <Link
            href="/experience"
            className="inline-block rounded-full bg-linear-to-r from-blue-600 via-sky-500 to-cyan-400 px-5 py-2.5 text-white shadow-lg shadow-blue-500/20 transition-all hover:-translate-y-0.5 hover:shadow-blue-500/40"
          >
            View experience
          </Link>
          <Link
            href="/projects"
            className="inline-block rounded-full border border-zinc-200 px-5 py-2.5 text-zinc-700 transition-all hover:-translate-y-0.5 hover:border-blue-400 hover:text-blue-600 dark:border-zinc-800 dark:text-zinc-300 dark:hover:border-blue-500 dark:hover:text-blue-300"
          >
            View projects
          </Link>
        </div>
      </section>
    </div>
  );
}
