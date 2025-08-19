import React from "react";
import "./style/Header.css";
import "./style/mediaquery.css";

export default function Header() {
  return (
      <div className="container">
        <nav id="navbar">
          <div className="logo">
           Sakshi Rautela
          </div>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
  );
}
