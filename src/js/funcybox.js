window.jQuery = $;
window.fancybox = $.fancybox;
require("@fancyapps/fancybox");

$(document).ready(function(){
  $('[data-fancybox="test"]').fancybox({
    smallBtn : true,
    toolbar : false
  });
});