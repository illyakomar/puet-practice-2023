$(window).on("load", function () {
  console.log("Load...");

  $(".statistics-blocks").slick({
    slidesToShow: 4,
    arrows: false,
  });
});

$("#slick-next").on("click", function (evt) {
  $(".statistics-blocks").slick("slickNext");
});

$("#slick-prev").on("click", function (evt) {
  $(".statistics-blocks").slick("slickPrev");
});
