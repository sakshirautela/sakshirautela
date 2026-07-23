import { Route, Routes } from "react-router-dom";
import Home from "./Hero";
import About from "./About";
import Learn from "./Learn";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Blog from "./Blog";
export default function RoutesComponent() {
    return (
        <div className="routes">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/learn" element={<Learn />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/blog" element={<Blog />} />
            </Routes>
        </div>
    )
}