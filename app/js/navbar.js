$(document).ready(function () {
    $(".navi").load("html/navbar.html", function () {
        $(".menu").load("html/menu.html");
    });
});

$(document).on("click", ".navi__dropdown", function (e) {
    e.stopPropagation();
    toggleMenu();
});

$(document).on("click", function (e) {
    if (!$(e.target).closest(".menu, .navi__dropdown").length && $(".navi__chevron").hasClass("navi__chevron--open")) {
        toggleMenu();
    }
});

$(document).on("submit", ".navi__search-form", function (e) {
    e.preventDefault();
    const text = $(".navi__search-input").val();
    $(".search__input").val(text);
    $(".overlay").fadeToggle(300);
    $(".search").slideToggle(300);
});