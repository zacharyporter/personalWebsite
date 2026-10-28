import { site } from "@/data/site";

const photoCredits = [
  {
    label: "Thomas Bresson",
    href: "https://commons.wikimedia.org/wiki/File:Vallee-brouillard.jpg",
    license: "CC BY 3.0",
  },
  {
    label: "Dimitrios Tzortzis",
    href: "https://commons.wikimedia.org/wiki/File:Sunset_at_Acheloos_river_delta_01.jpg",
    license: "CC BY-SA 4.0",
  },
];

export function Footer() {
  const links = [
    { label: "Email", href: `mailto:${site.email}`, external: false },
    { label: "LinkedIn", href: site.links.linkedin, external: true },
    { label: "GitHub", href: site.links.github, external: true },
    { label: "Résumé (PDF)", href: site.links.resume, external: false },
  ].filter((link) => link.href);

  return (
    <footer className="footer">
      <div className="container">
        <p className="footer__statement">
          The common thread is building systems other people rely on, and
          making them easy to adopt.
        </p>
        <ul className="footer__links">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="footer__legal">
          <p>
            &copy; {new Date().getFullYear()} {site.name}, {site.location}
          </p>
          <p data-credits>
            Photographs:{" "}
            {photoCredits.map((credit, i) => (
              <span key={credit.href}>
                <a href={credit.href} target="_blank" rel="noopener noreferrer">
                  {credit.label}
                </a>{" "}
                ({credit.license}, Wikimedia Commons)
                {i < photoCredits.length - 1 ? ", " : ""}
              </span>
            ))}
          </p>
        </div>
      </div>
    </footer>
  );
}
