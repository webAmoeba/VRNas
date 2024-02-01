const aside = document.querySelector('[data-aside]');

function openAside() {
  if (aside) {
    aside.addEventListener('click', () => {
      if (!aside.classList.contains('is-open')) {
        aside.classList.add('is-open');
        aside.classList.remove('is-closed');
      } else {
        aside.classList.remove('is-open');
        aside.classList.add('is-closed');
      }
    });
  }
}

export {openAside};
