import { certifications, languages, projects } from '../data/achievements';
import { stats } from '../data/profile';
import './Achievements.css';

export default function Achievements() {
  return (
    <div className="page-enter achievements-page">
      <section id="hero" className="credentials-intro">
        <div className="container credentials-intro-inner">
          <span className="credentials-intro-label">Credentials</span>
          <h1>Certifications &amp; Projects</h1>
          <p>
            Professional certifications, academic projects, and language proficiencies
            that complement my technical expertise.
          </p>
        </div>
      </section>

      <section className="credentials-summary">
        <div className="container credentials-shell">
          <div className="achievement-stats">
            {stats.map((stat, index) => (
              <div key={stat.label} className="achievement-stat">
                <span className="achievement-stat-index">{String(index + 1).padStart(2, '0')}</span>
                <span className="achievement-stat-value">{stat.value}</span>
                <span className="achievement-stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="certifications" className="credentials-editorial-section timeline-section">
        <div className="container credentials-shell">
          <span className="editorial-kicker">Professional development</span>
          <h2 className="section-title">Certifications</h2>
          <p className="section-subtitle">Industry training and professional development credentials.</p>
          <div className="credentials-list">
            {certifications.map((item, index) => (
              <article key={item.id} className="credential-row">
                <span className="credential-index">{String(index + 1).padStart(2, '0')}</span>
                <div className="credential-meta">
                  <span className="timeline-year">{item.year}</span>
                  <span className="timeline-mode">{item.mode}</span>
                </div>
                <div className="credential-copy">
                  <h3>{item.title}</h3>
                  <span className="timeline-org">{item.organization}</span>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="credentials-editorial-section projects-section">
        <div className="container credentials-shell">
          <span className="editorial-kicker">Selected work</span>
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">Key academic and professional projects across development and cloud.</p>
          <div className="projects-list">
            {projects.map((project, index) => (
              <article key={project.id} className="project-row">
                <span className="project-index">{String(index + 1).padStart(2, '0')}</span>
                <div className="project-meta">
                  <span className="project-period">{project.period}</span>
                </div>
                <div className="project-card-body">
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

      <section className="credentials-editorial-section languages-section">
        <div className="container credentials-shell">
          <span className="editorial-kicker">Communication</span>
          <h2 className="section-title">Language Skills</h2>
          <p className="section-subtitle">
            CEFR levels: A1–A2 Basic · B1–B2 Independent · C1–C2 Proficient
          </p>
          <p className="table-scroll-hint">Swipe to view full table →</p>
          <div className="languages-table-wrapper table-scroll">
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
