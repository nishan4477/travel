if ($(window).width() >= 480) {
  $(window).scroll(function () {
    console.log("asd");
    if ($(this).scrollTop() > 150) {
      $("header").css({ display: "none" });
    } else {
      $("header").css({ display: "block" });
    }
  });
}

// $(".owl-carousel").owlCarousel({
//   loop: true,
//   margin: 10,
//   responsiveClass: true,
//   responsive: {
//     0: {
//       items: 1,
//       nav: true,
//     },
//     600: {
//       items: 3,
//       nav: false,
//     },
//     1000: {
//       items: 5,
//       nav: true,
//       loop: false,
//     },
//   },
// });
