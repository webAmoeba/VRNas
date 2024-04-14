const elements = document.querySelectorAll('.partners__element-wrapper');
const icons = document.querySelectorAll('.partners__icon-wrapper');
const svgs = document.querySelectorAll('.partners__icon-wrapper img');
const howMany = elements.length;
const other = howMany - 2;
const lastIndex = elements.length - 1;
const fullDegree = 170;

let minDegree = 5;
let maxDegree = 175;

if (howMany === 2) {
  minDegree = 50;
  maxDegree = 130;
} else if (howMany === 3) {
  minDegree = 40;
  maxDegree = 140;
}

// анимация иконок
function animatePartners() {
  function animateCollection() {
    svgs.forEach((element) => {
      const randomSize = Math.floor(Math.random() * 50) + 50;
      element.style.width = `${randomSize + 10}%`;
      element.style.height = `${randomSize + 10}%`;
    });

    const randomDelay = Math.random() * 2000 + 1000;
    setTimeout(animateCollection, randomDelay);
  }

  animateCollection();
}


// Функция распределения иконок по полукругу
function arrangePartners() {
  if (howMany > 1) {
    elements[0].style = `transform: rotate(${minDegree}deg);`;
    icons[lastIndex].style = `transform: rotate(${maxDegree * -1}deg);`;
    icons[0].style = `transform: rotate(${minDegree * -1}deg);`;
    elements[lastIndex].style = `transform: rotate(${maxDegree}deg);`;

    if (other) {
      const degree = fullDegree / (other + 1);
      let newDegree = 5;

      elements.forEach((element, index) => {
        if (index !== 0 && index !== (howMany - 1)) {
          newDegree += degree;
          element.style = `transform: rotate(${newDegree}deg);`;
          icons[index].style = `transform: rotate(${newDegree * -1}deg);`;
        }
      });
    }
  }
}

export {arrangePartners, animatePartners};
