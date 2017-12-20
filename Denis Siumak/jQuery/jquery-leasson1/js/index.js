$(document).ready(function() {
  
  $(".btn1").on("click", function() {
    $("p.red, li").css("color", "red");
  });
  
  $(".btn2").on("click", function() {
    $("div > p").css("color", "blue");
  });
  
  $(".btn3").on("click", function() {
    $("p > strong").css("font-style", "italic");
  });
  
  $(".btn4").on("click", function() {
    $(".task4 > .blocks").css("background-color", "red");
  });
})