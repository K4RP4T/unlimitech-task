const submenuData = {
    półbuty: {
        left: ["półbuty z noskiem w szpic", "półbuty na słupku", "półbuty na koturnie", "półbuty Mary Jane", "półbuty z wycięciami", "półbuty lakierowane", "baleriny z zakrytym podbiciem"],
        right: ["oksfordki", "derby", "brogsy", "loafersy", "slip-on", "sneakersy", "trampki"]
    },
    jazzówki: {
        left: ["jazzówki jednokolorowe", "jazzówki dwukolorowe", "jazzówki brogowane", "jazzówki z przeszyciami", "jazzówki z platformą"],
        right: ["jazzówki lakierowane", "jazzówki metaliczne", "jazzówki skórzane", "jazzówki zamszowe", "jazzówki materiałowe"]
    },
    czółenka: {
        left: ["czółenka klasyczne", "czółenka na słupku", "czółenka na szpilce", "czółenka na koturnie", "czółenka peep toe", "czółenka slingback", "czółenka Mary Jane", "czółenka z paskiem T-bar"],
        right: ["czółenka z noskiem w szpic", "czółenka z noskiem zaokrąglonym", "czółenka z noskiem kwadratowym", "czółenka platformowe", "czółenka lakierowane", "czółenka wieczorowe", "czółenka ślubne"]
    },
    baleriny: {
        left: ["baleriny klasyczne", "baleriny z kokardką", "baleriny z noskiem w szpic", "baleriny z noskiem zaokrąglonym", "baleriny z noskiem kwadratowym", "baleriny Mary Jane"],
        right: ["baleriny peep toe", "baleriny slingback", "baleriny zamszowe", "baleriny lakierowane", "baleriny z wiązaniem", "baleriny platformowe"]
    },
    sandały: {
        left: ["sandały płaskie", "sandały na słupku", "sandały na szpilce", "sandały na koturnie", "gladiatorki", "rzymianki"],
        right: ["sandały slingback", "sandały peep toe", "sandały platformowe", "sandały sportowe", "sandały trekkingowe", "espadryle"]
    },
    klapki: {
        left: ["klapki płaskie", "klapki na słupku", "klapki na koturnie", "klapki na platformie", "japonki", "mule"],
        right: ["klapki sportowe", "klapki basenowe", "klapki skórzane", "klapki z futerkiem", "klapki plecione", "klapki ortopedyczne"]
    },
    botki: {
        left: ["sztyblety", "botki płaskie", "botki na słupku", "botki sznurowane", "workery", "botki dziurkowane", "botki wiosenne", "botki z wycięciem", "botki ażurowe"],
        right: ["botki na obcasie", "botki kowbojki", "botki na szpilce", "botki ocieplane", "botki jesienne", "botki zimowe", "botki na koturnie", "botki letnie"]
    },
    kozaki: {
        left: ["kozaki klasyczne", "kozaki muszkieterki", "kozaki oficerki", "kozaki kowbojki", "kozaki na szpilce", "kozaki na słupku"],
        right: ["kozaki na koturnie", "kozaki na platformie", "kozaki sznurowane", "kozaki zamszowe", "kozaki lakierowane", "kozaki ocieplane"]
    },
};

$(document).on("click", ".menu__item", function () {
    const $item = $(this);

    if ($item.hasClass("active")) {
        return;
    }

    $(".menu__item").removeClass("active");
    $item.addClass("active");

    const itemKey = $item.data("item");

    if (itemKey === "outlet" || itemKey === "wszystkie") {
        toggleMenu();
        return;
    }

    if (submenuData[itemKey]) {
        $(".menu__submenu-column--left").empty();
        $(".menu__submenu-column--right").empty();

        loadImage(itemKey, itemKey.charAt(0).toUpperCase() + itemKey.slice(1));

        $.each(submenuData[itemKey].left, function (index, shoe) {
            $(".menu__submenu-column--left").append(`<a href="#" class="nav-link menu__submenu-link">${shoe}</a>`);
        });
        $.each(submenuData[itemKey].right, function (index, shoe) {
            $(".menu__submenu-column--right").append(`<a href="#" class="nav-link menu__submenu-link">${shoe}</a>`);
        });
    }
});

function toggleMenu() {
    $(".menu").fadeToggle(300);
    $(".navi__chevron").toggleClass("navi__chevron--open");
    $(".menu__item").removeClass("active");
    $(".menu__submenu-column--left").empty();
    $(".menu__submenu-column--right").empty();

    if ($(".navi__chevron").hasClass("navi__chevron--open")) {
        loadImage("unlimitech", "Unlimitech");
    }
}

function loadImage(seed, alt) {
    const $placeholder = $(".menu__placeholder");
    const $img = $(".menu__img");

    $placeholder.show();
    $img.hide();

    $img.on("load", function () {
        $img.show();
        $placeholder.hide();
    }).attr('src', (seed === "botki") ? "img/botki.png" : `https://picsum.photos/seed/${seed}/403/521`).attr('alt', alt);
}
