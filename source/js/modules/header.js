const header = document.getElementById('main-header');
const container = document.getElementById('for-blur');

function blurHeader() {
  window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;
    let isScrolling;

    container.classList.add('header__for-blur--blured');

    clearTimeout(isScrolling);

    isScrolling = setTimeout(function () {
      container.classList.remove('header__for-blur--blured');
    }, 300);

    // Задает и снимает стилевый класс непрозрачного фона
    if (scrollPosition > 10) {
      header.classList.add('header--opaque');
    } else {
      header.classList.remove('header--opaque');
    }
  });
}

export {blurHeader};
