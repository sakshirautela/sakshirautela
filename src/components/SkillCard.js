const SkillCard = ({ title, skills }) => {
    return (
        <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
            <h4 className="text-xl font-semibold text-blue-400 mb-3">{title}</h4>
            <ul className="list-disc list-inside text-gray-300">
                {skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </div>
    );
};
export default SkillCard;