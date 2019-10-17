///////////////////// NAVBAR ///////////////////////

$("li a").on("click", function(){
  $("li a").find(".active").removeClass("active");
  $(this).addClass("active");
});

///////////////////// PORTFOLIO ///////////////////////

//////// CAROUSEL CONTROLS //////////

// Activate Carousel
$("#carouselExampleControls").carousel();

// Enable Carousel Indicators
$("#carousel-button-1").click(function(){
  $("#carouselExampleControls").carousel(0);
});

$("#carousel-button-2").click(function(){
    $("#carouselExampleControls").carousel(1);
  });

