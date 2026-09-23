import { skillsData } from "../data/portfolioData";
import "../styles/SkillsSection.css";

export default function SkillsSection() {
  return (
    <section id="stack" className="portfolio-section">
      <div className="section-header">
        <div className="section-tag">
          <span className="section-number">05</span>
          <span>Stack</span>
        </div>
        <h2 className="section-title">
          Technologies & <span className="title-serif">Tooling</span>
        </h2>
        <p className="section-description">
          Core technical competencies across AI/ML engineering, scalable backend systems, modern web, and computer science foundations.
        </p>
      </div>

      <div className="skills-categories-grid">
        {skillsData.map((cat) => (
          <div key={cat.category} className="skill-category-card">
            <h3 className="skill-category-title">{cat.category}</h3>
            <div className="skill-pills-wrap">
              {cat.skills.map((skill) => (
                <span key={skill} className="skill-pill">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
