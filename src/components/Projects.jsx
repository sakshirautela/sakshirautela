import { useState } from "react";
import "../styles/Projects.css";

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
    link: "https://github.com/sakshirautela/BookMyRides.git",
  },
  {
    num: "02",
    title: "Flood Rescue System",
    subtitle: "Fullstack web app & NLP Application",
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
    link: "https://github.com/sakshirautela/helpinghands.git",
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
    link: "https://github.com/sakshirautela/LargeLanguageModel.git",
  },
  {
    num: "04",
    title: "Portfolio Website",
    subtitle: "React Developer Portfolio",
    description:
      "Created a modern personal portfolio using React with responsive design and interactive UI.",
    tags: ["React", "CSS", "JavaScript"],
    highlights: [
      "Fully responsive UI",
      "Component-based architecture",
      "Interactive animations",
      "GitHub Pages deployment",
    ],
    accent: "#ec4899",
    link: "https://github.com/sakshirautela/sakshirautela.git",
  },
  {
    num: "05",
    title: "AI Student Performance",
    subtitle: "Machine Learning Analysis",
    description:
      "ML system to predict student performance using feature engineering and model optimization.",
    tags: ["Python", "ML", "Pandas", "scikit-learn"],
    highlights: [
      "Predictive modeling",
      "EDA + feature engineering",
      "Model tuning",
      "Insight generation",
    ],
    accent: "#3b82f6",
    link: "https://github.com/sakshirautela/ai-impact-on-student-performance-trainingdata.git",
  },
  {
    num: "06",
    title: "Digit Recognizer",
    subtitle: "Deep Learning (CV)",
    description:
      "CNN-based handwritten digit classifier trained on image datasets.",
    tags: ["Python", "CNN", "TensorFlow"],
    highlights: [
      "Image classification",
      "High accuracy model",
      "Training pipeline",
      "Evaluation metrics",
    ],
    accent: "#10b981",
    link: "https://github.com/sakshirautela/DigitRecognizer-inPython",
  },
  {
    num: "07",
    title: "Kidney Disease Classifier",
    subtitle: "Healthcare AI",
    description:
      "Deep learning model for predicting chronic kidney disease.",
    tags: ["Python", "Deep Learning", "Healthcare"],
    highlights: [
      "Medical dataset processing",
      "Model tuning",
      "Classification pipeline",
      "AI healthcare use-case",
    ],
    accent: "#f43f5e",
    link: "https://github.com/sakshirautela/kidney-disease-classifier-deepleaning",
  },
  {
    num: "08",
    title: "Carbon Footprint Analyzer",
    subtitle: "Sustainable AI",
    description:
      "System to estimate carbon emissions and promote sustainable computing.",
    tags: ["Python", "Data Analysis"],
    highlights: [
      "Emission estimation",
      "Data insights",
      "Lightweight model",
      "Sustainability focus",
    ],
    accent: "#22c55e",
    link: "http://github.com/sakshirautela/carbon-footprint-analyzer",
  },
  {
    num: "09",
    title: "Heart Disease Detection",
    subtitle: "ML Healthcare System",
    description:
      "ML model for predicting heart disease risk using clinical data.",
    tags: ["Python", "ML", "Healthcare"],
    highlights: [
      "Predictive modeling",
      "Feature selection",
      "Medical data analysis",
      "Early diagnosis support",
    ],
    accent: "#f97316",
    link: "https://github.com/sakshirautela/HeartDiseaseDetection",
  },
];

export default function Projects() {
  const [visibleCount, setVisibleCount] = useState(3);

  const handleToggle = () => {
    if (visibleCount === projects.length) {
      setVisibleCount(3);
      window.scrollTo({
        top: document.getElementById("projects").offsetTop,
        behavior: "smooth",
      });
    } else {
      setVisibleCount(projects.length);
    }
  };

  return (
    <section id="projects">
      <div className="container">
        <p className="section-label">Work</p>
        <h2 className="section-title">Key Projects</h2>

        <div className="projects-list">
          {projects.slice(0, visibleCount).map((p) => (
            <div key={p.num} className="project-card">
              <div className="project-num" style={{ color: p.accent }}>
                {p.num}
              </div>

              <div className="project-body">
                <div className="project-header">
                  <div>
                    <h3 className="project-title">{p.title}</h3>
                    <p className="project-subtitle">{p.subtitle}</p>
                  </div>

                  <a href={p.link} target="_blank" rel="noreferrer" className="project-github">
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

        <div className="show-more-container">
          <button className="show-more-btn" onClick={handleToggle}>
            <span>
              {visibleCount === projects.length ? "Show Less" : "Show More"}
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}