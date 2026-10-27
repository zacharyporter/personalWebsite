import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "About",
};

const socialLinks = [
  { label: "GitHub", href: site.links.github, icon: GithubIcon },
  { label: "LinkedIn", href: site.links.linkedin, icon: LinkedinIcon },
].filter((link) => link.href);

export default function AboutPage() {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-8 px-6 py-16">
      <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
        <Image
          src="/images/headshot.jpg"
          alt={site.name}
          width={128}
          height={128}
          priority
          className="h-28 w-28 shrink-0 rounded-full object-cover ring-2 ring-zinc-200 dark:ring-zinc-800"
        />
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-semibold tracking-tight">
            About{" "}
            <span className="bg-linear-to-r from-blue-600 via-sky-500 to-cyan-400 bg-clip-text text-transparent">
              {site.name}
            </span>
          </h1>
          <div className="flex gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-700 transition-all hover:-translate-y-0.5 hover:border-blue-400 hover:text-blue-600 dark:border-zinc-800 dark:text-zinc-300 dark:hover:border-blue-500 dark:hover:text-blue-300"
              >
                <link.icon className="h-4 w-4" />
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 text-zinc-600 dark:text-zinc-400">
        <p>
          I&apos;m a Senior Software Engineer at PNC, where I work on the
          bank&apos;s Content Management System (CMS) &mdash; the shared
          platform engineering teams across PNC use to store, retain, and view
          documents. Much of my work is enablement: helping other teams
          integrate with the platform so the documents a regulated business
          depends on are stored correctly, retained according to policy, and
          available to the people who need them.
        </p>
        <p>
          Before PNC, I spent my early career at Parker Hannifin. I started as
          an Automation Engineer, spending two years designing robotic process
          automations and software solutions that streamlined operations
          across multiple divisions &mdash; including a CRM User Form
          Automation that replaced a manual, multi-team approval process, and a
          centralized Document Management System for standard work
          documentation.
        </p>
        <p>
          From there I moved into Salesforce development, focusing on the
          connective tissue between Salesforce and the rest of the business:
          an integration with LinkedIn Sales Navigator that routes thousands
          of prospective customers to Parker&apos;s sales teams, and a
          pipeline that sends conversational data from Salesforce to Qualtrics
          for sentiment analysis.
        </p>
        <p>
          The common thread is building systems other people rely on &mdash;
          and making them easy to adopt.{" "}
          <Link
            href="/experience"
            className="font-medium text-blue-600 hover:underline dark:text-blue-400"
          >
            See my full experience &rarr;
          </Link>
        </p>
      </div>

      <section className="flex flex-col gap-5 pt-6">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
          Skills
        </h2>
        {site.skillGroups.map((group) => (
          <div key={group.label} className="flex flex-col gap-2">
            <h3 className="text-sm font-medium">{group.label}</h3>
            <ul className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-zinc-200 px-3 py-1 text-sm text-zinc-700 transition-all hover:-translate-y-0.5 hover:border-blue-400 hover:text-blue-600 dark:border-zinc-800 dark:text-zinc-300 dark:hover:border-blue-500 dark:hover:text-blue-300"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </div>
  );
}
