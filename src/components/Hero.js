import React from 'react';
import './style/Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        
        <div className="social-links">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" title="GitHub">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" title="Twitter">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="mailto:your.email@example.com" title="Email">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
      <div className="hero-image">
        <div className="floating-image"></div>
      </div>
    </section>
  );
} 