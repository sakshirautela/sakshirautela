import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <footer>
        <p>&copy; 2023 My Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;