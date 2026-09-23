import { useState, useMemo } from "react";
import { featuredProjects, allGithubRepositories, personalInfo } from "../data/portfolioData";
import "../styles/ProjectsSection.css";

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [showAllRepos, setShowAllRepos] = useState(false);

  const categories = ["All", "AI & ML", "Full Stack", "NLP", "System Design", "Python Tools"];

  const filteredRepos = useMemo(() => {
    return allGithubRepositories.filter((repo) => {
      const matchesCategory =
        selectedCategory === "All" ||
        repo.category === selectedCategory ||
        (selectedCategory === "AI & ML" && (repo.category === "AI & ML" || repo.category === "Data Science")) ||
        (selectedCategory === "NLP" && repo.category === "NLP");

      const matchesSearch =
        repo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        repo.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        repo.topics.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const displayedRepos = showAllRepos ? filteredRepos : filteredRepos.slice(0, 8);

  return (
    <section id="projects" className="portfolio-section">
      <div className="section-header">
        <div className="section-tag">
          <span className="section-number">03</span>
          <span>Projects</span>
        </div>
        <h2 className="section-title">
          Featured Works & <span className="title-serif">GitHub Repositories</span>
        </h2>
        <p className="section-description">
          End-to-end intelligent systems, deep learning models, and full-stack software built from scratch.
        </p>
      </div>

      {/* Featured Projects Grid */}
      <div className="featured-projects-container">
        <div className="subsection-label">Featured Products</div>
        <div className="featured-grid">
          {featuredProjects.map((project) => (
            <div key={project.title} className="featured-card">
              <div className="featured-top">
                <div className="featured-status-row">
                  <span className="featured-year">{project.year}</span>
                  <span className="dot">·</span>
                  <span className="featured-status">{project.status}</span>
                </div>
                <span className="tag tag-accent">{project.category}</span>
              </div>

              <div className="featured-body">
                <h3 className="featured-title">{project.title}</h3>
                <p className="featured-tagline">{project.tagline}</p>
                <p className="featured-desc">{project.description}</p>

                {project.highlights && (
                  <ul className="featured-highlights">
                    {project.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="featured-tech-row">
                {project.tech.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>

              <div className="featured-actions">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-github"
                >
                  <span>GitHub Repository</span>
                  <span className="arrow">↗</span>
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-live"
                  >
                    <span>Live Demo</span>
                    <span className="arrow">→</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* All GitHub Repositories Explorer */}
      <div className="github-explorer-container">
        <div className="explorer-header-row">
          <div>
            <div className="subsection-label">GitHub Explorer</div>
            <h3 className="explorer-title">All Open Source Repositories ({allGithubRepositories.length})</h3>
          </div>

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="github-profile-link"
          >
            <span>@sakshirautela on GitHub</span>
            <span className="arrow">↗</span>
          </a>
        </div>

        {/* Filter & Search Bar */}
        <div className="explorer-controls">
          <div className="category-pills">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`filter-pill ${selectedCategory === cat ? "active" : ""}`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="search-box">
            <input
              type="text"
              placeholder="Search repositories by topic or tech..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>
        </div>

        {/* Repository Cards Grid */}
        <div className="repos-grid">
          {displayedRepos.map((repo) => (
            <a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="repo-card"
            >
              <div className="repo-card-top">
                <div className="repo-title-wrapper">
                  <span className="repo-icon">⌥</span>
                  <h4 className="repo-name">{repo.name}</h4>
                </div>
                <span className="link-arrow">↗</span>
              </div>

              <p className="repo-desc">{repo.description}</p>

              <div className="repo-meta-row">
                <span className="repo-lang-badge">{repo.language}</span>
                <div className="repo-topics">
                  {repo.topics.slice(0, 3).map((topic) => (
                    <span key={topic} className="topic-badge">
                      #{topic}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Show More / Show Less Button */}
        {filteredRepos.length > 8 && (
          <div className="repos-show-more">
            <button
              onClick={() => setShowAllRepos(!showAllRepos)}
              className="pill-link"
            >
              <span>{showAllRepos ? "Show Less" : `View All ${filteredRepos.length} Repositories`}</span>
              <span className="arrow">{showAllRepos ? "↑" : "↓"}</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
