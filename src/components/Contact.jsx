import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from '../styles/contact.module.css';

function Contact() {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    setStatusMessage('Sending...');

    emailjs.sendForm(
      'service_tg3x7g8', 
      'template_of6y5e3', 
      form.current, 
      'MGfE9ZaoW9oIMO5pG'
    )
    .then((result) => {
      console.log(result.text);
      setStatusMessage('Thank you! Your message has been sent.');
      form.current.reset();
    }, (error) => {
      console.log(error.text);
      setStatusMessage('Failed to send the message. Please try again.');
    });
  };

  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form ref={form} onSubmit={handleSubmit}>
        <div className="formGroup">
          <label htmlFor="name" hidden>Name</label>
          <input type="text" name="from_name" id="name" placeholder="Name" required />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>Email</label>
          <input type="email" name="from_email" id="email" placeholder="Email" required />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>Message</label>
          <textarea name="message" id="message" placeholder="Message" required></textarea>
        </div>
        <input className="hover btn" type="submit" value="Submit" />
      </form>
      {statusMessage && <p className={styles.statusMessage}>{statusMessage}</p>}
    </section>
  );
}

export default Contact;