import "./Certifications.css";

const certs = [
  {
    title: "Software Engineer Intern Certification",
    org: "HackerRank",
    detail: "Proctored by CTO — Algorithms, DSA & SE best practices",
    icon: "✓",
    highlight: true,
  },
  {
    title: "Problem Solving — Intermediate Level",
    org: "HackerRank",
    detail: "Certified",
    icon: "✓",
  },
  {
    title: "Machine Learning & Deep Learning Specialization",
    org: "GeeksforGeeks",
    detail: "Full ML/DL track",
    icon: "✦",
  },
  {
    title: "DSA with Java (Alpha)",
    org: "APNA College",
    detail: "Data Structures & Algorithms",
    icon: "▸",
  },
  {
    title: "Java Programming",
    org: "SoloLearn",
    detail: "Certified",
    icon: "▸",
  },
  {
    title: "Technology Job Simulation",
    org: "Deloitte",
    detail: "2025",
    icon: "◈",
  },
];

const achievements = [
  { num: "1000+", label: "LeetCode Problems Solved" },
  { num: "88%", label: "NLP Model Accuracy" },
  { num: "65%", label: "Loss Reduction (GPT-2)" },
  { num: "9.02", label: "CGPA — Distinction" },
];

export default function Certifications() {
  return (
    <section id="certifications">
      <div className="container">
        <p className="section-label">Credentials</p>
        <h2 className="section-title">Certifications & Achievements</h2>

        <div className="cert-layout">
          <div className="cert-grid">
            {certs.map((c, i) => (
              <div key={i} className={`cert-card ${c.highlight ? "highlighted" : ""}`}>
                <span className="cert-icon">{c.icon}</span>
                <div>
                  <p className="cert-title">{c.title}</p>
                  <p className="cert-org">{c.org} — <span className="cert-detail">{c.detail}</span></p>
                </div>
              </div>
            ))}
          </div>

          <div className="achieve-panel">
            <p className="achieve-heading">By the Numbers</p>
            <div className="achieve-list">
              {achievements.map((a) => (
                <div key={a.label} className="achieve-item">
                  <span className="achieve-num">{a.num}</span>
                  <span className="achieve-label">{a.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
