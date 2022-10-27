$(document).ready(function () {
  $(".fa-bars").click(function () {
    $(this).toggleClass("fa-times");
    $(".navbar").toggleClass("navbar-toggle");
  });
  $(window).on("scroll load", function () {
    $(".fa-bars").removeClass("fa-times");
    $(".navbar").removeClass("navbar-toggle");
    if ($(window).scrollTop() > 30) {
      $("header").addClass("header-active");
    } else {
      $("header").removeClass("header-active");
    }
    $("section").each(function () {
      var top = $(window).scrollTop();
      var id = $(this).attr("id");
      var height = $(this).height();
      var top = $(this).offset().top - 200;
      if (top >= offet && top < height + offet) {
        $(".navbar ul li a").removeClass("active");
        $(".navbar")
          .find('[href="#' + id + '"]')
          .addClass('active');
      }
    });
  });
});
