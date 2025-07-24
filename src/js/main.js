import "@sass/main.scss";

// Menú principal
const mainBtn = document.querySelector('.menu__toggle');
const mainMenu = document.getElementById(mainBtn.getAttribute('aria-controls'));
mainBtn.addEventListener('click', () => {
  const open = mainBtn.getAttribute('aria-expanded') === 'true';
  mainBtn.setAttribute('aria-expanded', String(!open));
  mainBtn.setAttribute('aria-label', open ? 'Abrir menú' : 'Cerrar menú');
  mainMenu.classList.toggle('is-open', !open);
});

// Submenu "Idiomas"
const submenuBtn = document.querySelector('.submenu__toggle');
const submenu = document.getElementById(submenuBtn.getAttribute('aria-controls'));
submenuBtn.addEventListener('click', () => {
  const open = submenuBtn.getAttribute('aria-expanded') === 'true';
  submenuBtn.setAttribute('aria-expanded', String(!open));
  submenuBtn.setAttribute('aria-label', open ? 'Abrir idiomas' : 'Cerrar idiomas');
  submenu.classList.toggle('is-open', !open);
});
