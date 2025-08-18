import SkillCard from './SkillCard';
const Skills = () => {
    const skillCategories = [
        {
            title: "Front-end Development",
            skills: ["HTML5, CSS3, JavaScript (ES6+)", "React, Vue.js, Angular (Choose what applies)", "Tailwind CSS, Bootstrap"]
        },
        {
            title: "Back-end Development",
            skills: ["Node.js, Python (Django/Flask), Ruby on Rails (Choose what applies)", "RESTful APIs, GraphQL", "Databases: MongoDB, PostgreSQL, MySQL"]
        },
        {
            title: "Tools & Technologies",
            skills: ["Git, GitHub/GitLab", "VS Code, WebStorm", "Docker, AWS (Choose what applies)"]
        }
    ];

    return (
        <section id="skills" className="py-16 px-6 md:px-12 bg-gray-900 text-white shadow-md rounded-lg mx-auto my-8 max-w-4xl">
            <div className="container mx-auto">
                <h3 className="text-4xl font-bold text-white mb-8 relative inline-block pb-2 section-heading">Skills</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => (
                        <SkillCard key={index} title={category.title} skills={category.skills} />
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Skills;