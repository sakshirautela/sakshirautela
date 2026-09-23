import { experienceData } from "../data/portfolioData";
import "../styles/ExperienceSection.css";

export default function ExperienceSection() {
  return (
    <section id="experience" className="portfolio-section">
      <div className="section-header">
        <div className="section-tag">
          <span className="section-number">02</span>
          <span>Experience</span>
        </div>
        <h2 className="section-title">
          Industry Experience & <span className="title-serif">Engineering Stops</span>
        </h2>
        <p className="section-description">
          Software engineering internships, monitoring platforms, and full-stack systems shipped in production.
        </p>
      </div>

      <div className="experience-list">
        {experienceData.map((exp, index) => (
          <div key={index} className="experience-card">
            <div className="exp-top-row">
              <div className="exp-role-block">
                <h3 className="exp-role">{exp.role}</h3>
                <span className="exp-company">{exp.company} · <span className="exp-loc">{exp.location}</span></span>
              </div>
              <div className="exp-meta-block">
                <span className="exp-period">{exp.period}</span>
                <span className="tag tag-accent">{exp.tag}</span>
              </div>
            </div>

            {exp.bullets ? (
              <ul className="exp-bullets-list">
                {exp.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            ) : (
              <p className="exp-description">{exp.description}</p>
            )}

            <div className="exp-tech-tags">
              {exp.tech.map((t) => (
                <span key={t} className="tag">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
