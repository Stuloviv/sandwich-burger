import {disablePageScroll, enablePageScroll} from './utils/scroll-lock';

const headerContainerElement = document.querySelector('.header__container');
const headerToggleElement = document.querySelector('.header__navigation-toggle');

headerToggleElement.addEventListener('click', () => {
  if (headerContainerElement.classList.contains('is-close')) {
    headerContainerElement.classList.remove('is-close');
    headerToggleElement.classList.remove('is-close');
    headerContainerElement.classList.add('is-open');
    headerToggleElement.classList.add('is-open');
    disablePageScroll(window);
  } else {
    headerContainerElement.classList.remove('is-open');
    headerToggleElement.classList.remove('is-open');
    headerContainerElement.classList.add('is-close');
    headerToggleElement.classList.add('is-close');
    enablePageScroll(window);
  }
});
