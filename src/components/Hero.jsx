import heroImg from '../assets/FlowerPng.jpg';
import sun from '../assets/sun.svg';
import moon from '../assets/moon.svg';
import twitterLight from '../assets/twitter-light.svg';
import twitterDark from '../assets/twitter-dark.svg';
import githubLight from '../assets/github-light.svg';
import githubDark from '../assets/github-dark.svg';
import linkedinLight from '../assets/linkedin-light.svg';
import linkedinDark from '../assets/linkedin-dark.svg';
import CV from '../assets/sakshi_resume.pdf';
import { useTheme } from '../common/ThemeContext';
import React from 'react';
import styles from '../styles/hero.css';
function Hero() {
  const { theme } = useTheme();
  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className="container">
      <div className="colorModeContainer">
        <img src={heroImg} className="hero" alt="Profile picture of Sakshi Rautela" />
      </div>
      <div className="info">
        <h1>
          Sakshi
          <br />
          Rautela
        </h1>
        <h2>Frontend Developer</h2>
        <span>
          <a href="https://x.com/sakshii_rautela/" target="_blank" rel="noreferrer">
            <img src={twitterIcon} alt="Twitter icon" />
          </a>
          <a href="https://github.com/sakshirautela" target="_blank" rel="noreferrer">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://www.linkedin.com/in/sakshi-rautela-b1823a349/" target="_blank" rel="noreferrer">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className="description">
          I’m a passionate student with a strong interest in AI/ML, Java, OOPs, system design, and problem-solving.
Always learning and exploring, I enjoy building smart, efficient solutions and applying theoretical concepts to
real-world problems.
        </p>
        <button
          className="hover"
          onClick={() => window.open(CV, "_blank", "noopener,noreferrer")}
        >
          Resume
        </button>

      </div>
    </section>

  );
}

export default Hero;