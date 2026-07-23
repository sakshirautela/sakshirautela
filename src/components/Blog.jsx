 function Blog() {
    const blogTopics = [
        {
            title: "ReactJs",
        },
        {
            title: "JavaScript",
        },
        {
            title: "Machine Learning",   
        },
        {
            title: "Deep Learning",
        },
        {
            title: "System Design",
        },
        {
            title: "Data Structures",
        },
        {
            title: "Java",
        },
    ];

    return (
        <div className="blog">
            {blogTopics.map((topic, index) => (
                <div key={index} className="blog-topics">
                    <h2>{topic.title}</h2>
                    <p className="date">{topic.date}</p>
                    <p className="summary">{topic.summary}</p>
                    <a href={topic.link} className="read-more">Read More</a>
                </div>
            ))}
        </div>
    );
}

export default Blog;