$(document).ready(function () {
    $(".favorite").load("html/favorite.html", function () {
        $(".favorite__item--1").load("html/favorite_item_1.html");
    });
});

$(document).on("click", function (e) {
    if (!$(e.target).closest(".favorite").length && $(".favorite").hasClass("favorite--visible")) {
        toggleFavorite();
    }
});

function toggleFavorite() {
    $(".favorite button").attr("tabindex", function (i, val) {
        return val === "-1" ? "0" : "-1";
    });

    $(".overlay").fadeToggle(300);
    $(".favorite").toggleClass("favorite--visible");

    if ($(".favorite").hasClass("favorite--visible")) {
        $("body > *:not(.main), .main > *:not(.favorite)").attr("inert", "");
        $(".favorite__close").focus();
    } else {
        $("body > *:not(.main), .main > *:not(.favorite)").removeAttr("inert");
        $(".navi__favorite-btn").focus();
    }
}
