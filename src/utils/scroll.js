export function scrollToHero(smooth = true) {
  const hero = document.getElementById('hero');
  if (hero) {
    hero.scrollIntoView({ behavior: smooth ? 'smooth' : 'auto' });
    return;
  }
  window.scrollTo({ top: 0, behavior: smooth ? 'smooth' : 'auto' });
}

export function scrollToHash(hash, smooth = true) {
  if (!hash) return false;
  const id = hash.startsWith('#') ? hash.slice(1) : hash;
  const target = document.getElementById(id);
  if (!target) return false;
  target.scrollIntoView({ behavior: smooth ? 'smooth' : 'auto' });
  return true;
}
