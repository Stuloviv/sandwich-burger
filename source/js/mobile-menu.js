// import {ScrollLock} from './utils/scroll-lock';

// const headerNavElement = document.querySelector('.header__navigation');

const headerContainerElement = document.querySelector('.header__container');
const headerToggleElement = document.querySelector('.header__navigation-toggle');
// const linkElements = document.querySelectorAll('.header__navigation-link');


// window.scrollLock = new ScrollLock();

// const closeMenu = function () {
//   headerElement.classList.add('is-close');
//   headerElement.classList.remove('is-open');
//   window.scrollLock.enableScrolling();
// };

// const closeOnOutBoundaries = function () {
//   document.addEventListener('click', (evt) => {
//     const withinBoundaries = evt.composedPath().includes(headerNavElement);
//     if (!withinBoundaries) {
//       closeMenu();
//     }
//   });
// };

headerToggleElement.addEventListener('click', () => {
  if (headerContainerElement.classList.contains('is-close')) {
    headerContainerElement.classList.toggle('is-open');
    headerToggleElement.classList.toggle('is-open');
    // window.scrollLock.disableScrolling();
    // if (headerElement.classList.contains('is-open')) {
    //   linkElements.forEach((link) => {
    //     link.addEventListener('click', closeMenu);
    //   });
    //   closeOnOutBoundaries();
  }
});


