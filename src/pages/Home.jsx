import { Link } from 'react-router-dom';
import AppIcon from '../components/AppIcon';
import SkillCard from '../components/SkillCard';
import ClassCard from '../components/ClassCard';
import ImageCard from '../components/ImageCard';
import { profile, summary, stats } from '../data/profile';
import { skillCategories } from '../data/skills';
import { onlineClasses } from '../data/classes';
import { images } from '../data/images';
import { insightCards, prefooterHeadline } from '../data/insights';
import './Home.css';

export default function Home() {
  return (
    <div className="page-enter home-page">
      <section id="hero" className="hero-apple" aria-label="Introduction">
        <div className="container hero-apple-inner">
          <p className="hero-apple-hello split-text" data-split="lines">
            Hey there
          </p>
          <h1 className="hero-apple-headline split-text" data-split="lines">
            I&apos;m Prajith. Your go-to engineer for scalable digital products.
          </h1>
          <p className="hero-apple-body split-text" data-split="lines">
            {profile.title} based in {profile.location} — .NET Full Stack, cloud, and DevOps
            with a focus on secure, production-ready delivery.
          </p>
          <div className="hero-apple-actions gsap-reveal-item">
            <Link to="/experience" className="hero-apple-cta hero-apple-cta--primary">
              View Experience
            </Link>
            <Link to="/contact" className="hero-apple-cta hero-apple-cta--ghost">
              Say Hello
            </Link>
          </div>
        </div>
      </section>

      <section className="premium-statement">
        <div className="container premium-statement-inner">
          <p className="premium-eyebrow split-text" data-split="words" data-scrub="false">
            {profile.title} · {profile.location}
          </p>
          <h1
            className="premium-gradient-headline split-text"
            data-split="lines"
            data-scrub="true"
          >
            Enterprise Engineering.
          </h1>
          <p
            className="premium-statement-sub split-text"
            data-split="lines"
            data-scrub="true"
          >
            Built for scale. Delivered with precision.
          </p>
        </div>
      </section>

      <section className="premium-split">
        <div className="container premium-split-grid">
          <div className="premium-split-head" aria-hidden="false">
            <span className="gsap-word">Build.</span>
            <span className="gsap-word">Deploy.</span>
            <span className="gsap-word">Scale.</span>
          </div>
          <div className="premium-split-body">
            <p className="premium-lead gsap-reveal-item">
              <strong>Production-grade systems across the full stack.</strong>
              {' '}
              .NET Full Stack, cloud, and DevOps — secure, scalable delivery for enterprise teams.
            </p>
            <ul className="premium-pills gsap-reveal-item" aria-label="Core expertise">
              <li className="premium-pill">
                <AppIcon name="code" size={15} />
                <span>.NET Full Stack</span>
              </li>
              <li className="premium-pill">
                <AppIcon name="cloud" size={15} />
                <span>Cloud Engineering</span>
              </li>
              <li className="premium-pill">
                <AppIcon name="cog" size={15} />
                <span>DevOps</span>
              </li>
            </ul>
            <div className="premium-actions gsap-reveal-item">
              <Link to="/experience" className="premium-link premium-link--solid">
                View Experience
                <AppIcon name="arrowUp" size={14} />
              </Link>
              <Link to="/contact" className="premium-link">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="premium-slide">
        <div className="premium-slide-panel">
          <div className="premium-visual-copy">
            <h2 className="premium-display split-text" data-split="lines" data-scrub="true">
              Engineer Anything.
            </h2>
            <p className="premium-visual-text gsap-reveal-item">
              From React frontends to Azure deployments — I design, build, and automate
              systems that perform in production.
            </p>
          </div>
        </div>
        <div className="premium-slide-stats stats-bar">
          <div className="container">
            <div className="home-stats-minimal">
              {[
                { ...stats[0], icon: 'briefcase', gradient: 'linear-gradient(145deg, #0071e3 0%, #2997ff 100%)', tone: 'dark' },
                { ...stats[1], icon: 'users', gradient: 'linear-gradient(145deg, #6d28d9 0%, #8b5cf6 100%)', tone: 'dark' },
                { ...stats[2], icon: 'code', gradient: 'linear-gradient(145deg, #3a3a3c 0%, #86868b 100%)', tone: 'dark' },
                { ...stats[3], icon: 'rocket', gradient: 'linear-gradient(145deg, #d4c4b0 0%, #f5f0e8 100%)', tone: 'light' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className={`stat-minimal stat-box color-glass-card stat-card${stat.tone === 'light' ? ' color-glass-card--starlight stat-card--light' : ''}`}
                  style={{ background: stat.gradient }}
                >
                  <AppIcon name={stat.icon} size={36} className="stat-minimal-icon" />
                  <span
                    className="stat-minimal-value"
                    {...(stat.count != null
                      ? {
                          'data-stat-count': stat.count,
                          'data-stat-suffix': stat.suffix ?? '',
                        }
                      : {})}
                    aria-label={stat.value}
                  >
                    {stat.count != null ? `0${stat.suffix ?? ''}` : stat.value}
                  </span>
                  <span className="stat-minimal-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="section skills-section">
        <div className="container">
          <div className="skills-section-head">
            <div className="skills-header-accent skills-header-item" aria-hidden="true" />
            <div className="skills-header-copy">
              <span className="section-label skills-header-item">Core Stack</span>
              <h2 className="section-title skills-header-item split-text" data-split="lines" data-scrub="true">
                Technical Expertise
              </h2>
              <p className="section-subtitle skills-header-item skills-subtitle">
                Structured capabilities across frontend, backend, cloud, DevOps,
                and infrastructure — engineered for enterprise delivery.
              </p>
            </div>
          </div>
        </div>
        <div className="skills-showcase">
          <div className="skills-grid">
            {skillCategories.map((skill) => (
              <SkillCard key={skill.id} skill={skill} />
            ))}
          </div>
        </div>
      </section>

      <section id="classes" className="section classes-section">
        <div className="container">
          <div className="classes-section-head">
            <div className="classes-header-accent" aria-hidden="true" />
            <div className="classes-header-copy">
              <span className="section-label">Training Programs</span>
              <h2 className="section-title split-text" data-split="lines" data-scrub="true">Online Classes</h2>
              <p className="section-subtitle classes-subtitle">
                Live online sessions in .NET Full Stack, cloud engineering,
                and system administration with networking and Linux.
              </p>
            </div>
            <div className="classes-header-icon" aria-hidden="true">
              <AppIcon name="academic" size={40} />
            </div>
          </div>
        </div>
        <div className="classes-showcase">
          <div className="classes-grid">
            {onlineClasses.map((course) => (
              <ClassCard key={course.id} course={course} />
            ))}
          </div>
        </div>
        <div className="container">
          <div className="classes-cta">
            <p>Interested in enrolling or custom corporate training?</p>
            <Link to="/contact" className="btn btn-primary">Enquire About Classes</Link>
          </div>
        </div>
      </section>

      <section id="profile" className="section about-snippet">
        <div className="container about-snippet-grid">
          <div className="about-snippet-image">
            <ImageCard
              src={images.developer}
              alt="Working on laptop"
              title="Hands-On Development"
              caption="React · .NET · Cloud"
            />
          </div>
          <div className="about-snippet-text">
            <span className="section-label">Hello,</span>
            <h2 className="section-title gsap-reveal-item">
              I'm {profile.name}.
            </h2>
            <p>{summary[0]}</p>
            <p>{summary[1]}</p>
            <Link to="/about" className="btn btn-outline about-snippet-btn">Read Full Profile</Link>
          </div>
          <div className="about-snippet-card box">
            <div className="snippet-row">
              <span className="snippet-key">Role</span>
              <span className="snippet-val">{profile.title}</span>
            </div>
            <div className="snippet-row">
              <span className="snippet-key">Location</span>
              <span className="snippet-val">{profile.location}</span>
            </div>
            <div className="snippet-row">
              <span className="snippet-key">Work Permit</span>
              <span className="snippet-val">{profile.workPermit}</span>
            </div>
            <div className="snippet-row">
              <span className="snippet-key">Education</span>
              <span className="snippet-val">MCA</span>
            </div>
            <div className="snippet-row">
              <span className="snippet-key">Stack</span>
              <span className="snippet-val">{profile.tagline}</span>
            </div>
          </div>
        </div>
      </section>

      <section id="cta" className="section home-prefooter">
        <div className="philosophy-slide">
          <div className="philosophy-slide-copy">
            <span className="philosophy-label gsap-reveal-item">{prefooterHeadline.label}</span>
            <h2 className="philosophy-headline">
              {prefooterHeadline.text}
              <span className="philosophy-headline-accent">{prefooterHeadline.highlight}</span>
              {prefooterHeadline.punctuation}
            </h2>
            <div className="philosophy-actions gsap-reveal-item">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="philosophy-link btn btn-primary"
              >
                <AppIcon name="briefcase" size={18} />
                Connect on LinkedIn
              </a>
              <Link to="/contact" className="philosophy-link btn btn-outline">
                <AppIcon name="envelope" size={18} />
                Contact Me
              </Link>
            </div>
          </div>
        </div>

        <div className="container home-prefooter-inner">
          <div className="insight-cards-grid">
            {insightCards.map((card) => (
              <article
                key={card.id}
                className={`insight-card stat-box color-glass-card${card.tone === 'light' ? ' color-glass-card--starlight' : ''}`}
                style={{ background: card.gradient }}
              >
                <div className="insight-card-visual color-glass-card__header" aria-hidden="true">
                  <AppIcon name={card.icon} size={40} className="insight-card-icon" />
                </div>
                <div className="insight-card-body color-glass-card__body">
                  <span className="insight-card-label">{card.label}</span>
                  <h3 className="insight-card-title">{card.title}</h3>
                  <span className="insight-card-meta">{card.meta}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
