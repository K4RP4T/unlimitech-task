$(document).ready(function () {
    $(".cart").load("html/cart.html", function () {
        $(this).attr("inert", "");
        $(".cart__item--1").load("html/cart_item_1.html");
        $(".cart__item--2").load("html/cart_item_2.html");
    });
});

$(document).on("click", function (e) {
    if (!$(e.target).closest(".cart").length && $(".cart").hasClass("cart--visible")) {
        toggleCart();
    }
});

function toggleCart() {
    $(".overlay").fadeToggle(300);
    $(".cart").toggleClass("cart--visible");

    if ($(".cart").hasClass("cart--visible")) {
        $(".cart").removeAttr("inert");
        $("body > *:not(.cart)").attr("inert", "");
    } else {
        $(".cart").attr("inert", "");
        $("body > *:not(.cart)").removeAttr("inert");
        $inertElements.attr("inert", "");
        $(".navi__cart-btn").focus();
    }
}
