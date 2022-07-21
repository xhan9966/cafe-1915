"use strict";

$(document).ready(() => {
  // preload images
  var image = new Image();
  image.src = "../images/beverage.png";
  image.src = "../images/food.png";

  $("#menu-icon").click(() => {
    let result = $("#left-menu-container").css("display");
    if (result === "block") {
      result = "none";
    } else if (result === "none") {
      result = "block";
    }
    $("#left-menu-container").css("display", result);
  }); // end of click()
}); // end of ready()
