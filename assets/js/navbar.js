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
    var nav = $('#menu');
    var navItems = $('#navbarNav');
    var navBrand = $('.navbar-brand');
    if ($(document).scrollTop() > (window.innerHeight)*0.35) {
        navBrand.attr('style', 'background-color: #4aaaa5;');
        navItems.removeClass('navbar-dark')
        navItems.addClass('navbar-light');
        nav.attr('style', 'border-bottom: 2px solid rgb(73, 73, 73)');
        nav.addClass('bg-light');
    } else {
        navBrand.attr('style', 'background: transparent');
        navItems.addClass('navbar-dark');
        navItems.removeClass('navbar-light');
        nav.attr('style', 'background: transparent; border-bottom: none;');
        nav.removeClass('bg-light');
    }
})
