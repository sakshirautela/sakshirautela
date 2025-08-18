import React from 'react';
import './style/Projects.css';  
import ProjectCard from './ProjectCard'; 
const Projects = () => {
    const projects = [
        {
            imageUrl: "https://placehold.co/600x400/e0e0e0/333333?text=Project+1",
            title: "Project Title One",
            description: "A brief description of Project One, highlighting its purpose, technologies used, and your role in its development.",
            technologies: [{ name: "React", color: "blue" }, { name: "Node.js", color: "green" }, { name: "MongoDB", color: "purple" }],
            projectLink: "#"
        },
        {
            imageUrl: "https://placehold.co/600x400/d0d0d0/333333?text=Project+2",
            title: "Project Title Two",
            description: "A brief description of Project Two, highlighting its purpose, technologies used, and your role in its development.",
            technologies: [{ name: "Python", color: "red" }, { name: "Flask", color: "yellow" }, { name: "PostgreSQL", color: "indigo" }],
            projectLink: "#"
        }
    ];

    return (
        <section id="projects" className="py-16 px-6 md:px-12 bg-gray-900 text-white shadow-md rounded-lg mx-auto my-8 max-w-4xl">
            <div className="container mx-auto">
                <h3 className="text-4xl font-bold text-white mb-8 relative inline-block pb-2 section-heading">Projects</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            imageUrl={project.imageUrl}
                            title={project.title}
                            description={project.description}
                            technologies={project.technologies}
                            projectLink={project.projectLink}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Projects;