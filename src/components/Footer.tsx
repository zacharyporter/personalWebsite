import { site } from "@/data/site";

export function Footer() {
  const socialLinks = [
    { label: "GitHub", href: site.links.github },
    { label: "LinkedIn", href: site.links.linkedin },
  ].filter((link) => link.href);

  return (
    <footer className="border-t border-black/10 dark:border-white/10">
      <div className="mx-auto flex max-w-3xl flex-col gap-2 px-6 py-8 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
        <p>
          &copy; {new Date().getFullYear()} {site.name}
        </p>
        <div className="flex gap-4">
          <a
            href={`mailto:${site.email}`}
            className="transition-colors hover:text-zinc-950 dark:hover:text-zinc-50"
          >
            Email
          </a>
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-zinc-950 dark:hover:text-zinc-50"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
