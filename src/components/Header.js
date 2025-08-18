import './style/Header.css';

const Header = () => {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className="bg-gray-900 shadow-md py-4 px-6 md:px-12 sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center flex-wrap">
                <h1 className="text-3xl font-bold text-white">Flowa</h1>
                <nav className="mt-4 md:mt-0">
                    <ul className="flex space-x-6">
                        <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} className="text-gray-300 hover:text-blue-400 font-medium transition duration-300">ABOUT</a></li>
                        <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }} className="text-gray-300 hover:text-blue-400 font-medium transition duration-300">SERVICES</a></li>
                        <li><a href="#resume" onClick={(e) => { e.preventDefault(); scrollToSection('resume'); }} className="text-gray-300 hover:text-blue-400 font-medium transition duration-300">RESUME</a></li>
                        <li><a href="#portfolio" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }} className="text-gray-300 hover:text-blue-400 font-medium transition duration-300">PORTFOLIO</a></li>
                        <li><a href="#blog" onClick={(e) => { e.preventDefault(); scrollToSection('blog'); }} className="text-gray-300 hover:text-blue-400 font-medium transition duration-300">BLOG</a></li>
                        <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className="text-gray-300 hover:text-blue-400 font-medium transition duration-300">CONTACT</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};
export default Header;