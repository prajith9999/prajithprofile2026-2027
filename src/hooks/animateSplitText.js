import gsap from 'gsap';
import { splitText, splitTextPreserveMarkup } from '../utils/splitText';
import { SCROLL_TOGGLE } from './gsapUtils';

function revealSplit(targets, options) {
  if (!targets?.length) return;

  const {
    trigger,
    type,
    scrub = true,
    start = 'top 85%',
    end = 'top 38%',
    delay = 0,
  } = options;

  const fromVars = type === 'lines'
    ? { yPercent: 110 }
    : { yPercent: 110, opacity: 0 };

  const stagger = type === 'lines' ? 0.11 : 0.032;

  if (scrub) {
    gsap.from(targets, {
      ...fromVars,
      ease: 'power4.out',
      stagger,
      delay,
      scrollTrigger: {
        trigger,
        start,
        end,
        scrub: 0.65,
      },
    });
    return;
  }

  gsap.from(targets, {
    ...fromVars,
    duration: 1.05,
    ease: 'power4.out',
    stagger,
    delay,
    immediateRender: false,
    scrollTrigger: {
      trigger,
      start,
      toggleActions: SCROLL_TOGGLE,
      once: true,
    },
    onComplete() {
      gsap.set(targets, { clearProps: 'transform' });
    },
  });
}

export function animateSplitText(root) {
  const instances = [];

  root.querySelectorAll('.split-text').forEach((el) => {
    const type = el.dataset.split || 'lines';
    const scrub = el.dataset.scrub === 'true';
    const onLoad = el.dataset.splitOn === 'load';
    const split = splitText(el, { type });
    instances.push(split);

    const targets = type === 'chars'
      ? split.chars
      : type === 'lines'
        ? split.lines
        : split.words;

    if (onLoad) {
      gsap.from(targets, {
        yPercent: 110,
        opacity: type === 'lines' ? 1 : 0,
        duration: 1.1,
        stagger: type === 'lines' ? 0.12 : 0.035,
        ease: 'power4.out',
        delay: 0.15,
      });
      return;
    }

    revealSplit(targets, {
      trigger: el.closest('section') || el,
      type,
      scrub,
    });
  });

  const splitHead = root.querySelector('.premium-split-head');
  if (splitHead) {
    const preserved = splitTextPreserveMarkup(splitHead);
    instances.push(preserved);

    gsap.from(preserved.words, {
      yPercent: 120,
      opacity: 0,
      ease: 'power4.out',
      stagger: 0.16,
      duration: 1,
      immediateRender: false,
      scrollTrigger: {
        trigger: splitHead.closest('section') || splitHead,
        start: 'top 82%',
        toggleActions: SCROLL_TOGGLE,
        once: true,
      },
      onComplete() {
        gsap.set(preserved.words, { clearProps: 'transform,opacity' });
      },
    });
  }

  return () => {
    instances.forEach((instance) => instance.revert?.());
  };
}
