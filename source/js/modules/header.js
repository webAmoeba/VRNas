const header = document.getElementById('main-header');
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

    header.classList.add('header--blured');

    clearTimeout(isScrolling);

    isScrolling = setTimeout(function () {
      header.classList.remove('header--blured');
    }, 300);
    checkPosition(scrollPositionLive);
  });
}

export {blurHeader};
