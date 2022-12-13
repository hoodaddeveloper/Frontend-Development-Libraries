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
  $(".fadeOut").click(function () {
    $(".box").fadeOut();
  });
  // FadeIn the box by clicking
  $(".fadeIn").click(function () {
    $(".box").fadeIn();
  });
  // FadeToggle the box by clicking
  $(".fadeToggle").click(function () {
    $(".box").fadeToggle("");

    // $(".box").fadeToggle("fast");
    // $(".box").fadeToggle("slow");
  });

  // SlideUp the box slowly by clicking
  $(".slideUp").click(function () {
    $(".box").slideUp("slow");
  });

  // SlideDown the box fast by clicking
  $(".slideDown").click(function () {
    $(".box").slideDown("fast");
  });

  // SlideToggle the box in 3 seconds and alert
  $(".slideToggle").click(function () {
    $(".box").slideToggle(3000, function () {
      alert("Animation finished!");
    });
  });

  // Stop the animation by clicking
  $(".stop").click(function () {
    $(".box").stop();
  });

  // Move to right animation by clicking
  $(".right").click(function () {
    $(".box").animate({
      left: 100,
    });
  });

  // Move to left animation by clicking
  $(".left").click(function () {
    $(".box").animate({
      right: 100,
    });
  });

  // Move right & left by clicking
  $(".right_left").click(function () {
    $(".box").animate({
      left: 300,
      right: 100,
    });
  });
});
