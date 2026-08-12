import type { Metadata } from "next";
import { site } from "@/data/site";
import { GithubIcon, LinkedinIcon, MailIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Contact",
};

const links = [
  {
    label: "Email",
    href: `mailto:${site.email}`,
    value: site.email,
    icon: MailIcon,
  },
  {
    label: "GitHub",
    href: site.links.github,
    value: site.links.github,
    icon: GithubIcon,
  },
  {
    label: "LinkedIn",
    href: site.links.linkedin,
    value: site.links.linkedin,
    icon: LinkedinIcon,
  },
].filter((link) => link.value);

export default function ContactPage() {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-8 px-6 py-16">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-semibold tracking-tight">
          Get in{" "}
          <span className="bg-linear-to-r from-blue-600 via-sky-500 to-cyan-400 bg-clip-text text-transparent">
            touch
          </span>
        </h1>
        <p className="max-w-xl text-zinc-600 dark:text-zinc-400">
          The best way to reach me is by email. I&apos;m also on GitHub and
          LinkedIn if you&apos;d like to see more of my work or connect
          there.
        </p>
      </div>
      <div className="flex flex-col gap-3">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.label === "Email" ? undefined : "_blank"}
            rel={link.label === "Email" ? undefined : "noopener noreferrer"}
            className="group flex items-center gap-4 rounded-lg border border-zinc-200 p-4 transition-all hover:-translate-y-0.5 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/10 dark:border-zinc-800 dark:hover:border-blue-500 dark:hover:shadow-blue-500/10"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-linear-to-r from-blue-600 via-sky-500 to-cyan-400 text-white">
              <link.icon className="h-4 w-4" />
            </span>
            <span className="flex flex-col">
              <span className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
                {link.label}
              </span>
              <span className="text-zinc-900 group-hover:text-blue-600 dark:text-zinc-100 dark:group-hover:text-blue-400">
                {link.value}
              </span>
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
