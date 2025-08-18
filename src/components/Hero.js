import React from 'react';
import './style/Hero.css';
const Hero = () => {
    const scrollToProjects = () => {
        const element = document.getElementById('projects');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="bg-gray-800 text-white py-20 px-6 md:px-12 shadow-lg flex flex-col md:flex-row items-center justify-center">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between">
                <div className="text-center md:text-left md:w-1/2 mb-10 md:mb-0">
                    <p className="text-yellow-400 text-xl font-semibold mb-2">Hello !</p>
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">I'm Professional Web Designer & Wordpress Developer</h2>
                    <p className="text-lg text-gray-300 mb-8">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    <div className="flex justify-center md:justify-start space-x-4">
                        <button className="bg-purple-600 text-white hover:bg-purple-700 font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">Hire Me</button>
                        <button className="bg-yellow-500 text-gray-900 hover:bg-yellow-600 font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">Download CV</button>
                    </div>
                </div>
                <div className="md:w-1/2 flex justify-center md:justify-end">
                    <img src="http://googleusercontent.com/file_content/1" alt="Professional Web Designer" className="rounded-lg shadow-lg max-w-full h-auto" />
                </div>
            </div>
        </section>
    );
};
export default Hero;