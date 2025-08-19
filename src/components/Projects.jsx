import styles from '../styles/projects.module.css';
import viberr from '../assets/FlowerPng.jpg';
import freshBurger from '../assets/FlowerPng.jpg';
import hipsster from '../assets/FlowerPng.jpg';
import fitLift from '../assets/FlowerPng.jpg';
import ProjectCard from '../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/sakshirautela/BookMyRides"
          h3="bookMyRides"
          p="Ride Sharing App"
        />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/sakshirautela/webscrappingmodel"
          h3="webScrappingModel"
          p="web Scrapping Model"
        />
        <ProjectCard
          src={fitLift}
          link="https://github.com/sakshirautela/LargeLanguageModel"
          h3="Large Language Model"
          p="LLM"
        />
      </div>
    </section>
  );
}

export default Projects;