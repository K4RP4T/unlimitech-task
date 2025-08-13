$(document).ready(function () {
    $(".cart").load("html/cart.html", function () {
        $(".cart__item--1").load("html/cart_item_1.html");
        $(".cart__item--2").load("html/cart_item_2.html");
    });
});

$(document).on("click", ".navi__cart-btn, .cart__close", function (e) {
    e.stopPropagation();
    toggleCart();
});

$(document).on("click", function (e) {
    if (!$(e.target).closest(".cart").length && $(".cart").hasClass("cart--visible")) {
        toggleCart();
    }
});

function toggleCart() {
    $(".cart button").attr("tabindex", function (i, val) {
        return val === "-1" ? "0" : "-1";
    });

    $(".overlay").fadeToggle(300);
    $(".cart").toggleClass("cart--visible");

    if ($(".cart").hasClass("cart--visible")) {
        $("body > *:not(.cart)").attr("inert", "");
        $(".cart__close").focus();
    } else {
        $("body > *:not(.cart)").removeAttr("inert");
        $(".navi__cart-btn").focus();
    }
}
