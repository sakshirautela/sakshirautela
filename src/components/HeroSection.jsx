import {
  personalInfo,
  fastStats,
  tableOfContents
} from "../data/portfolioData";
import "../styles/HeroSection.css";

export default function HeroSection() {
  return (
    <section id="hero" className="portfolio-section hero-container">
      {/* Top Meta Line */}
      <div className="hero-meta-row">
        <div className="hero-role-tags">
          <span>AI/ML Engineer</span>
          <span className="dot">·</span>
          <span>SDE</span>
          <span className="dot">·</span>
          <span>Open Source</span>
        </div>
        <div className="hero-location-tag">
          <span>India</span>
          <span className="dot">·</span>
          <span>IST</span>
          <span className="dot">·</span>
          <span>2026</span>
        </div>
      </div>

      {/* Main Headline */}
      <div className="hero-headline-block">
        <h1 className="hero-title-main">
          Sakshi <span className="title-serif">Rautela</span>
        </h1>
        <p className="hero-subtitle">
          Associate Software Engineering Intern at <strong className="text-highlight">AppFoster</strong> and ML Engineer building production-ready <strong className="text-highlight">AI/ML systems</strong>, <strong className="text-highlight">Spring Boot microservices</strong>, and high-performance algorithms.
        </p>
      </div>

      {/* About Summary Bullets */}
      <div className="hero-summary-box">
        <div className="summary-header">About me</div>
        <ul className="summary-list">
          <li>
            Associate Software Engineer Intern at <strong>AppFoster</strong>, contributing to website monitoring platforms, CMS health metrics, and real-time alerting workflows.
          </li>
          <li>
            Solved <strong>1,000+ coding problems</strong> across LeetCode & HackerRank with strong foundations in DSA, System Design, and Clean Architecture.
          </li>
          <li>
            Created <strong>22+ open source repositories</strong> spanning PyTorch LLMs (GPT-2), Clinical DocAI, MCP agent tooling, and Spring Boot systems.
          </li>
        </ul>
      </div>

      {/* Scroll indicator & Fast stats grid */}
      <div className="hero-stats-wrapper">
        <div className="scroll-indicator">
          <span>↓ Scroll for the rest</span>
        </div>
        
        <div className="fast-stats-grid">
          {fastStats.map((stat) => (
            <div key={stat.label} className="fast-stat-card">
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Live Status Banner */}
      <div className="hero-status-banner">
        <div className="status-badge-live">
          <span className="status-dot" />
          <span className="status-badge-text">Open to work</span>
        </div>
        <div className="status-desc">
          <span>SDE & AI/ML Engineer · Java, Python, React & PyTorch</span>
          <span className="status-loc">New Delhi / Remote · IST</span>
        </div>
      </div>

      {/* Contents Directory (§ Contents) & Connect */}
      <div className="hero-directory-grid">
        <div className="directory-column">
          <div className="directory-header">
            <span className="section-symbol">§</span>
            <span>Contents</span>
          </div>
          <div className="toc-list">
            {tableOfContents.map((item) => (
              <a key={item.id} href={`#${item.id}`} className="toc-item">
                <span className="toc-number">{item.number}</span>
                <span className="toc-label">{item.label}</span>
                <span className="toc-arrow">→</span>
              </a>
            ))}
          </div>
        </div>

        <div className="connect-column">
          <div className="directory-header">
            <span className="section-symbol">↗</span>
            <span>Connect with me</span>
          </div>
          <div className="social-links-list">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link-row"
            >
              <span>GitHub</span>
              <span className="link-icon">↗</span>
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link-row"
            >
              <span>LinkedIn</span>
              <span className="link-icon">↗</span>
            </a>
            <a
              href={personalInfo.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link-row"
            >
              <span>LeetCode (1000+ Solved)</span>
              <span className="link-icon">↗</span>
            </a>
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link-row"
            >
              <span>Resume (PDF)</span>
              <span className="link-icon">↗</span>
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="social-link-row"
            >
              <span>Email ({personalInfo.email})</span>
              <span className="link-icon">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
