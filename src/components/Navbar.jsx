// src/components/Navbar.jsx
import { useState } from 'react';
import sun from '../assets/sun.svg';
import moon from '../assets/moon.svg';
import { useTheme } from '../common/ThemeContext';
import styles from '../styles/navbar.module.css';
import logo from '../assets/logo.png'; // Adjust the path as necessary
export default function Navbar() {
  const [open, setOpen] = useState(false);

  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === 'light' ? sun : moon;

  return (
    <nav id="navbar" className={`${styles.navbar} ${theme}`}>
      <div className={styles.logo}>
        <img src={logo}></img>
        <img className="colorMode" src={themeIcon} alt="Color mode icon" onClick={toggleTheme} />
        </div>

      <button
        className={`${styles.hamburger} ${open ? styles.active : ''}`}
        onClick={() => setOpen(!open)}
        aria-label="Menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul
        className={`${styles.navLinks} ${open ? styles.open : ''}`}
        onClick={() => setOpen(false)}
      >
        <li><a href="#hero">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}
