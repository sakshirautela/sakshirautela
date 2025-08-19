import styles from '../styles/skills.module.css';
import checkMarkIconDark from '../assets/checkmark-dark.svg';
import checkMarkIconLight from '../assets/checkmark-light.svg';
import SkillList from '../common/SkillList';
import { useTheme } from '../common/ThemeContext';

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>

      {/* Programming Languages */}
      <div className={styles.skillList}>
      <h1>Language : </h1>:
        <SkillList src={checkMarkIcon} skill="Java" />
        <SkillList src={checkMarkIcon} skill="Python" />
        <SkillList src={checkMarkIcon} skill="C++" />
        <SkillList src={checkMarkIcon} skill="JavaScript" />
      </div>
      <hr />

      {/* Frameworks & Tools */}
      <div className={styles.skillList}>
      <h1>FreameWorks & Tools :</h1>
        <SkillList src={checkMarkIcon} skill="React" />
        <SkillList src={checkMarkIcon} skill="Spring Boot" />
        <SkillList src={checkMarkIcon} skill="REST APIs" />
        <SkillList src={checkMarkIcon} skill="Git & GitHub" />
      </div>
      <hr />

      {/* AI/ML & Advanced Tech */}
      <div className={styles.skillList}>
      <h1> AI/ML : </h1>:
        <SkillList src={checkMarkIcon} skill="AI / ML" />
        <SkillList src={checkMarkIcon} skill="TensorFlow" />
        <SkillList src={checkMarkIcon} skill="Scikit-learn" />
        <SkillList src={checkMarkIcon} skill="OpenCV" />
        <SkillList src={checkMarkIcon} skill="LangChain" />
      </div>
      <hr />

      {/* Core Concepts */}
      <div className={styles.skillList}>
      <h1>Core Concepts : </h1>:
        <SkillList src={checkMarkIcon} skill="Data Structures & Algorithms" />
        <SkillList src={checkMarkIcon} skill="Object-Oriented Programming (OOPs)" />
        <SkillList src={checkMarkIcon} skill="System Design" />
        <SkillList src={checkMarkIcon} skill="NLP & Generative AI" />
      </div>
    </section>
  );
}

export default Skills;
