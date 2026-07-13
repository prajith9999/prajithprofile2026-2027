import { Link, useLocation } from 'react-router-dom';
import { profile } from '../data/profile';
import { onlineClasses } from '../data/classes';
import { scrollToHash, scrollToHero } from '../utils/scroll';
import AppIcon from './AppIcon';
import Logo from './Logo';
import './Footer.css';

const navLinks = [
  { label: 'Home', to: '/', icon: 'home' },
  { label: 'About', to: '/about', icon: 'user' },
  { label: 'Experience', to: '/experience', icon: 'briefcase' },
  { label: 'Certifications', to: '/achievements', icon: 'academic' },
  { label: 'Contact', to: '/contact', icon: 'envelope' },
];

const sectionLinks = [
  { label: 'Technical Expertise', to: '/', hash: '#skills', icon: 'code' },
  { label: 'Online Classes', to: '/', hash: '#classes', icon: 'book' },
  { label: 'About Me', to: '/', hash: '#profile', icon: 'user' },
];

export default function Footer() {
  const { pathname, hash } = useLocation();

  const handlePageNavClick = (to) => (event) => {
    if (pathname === to) {
      event.preventDefault();
      scrollToHero();
    }
  };

  const handleSectionClick = (section) => (event) => {
    const targetPath = section.to;
    const targetHash = section.hash;
    if (pathname === targetPath && hash === targetHash) {
      event.preventDefault();
      scrollToHash(targetHash);
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Logo
              to="/"
              className="footer-logo"
              onClick={handlePageNavClick('/')}
            />
            <span className="footer-kicker">Engineering · Cloud · DevOps</span>
            <p className="footer-tagline">
              {profile.title} specializing in .NET Full Stack, Cloud Engineering, and DevOps.
              Based in {profile.location}.
            </p>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading"><AppIcon name="globe" size={17} />Navigation</h4>
            <ul>
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} onClick={handlePageNavClick(link.to)}>
                    <AppIcon name={link.icon} size={16} />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading"><AppIcon name="chart" size={17} />Sections</h4>
            <ul>
              {sectionLinks.map((section) => (
                <li key={section.label}>
                  <Link
                    to={{ pathname: section.to, hash: section.hash }}
                    onClick={handleSectionClick(section)}
                  >
                    <AppIcon name={section.icon} size={16} />
                    {section.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading"><AppIcon name="academic" size={17} />Courses</h4>
            <ul>
              {onlineClasses.map((course) => (
                <li key={course.id}>
                  <Link to={{ pathname: '/', hash: '#classes' }}>
                    <AppIcon name={course.icon} size={16} />
                    {course.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col footer-contact">
            <h4 className="footer-heading"><AppIcon name="envelope" size={17} />Contact</h4>
            <ul>
              <li>
                <a href={`mailto:${profile.email}`}><AppIcon name="envelope" size={16} />{profile.email}</a>
              </li>
              <li>
                <a href={`tel:${profile.phone.replace(/\s/g, '')}`}><AppIcon name="phone" size={16} />{profile.phone}</a>
              </li>
              <li><AppIcon name="mapPin" size={16} />{profile.address}</li>
              <li><AppIcon name="globe" size={16} />{profile.location}</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <div className="footer-social">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <AppIcon name="github" size={18} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><AppIcon name="linkedin" size={17} /></a>
            <a href={profile.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><AppIcon name="instagram" size={18} /></a>
            <a href={`mailto:${profile.email}`} aria-label="Email"><AppIcon name="envelope" size={17} /></a>
            <a href={`tel:${profile.phone.replace(/\s/g, '')}`} aria-label="Phone"><AppIcon name="phone" size={17} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
