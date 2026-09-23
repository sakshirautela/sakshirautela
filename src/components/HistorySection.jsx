import { historyNarrative } from "../data/portfolioData";
import "../styles/HistorySection.css";

export default function HistorySection() {
  return (
    <section id="history" className="portfolio-section">
      <div className="section-header">
        <div className="section-tag">
          <span className="section-number">01</span>
          <span>History</span>
        </div>
        <h2 className="section-title">
          Engineering & <span className="title-serif">Origins</span>
        </h2>
      </div>

      <div className="history-narrative-box">
        {historyNarrative.paragraphs.map((para, index) => (
          <p key={index} className="history-para">
            {para}
          </p>
        ))}
      </div>

      <div className="history-milestones-grid">
        {historyNarrative.milestones.map((m) => (
          <div key={m.num} className="milestone-card">
            <div className="milestone-header">
              <span className="milestone-num">{m.num}</span>
              <h3 className="milestone-title">{m.title}</h3>
            </div>
            <p className="milestone-desc">{m.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
