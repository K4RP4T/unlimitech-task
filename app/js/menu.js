$(document).ready(function () {
    $(".menu").load("html/menu.html");

    $(document).on("click", ".navi__dropdown", function () {
        $(".menu").fadeToggle(300);
        $(".navi__chevron", this).toggleClass("navi__chevron--open");
    });
});
