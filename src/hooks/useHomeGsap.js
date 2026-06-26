import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useHomeGsap(refs) {
  useEffect(() => {
    const {
      heroRef,
      statsRef,
      skillsSectionRef,
      skillsHeaderRef,
      skillsGridRef,
      skillsLineRef,
    } = refs;

    const ctx = gsap.context(() => {
      const heroItems = heroRef.current?.querySelectorAll('.hero-animate');
      if (heroItems?.length) {
        gsap.from(heroItems, {
          y: 20,
          opacity: 0,
          duration: 0.85,
          stagger: 0.1,
          ease: 'power2.out',
          delay: 0.1,
        });
      }

      const statBoxes = statsRef.current?.querySelectorAll('.stat-box');
      if (statBoxes?.length) {
        gsap.from(statBoxes, {
          scrollTrigger: {
            trigger: statsRef.current,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
          y: 28,
          opacity: 0,
          duration: 0.75,
          stagger: 0.1,
          ease: 'power2.out',
        });
      }

      const headerItems = skillsHeaderRef.current?.querySelectorAll('.skills-header-item');
      if (headerItems?.length && skillsSectionRef.current) {
        gsap.from(headerItems, {
          scrollTrigger: {
            trigger: skillsSectionRef.current,
            start: 'top 78%',
            toggleActions: 'play none none none',
          },
          y: 36,
          opacity: 0,
          duration: 0.85,
          stagger: 0.12,
          ease: 'power3.out',
        });
      }

      if (skillsLineRef.current && skillsSectionRef.current) {
        gsap.from(skillsLineRef.current, {
          scrollTrigger: {
            trigger: skillsSectionRef.current,
            start: 'top 78%',
            toggleActions: 'play none none none',
          },
          scaleX: 0,
          transformOrigin: 'left center',
          duration: 1,
          ease: 'power3.inOut',
          delay: 0.1,
        });
      }

      const skillCards = skillsGridRef.current?.querySelectorAll('.skill-card-item');
      if (skillCards?.length && skillsGridRef.current) {
        gsap.from(skillCards, {
          scrollTrigger: {
            trigger: skillsGridRef.current,
            start: 'top 82%',
            toggleActions: 'play none none none',
          },
          y: 56,
          opacity: 0,
          duration: 0.8,
          stagger: {
            amount: 0.55,
            grid: [2, 3],
            from: 'start',
          },
          ease: 'power3.out',
        });
      }
    });

    return () => ctx.revert();
  }, []);
}
