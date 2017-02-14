$(function() {
    $('.slogan').toggle('drop', {direction: 'up'}, 2000);
});
function scrollUp(){
   $('html, body').animate({ scrollTop: $('.masthead').position().top}, 2000);
}
function scrollAbout(){
   $('html, body').animate({ scrollTop: $('.about').position().top - $(".menu").height()}, 2000);
}
function scrollWhy(){
   $('html, body').animate({ scrollTop: $('.why').position().top - $(".menu").height()}, 2000);
}
