$(function() {
  $('.about-menu').click(function() {
    scrollAbout();
    $(this).addClass('menu-select');
    $('.testimonial-menu').removeClass('menu-select');
    $('.work-menu').removeClass('menu-select');
    $('.bar-menu').hide('bar-menu');
    $('.fa-times-circle-o').hide();
    $('.fa-bars').show();
  });
  $('.testimonial-menu').click(function() {
    scrollTestimonial();
    $(this).addClass('menu-select');
    $('.about-menu').removeClass('menu-select');
    $('.contact-menu').removeClass('menu-select');
    $('.work-menu').removeClass('menu-select');
    $('.bar-menu').hide('bar-menu');
    $('.fa-times-circle-o').hide();
    $('.fa-bars').show();
  });
  $('.work-menu').click(function() {
    scrollWork();
    $(this).addClass('menu-select');
    $('.about-menu').removeClass('menu-select');
    $('.contact-menu').removeClass('menu-select');
    $('.testimonial-menu').removeClass('menu-select');
    $('.bar-menu').hide('bar-menu');
    $('.fa-times-circle-o').hide();
    $('.fa-bars').show();
  });
  $('.contact-menu').click(function() {
    scrollContact();
    $(this).addClass('menu-select');
    $('.about-menu').removeClass('menu-select');
    $('.testimonial-menu').removeClass('menu-select');
    $('.work-menu').removeClass('menu-select');
    $('.bar-menu').hide('bar-menu');
    $('.fa-times-circle-o').hide();
    $('.fa-bars').show();
  });
  $('.fa-chevron-up').click(function() {
    scrollUp();
    $('*').removeClass('menu-select');
  });
  $('.fa-bars').click(function() {
    $('.bar-menu').show();
    $('.fa-times-circle-o').show();
    $(this).hide();
  });
  $('.fa-times-circle-o').click(function() {
    $('.bar-menu').hide();
    $('.fa-bars').show();
    $(this).hide();
  });
});
function scrollUp(){
   $('html, body').animate({ scrollTop: $('.masthead').position().top}, 1500);
}
function scrollAbout(){
   $('html, body').animate({ scrollTop: $('.about').position().top - $(".menu").height()}, 1500);
}
function scrollWork(){
   $('html, body').animate({ scrollTop: $('.work').position().top - $(".menu").height()}, 1500);
}
function scrollTestimonial(){
   $('html, body').animate({ scrollTop: $('.testimonial').position().top - $(".menu").height()}, 1500);
}
function scrollContact(){
   $('html, body').animate({ scrollTop: $('.contact').position().top - $(".menu").height()}, 1500);
}
