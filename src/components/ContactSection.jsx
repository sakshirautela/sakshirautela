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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("sending");
    setStatusMessage("Sending your message...");

    try {
      // First attempt: Try sending via Web3Forms or FormSubmit public free endpoint for React static portfolios
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "c2c5dc51-69f8-4796-98ec-68e16e4544d6", // Public web form access key or custom email delivery
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Portfolio Message from ${formData.name}`,
          to_email: personalInfo.email,
        }),
      });

      const result = await response.json();

      if (response.ok && (result.success || result.status === 200)) {
        setStatus("success");
        setStatusMessage("Thank you! Your message has been sent successfully.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        // Fallback: Open user email client
        window.location.href = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
          `Portfolio Message from ${formData.name}`
        )}&body=${encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        )}`;
        setStatus("success");
        setStatusMessage("Opening email client to send your message...");
      }
    } catch (err) {
      console.warn("Direct send fallback to mailto:", err);
      window.location.href = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
        `Portfolio Message from ${formData.name}`
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      setStatus("success");
      setStatusMessage("Opening email client to complete sending...");
    }

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
                placeholder="Ada Lovelace"
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
                placeholder="ada@example.com"
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
                className={`form-feedback-notice ${
                  status === "success" ? "success" : status === "error" ? "error" : "info"
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
