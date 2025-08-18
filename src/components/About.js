import React from 'react';
import './About.css';

function About() {
  return (
    <section className="about-section py-16 px-6 md:px-12 bg-gray-900 text-white shadow-md rounded-lg mx-auto my-8 max-w-4xl">
      <div className="container mx-auto">
        <h2 className="section-heading text-4xl font-bold text-white mb-8 relative inline-block pb-2">About Me</h2>
        <div className="prose max-w-none text-lg leading-relaxed text-gray-300">
          <p className="mb-4">
            Welcome to my portfolio! I'm [Your Name], a [Your Profession/Role] with a strong passion for [Your main interest/area of expertise]. I thrive on [mention a key activity, e.g., solving complex problems, building intuitive user experiences, crafting compelling narratives].
          </p>
          <p className="mb-4">
            My journey in [Your Industry/Field] began [mention when/how, e.g., X years ago, during my studies at Y University]. Since then, I've had the opportunity to work on a variety of projects, from [Project Type A] to [Project Type B], always striving to deliver high-quality and impactful solutions.
          </p>
          <p>
            I believe in continuous learning and am always exploring new technologies and methodologies to enhance my skills. Outside of work, you can find me [mention a hobby or interest, e.g., hiking, reading, coding for fun, playing music].
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;