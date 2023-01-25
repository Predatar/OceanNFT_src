import Swiper from 'swiper';

window.addEventListener('DOMContentLoaded', () => {
    const footerArrow = document.querySelectorAll('.footer__arrow'),
        footerList = document.querySelectorAll('.footer__list'),
        timer_h = document.querySelectorAll('.profile-info__timer-hours span'),
        timer_m = document.querySelectorAll('.profile-info__timer-minutes span'),
        timer_s = document.querySelectorAll('.profile-info__timer-seconds span');
    const deadline = new Date('2023', '01', '27');
    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        slidesPerView: 3,
        enabled: false,
        spaceBetween: 35,
        breakpoints: {
            375: {
                slidesPerView: 1,
                enabled: true
            },
            426: {
                slidesPerView: 1,
                enabled: true
            },
            576: {
                slidesPerView: 1,
                enabled: true
            },
            769: {
                slidesPerView: 2,
                enabled: true,
                grabCursor: true
            },
            1025: {
                slidesPerView: 2,
                enabled: true,
                grabCursor: true
            },
            1436: {
                slidesPerView: 3,
                enabled: false
            }
        }
    });

    footerArrow.forEach((elem, i) => {
        elem.addEventListener('click', () => {
            elem.classList.toggle('rotate');
            footerList[i].classList.toggle('show');
        });
    });

    function countDownTimer() {
        const diff = deadline - new Date();
        if (diff <= 0) {
            clearInterval(timerId);
        }

        const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
        const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
        const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;

        timer_h.forEach(elem => {
            elem.textContent = hours < 10 ? '0' + hours : hours;
        });
        timer_m.forEach(elem => {
            elem.textContent = minutes < 10 ? '0' + minutes : minutes;
        });
        timer_s.forEach(elem => {
            elem.textContent = seconds < 10 ? '0' + seconds : seconds;
        });
    }

    const timerId = setInterval(countDownTimer, 1000);
});
