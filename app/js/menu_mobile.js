$(document).on("click", ".menu-mobile__item--buty", function (e) {
    e.stopPropagation();
    loadCategoriesSubmenu();
});

$(document).on("click", ".menu-mobile__item", function (e) {
    e.stopPropagation();
    loadProductsSubmenu($(this).data("item"));
});

$(document).on("click", ".menu-mobile__item--favorite", function (e) {
    e.stopPropagation();
    toggleMenuMobile();
    toggleFavorite();
});

$(document).on("click", ".menu-mobile__item--cart", function (e) {
    e.stopPropagation();
    toggleMenuMobile();
    toggleCart();
});

function toggleMenuMobile() {
    $(".menu-mobile").toggleClass("menu-mobile--visible");

    if ($(".menu-mobile").hasClass("menu-mobile--visible")) {
        loadMainMenu();
        $(".menu-mobile").removeAttr("inert");
        $("body > *:not(.menu-mobile)").attr("inert", "");
    } else {
        $(".menu-mobile").attr("inert", "");
        $("body > *:not(.menu-mobile)").removeAttr("inert");
        $inertElements.attr("inert", "");
    }
}

function loadMainMenu() {
    $(".menu-mobile__header").load("html/menu_header.html");
    $(".menu-mobile__content").load("html/menu_content.html");
    $(".menu-mobile__footer").load("html/menu_footer.html");
}

function loadCategoriesSubmenu() {
    $(".menu-mobile__back").addClass("menu-mobile__back--visible");
    $(".menu-mobile__title").text("Damskie buty skórzane");

    $(".menu-mobile__content").attr("aria-label", "Menu kategorii butów");
    $(".menu-mobile__content").load("html/menu_categories.html");

    $(".menu-mobile__footer").empty();

    $(".menu-mobile__back").off("click").on("click", function () {
        loadMainMenu();
    });
}

function loadProductsSubmenu(itemKey) {
    if (!itemKey) {
        return;
    }

    if (itemKey === "outlet" || itemKey === "wszystkie") {
        toggleMenuMobile();
        return;
    }

    const product = itemKey.charAt(0).toUpperCase() + itemKey.slice(1);

    $(".menu-mobile__back").addClass("menu-mobile__back--visible");
    $(".menu-mobile__title").text(product);

    if (submenuData[itemKey]) {
        const $content = $(".menu-mobile__content");

        $content.attr("aria-label", product + " - rodzaje");
        $content.html(`<ul class="list-group list-unstyled w-100 menu-mobile__list"></ul>`)

        let items = submenuData[itemKey]
            .map(shoe =>
                `<li class="list-group-item list-group-item-action border-bottom px-3 py-2 menu-mobile__item" role="button">
                    <div class="d-flex align-items-center justify-content-between menu-mobile__item-content">
                        <span class="menu-mobile__text">${shoe}</span>
                        <span class="menu-mobile__chevron menu-mobile__chevron--right"></span>
                    </div>
                </li>`
            ).join("");

        const allItems = (
            `<li class="list-group-item list-group-item-action border-bottom-0 px-3 py-2 menu-mobile__item" role="button" data-item="wszystkie">
                <div class="d-flex align-items-center justify-content-between menu-mobile__item-content">
                    <span class="menu-mobile__text">Pokaż wszystkie</span>
                    <span class="menu-mobile__chevron menu-mobile__chevron--right"></span>
                </div>
            </li>`
        );

        $(".menu-mobile__list").html(items + allItems);
    }

    $(".menu-mobile__footer").empty();

    $(".menu-mobile__back").off("click").on("click", function () {
        loadCategoriesSubmenu();
    });
}