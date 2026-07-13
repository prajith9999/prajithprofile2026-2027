import { experience } from '../data/experience';
import './Experience.css';

export default function Experience() {
  return (
    <div className="page-enter experience-page">
      <section id="hero" className="experience-intro">
        <div className="container experience-intro-inner">
          <span className="experience-intro-label">Career</span>
          <h1>Professional Experience</h1>
          <p>
            Engineering secure applications, cloud platforms, and reliable infrastructure
            across enterprise environments.
          </p>
        </div>
      </section>

      <section className="experience-showcase section">
        <div className="container experience-showcase-shell">
          <div className="experience-grid">
            {experience.map((job, index) => (
              <article key={job.id} className="experience-card experience-card-item">
                <span className="experience-index">{String(index + 1).padStart(2, '0')}</span>
                <div className="experience-card-meta">
                  <span className="experience-card-type">{job.type}</span>
                  <span className="experience-card-period">{job.period}</span>
                  <p className="experience-card-company">
                    {job.company}<br />{job.location}
                  </p>
                </div>
                <div className="experience-card-copy">
                  <h2 className="experience-card-title">{job.title}</h2>
                  <p className="experience-card-tagline">{job.tagline}</p>
                  <ul className="experience-highlights">
                    {job.highlights.slice(0, 4).map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
