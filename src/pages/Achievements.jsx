import { certifications, languages, projects } from '../data/achievements';
import { stats } from '../data/profile';
import AppIcon from '../components/AppIcon';
import './Achievements.css';

export default function Achievements() {
  return (
    <div className="page-enter">
      <section id="hero" className="page-hero">
        <div className="container">
          <span className="page-badge">Credentials</span>
          <h1 className="page-title">Certifications & Projects</h1>
          <p className="page-description">
            Professional certifications, academic projects, and language proficiencies
            that complement my technical expertise.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="achievement-stats">
            {stats.map((stat) => (
              <div key={stat.label} className="achievement-stat box">
                <span className="achievement-stat-value">{stat.value}</span>
                <span className="achievement-stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section timeline-section">
        <div className="container">
          <h2 className="section-title">Certifications</h2>
          <p className="section-subtitle">Industry training and professional development credentials.</p>
          <div className="timeline">
            {certifications.map((item, index) => (
              <div key={item.id} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                <div className="timeline-card box">
                  <div className="timeline-header">
                    <span className="timeline-icon">
                      <AppIcon name={item.icon} size={28} />
                    </span>
                    <span className="timeline-year">{item.year}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <span className="timeline-org">{item.organization}</span>
                  <p>{item.description}</p>
                  <span className="timeline-mode">{item.mode}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="section projects-section">
        <div className="container">
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">Key academic and professional projects across development and cloud.</p>
          <div className="projects-grid">
            {projects.map((project) => (
              <article key={project.id} className="project-card box">
                <div
                  className="project-card-gradient"
                  style={{ background: project.gradient }}
                  aria-hidden="true"
                >
                  <span className="project-gradient-number">
                    {String(project.id).padStart(2, '0')}
                  </span>
                </div>
                <div className="project-card-body">
                  <span className="project-period">{project.period}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tech">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="project-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section languages-section">
        <div className="container">
          <h2 className="section-title">Language Skills</h2>
          <p className="section-subtitle">
            CEFR levels: A1–A2 Basic · B1–B2 Independent · C1–C2 Proficient
          </p>
          <p className="table-scroll-hint">Swipe to view full table →</p>
          <div className="languages-table-wrapper box table-scroll">
            <table className="languages-table">
              <thead>
                <tr>
                  <th>Language</th>
                  <th>Level</th>
                  <th>Listening</th>
                  <th>Reading</th>
                  <th>Speaking</th>
                  <th>Writing</th>
                </tr>
              </thead>
              <tbody>
                {languages.map((lang) => (
                  <tr key={lang.name}>
                    <td className="lang-name">{lang.name}</td>
                    <td><span className="lang-level">{lang.level}</span></td>
                    <td>{lang.listening}</td>
                    <td>{lang.reading}</td>
                    <td>{lang.speaking}</td>
                    <td>{lang.writing}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
