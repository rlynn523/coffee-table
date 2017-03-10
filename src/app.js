$(function() {
  $('.slogan').toggle('drop', {direction: 'up'}, 2000);
  $('.about-menu').click(function() {
    scrollAbout();
    $(this).addClass('menu-select');
    $('.testimonial-menu').removeClass('menu-select');
    $('.tools-menu').removeClass('menu-select');
    $('.bar-menu').hide('bar-menu');
  });
  $('.testimonial-menu').click(function() {
    scrollTestimonial();
    $(this).addClass('menu-select');
    $('.about-menu').removeClass('menu-select');
    $('.contact-menu').removeClass('menu-select');
    $('.tools-menu').removeClass('menu-select');
    $('.bar-menu').hide('bar-menu');
  });
  $('.tools-menu').click(function() {
    scrollTools();
    $(this).addClass('menu-select');
    $('.about-menu').removeClass('menu-select');
    $('.contact-menu').removeClass('menu-select');
    $('.testimonial-menu').removeClass('menu-select');
    $('.bar-menu').hide('bar-menu');
  });
  $('.contact-menu').click(function() {
    scrollContact();
    $(this).addClass('menu-select');
    $('.about-menu').removeClass('menu-select');
    $('.testimonial-menu').removeClass('menu-select');
    $('.tools-menu').removeClass('menu-select');
    $('.bar-menu').hide('bar-menu');
  });
  $('.fa-chevron-up').click(function() {
    scrollUp();
    $('*').removeClass('menu-select');
  });
  $('.fa-bars').click(function() {
    $('.bar-menu').toggle();
  });
});
function scrollUp(){
   $('html, body').animate({ scrollTop: $('.masthead').position().top}, 1500);
}
function scrollAbout(){
   $('html, body').animate({ scrollTop: $('.about').position().top - $(".menu").height()}, 1500);
}
function scrollTools(){
   $('html, body').animate({ scrollTop: $('.tools').position().top - $(".menu").height()}, 1500);
}
function scrollTestimonial(){
   $('html, body').animate({ scrollTop: $('.testimonial').position().top - $(".menu").height()}, 1500);
}
function scrollContact(){
   $('html, body').animate({ scrollTop: $('.contact').position().top - $(".menu").height()}, 1500);
}
