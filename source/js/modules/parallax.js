import {gsap} from '../vendor/gsap.min';
const parallax = () => {
  const parallaxItems = document.querySelectorAll('[data-parallax-mouse]');
  const sections = document.querySelectorAll('.section');

  let mouseCords = {
    x: 0,
    y: 0,
  }; // задаем изначальные координаты

  const handleMouseMove = (e) => {
    const target = e.currentTarget || e.target; // Используем e.currentTarget, если доступен, в противном случае используем e.target
    mouseCords.x = e.clientX - window.innerWidth / 2;
    mouseCords.y = e.clientY - window.innerHeight / 2;
    updateParallax(target);
  };

  sections.forEach((section) => {
    section.addEventListener('mousemove', handleMouseMove);
  });

  const updateParallax = (target) => {
    // eslint-disable-next-line no-undef
    if (!target) {
      return;
    } // Добавим проверку на существование target

    const section = target.classList && (target.classList.contains('section') ? target : target.closest('.section'));

    if (section) {
      parallaxItems.forEach((item) => {
        if (section.contains(item)) {
          const movement = item.dataset.movement ? item.dataset.movement : 1;
          // eslint-disable-next-line no-undef
          gsap.to(item, {
            x: mouseCords.x / movement,
            y: mouseCords.y / movement,
            duration: item.dataset.duration ? item.dataset.duration : 0.5,
            ease: 'power1.out',
          });
        }
      });
    }
  };


  // eslint-disable-next-line no-undef
  gsap.ticker.add(updateParallax); // вместо нового requestAnimationFrame используем rAF гсапа
};

export {parallax};
