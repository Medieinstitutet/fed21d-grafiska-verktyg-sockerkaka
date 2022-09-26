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

//Animations
const card = document.getElementById('quote-card-animation');
card.addEventListener('mouseover', function () {
  gsap.to('#quote-card-animation', {
    y: -10,
    duration: 0.2,
    yoyo: true,
    repeat: 1,
  });
});
