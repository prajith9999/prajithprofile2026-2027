import { useEffect } from 'react';
import gsap from 'gsap';
import {
  prefersReducedMotion,
  scrollFadeUp,
  scrollScaleX,
  scrollParallax,
  scrollScaleReveal,
  animateStatCounters,
  SCROLL_START,
  SCROLL_TOGGLE,
} from './gsapUtils';
import { animateSplitText } from './animateSplitText';

const CARD_SELECTORS = [
  '.stat-box',
  '.skill-card-item',
  '.class-card',
  '.project-card',
  '.achievement-stat',
  '.about-stat',
  '.value-card',
  '.personal-card',
  '.contact-detail',
  '.education-card',
  '.cta-box',
  '.insight-card',
  '.classes-cta',
  '.about-snippet-image',
  '.about-snippet-card',
  '.about-content',
  '.about-stats',
  '.languages-table-wrapper',
  '.contact-form',
  '.experience-card-item',
  '.values-strength-card',
  '.timeline-card',
  '.values-hero-cards',
].join(', ');

const HEADER_SELECTORS = [
  '.section-label',
  '.section-title',
  '.section-subtitle',
  '.skills-header-item',
  '.classes-header-accent',
  '.classes-header-copy > *',
  '.classes-header-icon',
].join(', ');

function animatePageHero(root) {
  const hero = root.querySelector('.page-hero .container');
  if (!hero) return;

  if (hero.querySelector('.page-title.split-text[data-split-on="load"]')) {
    return;
  }

  const items = hero.querySelectorAll(
    '.page-badge, .page-title:not(.split-text), .page-description',
  );
  if (!items.length) return;

  gsap.from(items, {
    y: 40,
    opacity: 0,
    duration: 0.95,
    stagger: 0.12,
    ease: 'power4.out',
    delay: 0.05,
  });
}

