import type { Metadata } from "next";
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
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-semibold tracking-tight">
          About{" "}
          <span className="bg-linear-to-r from-violet-500 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent">
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
              className="flex items-center gap-2 rounded-full border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-700 transition-all hover:-translate-y-0.5 hover:border-fuchsia-400 hover:text-fuchsia-600 dark:border-zinc-800 dark:text-zinc-300 dark:hover:border-fuchsia-500 dark:hover:text-fuchsia-300"
            >
              <link.icon className="h-4 w-4" />
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4 text-zinc-600 dark:text-zinc-400">
        <p>
          I&apos;m a software engineer at Parker Hannifin, where I build the
          integrations and automations that connect Salesforce to the rest of
          the business. My work sits at the intersection of enterprise
          systems &mdash; Salesforce, RPA platforms, and the APIs that tie
          them together &mdash; turning processes that used to require
          multiple teams and days of back-and-forth into software that just
          runs.
        </p>
        <p>
          I started at Parker as an Automation Engineer, spending two years
          designing robotic process automations and scalable software
          solutions that streamlined operations across multiple divisions.
          The CRM User Form Automation is the project I&apos;m proudest of
          from that period &mdash; it replaced a manual, multi-team approval
          process for provisioning CRM users, cutting turnaround time
          significantly.
        </p>
        <p>
          Since moving into Salesforce development, I&apos;ve focused on the
          connective tissue between Salesforce and the rest of the business:
          an integration with LinkedIn Sales Navigator that routes thousands
          of prospective customers to Parker&apos;s sales teams, and a
          pipeline that captures conversational data from Salesforce and
          sends it to Qualtrics for sentiment analysis &mdash; giving the
          business deeper visibility into the customer experience.
        </p>
      </div>

      <section className="flex flex-col gap-3 pt-6">
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
    </div>
  );
}
