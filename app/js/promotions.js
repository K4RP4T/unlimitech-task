$(document).ready(function () {
    $(".promotions").load("html/promotions.html", function () {
        $(".promotions__slider").slick({
            autoplay: false,
            autoplaySpeed: 5000,
            prevArrow: $(".promotions__prev"),
            nextArrow: $(".promotions__next"),
            appendDots: $(".promotions__dots"),
            dots: true,
            easing: "ease-in-out",
            initialSlide: 4,
            lazyLoad: "ondemand",
            slidesToShow: 4,
            slidesToScroll: 4,
            speed: 300,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        centerMode: true,
                        variableWidth: false,
                        dots: false
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        centerMode: true,
                        variableWidth: false,
                        dots: false
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerMode: true,
                        variableWidth: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 375,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerMode: true,
                        variableWidth: false,
                        dots: false
                    }
                }
            ]
        });

        [1, 2].forEach(function (i) {
            $(".promotions__item--" + i).load("html/promotions_item_" + i + ".html", function () {
                $(".slick-slide, .slick-slide .promotions__favorite, .slick-slide .promotions__cart").attr("tabindex", "-1").attr("aria-hidden", "true");
                $(".slick-active, .slick-active .promotions__favorite, .slick-active .promotions__cart").attr("tabindex", "0").attr("aria-hidden", "false");
            });
        });
    });
});