function animateHomeLanding(root) {
  if (!root.querySelector('.home-page')) return;

  const landing = root.querySelector('.hero-landing-bg, .hero-video');
  if (landing) {
    gsap.from(landing, {
      scale: 1.08,
      opacity: 0,
      duration: 1.35,
      ease: 'power2.out',
    });
  }

  const statementLines = root.querySelectorAll(
    '.premium-statement .gsap-line:not(.split-text)',
  );
  if (statementLines.length) {
    gsap.from(statementLines, {
      y: 48,
      opacity: 0,
      duration: 1,
      stagger: 0.14,
      ease: 'power3.out',
      delay: landing ? 0.25 : 0.1,
    });
  }

  const splitWords = root.querySelectorAll('.premium-split .gsap-word:not(.is-split)');
  const splitSection = root.querySelector('.premium-split');
  if (splitWords.length && splitSection && !root.querySelector('.premium-split-head .is-split')) {
    gsap.from(splitWords, {
      scrollTrigger: {
        trigger: splitSection,
        start: 'top 78%',
        toggleActions: SCROLL_TOGGLE,
      },
      y: 72,
      opacity: 0,
      duration: 0.95,
      stagger: 0.12,
      ease: 'power3.out',
    });
  }

  root.querySelectorAll('.premium-split .gsap-reveal-item').forEach((item, index) => {
    gsap.from(item, {
      scrollTrigger: {
        trigger: item,
        start: 'top 88%',
        toggleActions: SCROLL_TOGGLE,
      },
      y: 32,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      delay: index * 0.06,
    });
  });

  const visualSection = root.querySelector('.premium-slide, .premium-visual');
  const visualLine = root.querySelector(
    '.premium-slide .gsap-line:not(.split-text), .premium-visual .gsap-line:not(.split-text)',
  );
  if (visualLine && visualSection) {
    gsap.from(visualLine, {
      scrollTrigger: {
        trigger: visualSection,
        start: 'top 80%',
        toggleActions: SCROLL_TOGGLE,
      },
      y: 56,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    });
  }

  root.querySelectorAll('.premium-slide .gsap-reveal-item, .premium-visual .gsap-reveal-item').forEach((item) => {
    gsap.from(item, {
      scrollTrigger: {
        trigger: item,
        start: 'top 88%',
        toggleActions: SCROLL_TOGGLE,
      },
      y: 28,
      opacity: 0,
      duration: 0.75,
      ease: 'power3.out',
    });
  });

  const premiumStats = root.querySelector('.premium-slide-stats');
  if (premiumStats) {
    animateStatCounters(root);
  }

  const ctaSection = root.querySelector('.home-prefooter, .premium-cta');
  const philosophySlide = root.querySelector('.philosophy-slide');
  const philosophyHeadline = root.querySelector('.philosophy-headline');

  if (philosophyHeadline && philosophySlide) {
    gsap.from(philosophyHeadline, {
      scrollTrigger: {
        trigger: philosophySlide,
        start: 'top 82%',
        toggleActions: SCROLL_TOGGLE,
        once: true,
      },
      y: 32,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    });
  }

  const ctaLines = root.querySelectorAll('.home-prefooter .gsap-line:not(.split-text)');

  if (ctaLines.length && ctaSection) {
    gsap.from(ctaLines, {
      scrollTrigger: {
        trigger: ctaSection,
        start: 'top 82%',
        toggleActions: SCROLL_TOGGLE,
      },
      y: 40,
      opacity: 0,
      duration: 0.9,
      ease: 'power3.out',
    });
  }

  root.querySelectorAll('.home-prefooter .gsap-reveal-item, .premium-cta .gsap-reveal-item').forEach((item, index) => {
    if (!ctaSection) return;
    if (item.classList.contains('philosophy-headline')) return;
    gsap.from(item, {
      scrollTrigger: {
        trigger: ctaSection,
        start: 'top 80%',
        toggleActions: SCROLL_TOGGLE,
        once: true,
      },
      y: 24,
      opacity: 0,
      duration: 0.75,
      ease: 'power3.out',
      delay: 0.15 + index * 0.08,
    });
  });

  const snippetText = root.querySelector('.about-snippet-text');
  const snippetSection = root.querySelector('.about-snippet');
  if (snippetText && snippetSection) {
    const snippetItems = snippetText.querySelectorAll(
      '.section-label, .section-title, p, .about-snippet-btn',
    );
    if (snippetItems.length) {
      gsap.from(snippetItems, {
        scrollTrigger: {
          trigger: snippetSection,
          start: 'top 85%',
          toggleActions: SCROLL_TOGGLE,
          once: true,
        },
        y: 28,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
      });
    }
  }

  const prefooter = root.querySelector('.home-prefooter');
  const insightCards = root.querySelectorAll('.insight-card');
  if (prefooter && insightCards.length) {
    gsap.from(insightCards, {
      scrollTrigger: {
        trigger: prefooter,
        start: 'top 82%',
        toggleActions: SCROLL_TOGGLE,
      },
      y: 36,
      opacity: 0,
      duration: 0.85,
      stagger: 0.12,
      ease: 'power3.out',
    });
  }
}

function animateSectionHeaders(root) {
  root.querySelectorAll('.section, .stats-bar, .premium-statement, .premium-split').forEach((section) => {
    const header = section.querySelector(
      '.section-header, .skills-section-head, .classes-section-head',
    );
    if (!header) return;

    const items = header.querySelectorAll(HEADER_SELECTORS);
    const filtered = Array.from(items).filter((el) => !el.classList.contains('split-text'));
    if (!filtered.length) return;

    scrollFadeUp(filtered, section, {
      start: 'top 82%',
      y: 30,
      stagger: 0.1,
    });
  });

  root.querySelectorAll('.section > .container').forEach((container) => {
    const section = container.closest('.section');
    if (!section) return;
    if (section.querySelector('.section-header, .skills-section-head, .classes-section-head')) {
      return;
    }

    const titles = container.querySelectorAll(
      ':scope > .section-title:not(.split-text), :scope > .section-subtitle, :scope > .table-scroll-hint',
    );
    if (titles.length) {
      scrollFadeUp(titles, section, { y: 28, stagger: 0.08 });
    }
  });
}

function animateCardsInSections(root) {
  root.querySelectorAll('.section, .stats-bar, .premium-slide-stats, .premium-slide').forEach((section) => {
    const cards = section.querySelectorAll(CARD_SELECTORS);
    if (!cards.length) return;

    if (section.classList.contains('premium-slide-stats') || section.classList.contains('premium-slide')) return;
    if (section.classList.contains('home-prefooter')) return;

    gsap.from(cards, {
      immediateRender: false,
      scrollTrigger: {
        trigger: section,
        start: SCROLL_START,
        toggleActions: SCROLL_TOGGLE,
        once: true,
      },
      y: 56,
      opacity: 0,
      scale: 0.98,
      duration: 0.95,
      stagger: {
        amount: Math.min(0.72, cards.length * 0.09),
        from: 'start',
      },
      ease: 'power4.out',
    });
  });
}

