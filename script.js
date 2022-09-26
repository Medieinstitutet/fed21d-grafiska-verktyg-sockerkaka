const hamburger = document.querySelector('#menu-button');
const frontpageElementsToHide = document.querySelector(
  '#frontpageElementsToHide'
);
const acceptCookiesBtn = document.querySelector('#accept-cookies-btn');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('menu-open');
  frontpageElementsToHide.classList.toggle('toggle-quote-card-section');
});
acceptCookiesBtn.addEventListener('click', () => {
  document.getElementsByClassName('cookie-container')[0].style.display = 'none';
});
