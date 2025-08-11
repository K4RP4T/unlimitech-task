$(document).ready(function () {
    $('.banner__slider').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        prevArrow: $('.banner__prev'),
        nextArrow: $('.banner__next'),
        appendDots: $('.banner__dots'),
        dots: true,
        easing: 'ease-in-out',
        initialSlide: 0,
        speed: 300
    });
});