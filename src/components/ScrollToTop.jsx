import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scrollToHash, scrollToHero } from '../utils/scroll';

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const tryScroll = () => scrollToHash(hash, false);
      if (!tryScroll()) {
        requestAnimationFrame(tryScroll);
      }
      return;
    }
    scrollToHero(false);
  }, [pathname, hash]);

  return null;
}
