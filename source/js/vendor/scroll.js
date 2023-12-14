import {gsap} from './gsap.min';
import {ScrollTrigger} from './scroll-trigger';

gsap.registerPlugin(ScrollTrigger);

const blocks = document.querySelectorAll('.page-section');

blocks.forEach((block, index) => {
  if (index !== 0) {
    gsap.from(block, {
      opacity: 0,
      y: 150,
      duration: 1,
      scrollTrigger: {
        trigger: block,
        start: '150 bottom', // Анимация начинается при появлении блока внизу экрана
        end: 'center center', // Анимация заканчивается, когда центр блока достигает центра экрана
        toggleActions: 'play none none none', // Определение действий при входе и выходе из триггера
      },
    });
  }
});

const getMaxWidth = (blocks) => {
  let maxWidth = 0;
  blocks.forEach((block) => {
    maxWidth += block.offsetWidth;
  });
  return maxWidth
};

const getObjectFromString = (str) => {
  if (str.indexOf('clipPath') !== -1) {
    const arr = str.split(':');
    return {clipPath: arr[1]};
  }
  return str.split(',')
    .map((keyVal) => {
      return keyVal
        .split(':')
        .map((_) => _.trim());
    })
    .reduce((accumulator, currentValue) => {
      accumulator[currentValue[0]] = isNaN(Number(currentValue[1])) ? currentValue[1] : Number(currentValue[1]);
      return accumulator;
    }, {});
};

function getAnimationObject(el) {
  const obj = {};
  obj.direction = el.dataset.animationDirection;
  obj.duration = +el.dataset.animationDuration || 1;
  obj.delay = +el.dataset.animationDelay || 0;
  obj.position = el.dataset.position;
  obj.element = el;
  obj.animation = getObjectFromString(el.dataset.animation.toString());
  return obj;
}

const generateTimeline = () => {
  const sections = document.querySelectorAll('[data-section-animation]')
  sections.forEach((section) => {
    const blocks = gsap.utils.toArray(section.querySelectorAll("[data-animation]")).sort((a, b) => {
      const aIndex = +a.dataset.index || 1;
      const bIndex = +b.dataset.index || 1;
      return aIndex - bIndex;
    });

    console.log(section.dataset.scrub)
    const tl = window.gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: section.dataset.start,
        end: section.hasAttribute('data-end') ? section.dataset.end : () => `+=${getMaxWidth(blocks)}`,
        scrub: section.dataset.scrub ? Number(section.dataset.scrub) : 1.5,
        pin: section.hasAttribute('data-pin') ? true : false,
        pinSpacing: section.hasAttribute('data-pin-spacing') ? true : false,
      }
    });

    blocks.forEach(block => {
      const obj = getAnimationObject(block);
      if (obj.position) {
        tl[obj.direction](obj.element, { duration: obj.duration, delay: obj.delay, ...obj.animation }, obj.position);
      } else {
        tl[obj.direction](obj.element, { duration: obj.duration, delay: obj.delay, ...obj.animation });
      }
    });
  });
};

generateTimeline();
