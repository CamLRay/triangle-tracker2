$(document).ready(function() {
  $("#triForm").submit(function(event) {
    event.preventDefault();
    const side1 = parseInt($("side1").val());
    const side2 = parseInt($("side2").val());
    const side3 = parseInt($("side3").val());

  });

function sideCount(side1, side2, side3) {
  if (side1 === side2 && side1 === side3) {
    $(".output").text("Equilateral");
  }else if (side1 === side2 || side2 === side3) {
    $(".output").text("Isosceles");
  }
    
