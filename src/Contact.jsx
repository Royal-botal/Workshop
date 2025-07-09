import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setStatus('Thank you for your message! We will get back to you soon.');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus('Something went wrong. Please try again later.');
      }
    } catch (error) {
      setStatus('Something went wrong. Please try again later.');
    }
  };

  return (
    <div className="contact-container">
      {/* Hero Section */}
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>We're here to help and answer any questions you might have. Reach out to us and we'll respond as soon as we can.</p>
      </section>

      {/* Main Contact Section */}
      <section className="contact-main">
        {/* Contact Info */}
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p><strong>Email:</strong> info@longterm.com</p>
          <p><strong>Phone:</strong> +254 716 597 568</p>
          <p><strong>Address:</strong> 123 Main Street, Kansas City, MO</p>
          <div className="contact-socials">
            <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
            <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
            <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form-container">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
              />
              <span className="input-border"></span>
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
              />
              <span className="input-border"></span>
            </div>
            <div className="form-group">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                title="Format: +123 4567890"
              />
              <span className="input-border"></span>
            </div>
            <div className="form-group">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="5"
                required
              ></textarea>
              <span className="input-border"></span>
            </div>
            <button type="submit" className="submit-btn">
              <span>Send Message</span>
              <i className="fas fa-paper-plane"></i>
            </button>
            {status && <div className="form-status">{status}</div>}
          </form>
        </div>
      </section>

      <footer className="contact-footer">
        <p>&copy; 2025 LongTerm. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Contact;
