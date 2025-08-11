$(document).ready(function () {
    $(".promotions").load("html/promotions.html", function () {
        $('.promotions__slider').slick({
            autoplay: false,
            autoplaySpeed: 5000,
            prevArrow: $('.promotions__prev'),
            nextArrow: $('.promotions__next'),
            appendDots: $('.promotions__dots'),
            dots: true,
            easing: 'ease-in-out',
            initialSlide: 4,
            lazyLoad: 'ondemand',
            slidesToShow: 4,
            slidesToScroll: 4,
            speed: 300
        });

        $(".promotions__item--1").load("html/promotions_item_1.html");
        $(".promotions__item--2").load("html/promotions_item_2.html");
    });
});