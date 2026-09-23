import { educationData, certificationsData } from "../data/portfolioData";
import "../styles/EducationSection.css";

export default function EducationSection() {
  return (
    <section id="education" className="portfolio-section">
      <div className="section-header">
        <div className="section-tag">
          <span className="section-number">06</span>
          <span>Education & Certs</span>
        </div>
        <h2 className="section-title">
          Academic Foundations & <span className="title-serif">Credentials</span>
        </h2>
      </div>

      {/* Degrees Grid */}
      <div className="education-grid">
        {educationData.map((edu) => (
          <div key={edu.degree} className="edu-card">
            <div className="edu-top-row">
              <div>
                <h3 className="edu-degree">{edu.degree}</h3>
                <span className="edu-spec">{edu.specialization}</span>
              </div>
              <span className="edu-period">{edu.period}</span>
            </div>

            <div className="edu-institution-row">
              <span className="edu-institution">{edu.institution}</span>
              <span className="tag tag-accent">{edu.status}</span>
            </div>

            <ul className="edu-highlights">
              {edu.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Certifications Row */}
      <div className="certs-section">
        <div className="subsection-label">Professional Certifications</div>
        <div className="certs-grid">
          {certificationsData.map((cert) => (
            <div key={cert.title} className="cert-card">
              <div className="cert-header">
                <h4 className="cert-title">{cert.title}</h4>
                <span className="tag tag-blue">{cert.badge}</span>
              </div>
              <div className="cert-meta">
                <span className="cert-issuer">{cert.issuer}</span>
                <span className="dot">·</span>
                <span className="cert-date">{cert.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
