$(document).ready(function () {
    $('.promotions__slider').slick({
        autoplay: false,
        autoplaySpeed: 5000,
        prevArrow: $('.promotions__prev'),
        nextArrow: $('.promotions__next'),
        appendDots: $('.promotions__dots'),
        dots: true,
        easing: 'ease-in-out',
        initialSlide: 4,
        slidesToShow: 4,
        slidesToScroll: 4,
        speed: 300
    });
});