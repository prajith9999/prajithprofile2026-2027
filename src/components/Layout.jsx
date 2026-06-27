import { useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import { useGsapPage } from '../hooks/useGsapPage';
import './Layout.css';

export default function Layout() {
  const layoutRef = useRef(null);
  const { pathname } = useLocation();

  useGsapPage(layoutRef, pathname);

  return (
    <div className="site-layout" ref={layoutRef}>
      <ScrollToTop />
      <Header />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
