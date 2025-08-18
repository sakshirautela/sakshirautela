import React from 'react';
import './style/Education.css';

const education = [
  {
    degree: 'Master of Computer Application',
    school: 'Amity University',
    year: '2021 - 2024',
    description: 'Specialized in Artificial Intelligence and Machine Learning. Relevant coursework: Data Structures, Algorithms, Machine Learning, Deep Learning, Web Development.',
    gpa: 'GPA: 9.03'
  },
  {
    degree: 'Bachelor of Computer Application',
    school: 'Dev Bhoomi Uttrakhand University',
    year: '2021 - 2024',
    description: 'Specialized in Artificial Intelligence and Machine Learning. Relevant coursework: Data Structures, Algorithms, Machine Learning, Deep Learning, Web Development.',
    gpa: 'GPA: 9.03'
  },
  {
    degree: 'Senior Secondary Education',
    school: 'Your High School',
    year: '2020 - 2021',
    description: 'Science Stream with Computer Science. Achieved top grades in Mathematics and Computer Science.',
    gpa: 'Percentage: 89%'
  },
  {
    degree: 'Secondary Education',
    school: 'Your High School',
    year: '2018 - 2019',
    description: 'Science Stream with Computer Science. Achieved top grades in Mathematics with 95% .',
    gpa: 'Percentage: 94.4%'
  }
];

export default function Education() {
  return (
    <section id="education" className="education">
      <h2>Education</h2>
      <div className="education-timeline">
        {education.map((edu, index) => (
          <div key={index} className="education-card">
            <div className="education-content">
              <h3>{edu.degree}</h3>
              <h4>{edu.school}</h4>
              <span className="year">{edu.year}</span>
              <p>{edu.description}</p>
              <span className="gpa">{edu.gpa}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 