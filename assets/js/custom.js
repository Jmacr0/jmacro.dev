$(document).ready(function(){
  setInterval(function(){
    $('.blinker').toggle();
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








