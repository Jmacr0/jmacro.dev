///////////////////// NAVBAR ///////////////////////

$(document).ready(function() {
  $('a[href="' + this.location.pathname.split("").slice(1,location.pathname.length).join("") + '"]').parent().addClass('active');
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



///////////////////// ABOUT ///////////////////////






