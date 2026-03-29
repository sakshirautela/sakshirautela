import { useState, useEffect } from "react";
import "../styles/Navbar.css";  
const links = [
  { id: "about", idx: "01", label: "About" },
  { id: "skills", idx: "02", label: "Skills" },
  { id: "projects", idx: "03", label: "Projects" },
  { id: "education", idx: "04", label: "Education" },
  { id: "contact", idx: "05", label: "Contact" },
];

export default function Navbar({ activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-inner">
        <a href="#hero" className="nav-logo">
          <span className="logo-bracket">&lt;</span>
          sakshirautela
          <span className="logo-bracket">/&gt;</span>
        </a>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          {links.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={activeSection === id ? "active" : ""}
                onClick={() => setMenuOpen(false)}
              >
                <span className="link-num">{links.find((link) => link.id === id)?.idx}.</span>
                {label}
              </a>
            </li>
          ))}
          <li>
            <a href="mailto:techsakshirautela@gmail.com" className="nav-cta">
              Hire Me
            </a>
          </li>
        </ul>

        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span className={menuOpen ? "open" : ""} />
          <span className={menuOpen ? "open" : ""} />
          <span className={menuOpen ? "open" : ""} />
        </button>
      </div>
    </nav>
  );
}
