import { useState } from 'react';
import { profile } from '../data/profile';
import AppIcon from '../components/AppIcon';
import './Contact.css';

const NAME_MAX = 50;
const NAME_MIN = 2;

const SUBJECT_LABELS = {
  job: 'Job Opportunity',
  collaboration: 'Collaboration',
  freelance: 'Freelance Project',
  classes: 'Online Class Enquiry',
  other: 'Other',
};

/** Keep letters/spaces/hyphens/apostrophes and Title Case each word. */
function formatFullName(value) {
  const cleaned = value
    .replace(/[^a-zA-Z\s'-]/g, '')
    .replace(/\s+/g, ' ')
    .slice(0, NAME_MAX);

  return cleaned.replace(/\S+/g, (word) => {
    if (!word) return word;
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });
}

function buildMailto({ name, email, subject, message }) {
  const topic = SUBJECT_LABELS[subject] || subject;
  const mailSubject = `Portfolio Contact: ${topic}`;
  const mailBody = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Topic: ${topic}`,
    '',
    message,
  ].join('\n');

  return `mailto:${profile.email}?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'name' ? formatFullName(value) : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSending(true);

    const topic = SUBJECT_LABELS[formData.subject] || formData.subject;
    const payload = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      _replyto: formData.email.trim(),
      _subject: `Portfolio Contact: ${topic}`,
      topic,
      message: formData.message.trim(),
    };

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${profile.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Unable to send email');
      }

      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } catch {
      // Fallback: open the visitor's email app addressed to you
      window.location.href = buildMailto(formData);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setError('Opened your email app as a backup — please press Send there.');
      setTimeout(() => {
        setSubmitted(false);
        setError('');
      }, 6000);
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="page-enter contact-page">
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
                { icon: 'briefcase', label: 'LinkedIn', value: 'prajith-ns-b3b202190', href: profile.linkedin, external: true },
                { icon: 'mapPin', label: 'Address', value: profile.address },
              ].map((item) => (
                <div key={item.label} className="contact-detail box">
                  <span className="contact-detail-icon">
                    <AppIcon name={item.icon} size={22} />
                  </span>
                  <div>
                    <span className="contact-detail-label">{item.label}</span>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.external ? '_blank' : undefined}
                        rel={item.external ? 'noopener noreferrer' : undefined}
                        className="contact-detail-value contact-link"
                      >
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
                Thank you! Your message is on its way to {profile.email}.
              </div>
            )}
            {error && <div className="form-error">{error}</div>}
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                minLength={NAME_MIN}
                maxLength={NAME_MAX}
                autoComplete="name"
                autoCapitalize="words"
                spellCheck="false"
                pattern="[A-Za-z][A-Za-z\s'-]{1,48}"
                title="Use normal name words, letters only (2–50 characters)"
                placeholder="e.g. John Smith"
              />
              <span className="form-hint" aria-live="polite">
                {formData.name.trim().length}/{NAME_MAX} · Normal case words
              </span>
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
                autoComplete="email"
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
                maxLength={2000}
                placeholder="Tell me about the opportunity..."
              />
            </div>
            <button type="submit" className="btn btn-primary form-submit" disabled={sending}>
              {sending ? 'Sending…' : 'Send Message'}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
