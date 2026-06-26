import { experience } from '../data/experience';
import AppIcon from '../components/AppIcon';
import './Experience.css';

export default function Experience() {
  return (
    <div className="page-enter">
      <section id="hero" className="page-hero">
        <div className="container">
          <span className="page-badge">Work History</span>
          <h1 className="page-title">Work Experience</h1>
          <p className="page-description">
            4+ years of IT experience across software development, cloud engineering,
            DevOps, and system administration roles.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="experience-timeline">
            {experience.map((job) => (
              <article key={job.id} className="experience-card">
                <div className="experience-content">
                  <div className="experience-header">
                    <div>
                      <h3>{job.title}</h3>
                      <span className="experience-company">{job.company}</span>
                    </div>
                    <div className="experience-meta">
                      <span className="experience-period">{job.period}</span>
                      <span className={`experience-type type-${job.type.toLowerCase().replace(/\s/g, '-')}`}>
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <span className="experience-location">
                    <AppIcon name="mapPin" size={16} />
                    {job.location}
                  </span>
                  <ul className="experience-highlights">
                    {job.highlights.map((item) => (
                      <li key={item}>
                        <span className="highlight-check">
                          <AppIcon name="check" size={14} />
                        </span>
                        {item}
                      </li>
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
