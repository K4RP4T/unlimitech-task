$(document).ready(function () {
    $(".favorite").load("html/favorite.html", function () {
        $(this).attr("inert", "");
        $(".favorite__item--1").load("html/favorite_item_1.html");
    });
});

$(document).on("click", function (e) {
    if (!$(e.target).closest(".favorite").length && $(".favorite").hasClass("favorite--visible")) {
        toggleFavorite();
    }
});

function toggleFavorite() {
    $(".overlay").fadeToggle(300);
    $(".favorite").toggleClass("favorite--visible");

    if ($(".favorite").hasClass("favorite--visible")) {
        $(".favorite").removeAttr("inert");
        $("body > *:not(.favorite)").attr("inert", "");
    } else {
        $(".favorite").attr("inert", "");
        $("body > *:not(.favorite)").removeAttr("inert");
        $inertElements.attr("inert", "");
        $(".navi__favorite-btn").focus();
    }
}
