$(document).ready(function () {
    $(".banner").load("html/banner.html", function () {
        $(".banner__slider").slick({
            autoplay: true,
            autoplaySpeed: 5000,
            prevArrow: $(".banner__prev"),
            nextArrow: $(".banner__next"),
            appendDots: $(".banner__dots"),
            dots: true,
            easing: 'ease-in-out',
            initialSlide: 0,
            lazyLoad: 'progressive',
            speed: 300
        });

        [1, 2].forEach(function (i) {
            $(".banner__item--" + i).load("html/banner_item_" + i + ".html", function () {
                $(".slick-slide, .slick-slide .banner__btn").attr("tabindex", "-1").attr("aria-hidden", "true");
                $(".slick-active, .slick-active .banner__btn").attr("tabindex", "0").attr("aria-hidden", "false");
            });
        });
    });
});