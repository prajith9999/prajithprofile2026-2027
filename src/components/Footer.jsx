import { Link, useLocation } from 'react-router-dom';
import { profile } from '../data/profile';
import { onlineClasses } from '../data/classes';
import { scrollToHash, scrollToHero } from '../utils/scroll';
import Logo from './Logo';
import './Footer.css';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Experience', to: '/experience' },
  { label: 'Certifications', to: '/achievements' },
  { label: 'Contact', to: '/contact' },
];

const sectionLinks = [
  { label: 'Technical Expertise', to: '/', hash: '#skills' },
  { label: 'Online Classes', to: '/', hash: '#classes' },
  { label: 'About Me', to: '/', hash: '#profile' },
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
            <p className="footer-tagline">
              {profile.title} specializing in .NET Full Stack, Cloud Engineering, and DevOps.
              Based in {profile.location}.
            </p>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Navigation</h4>
            <ul>
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} onClick={handlePageNavClick(link.to)}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Sections</h4>
            <ul>
              {sectionLinks.map((section) => (
                <li key={section.label}>
                  <Link
                    to={{ pathname: section.to, hash: section.hash }}
                    onClick={handleSectionClick(section)}
                  >
                    {section.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Courses</h4>
            <ul>
              {onlineClasses.map((course) => (
                <li key={course.id}>
                  <Link to={{ pathname: '/', hash: '#classes' }}>
                    {course.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col footer-contact">
            <h4 className="footer-heading">Contact</h4>
            <ul>
              <li>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </li>
              <li>
                <a href={`tel:${profile.phone.replace(/\s/g, '')}`}>{profile.phone}</a>
              </li>
              <li>{profile.address}</li>
              <li>{profile.location}</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <div className="footer-social">
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">in</a>
            <a href={`mailto:${profile.email}`} aria-label="Email">@</a>
            <a href={`tel:${profile.phone.replace(/\s/g, '')}`} aria-label="Phone">☎</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
