import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Profile from './components/Profile';
import './App.css';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
function App() {
  return (
    <div className="App">
      <Header/>
      <About />
      <Profile/>
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;