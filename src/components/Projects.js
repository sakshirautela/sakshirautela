import React from 'react';
import './style/Projects.css';

const projects = [
  {
    title: 'AI-Powered Chat Application',
    description: 'A real-time chat application with AI integration for smart responses and sentiment analysis',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    tags: ['React', 'Node.js', 'TensorFlow', 'WebSocket'],
    link: '#',
    github: '#'
  },
  {
    title: 'Smart Task Manager',
    description: 'An intelligent task management system with AI-powered prioritization and deadline prediction',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    tags: ['Python', 'Django', 'Machine Learning', 'React'],
    link: '#',
    github: '#'
  },
  {
    title: 'Data Visualization Dashboard',
    description: 'Interactive dashboard for analyzing and visualizing complex datasets with real-time updates',
    image: 'https://images.unsplash.com/photo-1460925895917-afd8278274c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    tags: ['D3.js', 'React', 'Python', 'REST API'],
    link: '#',
    github: '#'
  },
  {
    title: 'E-Learning Platform',
    description: 'A comprehensive e-learning platform with personalized learning paths and progress tracking',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    tags: ['MERN Stack', 'Redux', 'MongoDB', 'JWT'],
    link: '#',
    github: '#'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="tag">{tag}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.link} className="project-link">View Project →</a>
                <a href={project.github} className="github-link">
                  <i className="fab fa-github"></i> Source Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 