/**
 * An example ES6 module:
 */
import $ from 'jquery';
import WOW from 'wow.js'
import 'bootstrap/js/dist/collapse';
import 'vanilla-hamburger/tilt-burger.js';
import Swiper, { Autoplay } from 'swiper';
Swiper.use([Autoplay]);

import 'swiper/swiper-bundle.css';



const swiper = new Swiper(`.partners__slider`, {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    autoplay: {
        delay: 2000
    },
    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 4,
            spaceBetween: 40
        }
    }
});

const burger = document.querySelector('tilt-burger');
const menu = document.querySelector(`.header .nav`)

burger.addEventListener('pressed-changed', (event) => {
    menu.classList.contains('show') ? menu.classList.remove('show') : menu.classList.add(`show`);
});

$('.header .nav').on('click', '.nav-link', function (e) {
    e.preventDefault();
    const link = $(this).attr(`href`);
    const aTag = $(link)
    $('html,body').animate({ scrollTop: aTag.offset().top }, 'slow');
})


new WOW().init();