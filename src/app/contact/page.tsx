import type { Metadata } from "next";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
};

const links = [
  { label: "Email", href: `mailto:${site.email}`, value: site.email },
  { label: "GitHub", href: site.links.github, value: site.links.github },
  { label: "LinkedIn", href: site.links.linkedin, value: site.links.linkedin },
].filter((link) => link.value);

export default function ContactPage() {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-8 px-6 py-16">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-semibold tracking-tight">
          Get in touch
        </h1>
        <p className="max-w-xl text-zinc-600 dark:text-zinc-400">
          The best way to reach me is by email. I&apos;m also on GitHub and
          LinkedIn if you&apos;d like to see more of my work or connect
          there.
        </p>
      </div>
      <dl className="flex flex-col gap-4">
        {links.map((link) => (
          <div key={link.label} className="flex flex-col gap-1">
            <dt className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
              {link.label}
            </dt>
            <dd>
              <a
                href={link.href}
                target={link.label === "Email" ? undefined : "_blank"}
                rel={link.label === "Email" ? undefined : "noopener noreferrer"}
                className="text-zinc-900 underline underline-offset-4 hover:text-zinc-600 dark:text-zinc-100 dark:hover:text-zinc-400"
              >
                {link.value}
              </a>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
