import type { Metadata } from "next";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-6 px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">About</h1>
      <div className="flex flex-col gap-4 text-zinc-600 dark:text-zinc-400">
        <p>{site.bio}</p>
        <p>
          I spent two years as an Automation Engineer at Parker Hannifin,
          designing robotic process automations and scalable software
          solutions that streamlined operations across multiple divisions.
          One of the most impactful projects from that period was a CRM User
          Form Automation that replaced a manual, multi-team approval process
          for provisioning CRM users, cutting turnaround time significantly.
        </p>
        <p>
          Since moving into Salesforce development, I&apos;ve focused on the
          integrations that connect Salesforce to the rest of the business
          &mdash; including a pipeline that captures conversational data from
          Salesforce and sends it to Qualtrics for sentiment analysis, giving
          the business deeper visibility into customer experience.
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
              className="rounded-full border border-zinc-200 px-3 py-1 text-sm text-zinc-700 dark:border-zinc-800 dark:text-zinc-300"
            >
              {skill}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
