"use strict";

$(document).ready(() => {
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
