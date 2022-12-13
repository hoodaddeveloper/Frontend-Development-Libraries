$(document).ready(function () {
  // Target multiple items and set mutliple css changes on them.
  $(".p1, .p2").css({
    color: "blue",
    paddingLeft: "10px",
    fontSize: "20px",
    background: "lightgray",
    borderRadius: "12px",
    marginTop: "20px",
  });

  $("h3").css("textAlign", "center");

  $("ul.list-unstyled").prepend("<li>Prepend List item</li>");
  $("ul.list-unstyled").append("<li>Appened List item</li>");

  $("ul.list-unstyled").before("<h5>Before ul added item</h5>");
  $("ul.list-unstyled").after("<h5>After ul added item</h5>");
  // Wrap (change) list items to anything
  $("ul.list-unstyled").wrap("<i></i>");

  // Buttons animations

  // FadeOut the box by clicking
  $("#fadeOut").click(function () {
    $(".box").fadeOut();
  });
  // FadeIn the box by clicking
  $("#fadeIn").click(function () {
    $(".box").fadeIn();
  });
  // FadeToggle the box by clicking
  $("#fadeToggle").click(function () {
    $(".box").fadeToggle("");

    // $(".box").fadeToggle("fast");
    // $(".box").fadeToggle("slow");
  });

  // SlideUp slow the box by clicking
  $("#slideUp").click(function () {
    $(".box").slideUp("slow");
  });

  // SlideDown fast the box by clicking
  $("#slideDown").click(function () {
    $(".box").slideDown("fast");
  });

  // SlideToggle the box by clicking
  $("#slideToggle").click(function () {
    $(".box").slideToggle();
  });
});
