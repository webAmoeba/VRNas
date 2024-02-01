import {gsap} from './gsap.min';
import {ScrollTrigger} from './scroll-trigger';

gsap.registerPlugin(ScrollTrigger);

const blocks = document.querySelectorAll('[data-scroll]');

blocks.forEach((content) => {
  gsap.from(content, {
    scrollTrigger: {
      trigger: content,
      start: 'top bottom',
      toggleActions: 'play none none reverse',
    },
    opacity: 0,
    y: 100,
    duration: 0.6,
    ease: 'power1.out',
  });
});
