$(document).ready(function () {
    $(".newsletter").load("html/newsletter.html");
    $(".toast-wrapper").load("html/email_toast.html");
});

$(document).on("submit", ".newsletter__form", function (e) {
    e.preventDefault();
    const email = $(this).find(".newsletter__email-input").val();
    if (email) {
        $(".toast-body").text(`Zapisano: ${email}`);
        const toastBootstrap = bootstrap.Toast.getOrCreateInstance($("#email-toast"))
        toastBootstrap.show()
    }
});