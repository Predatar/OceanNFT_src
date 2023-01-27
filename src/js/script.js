import Swiper from 'swiper';

window.addEventListener('DOMContentLoaded', () => {
    const footerArrow = document.querySelectorAll('.footer__arrow'),
        footerList = document.querySelectorAll('.footer__list'),
        timer_h = document.querySelectorAll('.profile-info__timer-hours span'),
        timer_m = document.querySelectorAll('.profile-info__timer-minutes span'),
        timer_s = document.querySelectorAll('.profile-info__timer-seconds span'),
        burger = document.querySelector('.burger'),
        sidemenu = document.querySelector('.sidemenu'),
        body = document.body,
        list = document.querySelector('.sellers__list'),
        span = document.querySelector('.sellers__sort span'),
        categoryList = document.querySelectorAll('.category__group-item');

    const deadline = new Date('2023', '01', '27');
    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        slidesPerView: 3,
        enabled: false,
        spaceBetween: 25,
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
            740: {
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

    burger.addEventListener('click', () => {
        if(document.querySelector('.burger input').checked){
            console.log('click add');
            burger.classList.add('burger__active');
            sidemenu.classList.add('sidemenu__active');
            body.classList.add('lock');
        }else {
            console.log('click delete');
            burger.classList.remove('burger__active');
            sidemenu.classList.remove('sidemenu__active');
            body.classList.remove('lock');
        }
        
    });

    const timerId = setInterval(countDownTimer, 1000);

    footerArrow.forEach((elem, i) => {
        elem.addEventListener('click', () => {
            elem.classList.toggle('rotate');
            footerList[i].classList.toggle('show');
        });
    });

    list.addEventListener('click', e => {
        span.textContent = e.target.getAttribute('data-tag');
    })


    categoryList.forEach(elem => {
        elem.addEventListener('click', (e) => {
            categoryList.forEach(element => {
                element.classList.remove('category__group-item__active');
            });
            e.target.classList.add('category__group-item__active');
        })
    })
});
