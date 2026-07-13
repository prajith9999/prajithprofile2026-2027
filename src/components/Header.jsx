import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import AppIcon from './AppIcon';
import { profile } from '../data/profile';
import { scrollToHash, scrollToHero } from '../utils/scroll';
import './Header.css';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/', hash: '#classes', label: 'Classes' },
  { to: '/experience', label: 'Experience' },
  { to: '/achievements', hash: '#projects', label: 'Projects' },
  { to: '/achievements', hash: '#certifications', label: 'Certs' },
];

function isNavLinkActive(link, location) {
  if (link.hash) {
    return location.pathname === link.to && location.hash === link.hash;
  }
  if (link.to === '/') {
    return location.pathname === '/' && !location.hash;
  }
  return location.pathname === link.to;
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    document.documentElement.classList.toggle('nav-open', menuOpen);

    if (menuOpen) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = scrollbarWidth > 0 ? `${scrollbarWidth}px` : '';
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }

    return () => {
      document.documentElement.classList.remove('nav-open');
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const handleNavClick = (link) => {
    closeMenu();

    const isCurrentRoute = location.pathname === link.to;
    const isCurrentHash = (link.hash || '') === location.hash;
    if (!isCurrentRoute || !isCurrentHash) return;

    if (link.hash) {
      scrollToHash(link.hash);
    } else {
      scrollToHero();
    }
  };

  return (
    <header className={`header ${menuOpen ? 'header--menu-open' : ''}`}>
      {menuOpen && (
        <button
          type="button"
          className="nav-backdrop"
          onClick={closeMenu}
          aria-label="Close menu"
        />
      )}

      <div className="header-shell">
        <div className="header-main">
          <Link
            to="/"
            className="header-logo"
            onClick={() => handleNavClick(navLinks[0])}
            aria-label="PM — Home"
          >
            <span className="header-logo__p">P</span>
            <span className="header-logo__m">M</span>
          </Link>

          <nav
            className={`header-nav ${menuOpen ? 'header-nav--open' : ''}`}
            aria-label="Main navigation"
          >
            <div className="nav-mobile-tagline">
              <AppIcon name="mapPin" size={16} />
              <span>{profile.title} · {profile.location}</span>
            </div>
            <ul className="nav-list">
              {navLinks.map((link) => (
                <li key={link.label} className="nav-list-item">
                  <NavLink
                    to={link.hash ? { pathname: link.to, hash: link.hash } : link.to}
                    className={() =>
                      `nav-link ${isNavLinkActive(link, location) ? 'active' : ''}`
                    }
                    onClick={() => handleNavClick(link)}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="nav-mobile-actions">
              <Link to="/contact" className="nav-mobile-link" onClick={closeMenu}>
                Contact
              </Link>
              <Link
                to={{ pathname: '/', hash: '#classes' }}
                className="nav-mobile-link"
                onClick={closeMenu}
              >
                Courses
              </Link>
            </div>
          </nav>

          <div className="header-actions">
            <Link
              to={{ pathname: '/', hash: '#classes' }}
              className="header-icon-link"
              aria-label="Courses"
              title="Courses"
              onClick={closeMenu}
            >
              <AppIcon name="shoppingBag" size={17} />
            </Link>
            <Link
              to="/contact"
              className="header-icon-link"
              aria-label="Contact"
              title="Contact"
              onClick={closeMenu}
            >
              <AppIcon name="envelope" size={17} />
            </Link>
            <button
              type="button"
              className={`menu-toggle ${menuOpen ? 'open' : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
