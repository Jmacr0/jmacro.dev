///////////////////// NAVBAR ///////////////////////

$(document).ready(function() {
  $('li.active').removeClass('active');
  $('a[href="' + window.location.pathname + '"]').closest('li').addClass('active'); 
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

