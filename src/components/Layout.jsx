import { useRef, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import { useGsapPage } from '../hooks/useGsapPage';
import './Layout.css';

export default function Layout() {
  const layoutRef = useRef(null);
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  useGsapPage(layoutRef, pathname, isHome);

  useEffect(() => {
    document.documentElement.classList.toggle('site-theme-inner', !isHome);
    return () => document.documentElement.classList.remove('site-theme-inner');
  }, [isHome]);

  return (
    <div className={`site-layout ${isHome ? '' : 'site-layout--inner'}`} ref={layoutRef}>
      <ScrollToTop />
      <Header />
      <main className={`main-content ${isHome ? '' : 'main-content--inner'}`}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
