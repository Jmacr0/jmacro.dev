$(document).ready(function(){
  setInterval(function(){
    $('span').toggle();
  }, 500);
})

// Scroll to Section

$('#navbarNav').on('click', function () {
  event.preventDefault();
  $([document.documentElement, document.body]).animate({
    scrollTop: $($(event.target).attr('href')).offset().top
  }, 1000);
})

// Activate Carousel
$("#carouselExampleControls").carousel();

// Enable Carousel Indicators
$("#carousel-button-1").click(function () {
  $("#carouselExampleControls").carousel(0);
});

$("#carousel-button-2").click(function () {
  $("#carouselExampleControls").carousel(1);
});

$("#carousel-button-3").click(function () {
  $("#carouselExampleControls").carousel(2);
});

$("#carousel-button-4").click(function () {
  $("#carouselExampleControls").carousel(3);
});








