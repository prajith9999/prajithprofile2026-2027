import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { scrollToHash, scrollToHero } from '../utils/scroll';

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const tryScroll = () => scrollToHash(hash, false);
      if (!tryScroll()) {
        requestAnimationFrame(tryScroll);
      }
      requestAnimationFrame(() => ScrollTrigger.refresh());
      return;
    }
    scrollToHero(false);
    requestAnimationFrame(() => ScrollTrigger.refresh());
  }, [pathname, hash]);

  return null;
}
