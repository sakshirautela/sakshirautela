import React from 'react';
import './style/About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        {/* <div className="about-image">
          <img src="/profile.jpg" alt="Profile" />
        </div> */}
        <h1 className="animate-text">Hi, I'm <span className="highlight">Sakshi</span></h1>
        <h2 className="animate-text-delay">Full Stack Developer & AI Enthusiast</h2>
        <p className="animate-text-delay-2">Passionate about creating innovative solutions and exploring the intersection of technology and creativity</p>
        <div className="cta-buttons">
          <a href="#projects" className="btn primary">View My Work</a>
          <a href="#contact" className="btn secondary">Get in Touch</a>
        </div>
        <div className="about-content">
          <p>
            Computer Science Specialist with strong expertise in Java, Python, and Full-Stack Development (React,
            HTML/CSS, Spring Boot), coupled with hands-on experience in AI/ML model development and system design. Adept at
            leveraging Data Structures, Algorithms, and OOP principles to build scalable, high-performance
            applications. Passionate about solving complex problems through clean, efficient code and continuous
            learning. Committing to deliver user-centric, innovative solutions that bridge technology and real-world
            impact.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About; 