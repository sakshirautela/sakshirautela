import { useState } from "react";
import "../styles/Projects.css";

import makemyrides from "./assets/projects/makemyrides.png";
import flood from "./assets/projects/makemyrides.png";
import gpt2 from "./assets/projects/makemyrides.png";
import portfolio from "./assets/projects/makemyrides.png";
import student from "./assets/projects/makemyrides.png";
import digit from "./assets/projects/makemyrides.png";
import kidney from "./assets/projects/makemyrides.png";
import carbon from "./assets/projects/makemyrides.png";
import heart from "./assets/projects/makemyrides.png";

const projects = [
  {
    title: "MakeMyRides",
    image: makemyrides,
    subtitle: "AI Ride Sharing Platform",
    description:
      "Production-ready ride sharing platform with AI ride matching, JWT authentication, Docker deployment and secure REST APIs.",
    tech: ["React", "Spring Boot", "Docker", "JWT"],
    github: "https://github.com/sakshirautela/BookMyRides.git",
    live: "#",
  },

  {
    title: "Flood Rescue System",
    image: flood,
    subtitle: "Machine Learning + NLP",
    description:
      "Real-time flood tweet classification system using NLP and Machine Learning to assist emergency rescue teams.",
    tech: ["Python", "React", "NLP", "Scikit-Learn"],
    github: "https://github.com/sakshirautela/helpinghands.git",
    live: "#",
  },

  {
    title: "GPT-2 From Scratch",
    image: gpt2,
    subtitle: "Large Language Model",
    description:
      "Implemented GPT-2 architecture from scratch using PyTorch with custom tokenizer and transformer blocks.",
    tech: ["Python", "PyTorch", "Transformer", "LLM"],
    github:
      "https://github.com/sakshirautela/LargeLanguageModel.git",
    live: "#",
  },

  {
    title: "Developer Portfolio",
    image: portfolio,
    subtitle: "React Portfolio",
    description:
      "Modern developer portfolio with smooth animations, responsive layouts and reusable components.",
    tech: ["React", "JavaScript", "CSS", "Responsive"],
    github:
      "https://github.com/sakshirautela/sakshirautela.git",
    live: "#",
  },

  {
    title: "AI Student Performance",
    image: student,
    subtitle: "Machine Learning",
    description:
      "Predictive analytics model using feature engineering and optimized machine learning algorithms.",
    tech: ["Python", "Pandas", "ML", "Scikit-Learn"],
    github:
      "https://github.com/sakshirautela/ai-impact-on-student-performance-trainingdata.git",
    live: "#",
  },

  {
    title: "Digit Recognizer",
    image: digit,
    subtitle: "Computer Vision",
    description:
      "CNN based handwritten digit recognition system built using TensorFlow and deep learning.",
    tech: ["TensorFlow", "CNN", "Python", "Vision"],
    github:
      "https://github.com/sakshirautela/DigitRecognizer-inPython",
    live: "#",
  },

  {
    title: "Kidney Disease Classifier",
    image: kidney,
    subtitle: "Healthcare AI",
    description:
      "Deep learning model for chronic kidney disease prediction using medical datasets.",
    tech: ["Deep Learning", "Python", "Healthcare", "AI"],
    github:
      "https://github.com/sakshirautela/kidney-disease-classifier-deepleaning",
    live: "#",
  },

  {
    title: "Carbon Footprint Analyzer",
    image: carbon,
    subtitle: "Green AI",
    description:
      "AI powered analytics platform for estimating carbon emissions and sustainability metrics.",
    tech: ["Python", "Analytics", "Visualization", "AI"],
    github:
      "https://github.com/sakshirautela/carbon-footprint-analyzer",
    live: "#",
  },

  {
    title: "Heart Disease Detection",
    image: heart,
    subtitle: "Healthcare ML",
    description:
      "Machine learning model that predicts heart disease risk using clinical datasets.",
    tech: ["Python", "Machine Learning", "Healthcare", "Prediction"],
    github:
      "https://github.com/sakshirautela/HeartDiseaseDetection",
    live: "#",
  },
];

export default function Projects() {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll
    ? projects
    : projects.slice(0, 6);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;

    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = ((x - centerX) / centerX) * 8;

    const rotateX = ((centerY - y) / centerY) * 8;

    card.style.transform = `
      perspective(1200px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateY(-8px)
    `;

    card.style.setProperty("--x", `${x}px`);
    card.style.setProperty("--y", `${y}px`);
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform =
      "perspective(1200px) rotateX(0deg) rotateY(0deg)";

    e.currentTarget.style.setProperty("--x", "50%");
    e.currentTarget.style.setProperty("--y", "50%");
  };

  return (
    <section id="projects">
      <div className="container">

        <div className="projects-header">

          <span className="section-label">
            Portfolio
          </span>

          <h2 className="section-title">
            Featured <span>Projects</span>
          </h2>

          <p className="section-description">
            A collection of AI, Machine Learning and Full Stack
            applications built using modern technologies.
          </p>

        </div>

        <div className="projects-grid">

          {visibleProjects.map((project) => (
            <article
              key={project.title}
              className="project-card"
              style={{
                backgroundImage: `url(${project.image})`,
              }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <div className="project-overlay">

                <div className="project-content">

                  <div>

                    <p className="project-subtitle">
                      {project.subtitle}
                    </p>

                    <h3>{project.title}</h3>

                    <p className="project-description">
                      {project.description}
                    </p>

                    <div className="tech-stack">

                      {project.tech.map((item) => (
                        <span key={item}>
                          {item}
                        </span>
                      ))}
                    </div>

                  </div>
                                    <div className="project-links">

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="github-btn"
                    >
                      GitHub ↗
                    </a>

                    {project.live !== "#" && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="live-btn"
                      >
                        Live Demo →
                      </a>
                    )}

                  </div>

                </div>

                {/* Mouse Glare Effect */}
                <div className="project-glare"></div>

              </div>
            </article>
          ))}

        </div>

        {projects.length > 6 && (
          <div className="projects-action">

            <button
              className="show-more-btn"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll
                ? "Show Less"
                : "View All Projects"}
            </button>

          </div>
        )}

      </div>
    </section>
  );
}