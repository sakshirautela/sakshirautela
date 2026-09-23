import { leetCodeStats } from "../data/portfolioData";
import "../styles/LeetCodeSection.css";

export default function LeetCodeSection() {
  return (
    <section id="leetcode" className="portfolio-section">
      <div className="section-header">
        <div className="section-tag">
          <span className="section-number">04</span>
          <span>Problem Solving</span>
        </div>
        <h2 className="section-title">
          Algorithmic Depth & <span className="title-serif">LeetCode Mastery</span>
        </h2>
        <p className="section-description">
          Demonstrated mastery in core Data Structures and Algorithms with over 1,000+ solved problems and high computational efficiency.
        </p>
      </div>

      <div className="leetcode-metrics-card">
        <div className="lc-top-header">
          <div className="lc-headline">
            <span className="lc-total">{leetCodeStats.totalSolved}</span>
            <span className="lc-total-label">Total Problems Solved</span>
          </div>
          <a
            href={leetCodeStats.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-leetcode-profile"
          >
            <span>LeetCode Profile</span>
            <span className="arrow">↗</span>
          </a>
        </div>

        {/* Difficulty Distribution Bars */}
        <div className="difficulty-bars-grid">
          <div className="diff-card easy">
            <div className="diff-card-header">
              <span className="diff-name">Easy</span>
              <span className="diff-count">{leetCodeStats.easyCount}</span>
            </div>
            <div className="progress-bar-bg">
              <div className="progress-fill fill-easy" style={{ width: "38%" }} />
            </div>
          </div>

          <div className="diff-card medium">
            <div className="diff-card-header">
              <span className="diff-name">Medium</span>
              <span className="diff-count">{leetCodeStats.mediumCount}</span>
            </div>
            <div className="progress-bar-bg">
              <div className="progress-fill fill-medium" style={{ width: "54%" }} />
            </div>
          </div>

          <div className="diff-card hard">
            <div className="diff-card-header">
              <span className="diff-name">Hard</span>
              <span className="diff-count">{leetCodeStats.hardCount}</span>
            </div>
            <div className="progress-bar-bg">
              <div className="progress-fill fill-hard" style={{ width: "12%" }} />
            </div>
          </div>
        </div>

        {/* Highlight Stats Row */}
        <div className="lc-highlight-row">
          <div className="highlight-pill">
            <span className="dot-streak">🔥</span>
            <span>{leetCodeStats.consistencyStreak}</span>
          </div>
          <div className="highlight-pill">
            <span className="dot-rating">⚡</span>
            <span>{leetCodeStats.contestRating}</span>
          </div>
        </div>
      </div>

      {/* Topics Grid */}
      <div className="lc-topics-section">
        <div className="subsection-label">Key Algorithmic Competencies</div>
        <div className="topics-matrix-grid">
          {leetCodeStats.keyTopics.map((topic) => (
            <div key={topic.name} className="topic-matrix-card">
              <span className="topic-name">{topic.name}</span>
              <span className="topic-count">{topic.count}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
