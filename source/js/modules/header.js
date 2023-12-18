const header = document.getElementById('main-header');
const container = document.getElementById('for-blur');
let isFunctionExecuted = false;

// Задает и снимает стилевый класс непрозрачного фона
function checkPosition(scrollPosition) {
  if (scrollPosition > 10) {
    header.classList.add('header--opaque');
  } else {
    header.classList.remove('header--opaque');
  }
}

if (!isFunctionExecuted) {
  const scrollPosition = window.scrollY;
  isFunctionExecuted = true;
  checkPosition(scrollPosition);
}

function blurHeader() {
  window.addEventListener('scroll', function () {
    let isScrolling;
    const scrollPositionLive = window.scrollY;

    container.classList.add('header__for-blur--blured');

    clearTimeout(isScrolling);

    isScrolling = setTimeout(function () {
      container.classList.remove('header__for-blur--blured');
    }, 300);
    checkPosition(scrollPositionLive);
  });
}

export {blurHeader};
