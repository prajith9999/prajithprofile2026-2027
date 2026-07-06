import { experience } from '../data/experience';
import './Experience.css';

export default function Experience() {
  return (
    <div className="page-enter experience-page">
      <section className="experience-showcase section">
        <div className="experience-showcase-shell">
          <div className="experience-grid">
            {experience.map((job) => (
              <article key={job.id} className="experience-card experience-card-item">
                <div className="experience-card-copy">
                  <div className="experience-card-top">
                    <span className="experience-card-type">{job.type}</span>
                    <span className="experience-card-period">{job.period}</span>
                  </div>
                  <h2 className="experience-card-title">{job.title}</h2>
                  <p className="experience-card-tagline">{job.tagline}</p>
                  <p className="experience-card-company">
                    {job.company} · {job.location}
                  </p>
                  <ul className="experience-highlights">
                    {job.highlights.slice(0, 4).map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <span className="experience-card-cta">Discover</span>
                </div>
                <div
                  className="experience-card-panel"
                  style={{ background: job.gradient }}
                  aria-hidden="true"
                />
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
