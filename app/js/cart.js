$(document).ready(function () {
    $(".cart").load("html/cart.html", function () {
        $(".cart__item--1").load("html/cart_item_1.html");
        $(".cart__item--2").load("html/cart_item_2.html");
    });
});

$(document).on("click", ".navi__cart-btn", function (e) {
    e.stopPropagation();
    toggleCart();
});

$(document).on("click", ".cart__close", function (e) {
    e.stopPropagation();
    toggleCart();
});

$(document).on("click", function (e) {
    if (!$(e.target).closest(".cart").length && $(".cart").hasClass("cart--visible")) {
        toggleCart();
    }
});

function toggleCart() {
    $(".overlay").fadeToggle(300);
    $(".cart").toggleClass("cart--visible");
}
