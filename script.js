const hamburger = document.querySelector('#menu-button');
const frontpageElementsToHide = document.querySelector(
  '#frontpageElementsToHide'
);
const acceptCookiesBtn = document.querySelector('#accept-cookies-btn');

//toggles the element on the front page when hamburger menu is clicked
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('menu-open');
  frontpageElementsToHide.classList.toggle('toggle-quote-card-section');
});

acceptCookiesBtn.addEventListener('click', () => {
  document.getElementsByClassName('cookie-container')[0].style.display = 'none';
});

//Animation for card
const card = document.getElementById('quote-card-animation');
card.addEventListener('mouseover', function () {
  gsap.to('#quote-card-animation', {
    duration: 0.2,
    scale: 1.1,
  });
});
card.addEventListener('mouseleave', function () {
  gsap.to('#quote-card-animation', {
    duration: 0.3,
    scale: 1,
  });
});

//Animation hamburger
const bar1 = document.getElementById('bar1');
const bar2 = document.getElementById('bar2');
const bar3 = document.getElementById('bar3');

var tl = new TimelineLite({ paused: true, reversed: true });

tl.to(bar2, 0.5, { duration: 1, rotation: '-45', y: 0 }, 'start')
  .to(bar1, 0.5, { autoAlpha: 0, x: 100 }, 'start')
  .to(bar3, 0.5, { rotation: '45', duration: 1, y: -16 }, 'start');

document.querySelector('.hamburger').addEventListener('click', function () {
  tl.reversed() ? tl.play() : tl.reverse();
});
