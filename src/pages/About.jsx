import { profile, summary, stats } from '../data/profile';
import { education } from '../data/experience';
import { stories } from '../data/stories';
import './About.css';

const strengths = [
  { title: 'Clean Architecture', desc: 'Building scalable, secure applications with best practices and maintainable code.' },
  { title: 'Agile Delivery', desc: 'Experienced in Agile environments with cross-functional team collaboration.' },
  { title: 'Automation First', desc: 'CI/CD pipelines, IaC with Terraform, and infrastructure automation expertise.' },
  { title: 'Ownership Mindset', desc: 'Results-driven professional focused on reliable production systems and performance.' },
];

export default function About() {
  return (
    <div className="page-enter">
      <section id="hero" className="page-hero">
        <div className="container">
          <span className="page-badge">About Me</span>
          <h1 className="page-title split-text" data-split="lines" data-split-on="load">My Story</h1>
          <p className="page-description">
            Software Engineer based in {profile.location} — a journey through development,
            cloud engineering, and enterprise IT delivery.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container about-grid">
          <div className="about-content">
            <h2 className="section-title">Summary</h2>
            {summary.map((paragraph, index) => (
              <p key={index} className="about-text">{paragraph}</p>
            ))}
          </div>
          <div className="about-stats">
            {stats.map((stat) => (
              <div key={stat.label} className="about-stat box">
                <span className="about-stat-value">{stat.value}</span>
                <span className="about-stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section story-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Journey</span>
            <h2 className="section-title">Professional Story</h2>
          </div>
        </div>
        <div className="story-list">
          {stories.map((story, index) => (
            <article
              key={story.id}
              className={`story-row ${index % 2 === 1 ? 'story-row-reverse' : ''}`}
            >
              <div className="story-image">
                <img src={story.image} alt={story.title} loading="lazy" />
              </div>
              <div className={`story-content story-content--${story.theme}`}>
                <h3>{story.title}</h3>
                <p>{story.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section personal-section">
        <div className="container">
          <h2 className="section-title">Personal Details</h2>
          <div className="personal-grid">
            {[
              { label: 'Nationality', value: profile.nationality },
              { label: 'Place of Birth', value: profile.placeOfBirth },
              { label: 'Work Permit', value: profile.workPermit },
              { label: 'Location', value: profile.location },
            ].map((item) => (
              <div key={item.label} className="personal-card">
                <span className="personal-label">{item.label}</span>
                <span className="personal-value">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section values-section">
        <div className="container">
          <h2 className="section-title">Professional Strengths</h2>
          <p className="section-subtitle">The qualities that define my approach to engineering.</p>
          <div className="values-grid">
            {strengths.map((item) => (
              <div key={item.title} className="value-card box">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section education-section">
        <div className="container">
          <h2 className="section-title">Education</h2>
          <div className="education-card box">
            <div className="education-simple">
              <h3>{education.degree}</h3>
              <p className="education-institution">{education.institution}</p>
              <p className="education-location">{education.location}</p>
              <span className="education-period">{education.year}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
