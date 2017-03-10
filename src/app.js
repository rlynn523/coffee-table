$(function() {
  $('.slogan').toggle('drop', {direction: 'up'}, 2000);
  $('.about-menu').click(function() {
    $(this).addClass('menu-select');
    $('.testimonial-menu').removeClass('menu-select');
    $('.tools-menu').removeClass('menu-select');
    $('.bar-menu').hide('bar-menu');
  });
  $('.testimonial-menu').click(function() {
    $(this).addClass('menu-select');
    $('.about-menu').removeClass('menu-select');
    $('.contact-menu').removeClass('menu-select');
    $('.tools-menu').removeClass('menu-select');
    $('.bar-menu').hide('bar-menu');
  });
  $('.tools-menu').click(function() {
    $(this).addClass('menu-select');
    $('.about-menu').removeClass('menu-select');
    $('.contact-menu').removeClass('menu-select');
    $('.testimonial-menu').removeClass('menu-select');
    $('.bar-menu').hide('bar-menu');
  });
  $('.contact-menu').click(function() {
    $(this).addClass('menu-select');
    $('.about-menu').removeClass('menu-select');
    $('.testimonial-menu').removeClass('menu-select');
    $('.tools-menu').removeClass('menu-select');
    $('.bar-menu').hide('bar-menu');
  });
  $('.fa-chevron-up').click(function() {
    $('*').removeClass('menu-select');
  });
  $('.fa-bars').click(function() {
    $('.bar-menu').toggle();
  });
});
function scrollUp(){
   $('html, body').animate({ scrollTop: $('.masthead').position().top}, 2000);
}
function scrollAbout(){
   $('html, body').animate({ scrollTop: $('.about').position().top - $(".menu").height()}, 2000);
}
function scrollTools(){
   $('html, body').animate({ scrollTop: $('.tools').position().top - $(".menu").height()}, 2000);
}
function scrollTestimonial(){
   $('html, body').animate({ scrollTop: $('.testimonial').position().top - $(".menu").height()}, 2000);
}
function scrollContact(){
   $('html, body').animate({ scrollTop: $('.contact').position().top - $(".menu").height()}, 2000);
}
