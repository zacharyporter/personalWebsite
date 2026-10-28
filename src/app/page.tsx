import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";
import { experience } from "@/data/experience";
import {
  CheckIcon,
  DownloadIcon,
  GithubIcon,
  LinkedinIcon,
} from "@/components/Icons";

const work = [
  {
    title: "Platform consulting",
    line: "Guiding PNC's engineering teams onto FileNet, with standards for efficient, secure software.",
  },
  {
    title: "Integrations",
    line: "Salesforce connected to LinkedIn Sales Navigator, Qualtrics and Azure.",
  },
  {
    title: "Automation",
    line: "Python RPA on ServiceNow APIs that saves one team $20,000 a year.",
  },
  {
    title: "Retention",
    line: "A legacy CRM archived at enterprise scale with Azure and Oracle APIs.",
  },
];

function initials(company: string) {
  return company
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2);
}

export default function Home() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <figure
          className="hero__photo"
          data-slot="hero"
          data-alt="A wide landscape at dusk, ideally near Cleveland or Lake Erie, with a calm pale area on the left"
        >
          <Image
            src="/images/photos/vallee-brouillard-1920.jpg"
            width={1920}
            height={1254}
            sizes="100vw"
            alt="A sea of fog filling a valley below dark wooded hills at sunset"
            loading="eager"
            fetchPriority="high"
          />
        </figure>
        <div className="hero__scrim" aria-hidden="true" />
        <div className="container hero__inner">
          <div className="hero__text">
            <h1 id="hero-title">Systems other teams build on.</h1>
            <p className="lead">
              I&apos;m Zachary Porter. I help PNC&apos;s engineers build on FileNet.
            </p>
            <div className="hero__actions">
              <a className="btn" href={`mailto:${site.email}`}>
                Email me
              </a>
            </div>
          </div>

          <div className="glass run">
            <div className="run__head">
              <h2 className="run__title">Career so far</h2>
              <span className="run__meta">{site.location}</span>
            </div>
            <ol className="run__list">
              {experience.map((role, i) => (
                <li
                  key={`${role.company}-${role.title}-${role.years}`}
                  className="run__row"
                  style={{ "--i": i } as React.CSSProperties}
                >
                  <span className="run__initial" aria-hidden="true">
                    {initials(role.company)}
                  </span>
                  <span className="run__role">
                    <b>{role.title.split(", ").pop()}</b>
                    <span>{role.division ?? role.company}</span>
                  </span>
                  {role.current ? (
                    <span className="run__now">
                      <CheckIcon />
                      Now
                    </span>
                  ) : (
                    <span className="run__years">{role.years}</span>
                  )}
                </li>
              ))}
            </ol>
            <div className="run__open">
              <span>The full résumé, as a PDF</span>
              <a href={site.links.resume} download>
                <DownloadIcon />
                Download
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--l" aria-labelledby="case-title">
        <div className="container grid">
          <div className="head case__head">
            <h2 id="case-title">Salesforce conversations, scored by Qualtrics.</h2>
            <p className="lead">
              A pipeline I built at Parker Hannifin so the business could see
              how customers feel.
            </p>
            <p>
              <Link href="/projects" className="link">
                See all six projects
              </Link>
            </p>
          </div>
          <figure className="case__figure" aria-label="Diagram of the Salesforce to Qualtrics pipeline">
            <div className="glass flow">
              <div className="flow__step">
                <span className="flow__n">1</span>
                <h3>Salesforce</h3>
                <p>Conversation data is extracted from Sales Cloud.</p>
              </div>
              <div className="flow__step flow__step--mid">
                <span className="flow__n">2</span>
                <h3>Azure Function App</h3>
                <p>Python cleans and processes the text.</p>
              </div>
              <div className="flow__step">
                <span className="flow__n">3</span>
                <h3>Qualtrics</h3>
                <p>Sentiment analysis on customer experience.</p>
              </div>
              <figcaption className="flow__foot">
                <span>Microsoft Azure, Python, Qualtrics</span>
                <span>Parker HQ, 2025 to 2026</span>
              </figcaption>
            </div>
          </figure>
        </div>
      </section>

      <section className="section" aria-labelledby="work-title">
        <div className="container grid">
          <div className="head rows__head">
            <h2 id="work-title">The work, in four kinds.</h2>
          </div>
          <ul className="rows">
            {work.map((item) => (
              <li key={item.title} className="rows__item">
                <h3>{item.title}</h3>
                <p>{item.line}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="place-title">
        <div className="container grid">
          <figure
            className="portrait"
            data-slot="portrait"
            data-alt="Zachary Porter, head and shoulders"
          >
            <Image
              src="/images/headshot.jpg"
              width={1206}
              height={1526}
              sizes="(min-width: 60rem) 40vw, 100vw"
              alt="Zachary Porter"
            />
          </figure>
          <div className="place">
            <div className="head">
              <h2 id="place-title">Based in Cleveland, Ohio.</h2>
            </div>
            <dl className="facts">
              <div>
                <dt>Studied</dt>
                <dd>
                  {site.education.degree}, {site.education.school},{" "}
                  {site.education.year}. {site.education.honors}.
                </dd>
              </div>
              <div>
                <dt>Rowed</dt>
                <dd>{site.education.athletics}.</dd>
              </div>
              <div>
                <dt>Off the clock</dt>
                <dd>{site.interests.join(", ")}.</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="band" aria-labelledby="contact-title">
        <div className="container grid contact">
          <div className="contact__head">
            <h2 id="contact-title">Write to me.</h2>
            <a className="contact__mail" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </div>
          <ul className="contact__list">
            <li>
              <a href={site.links.linkedin} target="_blank" rel="noopener noreferrer">
                <span>
                  <LinkedinIcon />
                  LinkedIn
                </span>
                <small>Connect</small>
              </a>
            </li>
            <li>
              <a href={site.links.github} target="_blank" rel="noopener noreferrer">
                <span>
                  <GithubIcon />
                  GitHub
                </span>
                <small>Code</small>
              </a>
            </li>
            <li>
              <a href={site.links.resume} download>
                <span>
                  <DownloadIcon />
                  Résumé
                </span>
                <small>PDF</small>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
