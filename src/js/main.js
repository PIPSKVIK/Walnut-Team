import Inputmask from "inputmask";

var selector = document.querySelector(".main-data__phone");

var im = new Inputmask("+7 (999) 999 99-99");
im.mask(selector);
