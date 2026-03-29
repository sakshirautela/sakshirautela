import "../styles/Education.css";
const edu = [
  {
    degree: "Master of Computer Applications",
    short: "MCA",
    school: "Amity University, Noida",
    period: "July 2024 – July 2026(expected)",
    specialization: "Artificial Intelligence & Machine Learning",
    current: true,
  },
  {
    degree: "Bachelor of Computer Applications",
    short: "BCA",
    school: "Dev Bhoomi Uttarakhand University",
    period: "Aug 2021 – June 2024",
    specialization: "CGPA: 9.02 / 10 — Distinction",
    current: false,
  },
];

export default function Education() {
  return (
    <section id="education" style={{ background: "var(--bg2)" }}>
      <div className="container">
        <p className="section-label">Background</p>
        <h2 className="section-title">Education</h2>

        <div className="edu-timeline">
          {edu.map((e, i) => (
            <div key={i} className="edu-item">
              <div className="edu-track">
                <div className={`edu-dot ${e.current ? "active" : ""}`} />
                {i < edu.length - 1 && <div className="edu-line" />}
              </div>
              <div className={`edu-card ${e.current ? "current" : ""}`}>
                {e.current && <div className="edu-badge">Currently Enrolled</div>}
                <div className="edu-degree-row">
                  <span className="edu-short">{e.short}</span>
                  <span className="edu-degree">{e.degree}</span>
                </div>
                <p className="edu-school">{e.school}</p>
                <p className="edu-spec">{e.specialization}</p>
                <p className="edu-period">{e.period}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