function animateStoryRows(root) {
  root.querySelectorAll('.story-row').forEach((row, index) => {
    const image = row.querySelector('.story-image');
    const content = row.querySelector('.story-content');
    const imageX = index % 2 === 0 ? -48 : 48;
    const contentX = -imageX;

    if (image) {
      gsap.from(image, {
        immediateRender: false,
        scrollTrigger: {
          trigger: row,
          start: SCROLL_START,
          toggleActions: SCROLL_TOGGLE,
          once: true,
        },
        x: imageX,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
      });
    }

    if (content) {
      gsap.from(content, {
        immediateRender: false,
        scrollTrigger: {
          trigger: row,
          start: SCROLL_START,
          toggleActions: SCROLL_TOGGLE,
          once: true,
        },
        x: contentX,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        delay: 0.08,
      });
    }
  });
}

function animateBackgroundGradient(root) {
  const mesh = root.querySelector('.bg-gradient-mesh');
  const blobs = root.querySelectorAll('.bg-gradient-blob');
  const videoLayer = root.querySelector('.bg-video-layer');
  const video = root.querySelector('.bg-video');
  const fluidLayer = root.querySelector('.bg-fluid-layer');
  const tint = root.querySelector('.bg-gradient-tint');

  const scrollTriggerBase = {
    trigger: document.documentElement,
    start: 'top top',
    end: 'bottom bottom',
  };

  if (videoLayer) {
    gsap.fromTo(
      videoLayer,
      { scale: 1.08, yPercent: -6 },
      {
        scale: 1.22,
        yPercent: 10,
        ease: 'none',
        scrollTrigger: {
          ...scrollTriggerBase,
          scrub: 1.1,
        },
      },
    );
  }

  if (video && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const bindScrollVideo = () => {
      if (!video.duration || Number.isNaN(video.duration)) return;

      gsap.to(video, {
        currentTime: video.duration,
        ease: 'none',
        scrollTrigger: {
          ...scrollTriggerBase,
          scrub: 0.65,
        },
      });
    };

    if (video.readyState >= 1) {
      bindScrollVideo();
    } else {
      video.addEventListener('loadedmetadata', bindScrollVideo, { once: true });
    }
  }

  if (fluidLayer) {
    gsap.to(fluidLayer, {
      yPercent: 14,
      rotation: 2,
      ease: 'none',
      scrollTrigger: {
        ...scrollTriggerBase,
        scrub: 1.5,
      },
    });
  }

  if (tint) {
    gsap.fromTo(
      tint,
      { opacity: 0.85 },
      {
        opacity: 1,
        ease: 'none',
        scrollTrigger: {
          ...scrollTriggerBase,
          scrub: 1.2,
        },
      },
    );
  }

  if (mesh) {
    gsap.to(mesh, {
      yPercent: 18,
      ease: 'none',
      scrollTrigger: {
        ...scrollTriggerBase,
        scrub: 1.4,
      },
    });
  }

  blobs.forEach((blob, index) => {
    gsap.to(blob, {
      y: (index + 1) * 80,
      x: index % 2 === 0 ? 40 : -40,
      ease: 'none',
      scrollTrigger: {
        ...scrollTriggerBase,
        scrub: 1.8 + index * 0.2,
      },
    });
  });
}

function animateParallax(root) {
  root.querySelectorAll('.about-snippet-image, .story-image').forEach((block) => {
    const section = block.closest('section') || block;
    scrollParallax([block], section, { from: -12, to: 12, scrub: 1.2 });
  });

  root.querySelectorAll('.premium-slide-panel').forEach((panel) => {
    scrollParallax([panel], panel.closest('section') || panel, {
      from: -6,
      to: 6,
      scrub: 1.4,
    });
  });

  const snippetCard = root.querySelector('.about-snippet-card');
  if (snippetCard) {
    scrollScaleReveal([snippetCard], snippetCard.closest('section') || snippetCard, {
      scale: 1.04,
      y: 56,
    });
  }
}

