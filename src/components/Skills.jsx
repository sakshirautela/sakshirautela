import "../styles/Skills.css";
const skillGroups = [
  {
    label: "Languages",
    icon: "{ }",
    skills: ["Java", "Python", "JavaScript", "SQL"],
  },
  {
    label: "Backend",
    icon: "⚙",
    skills: ["Spring Boot", "REST APIs", "GraphQL", "Microservices", "JWT/OAuth2"],
  },
  {
    label: "Databases",
    icon: "◈",
    skills: ["PostgreSQL","MySQL", "Vector Databases"],
  },
  {
    label: "DevOps & Tools",
    icon: "⊞",
    skills: ["Docker", "Git", "CI/CD", "Maven", "Postman"],
  },
  {
    label: "Data & AI",
    icon: "✦",
    skills: ["LangChain", "PyTorch", "Python ML Stack" ,"Data Analysis","RAG"],
  },
  {
    label: "Frontend",
    icon: "◻",
    skills: ["React", "JavaScript", "HTML/CSS"],
  },
];

export default function Skills() {
  return (
    <section id="skills" style={{ background: "var(--bg2)" }}>
      <div className="container">
        <p className="section-label">Expertise</p>
        <h2 className="section-title">Technical Skills</h2>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div key={group.label} className="skill-card" data-hover>
              <div className="skill-card-header">
                <span className="skill-icon">{group.icon}</span>
                <span className="skill-group-label">{group.label}</span>
              </div>
              <div className="skill-tags">
                {group.skills.map((s) => (
                  <span key={s} className="skill-pill">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
