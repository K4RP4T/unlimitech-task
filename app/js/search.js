$(document).on("submit", ".search__form", function (e) {
    e.preventDefault();
    const text = $(".search__input").val();
    $(".navi__search-input").val(text);
});

$(document).on("click", ".search__all", function (e) {
    e.preventDefault();
    toggleSearch();
});

$(document).on("click", ".search__btn-close", function (e) {
    e.preventDefault();
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
}