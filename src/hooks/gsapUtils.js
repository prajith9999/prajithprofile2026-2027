import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export const SCROLL_START = 'top 85%';
export const SCROLL_TOGGLE = 'play none none none';

export function scrollFadeUp(elements, trigger, options = {}) {
  if (!elements?.length || !trigger) return;

  gsap.from(elements, {
    scrollTrigger: {
      trigger,
      start: options.start ?? SCROLL_START,
      toggleActions: SCROLL_TOGGLE,
    },
    y: options.y ?? 36,
    opacity: 0,
    duration: options.duration ?? 0.8,
    stagger: options.stagger ?? 0.1,
    ease: options.ease ?? 'power3.out',
    delay: options.delay ?? 0,
  });
}

export function scrollScaleX(element, trigger, options = {}) {
  if (!element || !trigger) return;

  gsap.from(element, {
    scrollTrigger: {
      trigger,
      start: options.start ?? 'top 80%',
      toggleActions: SCROLL_TOGGLE,
    },
    scaleX: 0,
    transformOrigin: options.origin ?? 'left center',
    duration: options.duration ?? 1,
    ease: options.ease ?? 'power3.inOut',
    delay: options.delay ?? 0,
  });
}

export function animateStatCounters(root) {
  const section = root.querySelector('.premium-slide-stats');
  if (!section) return;

  if (prefersReducedMotion()) {
    root.querySelectorAll('.stat-minimal-value[data-stat-count]').forEach((el) => {
      el.textContent = `${el.dataset.statCount}${el.dataset.statSuffix || ''}`;
    });
    return;
  }

  root.querySelectorAll('.stat-minimal-value[data-stat-count]').forEach((el, index) => {
    const target = Number(el.dataset.statCount);
    const suffix = el.dataset.statSuffix || '';
    const counter = { val: 0 };

    gsap.to(counter, {
      val: target,
      duration: 2.2,
      ease: 'power2.out',
      delay: index * 0.12,
      scrollTrigger: {
        trigger: section,
        start: 'top 85%',
        toggleActions: SCROLL_TOGGLE,
        once: true,
      },
      onUpdate() {
        el.textContent = `${Math.round(counter.val)}${suffix}`;
      },
    });
  });

  root.querySelectorAll('.stat-minimal-value:not([data-stat-count])').forEach((el, index) => {
    gsap.from(el, {
      scrollTrigger: {
        trigger: section,
        start: 'top 85%',
        toggleActions: SCROLL_TOGGLE,
        once: true,
      },
      opacity: 0,
      y: 24,
      duration: 1,
      delay: index * 0.12,
      ease: 'power3.out',
    });
  });

  const statExtras = section.querySelectorAll('.stat-minimal-icon, .stat-minimal-label');
  if (statExtras.length) {
    gsap.from(statExtras, {
      scrollTrigger: {
        trigger: section,
        start: 'top 85%',
        toggleActions: SCROLL_TOGGLE,
        once: true,
      },
      y: 20,
      opacity: 0,
      duration: 0.85,
      stagger: 0.06,
      ease: 'power3.out',
    });
  }
}
