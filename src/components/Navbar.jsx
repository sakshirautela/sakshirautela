import "../styles/Navbar.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import {NavLink} from "react-router-dom";
const navLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  // { path: "/learn", label: "Learn" },
  { path: "/portfolio", label: "Portfolio" },
  { path: "/blog", label: "Blog" },
  { path: "/contact", label: "Contact" },
];
const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/sakshirautela",
    icon: "fab fa-github",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/sakshi-b1823a349/",
    icon: "fab fa-linkedin",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/sakshii_rautela",
    icon: "fab fa-x-twitter",
  },
  {
    name: "Instagram",
    url: "https://instagram.com/sakshii_rautelaa",
    icon: "fab fa-instagram",
  },
];

export default function Navbar({ activeSection }) {
  return (
    <header className="navbar">
      <div className="nav-inner">
        {/* Logo */}
        <div className="nav-logo-container">
          <a href="#home" className="nav-logo">
            AP
          </a>
        </div>

        {/* Navigation */}
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.id}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Social Media */}
        <div className="nav-social">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
            >
              <i className={social.icon}></i>
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}