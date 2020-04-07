window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

$(document).scroll(function () {
    const sideLinks = $('#side-links div div');
    const scrollHeight = $(document).scrollTop()
    if (scrollHeight > (window.innerHeight) * 0.3) {
        sideLinks.attr('style', 'background-color: #000000; transition-duration: 1s; border-radius: 0px 50px 30px 0px;');
    } else {
        sideLinks.attr('style', 'background-color: ""; transition-duration: 0.5s;');
    }
})