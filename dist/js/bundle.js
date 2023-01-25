/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
window.addEventListener('DOMContentLoaded', () => {
  const footerArrow = document.querySelectorAll('.footer__arrow'),
    footerList = document.querySelectorAll('.footer__list'),
    timer_h = document.querySelector('.profile-info__timer-hours span'),
    timer_m = document.querySelector('.profile-info__timer-minutes span'),
    timer_s = document.querySelector('.profile-info__timer-seconds span');
  footerArrow.forEach((elem, i) => {
    elem.addEventListener('click', () => {
      elem.classList.toggle('rotate');
      footerList[i].classList.toggle('show');
    });
  });
  const deadline = new Date('2023', '01', '25');
  function countDownTimer() {
    const diff = deadline - new Date();
    if (diff <= 0) {
      clearInterval(timerId);
    }
    const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
    const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
    const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
    timer_h.textContent = hours < 10 ? '0' + hours : hours;
    timer_m.textContent = minutes < 10 ? '0' + minutes : minutes;
    timer_s.textContent = seconds < 10 ? '0' + seconds : seconds;
  }
  const timerId = setInterval(countDownTimer, 1000);
});
/******/ })()
;
//# sourceMappingURL=bundle.js.map