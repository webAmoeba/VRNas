import {gsap} from './gsap.min';
import {ScrollTrigger} from './scroll-trigger';
import './generate-timeline.js';

gsap.registerPlugin(ScrollTrigger);

const blocks = document.querySelectorAll('[data-scroll]');

blocks.forEach((content) => {
  gsap.from(content, {
    scrollTrigger: {
      trigger: content,
      start: '150 bottom',
      toggleActions: 'play none none reverse',
    },
    autoAlpha: 0,
    y: 150,
    duration: 1,
    ease: 'power1.out',
  });
});
