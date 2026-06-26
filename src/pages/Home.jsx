import { useRef } from 'react';
import { Link } from 'react-router-dom';
import AppIcon from '../components/AppIcon';
import SkillCard from '../components/SkillCard';
import ClassCard from '../components/ClassCard';
import ImageCard from '../components/ImageCard';
import { profile, summary, stats } from '../data/profile';
import { skillCategories } from '../data/skills';
import { onlineClasses } from '../data/classes';
import { images } from '../data/images';
import { useHomeGsap } from '../hooks/useHomeGsap';
import './Home.css';

export default function Home() {
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const skillsSectionRef = useRef(null);
  const skillsHeaderRef = useRef(null);
  const skillsGridRef = useRef(null);
  const skillsLineRef = useRef(null);

  useHomeGsap({
    heroRef,
    statsRef,
    skillsSectionRef,
    skillsHeaderRef,
    skillsGridRef,
    skillsLineRef,
  });

  return (
    <div className="page-enter home-page">
      <section id="hero" className="hero" ref={heroRef}>
        <div className="hero-media" aria-hidden="true">
          <video
            className="hero-video"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          >
            <source src="/13318564_3840_2160_25fps.mp4" type="video/mp4" />
          </video>
          <div className="hero-video-overlay" />
        </div>

        <div className="container hero-inner">
          <h1 className="hero-title hero-animate">
            <span className="hero-title-line">Building Scalable</span>
            <span className="hero-highlight">Technology Solutions</span>
          </h1>
          <p className="hero-description hero-animate">
            Clear, structured expertise in <strong>.NET Full Stack</strong>,{' '}
            <strong>Cloud Engineering</strong>, and <strong>DevOps</strong> — delivering
            secure, production-grade applications.
          </p>
          <ul className="hero-features hero-animate" aria-label="Core expertise">
            <li className="hero-feature hero-feature--net">
              <AppIcon name="code" size={15} />
              <span>.NET Full Stack</span>
            </li>
            <li className="hero-feature hero-feature--cloud">
              <AppIcon name="cloud" size={15} />
              <span>Cloud Engineering</span>
            </li>
            <li className="hero-feature hero-feature--devops">
              <AppIcon name="cog" size={15} />
              <span>DevOps</span>
            </li>
          </ul>
          <div className="hero-actions hero-animate">
            <Link to="/experience" className="btn btn-primary hero-btn-primary">
              <AppIcon name="briefcase" size={16} />
              View Experience
            </Link>
            <Link to="/contact" className="btn btn-outline hero-btn-outline">
              <AppIcon name="envelope" size={16} />
              Get in Touch
            </Link>
          </div>
        </div>
        <div className="hero-accent-line" aria-hidden="true" />
      </section>

      <section className="stats-bar" ref={statsRef}>
        <div className="container stats-grid">
          {[
            { ...stats[0], icon: 'briefcase' },
            { ...stats[1], icon: 'users' },
            { ...stats[2], icon: 'code' },
            { ...stats[3], icon: 'rocket' },
          ].map((stat) => (
            <div key={stat.label} className="stat-box box">
              <AppIcon name={stat.icon} size={20} className="stat-icon" />
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="skills" className="section skills-section" ref={skillsSectionRef}>
        <div className="container">
          <div className="skills-section-head" ref={skillsHeaderRef}>
            <div className="skills-header-accent skills-header-item" aria-hidden="true" />
            <div className="skills-header-copy">
              <span className="section-label skills-header-item">Core Stack</span>
              <h2 className="section-title skills-header-item">Technical Expertise</h2>
              <p className="section-subtitle skills-header-item skills-subtitle">
                Structured capabilities across frontend, backend, cloud, DevOps,
                and infrastructure — engineered for enterprise delivery.
              </p>
            </div>
          </div>
          <div className="skills-divider" ref={skillsLineRef} aria-hidden="true" />
          <div className="skills-grid" ref={skillsGridRef}>
            {skillCategories.map((skill, index) => (
              <SkillCard key={skill.id} skill={skill} showImage={false} index={index + 1} />
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
              <h2 className="section-title">Online Classes</h2>
              <p className="section-subtitle classes-subtitle">
                Live online sessions in .NET Full Stack, cloud engineering,
                and system administration with networking and Linux.
              </p>
            </div>
            <div className="classes-header-icon" aria-hidden="true">
              <AppIcon name="academic" size={40} />
            </div>
          </div>
          <div className="classes-grid">
            {onlineClasses.map((course) => (
              <ClassCard key={course.id} course={course} />
            ))}
          </div>
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
            <h2 className="section-title">I'm {profile.name}.</h2>
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

      <section id="cta" className="section cta-section">
        <div className="container">
          <div className="cta-box box">
            <h2>Ready to Work Together?</h2>
            <p>
              Open to roles in .NET development, cloud computing, and DevOps engineering.
            </p>
            <div className="cta-actions">
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Connect on LinkedIn
              </a>
              <Link to="/contact" className="btn btn-accent">Contact Me</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
