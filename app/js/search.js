$(document).ready(function () {
    $(".search").load("html/search.html", function () {
        [1, 2].forEach(function (i) {
            $(".search__item--" + i).load("html/promotions_item_" + i + ".html");
        });
    });
});

$(document).on("submit", ".search__form", function (e) {
    e.preventDefault();
    const text = $(".search__input").val();
    $(".navi__search-input").val(text);
});

$(document).on("click", ".search__all, .search__btn-close", function (e) {
    e.stopPropagation();
    toggleSearch();
});

$(document).on("click", function (e) {
    if (!$(e.target).closest(".search").length && $(".search").is(":visible")) {
        toggleSearch();
    }
});

function toggleSearch() {
    $(".overlay").fadeToggle(300);
    $(".search").slideToggle(300);
    $(".search").toggleClass("search--visible");

    if ($(".search").hasClass("search--visible")) {
        $("body > *:not(.search)").attr("inert", "");
        $(".search__input").focus();
    } else {
        $("body > *:not(.search)").removeAttr("inert");
        $inertElements.attr("inert", "");
        $(".navi__search-input").focus();
    }
}