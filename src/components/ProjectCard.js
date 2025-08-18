const ProjectCard = ({ imageUrl, title, description, technologies, projectLink }) => {
    return (
        <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
            <img src={imageUrl} alt={`${title} Thumbnail`} className="w-full h-48 object-cover" />
            <div className="p-6">
                <h4 className="text-2xl font-semibold text-blue-400 mb-2">{title}</h4>
                <p className="text-gray-300 mb-4">{description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {technologies.map((tech, index) => (
                        <span key={index} className={`bg-${tech.color}-700 text-${tech.color}-200 text-xs font-medium px-2.5 py-0.5 rounded-full`}>{tech.name}</span>
                    ))}
                </div>
                <a href={projectLink} className="text-blue-400 hover:underline font-medium inline-flex items-center" target="_blank" rel="noopener noreferrer">
                    View Project
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </a>
            </div>
        </div>
    );
};
export default ProjectCard;