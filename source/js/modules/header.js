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
    const scrollPositionLive = window.scrollY;

    checkPosition(scrollPositionLive);
  });
}

export {blurHeader};
