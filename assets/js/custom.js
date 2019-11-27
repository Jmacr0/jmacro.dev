$(document).ready(function () {
  setInterval(function () {
    let blinker = $('.blinker');
    if (blinker.css('visibility') == 'hidden') {
      blinker.css('visibility', 'visible');
    }
    else {
      blinker.css('visibility', 'hidden');
    }
  }, 500);
})

var carouselControls = $("#carouselExampleControls");


$("#carousel-button-1").click(function () {
  carouselControls.carousel(0);
});

$("#carousel-button-2").click(function () {
  carouselControls.carousel(1);
});

$("#carousel-button-3").click(function () {
  carouselControls.carousel(2);
});

$("#carousel-button-4").click(function () {
  carouselControls.carousel(3);
});








