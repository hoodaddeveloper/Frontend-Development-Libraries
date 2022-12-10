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
  
  $("ul").prepend("<li>Prepend List item</li>");
  $("ul").append("<li>Appened List item</li>");
  
  $("ul").before("<h5>Before ul added item</h5>");
  $("ul").after("<h5>After ul added item</h5>");
  // Wrap (change) list items to anything
  $("li").wrap("<i></i>");
});
