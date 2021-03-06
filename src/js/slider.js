const $ = require('jquery');

require('slick-carousel');
require('slick-carousel/slick/slick.css');
require('slick-carousel/slick/slick-theme.css');

window.jQuery = $;
window.fancybox = $.fancybox;
require("@fancyapps/fancybox");

$(document).ready(function(){
  $('.slider').slick({
    infinite: true,
    dots: true,
    dotsClass: "promo-slider__dots",
    autoplay: false,
    autoplaySpeed: 2000,
    fade: false,
    arrows: false
  });
});
