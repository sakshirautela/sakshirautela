import './style/text.css';
import './style/Contact.css';
import { IoIosMail } from 'react-icons/io';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact">
      <p className="section_text_p1">Get in Touch</p>
      <h1 className="title">Contact Me</h1>

      <div className="contact-container">
        <div className="contact-links">
          <div className="contact-info-container">
            <IoIosMail className="icon contact-icon" />
            <p>
              <a href="mailto:examplemail@gmail.com">examplemail@gmail.com</a>
            </p>
          </div>

          <div className="contact-info-container">
            <FaLinkedin className="icon contact-icon" />
            <p>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </p>
          </div>

          <div className="contact-info-container">
            <FaGithub className="icon contact-icon" />
            <p>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </p>
          </div>
        </div>

        <div className="contact-form">
          <form onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit" className="btn-submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}
