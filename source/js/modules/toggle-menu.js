const menuToggler = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
const navGrid = document.getElementById('nav-grid');

menuToggler.classList.add('header__menu-toggle--with-js');
menu.classList.add('header__nav--with-js');
menu.classList.add('header__nav--hidden');

navGrid.classList.remove('header__grid--without-js');


menuToggler.addEventListener('click', () => {
  if (menu.classList.contains('header__nav--hidden')) {
    menu.classList.remove('header__nav--hidden');
    menuToggler.classList.add('header__menu-toggle--to-close');
    document.body.style.overflow = 'hidden';
  } else {
    closeMenu();
  }
});

menu.addEventListener('click', () => {
  closeMenu();
});

function closeMenu() {
  menu.classList.add('header__nav--hidden');
  menuToggler.classList.remove('header__menu-toggle--to-close');
  document.body.removeAttribute('style');
}
