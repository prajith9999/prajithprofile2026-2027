import { useState } from 'react';
import { profile } from '../data/profile';
import AppIcon from '../components/AppIcon';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="page-enter">
      <section id="hero" className="page-hero">
        <div className="container">
          <span className="page-badge">Get in Touch</span>
          <h1 className="page-title split-text" data-split="lines" data-split-on="load">Contact Me</h1>
          <p className="page-description">
            Open to opportunities in .NET development, cloud computing, and DevOps engineering.
            Feel free to reach out for collaborations or job inquiries.
          </p>
        </div>
      </section>

      <section className="section contact-section">
        <div className="container contact-grid">
          <div className="contact-info">
            <h2 className="section-title">Let's Connect</h2>
            <p className="contact-text">
              Based in {profile.location} with a Qatari work permit. Available for
              full-time roles in software engineering, cloud, and DevOps.
            </p>

            <div className="contact-details">
              {[
                { icon: 'envelope', label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
                { icon: 'phone', label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
                { icon: 'briefcase', label: 'LinkedIn', value: 'prajith-ns-b3b202190', href: profile.linkedin },
                { icon: 'mapPin', label: 'Address', value: profile.address },
              ].map((item) => (
                <div key={item.label} className="contact-detail box">
                  <span className="contact-detail-icon">
                    <AppIcon name={item.icon} size={22} />
                  </span>
                  <div>
                    <span className="contact-detail-label">{item.label}</span>
                    {item.href ? (
                      <a href={item.href} target={item.label === 'LinkedIn' ? '_blank' : undefined} rel="noopener noreferrer" className="contact-detail-value contact-link">
                        {item.value}
                      </a>
                    ) : (
                      <span className="contact-detail-value">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <form className="contact-form box" onSubmit={handleSubmit}>
            <h3>Send a Message</h3>
            {submitted && (
              <div className="form-success">
                Thank you! Your message has been sent successfully.
              </div>
            )}
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              >
                <option value="">Select a topic</option>
                <option value="job">Job Opportunity</option>
                <option value="collaboration">Collaboration</option>
                <option value="freelance">Freelance Project</option>
                <option value="classes">Online Class Enquiry</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Tell me about the opportunity..."
              />
            </div>
            <button type="submit" className="btn btn-primary form-submit">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
