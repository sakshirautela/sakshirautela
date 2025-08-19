import Image from './images/FlowerPng.jpg';
import Resume from './images/sakshi_resume.pdf';
import { FaLinkedin } from 'react-icons/fa';
import './style/About.css';
import { useState } from 'react';
export default function About() {
  const [linkedin_url, setLinkedin] = useState('https://www.linkedin.com/in/sakshi-rautela-b1823a349/');
  const resumefunctions = () => {
    window.open(Resume);
  };
  return (
    <section id="profile">
      <div className="section_profile-container">
        <img src={Image} alt="Flower" className='Image'/>
      </div>

      <div className="section_text">
        <p className='section_text_p1'>Hii I'm</p>
        <h2 className='title'>Sakshi Rautela</h2>
        <p className='section_text_p2'>Web Developer</p>
      <div className="btn-container">
          <button className="btn btn-color-2" onClick={resumefunctions}>Resume</button>
          {/* <button className="btn-1" onClick={() => window.location.href = './#contact'}>Contact</button> */}
      </div>
      <div id="socials-container">
          <FaLinkedin className="icon" onClick={() => window.open(linkedin_url)} />
        </div>
      </div>
    </section>
  );
}
