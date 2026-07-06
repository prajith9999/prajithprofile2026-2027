import gsap from 'gsap';
import { splitText, splitTextPreserveMarkup } from '../utils/splitText';
import { SCROLL_TOGGLE } from './gsapUtils';

const LINE_FROM = { yPercent: 105 };
const WORD_FROM = { yPercent: 110, opacity: 0 };

function isMobileViewport() {
  return window.matchMedia('(max-width: 768px)').matches;
}

function revealSplit(targets, options) {
  if (!targets?.length) return;

  const {
    trigger,
    type,
    scrub = false,
    start = 'top 88%',
    end = 'top 32%',
    delay = 0,
  } = options;

  const fromVars = type === 'lines' ? LINE_FROM : WORD_FROM;
  const stagger = type === 'lines' ? 0.1 : 0.028;

  if (scrub) {
    gsap.from(targets, {
      ...fromVars,
      ease: 'none',
      stagger,
      delay,
      scrollTrigger: {
        trigger,
        start,
        end,
        scrub: 0.85,
      },
    });
    return;
  }

  gsap.from(targets, {
    ...fromVars,
    duration: 1.15,
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
      gsap.set(targets, { clearProps: 'transform,opacity' });
    },
  });
}

function animateHeroIntro(hero, instances) {
  const hello = hero.querySelector('.hero-apple-hello');
  const headline = hero.querySelector('.hero-apple-headline');
  const body = hero.querySelector('.hero-apple-body');
  const actions = hero.querySelector('.hero-apple-actions');
  const blocks = [hello, headline, body].filter(Boolean);

  if (!blocks.length) return;

  blocks.forEach((el) => {
    el.dataset.heroIntro = 'true';
  });

  if (isMobileViewport()) {
    if (actions) {
      gsap.set(actions, { visibility: 'visible' });
    }

    gsap.from([...blocks, actions].filter(Boolean), {
      y: 20,
      opacity: 0,
      duration: 0.85,
      stagger: 0.1,
      ease: 'power4.out',
      delay: 0.08,
      onComplete() {
        hero.classList.add('is-animated');
      },
    });
    return;
  }

  const sequence = [
    { el: hello, type: 'lines' },
    { el: headline, type: 'lines' },
    { el: body, type: 'lines' },
  ].filter((item) => item.el?.classList.contains('split-text'));

  if (!sequence.length) return;

  const splitTargets = [];

  sequence.forEach(({ el, type }) => {
    const split = splitText(el, { type });
    instances.push(split);

    splitTargets.push({
      items: type === 'lines' ? split.lines : split.words,
      type,
    });
  });

  if (actions) {
    gsap.set(actions, { y: 32, opacity: 0, visibility: 'visible' });
  }

  const tl = gsap.timeline({
    delay: 0.12,
    defaults: { ease: 'power4.out' },
    onComplete() {
      hero.classList.add('is-animated');
    },
  });
  let position = 0;

  splitTargets.forEach(({ items, type }, index) => {
    tl.from(
      items,
      {
        yPercent: 105,
        opacity: type === 'lines' ? 1 : 0,
        duration: 1.2,
        stagger: type === 'lines' ? 0.13 : 0.035,
      },
      position,
    );
    position += index === 0 ? 0.55 : 0.42;
  });

  if (actions) {
    tl.from(
      actions,
      {
        y: 28,
        opacity: 0,
        duration: 0.95,
      },
      position - 0.15,
    );
  }
}

function animatePageTitleIntro(root, instances) {
  const title = root.querySelector('.page-hero .page-title.split-text[data-split-on="load"]');
  if (!title) return;

  title.dataset.heroIntro = 'true';
  const split = splitText(title, { type: 'lines' });
  instances.push(split);

  gsap.from(split.lines, {
    yPercent: 105,
    duration: 1.15,
    stagger: 0.12,
    ease: 'power4.out',
    delay: 0.08,
  });

  const badge = root.querySelector('.page-hero .page-badge');
  const description = root.querySelector('.page-hero .page-description');

  if (badge || description) {
    gsap.from([badge, description].filter(Boolean), {
      y: 24,
      opacity: 0,
      duration: 0.9,
      stagger: 0.1,
      ease: 'power4.out',
      delay: 0.35,
    });
  }
}

export function animateSplitText(root) {
  const instances = [];

  const hero = root.querySelector('.hero-apple');
  if (hero) {
    animateHeroIntro(hero, instances);
  }

  animatePageTitleIntro(root, instances);

  root.querySelectorAll('.split-text').forEach((el) => {
    if (el.dataset.heroIntro === 'true') return;

    let type = el.dataset.split || 'lines';
    const scrub = el.dataset.scrub === 'true';
    const onLoad = el.dataset.splitOn === 'load';

    if (isMobileViewport() && type === 'lines' && scrub) {
      type = 'words';
    }

    const split = splitText(el, { type });
    instances.push(split);

    const targets = type === 'chars'
      ? split.chars
      : type === 'lines'
        ? split.lines
        : split.words;

    if (onLoad) {
      gsap.from(targets, {
        yPercent: 105,
        opacity: type === 'lines' ? 1 : 0,
        duration: 1.15,
        stagger: type === 'lines' ? 0.12 : 0.032,
        ease: 'power4.out',
        delay: 0.1,
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
      yPercent: 115,
      opacity: 0,
      ease: 'power4.out',
      stagger: 0.14,
      duration: 1.05,
      immediateRender: false,
      scrollTrigger: {
        trigger: splitHead.closest('section') || splitHead,
        start: 'top 80%',
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
