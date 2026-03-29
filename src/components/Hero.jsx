import "../styles/Hero.css";
export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="grid-bg" />
      <div className="noise" />

      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />

      <div className="container hero-content">
        <div className="hero-badge">
          <span className="badge-dot" />
          <span>Available for full-time SDE roles</span>
        </div>

        <h1 className="hero-title">
          <span className="hero-greeting">Hi, I'm</span>
          <br />
          <span className="hero-name">Sakshi</span>
          <br />
          <span className="hero-name italic">Rautela.</span>
        </h1>

        <p className="hero-sub">
          SDE & Final-year MCA student building{" "}
          <span className="highlight">scalable APIs</span>,{" "}
          <span className="highlight">Spring Boot systems</span>, and{" "}
          <span className="highlight">AI-powered backends</span> — ready to contribute from day one.
        </p>

        <div className="hero-stack">
          {["Java", "Spring Boot", "Python","reactJs", "PostgreSQL", "Docker", "REST APIs","System Design", "Data-Structures", "Machine Learning"].map((t) => (
            <span key={t} className="stack-tag">{t}</span>
          ))}
        </div>

        <div className="hero-actions">
          <a href="#projects" className="btn-primary">
            View Projects
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a href="#contact" className="btn-ghost">Get in Touch</a>
        </div>

        <div className="hero-stats">
          <div className="stat">
            <span className="stat-num">1000+</span>
            <span className="stat-label">LeetCode Problems</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-num">3</span>
            <span className="stat-label">Production Projects</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-num">9.02</span>
            <span className="stat-label">CGPA (BCA)</span>
          </div>
        </div>
      </div>

      <div className="hero-scroll-hint">
        <span>scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}
