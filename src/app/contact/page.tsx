import type { Metadata } from "next";
import Image from "next/image";
import { site } from "@/data/site";
import {
  DownloadIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
} from "@/components/Icons";

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
    label: "LinkedIn",
    href: site.links.linkedin,
    value: "Connect",
    icon: LinkedinIcon,
  },
  {
    label: "GitHub",
    href: site.links.github,
    value: "zacharyporter",
    icon: GithubIcon,
  },
  {
    label: "Résumé",
    href: site.links.resume,
    value: "PDF",
    icon: DownloadIcon,
  },
].filter((link) => link.href);

export default function ContactPage() {
  return (
    <section className="poster" aria-labelledby="contact-title">
      <figure
        className="poster__photo"
        data-slot="contact"
        data-alt="Water or a shoreline at dusk, calm on the left side"
      >
        <Image
          src="/images/photos/sunset-at-acheloos-river-delta-01-1920.jpg"
          width={1920}
          height={1280}
          sizes="100vw"
          alt="An old wooden jetty in still water reflecting a sunset sky"
          loading="eager"
          fetchPriority="high"
        />
      </figure>
      <div className="poster__scrim" aria-hidden="true" />
      <div className="container poster__inner">
        <div className="head">
          <h1 id="contact-title">Get in touch.</h1>
          <p className="lead">
            Email is the fastest way to reach me.
          </p>
        </div>
        <ul className="glass contact__list">
          {links.map((link) => {
            const external = link.href.startsWith("http");
            const isFile = link.href.endsWith(".pdf");
            return (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  download={isFile || undefined}
                >
                  <span>
                    <link.icon />
                    {link.label}
                  </span>
                  <small>{link.value}</small>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
