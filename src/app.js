$(function() {
    $('.slogan').toggle('drop', {direction: 'up'}, 2000);
    $('.testimonial-menu').click(function() {
      $(this).addClass('menu-select');
      $('.about-menu').removeClass('menu-select');
   });
   $('.about-menu').click(function() {
     $(this).addClass('menu-select');
     $('.testimonial-menu').removeClass('menu-select');
  });
  $('.fa-chevron-up').click(function() {
    $('*').removeClass('menu-select');
  });
});
function scrollUp(){
   $('html, body').animate({ scrollTop: $('.masthead').position().top}, 2000);
}
function scrollAbout(){
   $('html, body').animate({ scrollTop: $('.about').position().top - $(".menu").height()}, 2000);
}
function scrollTestimonial(){
   $('html, body').animate({ scrollTop: $('.testimonial').position().top - $(".menu").height()}, 2000);
}
