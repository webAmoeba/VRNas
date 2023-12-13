const header = document.getElementById('main-header');
const container = document.getElementById('for-blur');

function blurHeader() {
  window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;
    let isScrolling;

    container.classList.add('blured');

    clearTimeout(isScrolling);

    isScrolling = setTimeout(function () {
      container.classList.remove('blured');
    }, 1000);

    // Задает и снимает стилевый класс непрозрачного фона
    if (scrollPosition > 10) {
      header.classList.add('opaque');
    } else {
      header.classList.remove('opaque');
    }
  });
}

export {blurHeader};
