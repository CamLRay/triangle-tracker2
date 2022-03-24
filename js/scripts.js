$(document).ready(function() {
  $("#triForm").submit(function(event) {
    event.preventDefault();
    const side1 = parseInt($("#side1").val());
    const side2 = parseInt($("#side2").val());
    const side3 = parseInt($("#side3").val());

    if (side1 + side2 <= side3 || side1 + side3 <= side2 || side2 + side3 <= side1 || isNaN(side1 + side2 + side3)) {
      $(".output").text("THAT AINT A TRIANGLE");
    } else {
    sideCount(side1, side2, side3);
  }
  });
});



function sideCount(side1, side2, side3) {
  if (side1 === side2 && side1 === side3) {
    $(".output").text("Equilateral");
  }else if (side1 === side2 || side2 === side3 || side1 === side3) {
    $(".output").text("Isosceles");
  }else if (side1 !== (side2 && side3) && side2 !== (side1 && side3)) {
    $(".output").text("Scalene");
  }else {
    alert("I'm not sure how we got to this point, but you messed up");
  }
}