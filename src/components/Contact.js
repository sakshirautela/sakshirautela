const Contact = () => {
    return (
        <section id="contact" className="py-16 px-6 md:px-12 bg-gray-800 text-white shadow-md rounded-lg mx-auto my-8 max-w-4xl">
            <div className="container mx-auto text-center">
                <h3 className="text-4xl font-bold text-white mb-8 relative inline-block pb-2 section-heading">Get In Touch</h3>
                <p className="text-lg text-gray-300 mb-8">
                    Have a question or want to work together? Feel free to reach out!
                </p>
                <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                    <a href="mailto:your.email@example.com" className="bg-blue-600 text-white hover:bg-blue-700 font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105 flex items-center justify-center">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                        Email Me
                    </a>
                    <a href="https://linkedin.com/in/yourprofile" target="_blank" className="bg-gray-700 text-white hover:bg-gray-800 font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105 flex items-center justify-center">
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.444-2.136 2.939v5.667H9.351V9h3.414v1.561h.045c.473-.893 1.636-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.062 2.062 2.062 0 012.063-2.062 2.062 2.062 0 012.062 2.062 2.062 2.062 0 01-2.062 2.062zM3.53 20.452H7.1v-11.47H3.53v11.47zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454c.979 0 1.776-.773 1.776-1.729V1.729C24 .774 23.204 0 22.225 0z"></path></svg>
                        LinkedIn
                    </a>
                </div>
            </div>
        </section>
    );
};
export default Contact;