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
    <>
      <section className="page-head" aria-labelledby="about-title">
        <div className="container head">
          <h1 id="about-title">About Zachary Porter.</h1>
          <p className="lead">
            A software engineer in {site.location}, working where platforms
            meet the teams that use them.
          </p>
        </div>
      </section>

      <section aria-label="Biography">
        <div className="container grid">
          <div className="about__prose">
            <p>
              I&apos;m a Senior Software Engineer at PNC, where I&apos;m a
              technical consultant for the bank&apos;s FileNet Content
              Management System, the shared platform engineering teams across
              PNC use to store, retain, and view documents. Much of my work is
              enablement: guiding other teams as they connect to the platform,
              and writing the guidance and standards that help them ship
              efficient, secure software.
            </p>
            <p>
              Before PNC, I spent three years at Parker Hannifin. I joined
              through the IT Leadership Development program, rotating through
              Parker HQ in Cleveland, the Noise Vibration and Harshness
              Division in Erie, and the Hydraulic Aerospace Filtration Division
              in Toledo. Along the way I built a Python RPA solution on
              ServiceNow APIs that saves the CRM team $20,000 a year, archived
              a legacy CRM at enterprise scale, and automated ERP steps that
              cut 45 seconds from every part on the line.
            </p>
            <p>
              From there I moved into Salesforce engineering, focusing on the
              connective tissue between Salesforce and the rest of the
              business: an integration with LinkedIn Sales Navigator that
              routes thousands of prospective customers to Parker&apos;s sales
              teams, and an Azure pipeline that sends conversational data from
              Salesforce to Qualtrics for sentiment analysis.
            </p>
            <p>
              The common thread is building systems other people rely on, and
              making them easy to adopt.{" "}
              <Link href="/experience" className="link">
                See my full experience
              </Link>
              .
            </p>
          </div>

          <aside className="about__side" aria-label="Portrait and links">
            <figure
              className="portrait"
              data-slot="about-portrait"
              data-alt="Zachary Porter, head and shoulders"
            >
              <Image
                src="/images/headshot.jpg"
                width={1206}
                height={1526}
                sizes="(min-width: 60rem) 30vw, 100vw"
                alt="Zachary Porter"
                loading="eager"
              />
            </figure>
            <div className="about__links">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--ghost btn--small"
                >
                  <link.icon />
                  {link.label}
                </a>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="section" aria-labelledby="skills-title">
        <div className="container grid">
          <div className="head rows__head">
            <h2 id="skills-title">Tools I reach for.</h2>
          </div>
          <ul className="rows">
            {site.skillGroups.map((group) => (
              <li key={group.label} className="rows__item">
                <h3>{group.label}</h3>
                <ul className="rows__tags">
                  {group.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
