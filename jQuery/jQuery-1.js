// jQuery codes

// Select an element using its type:
$("button").addClass("animated bounce");
// Select an element using its class:
$(".well").addClass("animated shake");
// Select an element using its id:
$("#target3").addClass("animated fadeout");
// Change the CSS color of an element using .css():
$("#target1").css("color", "red");
// Disable an element using .prop():
$("#target1").prop("disabled", true);
// Change text inside an element using .html():
$("h3").html("<em>jQuery Playground</em>");
// Remove an element using .remove():
$("#target4").remove();
// Move an element to another element using .appendTo():
$("#target2").appendTo("#right-well");
// Clone an element using .clone():
$("#target5").clone().appendTo("#left-well");
// Target the parent of an element using .parent():
$("#target1").parent().css("background-color", "red");
// Target the children of an element using .children():
$("#right-well").children().css("color", "orange");
// Target a specific child (second) of an element using jQuery:
$(".target:nth-child(2)").addClass("animated bounce");
// Target even pr odd elements using jQuery:
$(".target:odd").addClass("animated shake");
// $(".target:even").addClass("animated shake");

// Use jQuery to modify the entire page:
// $("body").addClass("animated fadeOut");

// More practice:
$(".target7").html("Hello");
$("#target8").html("Hoodad");
$("span").css("color", "red");