function animateDividers(root) {
  const skillsShowcase = root.querySelector('.skills-showcase');
  const skillsSection = root.querySelector('.skills-section');
  if (skillsShowcase && skillsSection) {
    scrollFadeUp([skillsShowcase], skillsSection, { y: 24, stagger: 0 });
  }
}

function animateContactSection(root) {
  const contactInfo = root.querySelector('.contact-info');
  const contactGrid = root.querySelector('.contact-grid');
  if (!contactInfo || !contactGrid) return;

  scrollFadeUp(
    contactInfo.querySelectorAll('.section-title, .contact-text'),
    contactGrid,
    { y: 28, stagger: 0.1 },
  );
}

function animateFooter(root) {
  const footer = root.querySelector('.footer');
  if (!footer) return;

  const columns = footer.querySelectorAll('.footer-col');
  if (columns.length) {
    scrollFadeUp(columns, footer, {
      start: 'top 92%',
      y: 24,
      stagger: 0.08,
      duration: 0.7,
    });
  }

  const bottom = footer.querySelector('.footer-bottom');
  if (bottom) {
    scrollFadeUp(bottom, footer, {
      start: 'top 95%',
      y: 16,
      duration: 0.6,
    });
  }
}

function animateExperienceTimeline(root) {
  root.querySelectorAll('.experience-card-item, .experience-card').forEach((card) => {
    gsap.from(card, {
      immediateRender: false,
      scrollTrigger: {
        trigger: card,
        start: 'top 88%',
        toggleActions: SCROLL_TOGGLE,
        once: true,
      },
      y: 56,
      opacity: 0,
      duration: 0.9,
      ease: 'power3.out',
    });
  });
}

function animateInnerPages(root) {
  const page = root.querySelector('.page-enter:not(.home-page)');
  if (!page) return;

  page.querySelectorAll('.section').forEach((section) => {
    const header = section.querySelector(
      ':scope > .container > .section-title, :scope > .container > .section-header, :scope > .container > .section-subtitle',
    );
    const target = header || section.querySelector(':scope > .container');
    if (!target) return;

    gsap.from(target, {
      immediateRender: false,
      scrollTrigger: {
        trigger: section,
        start: 'top 88%',
        toggleActions: SCROLL_TOGGLE,
        once: true,
      },
      y: 40,
      opacity: 0,
      duration: 0.85,
      ease: 'power3.out',
    });
  });

  const valuesHero = page.querySelector('.values-hero');
  if (valuesHero) {
    gsap.from(valuesHero.querySelectorAll('.values-hero-headline, .values-hero-cards, .values-hero-bottom'), {
      immediateRender: false,
      scrollTrigger: {
        trigger: valuesHero,
        start: 'top 85%',
        toggleActions: SCROLL_TOGGLE,
        once: true,
      },
      y: 44,
      opacity: 0,
      duration: 0.85,
      stagger: 0.12,
      ease: 'power3.out',
    });
  }

  const experienceShowcase = page.querySelector('.experience-showcase');
  if (experienceShowcase) {
    scrollFadeUp([experienceShowcase], experienceShowcase, { y: 32, start: 'top 92%' });
  }
}

function animateTimelineItems(root) {
  root.querySelectorAll('.timeline-item').forEach((item) => {
    gsap.from(item, {
      immediateRender: false,
      scrollTrigger: {
        trigger: item,
        start: 'top 88%',
        toggleActions: SCROLL_TOGGLE,
        once: true,
      },
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
    });
  });
}

export function useGsapPage(rootRef, routeKey, isHome = routeKey === '/') {
  useEffect(() => {
    const root = rootRef.current;
    if (!root || prefersReducedMotion()) return;

    let revertSplit = () => {};

    const ctx = gsap.context(() => {
      revertSplit = animateSplitText(root) ?? (() => {});
      animateHomeLanding(root);
      animatePageHero(root);
      animateBackgroundGradient(root);
      animateParallax(root);
      animateSectionHeaders(root);
      if (isHome) {
        animateDividers(root);
      }
      animateCardsInSections(root);
      animateStoryRows(root);
      animateExperienceTimeline(root);
      animateTimelineItems(root);
      animateContactSection(root);
      animateFooter(root);
      if (!isHome) {
        animateInnerPages(root);
      }
    }, root);

    return () => {
      revertSplit();
      ctx.revert();
    };
  }, [rootRef, routeKey, isHome]);
}
