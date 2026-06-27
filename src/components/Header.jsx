import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import AppIcon from './AppIcon';
import Logo from './Logo';
import { profile } from '../data/profile';
import './Header.css';

const navLinks = [
  { to: '/', label: 'Home', icon: 'home' },
  { to: '/about', label: 'About', icon: 'user' },
  { to: '/', hash: '#classes', label: 'Classes', icon: 'academic' },
  { to: '/experience', label: 'Experience', icon: 'briefcase' },
  { to: '/achievements', hash: '#projects', label: 'Projects', icon: 'rocket' },
  { to: '/achievements', label: 'Certifications', icon: 'trophy' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        const isDesktop = window.matchMedia('(min-width: 901px)').matches;
        const next = isDesktop && window.scrollY > 56;
        setScrolled((prev) => (prev === next ? prev : next));
        document.documentElement.classList.toggle('header-scrolled', next);
        ticking = false;
      });
    };

    const onResize = () => {
      if (!window.matchMedia('(min-width: 901px)').matches) {
        setScrolled(false);
        document.documentElement.classList.remove('header-scrolled');
      } else {
        onScroll();
      }
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      document.documentElement.classList.remove('header-scrolled');
    };
  }, []);

  useEffect(() => {
    if (menuOpen) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = scrollbarWidth > 0 ? `${scrollbarWidth}px` : '';
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      {menuOpen && (
        <button
          type="button"
          className="nav-backdrop"
          onClick={closeMenu}
          aria-label="Close menu"
        />
      )}

      <div className="header-utility">
        <div className="container header-utility-inner">
          <Link to="/" className="header-utility-brand" onClick={closeMenu} aria-label="PM — Home">
            <span className="header-utility-brand__p">P</span>
            <span className="header-utility-brand__m">M</span>
          </Link>
          <div className="header-utility-links">
            <Link
              to={{ pathname: '/', hash: '#classes' }}
              className="header-utility-link"
              onClick={closeMenu}
            >
              <AppIcon name="shoppingBag" size={15} />
              <span>Courses</span>
            </Link>
            <Link to="/contact" className="header-utility-link" onClick={closeMenu}>
              <AppIcon name="login" size={15} />
              <span>Log In</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="header-brand">
        <div className="container header-brand-inner">
          <p className="header-brand-tagline">
            <AppIcon name="mapPin" size={13} />
            <span>{profile.title} · {profile.location}</span>
          </p>

          <Logo to="/" className="logo" onClick={closeMenu} />

          <div className="header-actions">
            <Link
              to={{ pathname: '/', hash: '#classes' }}
              className="header-icon-btn header-shop"
              aria-label="Shop courses"
              title="Shop courses"
              onClick={closeMenu}
            >
              <AppIcon name="shoppingBag" size={20} />
            </Link>
            <Link to="/contact" className="btn btn-primary header-cta" onClick={closeMenu}>
              <AppIcon name="envelope" size={16} />
              <span>Contact</span>
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

      <div className="header-nav-bar">
        <div className="container header-nav-inner">
          <nav
            className={`nav ${menuOpen ? 'nav-open' : ''}`}
            aria-label="Main navigation"
          >
            <div className="nav-mobile-tagline">
              <AppIcon name="mapPin" size={16} />
              <span>{profile.title} · {profile.location}</span>
            </div>
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.hash ? { pathname: link.to, hash: link.hash } : link.to}
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                onClick={closeMenu}
              >
                <AppIcon name={link.icon} size={16} />
                <span>{link.label}</span>
              </NavLink>
            ))}
            <div className="nav-mobile-actions">
              <Link
                to={{ pathname: '/', hash: '#classes' }}
                className="nav-mobile-link"
                onClick={closeMenu}
              >
                <AppIcon name="shoppingBag" size={20} />
                Courses
              </Link>
              <Link to="/contact" className="nav-mobile-link" onClick={closeMenu}>
                <AppIcon name="login" size={20} />
                Log In
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
