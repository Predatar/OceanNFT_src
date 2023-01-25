window.addEventListener('DOMContentLoaded', () => {
    const footerArrow = document.querySelectorAll('.footer__arrow'),
        footerList = document.querySelectorAll('.footer__list'),
        timer_h = document.querySelector('.profile-info__timer-hours');

    footerArrow.forEach((elem, i) => {
        elem.addEventListener('click', () => {
            elem.classList.toggle('rotate');
            footerList[i].classList.toggle('show');
        })
    })
});
