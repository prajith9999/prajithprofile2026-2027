import { getLenis } from './lenis';

export function scrollToHero(smooth = true) {
  const hero = document.getElementById('hero');
  const lenis = getLenis();

  if (hero && lenis) {
    lenis.scrollTo(hero, { immediate: !smooth });
    return;
  }

  if (hero) {
    hero.scrollIntoView({ behavior: smooth ? 'smooth' : 'auto' });
    return;
  }

  if (lenis) {
    lenis.scrollTo(0, { immediate: !smooth });
    return;
  }

  window.scrollTo({ top: 0, behavior: smooth ? 'smooth' : 'auto' });
}

export function scrollToHash(hash, smooth = true) {
  if (!hash) return false;

  const id = hash.startsWith('#') ? hash.slice(1) : hash;
  const target = document.getElementById(id);
  if (!target) return false;

  const lenis = getLenis();
  if (lenis) {
    lenis.scrollTo(target, { immediate: !smooth });
    return true;
  }

  target.scrollIntoView({ behavior: smooth ? 'smooth' : 'auto' });
  return true;
}
