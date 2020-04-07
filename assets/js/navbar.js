window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

$('#navbarNav').on('click', function () {
    event.preventDefault();
    $([document.documentElement, document.body]).animate({
        scrollTop: $($(event.target).attr('href')).offset().top
    }, 1000);
})

$(document).scroll(function () {
    var nav = $('#nav');
    if ($(document).scrollTop() > (window.innerHeight) * 0.93) {
        nav.show();
    } else {
        nav.hide();
    }
})
