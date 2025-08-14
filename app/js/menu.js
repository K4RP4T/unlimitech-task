const submenuData = {
    półbuty: [
        "półbuty z noskiem w szpic", "oksfordki",
        "półbuty na słupku", "derby",
        "półbuty na koturnie", "brogsy",
        "półbuty Mary Jane", "loafersy",
        "półbuty z wycięciami", "slip-on",
        "półbuty lakierowane", "sneakersy",
        "baleriny z zakrytym podbiciem", "trampki"
    ],
    jazzówki: [
        "jazzówki jednokolorowe", "jazzówki lakierowane",
        "jazzówki dwukolorowe", "jazzówki metaliczne",
        "jazzówki brogowane", "jazzówki skórzane",
        "jazzówki z przeszyciami", "jazzówki zamszowe",
        "jazzówki z platformą", "jazzówki materiałowe"
    ],
    czółenka: [
        "czółenka klasyczne", "czółenka z noskiem w szpic",
        "czółenka na słupku", "czółenka z noskiem zaokrąglonym",
        "czółenka na szpilce", "czółenka z noskiem kwadratowym",
        "czółenka na koturnie", "czółenka platformowe",
        "czółenka peep toe", "czółenka lakierowane",
        "czółenka slingback", "czółenka wieczorowe",
        "czółenka Mary Jane", "czółenka ślubne",
        "czółenka z paskiem T-bar"
    ],
    baleriny: [
        "baleriny klasyczne", "baleriny peep toe",
        "baleriny z kokardką", "baleriny slingback",
        "baleriny z noskiem w szpic", "baleriny zamszowe",
        "baleriny z noskiem zaokrąglonym", "baleriny lakierowane",
        "baleriny z noskiem kwadratowym", "baleriny z wiązaniem",
        "baleriny Mary Jane", "baleriny platformowe"
    ],
    sandały: [
        "sandały płaskie", "sandały slingback",
        "sandały na słupku", "sandały peep toe",
        "sandały na szpilce", "sandały platformowe",
        "sandały na koturnie", "sandały sportowe",
        "gladiatorki", "sandały trekkingowe",
        "rzymianki", "espadryle"
    ],
    klapki: [
        "klapki płaskie", "klapki sportowe",
        "klapki na słupku", "klapki basenowe",
        "klapki na koturnie", "klapki skórzane",
        "klapki na platformie", "klapki z futerkiem",
        "japonki", "klapki plecione",
        "mule", "klapki ortopedyczne"
    ],
    botki: [
        "sztyblety", "botki na obcasie",
        "botki płaskie", "botki kowbojki",
        "botki na słupku", "botki na szpilce",
        "botki sznurowane", "botki ocieplane",
        "workery", "botki jesienne",
        "botki dziurkowane", "botki zimowe",
        "botki wiosenne", "botki na koturnie",
        "botki z wycięciem", "botki letnie",
        "botki ażurowe"
    ],
    kozaki: [
        "kozaki klasyczne", "kozaki na koturnie",
        "kozaki muszkieterki", "kozaki na platformie",
        "kozaki oficerki", "kozaki sznurowane",
        "kozaki kowbojki", "kozaki zamszowe",
        "kozaki na szpilce", "kozaki lakierowane",
        "kozaki na słupku", "kozaki ocieplane"
    ]
};

$(document).on("click keydown", ".menu__item", function (e) {
    if (e.type === "keydown" && e.key !== "Enter" && e.key !== " ") {
        return;
    }

    const $item = $(this);

    if ($item.hasClass("active")) {
        return;
    }

    $(".menu__item").removeClass("active");
    $(".menu__item").attr("aria-selected", "false");
    $item.addClass("active");
    $item.attr("aria-selected", "true");

    const itemKey = $item.data("item");

    if (itemKey === "outlet" || itemKey === "wszystkie") {
        toggleMenu();
        return;
    }

    if (submenuData[itemKey]) {
        const $submenu = $(".menu__submenu-column");

        const links = submenuData[itemKey]
            .map(shoe => `<a href="#" class="nav-link menu__submenu-link">${shoe}</a>`)
            .join("");

        $submenu.html(links);

        loadImage(itemKey.charAt(0).toUpperCase() + itemKey.slice(1));
    }

    $(".menu__submenu-column .menu__submenu-link:first-child").focus();
});

function toggleMenu() {
    $(".navi__chevron").toggleClass("navi__chevron--open");
    $(".menu__item").removeClass("active");
    $(".menu__submenu-column").empty();

    $(".menu").slideToggle(300, function () {
        if ($(".navi__chevron").hasClass("navi__chevron--open")) {
            $(".menu__item:first-child").focus();
        } else {
            $(".navi__dropdown").focus();
        }
    });

    if ($(".navi__chevron").hasClass("navi__chevron--open")) {
        loadImage("Unlimitech");
    } else {
        $(".menu__img").remove();
    }
}

let currentImageRequestId = 0;

function loadImage(alt) {
    $(".menu__img").remove();

    const $placeholder = $(".menu__placeholder");
    $placeholder.show();

    const src =
        alt === "Botki"
            ? "img/botki.webp"
            : `https://picsum.photos/seed/${encodeURIComponent(alt)}/403/521.webp`;

    const $newImg = $("<img>", {
        src: src,
        alt: alt,
        class: "img-fluid rounded-4 menu__img",
    });

    const requestId = ++currentImageRequestId;

    $newImg.on("load", function () {
        if (requestId === currentImageRequestId) {
            $(".menu__img-wrapper").append($newImg);
            $placeholder.hide();
        }
    });
}