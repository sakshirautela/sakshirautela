import { useState } from "react";
import { personalInfo } from "../data/portfolioData";
import "../styles/ContactSection.css";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [statusMessage, setStatusMessage] = useState("");

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) return;

    const senderName = formData.name.trim();
    const senderEmail = formData.email.trim();
    const senderMessage = formData.message.trim();
    const recipientEmail = personalInfo.email || "sakshi.mlengineer@gmail.com";

    const subject = encodeURIComponent(`Portfolio Message from ${senderName}`);
    const body = encodeURIComponent(
      `Hi Sakshi,\n\nYou have received a new message from your portfolio:\n\nName: ${senderName}\nEmail: ${senderEmail}\n\nMessage:\n${senderMessage}\n\n---\nSent from Portfolio Website`
    );

    // Open standard mail client
    window.location.href = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;

    // Reset entered form data immediately
    setFormData({ name: "", email: "", message: "" });
    setStatus("success");
    setStatusMessage("Opening your email client to send message... Thank you! ✓");

    setTimeout(() => {
      setStatus("idle");
      setStatusMessage("");
    }, 6000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="contact" className="portfolio-section contact-section">
      <div className="section-header">
        <div className="section-tag">
          <span className="section-number">07</span>
          <span>Contact</span>
        </div>
        <h2 className="section-title">
          Get in Touch & <span className="title-serif">Collaborate</span>
        </h2>
        <p className="section-description">
          Open for SDE and AI/ML engineering roles, open source collaboration, and research discussions.
        </p>
      </div>

      <div className="contact-main-grid">
        {/* Left Column: Direct Outreach & Copy Email */}
        <div className="contact-info-card">
          <div className="outreach-header">
            <h3>Let's talk code & systems</h3>
            <p>
              Whether you are looking to hire a software engineer with strong DSA foundations or build intelligent ML pipelines, feel free to reach out.
            </p>
          </div>

          <div className="email-action-box">
            <span className="email-label">Direct Email</span>
            <div className="email-row">
              <span className="email-text">{personalInfo.email}</span>
              <button onClick={copyEmail} className="copy-btn" type="button">
                {copied ? "Copied! ✓" : "Copy Email"}
              </button>
            </div>
          </div>

          <div className="contact-socials-grid">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social-btn"
            >
              <span>LinkedIn</span>
              <span className="arrow">↗</span>
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social-btn"
            >
              <span>GitHub</span>
              <span className="arrow">↗</span>
            </a>
            <a
              href={personalInfo.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social-btn"
            >
              <span>LeetCode</span>
              <span className="arrow">↗</span>
            </a>
          </div>
        </div>

        {/* Right Column: Quick Message Form */}
        <div className="contact-form-card">
          <form onSubmit={handleSubmit} className="quick-form">
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                placeholder="your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                disabled={status === "sending"}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                placeholder="your-email@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                disabled={status === "sending"}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                rows="4"
                placeholder="Tell me about the role, project, or idea..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                disabled={status === "sending"}
              />
            </div>

            <button
              type="submit"
              className={`submit-btn ${status === "sending" ? "loading" : ""}`}
              disabled={status === "sending"}
            >
              <span>
                {status === "sending"
                  ? "Sending Message..."
                  : status === "success"
                    ? "Sent Successfully! ✓"
                    : "Send Message"}
              </span>
              <span className="arrow">→</span>
            </button>

            {statusMessage && (
              <div
                className={`form-feedback-notice ${status === "success" ? "success" : status === "error" ? "error" : "info"
                  }`}
              >
                {statusMessage}
              </div>
            )}
          </form>
        </div>
      </div>

      {/* Now Section (anshgrover.com style) */}
      <div className="now-container">
        <div className="now-header">
          <span className="now-dot" />
          <span className="now-title">Now</span>
        </div>
        <div className="now-items-grid">
          {personalInfo.nowStatus.map((item) => (
            <div key={item.title} className="now-item">
              <span className="now-action">{item.title}</span>
              <span className="now-desc">{item.desc}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="site-footer">
        <div className="footer-left">
          <span>© 2026 Sakshi Rautela · Built with React & clean architecture</span>
        </div>
        <div className="footer-right">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            GitHub Profile ↗
          </a>
          <button onClick={scrollToTop} className="back-to-top-btn" type="button">
            <span>↑ Back to top</span>
          </button>
        </div>
      </footer>

      {/* Toast Alert */}
      {copied && (
        <div className="toast-notice">
          <span>✓</span>
          <span>Email address copied to clipboard!</span>
        </div>
      )}
    </section>
  );
}
