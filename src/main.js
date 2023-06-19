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





