import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact" style={{ background: "var(--bg2)" }}>
      <div className="container">
        <div className="contact-inner">
          <div className="contact-left">
            <p className="section-label">Get in Touch</p>
            <h2 className="contact-title">
              Let's build<br />
              <em>something great.</em>
            </h2>
            <p className="contact-desc">
              I'm actively looking for my first full-time SDE role. If you have an opportunity
              that matches my backend engineering skills, I'd love to connect.
            </p>

            <div className="contact-details">
              <a href="mailto:techsakshirautela@gmail.com" className="contact-row">
                <div className="contact-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <p className="contact-label">Email</p>
                  <p className="contact-value">techsakshirautela@gmail.com</p>
                </div>
              </a>

              <a href="tel:+917456965264" className="contact-row">
                <div className="contact-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.07 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z"/>
                  </svg>
                </div>
                <div>
                  <p className="contact-label">Phone</p>
                  <p className="contact-value">+91 7456965264</p>
                </div>
              </a>

              <div className="contact-row no-link">
                <div className="contact-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <p className="contact-label">Location</p>
                  <p className="contact-value">Greater Noida, UP — Open to Noida WFO</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-right">
            <div className="cta-box">
              <div className="cta-corner tl" />
              <div className="cta-corner tr" />
              <div className="cta-corner bl" />
              <div className="cta-corner br" />

              <p className="cta-label">Ready to contribute</p>
              <h3 className="cta-title">Immediate Joiner</h3>
              <p className="cta-desc">
                Final-year MCA student available immediately. No notice period required.
                Actively looking for backend/SDE roles in Noida.
              </p>

              <div className="cta-actions">
                <a href="mailto:techsakshirautela@gmail.com" className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                  Send Email
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="btn-ghost" style={{ width: "100%", justifyContent: "center" }}>
                  Connect on LinkedIn
                </a>
              </div>

              <div className="cta-tags">
                <span>✓ Backend Engineering</span>
                <span>✓ Spring Boot</span>
                <span>✓ REST APIs</span>
                <span>✓ Immediate Join</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-line">
          <p>Designed & built by Sakshi Rautela — 2026</p>
          <p className="footer-stack">React · Spring Boot · PostgreSQL</p>
        </div>
      </div>
    </section>
  );
}
