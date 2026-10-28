import type { Metadata } from "next";
import { experience, type Role } from "@/data/experience";
import { site } from "@/data/site";
import { CheckIcon, DownloadIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Experience",
};

const companies = Array.from(new Set(experience.map((role) => role.company)));

function RoleRow({ role }: { role: Role }) {
  return (
    <li className="role">
      <div className="role__when">
        <b>{role.period}</b>
        {role.location && <span>{role.location}</span>}
        {role.current && (
          <span className="role__status">
            <CheckIcon />
            Current role
          </span>
        )}
      </div>
      <div className="role__body">
        <h3>{role.title}</h3>
        {role.division && <p className="index__where">{role.division}</p>}
        <p className="role__summary">{role.summary}</p>
        <ul className="role__list">
          {role.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
        <ul className="stack" aria-label="Stack">
          {role.stack.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </div>
    </li>
  );
}

export default function ExperiencePage() {
  return (
    <>
      <section className="page-head" aria-labelledby="experience-title">
        <div className="container head">
          <h1 id="experience-title">From the plant floor to the bank.</h1>
          <p className="lead">
            Automation in manufacturing, then content management in banking.
          </p>
          <div className="page-head__actions">
            <a className="btn" href={site.links.resume} download>
              <DownloadIcon />
              Download résumé
            </a>
          </div>
        </div>
      </section>

      <div className="container">
        {companies.map((company) => {
          const roles = experience.filter((role) => role.company === company);
          return (
            <section key={company} className="company" aria-labelledby={`co-${company}`}>
              <div className="company__head">
                <h2 id={`co-${company}`}>{company}</h2>
                <p>{roles[0].industry}</p>
              </div>
              <ol className="roles">
                {roles.map((role) => (
                  <RoleRow key={`${role.title}-${role.period}`} role={role} />
                ))}
              </ol>
            </section>
          );
        })}

        <section className="company" aria-labelledby="education-title">
          <div className="company__head">
            <h2 id="education-title">Education</h2>
          </div>
          <div className="edu">
            <div className="role__when">
              <b>May {site.education.year}</b>
              <span>{site.education.place}</span>
            </div>
            <div className="role__body">
              <h3>{site.education.school}</h3>
              <p className="role__summary">{site.education.degree}</p>
              <ul className="role__list">
                <li>{site.education.honors}</li>
                <li>{site.education.athletics}</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="company" aria-labelledby="skills-title">
          <div className="company__head">
            <h2 id="skills-title">Skills</h2>
          </div>
          <ul className="index">
            {site.skillGroups.map((group) => (
              <li key={group.label} className="index__row">
                <div className="index__name">
                  <h3>{group.label}</h3>
                </div>
                <ul className="rows__tags index__skills">
                  {group.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}
