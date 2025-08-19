import styles from '../styles/about.module.css';
import aboutPic from '../assets/FlowerPng.jpg';
import experienceIcon from '../assets/FlowerPng.jpg';
import educationIcon from '../assets/FlowerPng.jpg';
import { useTheme } from '../common/ThemeContext';

export default function About() {
  const { theme } = useTheme();

  return (
    <section id="about" className={`${styles.container} ${styles[theme]}`}>
      <p className={styles.section__text__p1}>Get To Know More</p>
      <h1 className={styles.title}>About Me</h1>

      <div className={styles.sectionContainer}>
        <div className={styles.section__picContainer}>
          <img src={aboutPic} alt="Profile" className={styles.aboutPic} />
        </div>

        {/* Right: Details */}
        <div className={styles.aboutDetailsContainer}>
          <div className={styles.aboutContainers}>
            <div className={styles.detailsContainer}>
              <img src={experienceIcon} alt="Experience" className={styles.icon} />
              <h3>Experience</h3>
              <p>
                1+ years <br /> Software Development
              </p>
            </div>

            <div className={styles.detailsContainer}>
              <img src={educationIcon} alt="Education" className={styles.icon} />
              <h3>Education</h3>
              <p>
                B.C.A. - 9.03 CGPA <br /> M.C.A. with AIML
              </p>
            </div>
          </div>

          <div className={styles.textContainer}>
            <p>
             I am a passionate computer science student specializing in AI/ML, full-stack development, and system design. Skilled in Java, Python, C++, JavaScript, React, and Spring Boot, I enjoy solving complex problems through efficient, scalable solutions. With 1000+ coding challenges solved and internship experience at HackerRank, I bring strong problem-solving, analytical, and coding skills. I am continuously exploring NLP, LLMs, and generative AI to build innovative real-world applications. </p>
          </div>
        </div>
      </div>

    </section>
  );
}
