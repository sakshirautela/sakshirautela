import React from 'react';
import './style/Skills.css';

const skills = [
  { name: 'Python', icon: 'fab fa-python', color: '#3776AB', level: '90%' },
  { name: 'JavaScript', icon: 'fab fa-js', color: '#F7DF1E', level: '85%' },
  { name: 'React', icon: 'fab fa-react', color: '#61DAFB', level: '85%' },
  { name: 'Node.js', icon: 'fab fa-node-js', color: '#339933', level: '80%' },
  { name: 'TensorFlow', icon: 'fas fa-brain', color: '#FF6F00', level: '75%' },
  { name: 'Django', icon: 'fab fa-python', color: '#092E20', level: '80%' },
  { name: 'MongoDB', icon: 'fas fa-database', color: '#47A248', level: '75%' },
  { name: 'Git', icon: 'fab fa-git-alt', color: '#F05032', level: '85%' },
  { name: 'Docker', icon: 'fab fa-docker', color: '#2496ED', level: '70%' },
  { name: 'AWS', icon: 'fab fa-aws', color: '#232F3E', level: '70%' }
];

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <h2>Technical Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-header">
              <i className={`${skill.icon} skill-icon`} style={{ color: skill.color }}></i>
              <span className="skill-name">{skill.name}</span>
            </div>
            <div className="skill-progress">
              <div 
                className="progress-bar" 
                style={{ 
                  width: skill.level,
                  backgroundColor: skill.color
                }}
              ></div>
            </div>
            <span className="skill-level">{skill.level}</span>
          </div>
        ))}
      </div>
    </section>
  );
} 