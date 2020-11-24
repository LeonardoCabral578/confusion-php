$(document).ready(function () {

  //Tooltip
  $('[data-toggle="tooltip"]').tooltip();

  //Carousel
  $('#mycarousel').carousel({
    interval: 2000
  });
  $('#carouselButton').click(function () {
    if ($('#carouselButton').children('span').hasClass('fa-pause')) {
      $('#mycarousel').carousel('pause');
      $('#carouselButton').children('span').removeClass('fa-pause')
      $('#carouselButton').children('span').addClass('fa-play')
    }
    else if ($('#carouselButton').children('span').hasClass('fa-play')) {
      $('#mycarousel').carousel('cycle');
      $('#carouselButton').children('span').removeClass('fa-play')
      $('#carouselButton').children('span').addClass('fa-pause')
    }
  });


  //Modals
  $('#loginButton').click(function () {
    $('#loginModal').modal('show')
  });

  $('#reserveButton').click(function () {
    $('#reserveModal').modal('show')
  });
});