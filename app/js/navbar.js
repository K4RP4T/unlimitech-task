$(document).ready(function () {
    $(".navi").load("html/navbar.html", function () {
        $(".menu").load("html/menu.html");
        $(".menu-mobile").load("html/menu_mobile.html", function () {
            $(this).attr("inert", "");
        });
    });
});

$(document).on("click", ".navi__dropdown", function (e) {
    e.stopPropagation();
    toggleMenu();
});

$(document).on("click", function (e) {
    if (!$(e.target).closest(".menu, .navi__dropdown").length && $(".menu").is(":visible")) {
        toggleMenu();
    }
});

$(document).on("submit", ".navi__search-form", function (e) {
    e.preventDefault();
    const text = $(".navi__search-input").val();
    $(".search__input").val(text);
    toggleSearch();
});

$(document).on("click", ".navi__favorite-btn, .favorite__close", function (e) {
    e.stopPropagation();
    toggleFavorite();
});

$(document).on("click", ".navi__cart-btn, .cart__close", function (e) {
    e.stopPropagation();
    toggleCart();
});

$(document).on("click", ".navi__menu-btn, .menu-mobile__close", function (e) {
    e.stopPropagation();
    toggleMenuMobile();
});