import { site } from "@/data/site";
import { GithubIcon, LinkedinIcon, MailIcon } from "@/components/Icons";

export function Footer() {
  const socialLinks = [
    { label: "GitHub", href: site.links.github, icon: GithubIcon },
    { label: "LinkedIn", href: site.links.linkedin, icon: LinkedinIcon },
  ].filter((link) => link.href);

  const iconLinkClassName =
    "rounded-full border border-zinc-200 p-2 text-zinc-500 transition-all hover:-translate-y-0.5 hover:border-blue-400 hover:text-blue-500 dark:border-zinc-800 dark:text-zinc-400 dark:hover:border-blue-500 dark:hover:text-blue-400";

  return (
    <footer className="border-t border-black/10 dark:border-white/10">
      <div className="mx-auto flex max-w-3xl flex-col gap-4 px-6 py-8 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
        <p>
          &copy; {new Date().getFullYear()} {site.name}
        </p>
        <div className="flex gap-3">
          <a
            href={`mailto:${site.email}`}
            aria-label="Email"
            className={iconLinkClassName}
          >
            <MailIcon className="h-4 w-4" />
          </a>
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className={iconLinkClassName}
            >
              <link.icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
