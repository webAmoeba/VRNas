import {gsap} from './gsap.min';
import {ScrollTrigger} from './scroll-trigger';
import './generate-timeline.js';

gsap.registerPlugin(ScrollTrigger);

const blocks = document.querySelectorAll('.page-section');

blocks.forEach((content) => {
  gsap.from(content, {
    scrollTrigger: {
      trigger: content,
      start: '150 bottom',
    },
    autoAlpha: 0,
    y: 150,
    duration: 1.5,
    ease: 'power1.out',
  });
});
