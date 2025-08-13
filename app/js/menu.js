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
        const $submenuLeft = $(".menu__submenu-column--left");
        const $submenuRight = $(".menu__submenu-column--right");

        const leftLinks = submenuData[itemKey].left
            .map(shoe => `<a href="#" class="nav-link menu__submenu-link">${shoe}</a>`)
            .join("");

        const rightLinks = submenuData[itemKey].right
            .map(shoe => `<a href="#" class="nav-link menu__submenu-link">${shoe}</a>`)
            .join("");

        $submenuLeft.html(leftLinks);
        $submenuRight.html(rightLinks);

        loadImage(itemKey.charAt(0).toUpperCase() + itemKey.slice(1));
    }

    $(".menu__submenu-column--left .menu__submenu-link:first-child").focus();
});

function toggleMenu() {
    $(".navi__dropdown").attr("aria-expanded", function (i, val) {
        return val === "true" ? "false" : "true";
    });

    $(".navi__chevron").toggleClass("navi__chevron--open");
    $(".menu__item").removeClass("active");
    $(".menu__submenu-column--left", ".menu__submenu-column--right").empty();

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