import { useState, useEffect } from "react";
import "../styles/Header.css";

export default function Header({ activeSection }) {
  const [theme, setTheme] = useState("dark");
  const [scrolled, setScrolled] = useState(false);
  const isBlog = activeSection === "blog" || (typeof window !== "undefined" && window.location.hash.startsWith("#blog"));

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
  };

  const portfolioNavItems = [
    { id: "history", label: "01 History", href: "#history" },
    { id: "experience", label: "02 Experience", href: "#experience" },
    { id: "projects", label: "03 Projects", href: "#projects" },
    { id: "leetcode", label: "04 LeetCode", href: "#leetcode" },
    { id: "stack", label: "05 Stack", href: "#stack" },
    { id: "blog", label: "06 Blog", href: "#blog", isHighlighted: true },
    { id: "contact", label: "07 Contact", href: "#contact" },
  ];

  const blogNavItems = [
    { id: "portfolio", label: "← Portfolio", href: "#hero" },
    { id: "blog", label: "All Topics", href: "#blog", isHighlighted: true },
  ];

  const currentNavItems = isBlog ? blogNavItems : portfolioNavItems;

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-inner">
        <a href="#hero" className="header-brand">
          <span className="brand-dot" />
          <span className="brand-name">Sakshi Rautela</span>
          <span className="brand-tag">{isBlog ? "Engineering Blog" : "Software Engineer"}</span>
        </a>

        <nav className="header-nav">
          {currentNavItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`nav-link ${item.isHighlighted ? "nav-link-highlight" : ""} ${activeSection === item.id ? "active" : ""}`}
            >
              {item.isHighlighted && <span className="highlight-dot" />}
              <span>{item.label}</span>
              {item.isHighlighted && <span className="highlight-sparkle">✦</span>}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <button
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label="Toggle theme"
            title="Toggle light/dark theme"
          >
            {theme === "dark" ? (
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
            ) : (
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          <a href="#contact" className="contact-btn">
            <span>Contact</span>
            <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </header>
  );
}
