import "./Projects.css";

const projects = [
  {
    num: "01",
    title: "MakeMyRides",
    subtitle: "Full-Stack Backend Platform",
    description:
      "Architected a scalable backend using Java Spring Boot with RESTful APIs for vehicle registration, ride scheduling, and user management. Secured with JWT/OAuth2, containerized with Docker, and extended with an MCP + LLM layer for AI-powered ride matching.",
    tags: ["Java", "Spring Boot", "PostgreSQL", "Docker", "JWT/OAuth2", "LLM"],
    highlights: [
      "Production-grade microservices architecture",
      "Spring Security + JWT/OAuth2 authentication",
      "AI-powered ride matching via LLM integration",
      "JPA/Hibernate ORM with query optimization",
    ],
    accent: "#7c6af5",
  },
  {
    num: "02",
    title: "Flood Rescue System",
    subtitle: "Backend API & NLP Application",
    description:
      "Designed REST API endpoints connecting an NLP classification backend to a React frontend for real-time tweet stream analysis during flood events. Built a Python scikit-learn pipeline achieving 88% accuracy on live data.",
    tags: ["Python", "REST APIs", "React", "scikit-learn", "NLP", "ML"],
    highlights: [
      "88% classification accuracy on live data",
      "Real-time data ingestion pipeline",
      "Full NLP preprocessing & feature engineering",
      "End-to-end: ingestion → prediction → API response",
    ],
    accent: "#38bdf8",
  },
  {
    num: "03",
    title: "GPT-2 from Scratch",
    subtitle: "Large Language Model",
    description:
      "Implemented the full GPT-2 Transformer architecture in Python/PyTorch from first principles with custom BPE tokenization. Trained over 60 epochs, reducing cross-entropy loss by 65% through pipeline optimization.",
    tags: ["Python", "PyTorch", "Deep Learning", "Transformers", "BPE"],
    highlights: [
      "Full GPT-2 Transformer from first principles",
      "Custom BPE tokenization implementation",
      "65% reduction in cross-entropy loss",
      "60+ epoch training with pipeline optimization",
    ],
    accent: "#c084fc",
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <p className="section-label">Work</p>
        <h2 className="section-title">Key Projects</h2>

        <div className="projects-list">
          {projects.map((p) => (
            <div key={p.num} className="project-card" data-hover>
              <div className="project-num" style={{ color: p.accent }}>{p.num}</div>
              <div className="project-body">
                <div className="project-header">
                  <div>
                    <h3 className="project-title">{p.title}</h3>
                    <p className="project-subtitle">{p.subtitle}</p>
                  </div>
                  <a href="https://github.com" target="_blank" rel="noreferrer" className="project-github">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                    </svg>
                    GitHub
                  </a>
                </div>

                <p className="project-desc">{p.description}</p>

                <ul className="project-highlights">
                  {p.highlights.map((h) => (
                    <li key={h}>
                      <span className="bullet" style={{ color: p.accent }}>▸</span>
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="project-tags">
                  {p.tags.map((t) => (
                    <span key={t} className="proj-tag" style={{ "--tag-color": p.accent }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
