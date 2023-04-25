/* eslint-disable */

import Swiper, { Navigation } from "swiper";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";

console.log("Landing...");

$(window).on("load", function () {
  console.log("Load...");

  $(".statistics-blocks").slick({
    //autoplay: true,
    slidesToShow: 4,
    arrows: false,
  });

  const swiper = new Swiper(".swiper", {
    modules: [Navigation],
    loop: true,
    spaceBetween: 30,
    slidesPerView: 4,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});

$("#slick-next").on("click", function () {
  $(".statistics-blocks").slick("slickNext");
});

$("#slick-prev").on("click", function () {
  $(".statistics-blocks").slick("slickPrev");
});

$(document).ready(function () {
  console.log("Ready...");
});
