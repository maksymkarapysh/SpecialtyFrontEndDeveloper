
window.addEventListener("load", init, false);

function init() {
  var text = document.getElementsByClassName("text");
  
  window.addEventListener("keydown", buttonPress, false);
  
  function buttonPress(e) {
    e = e || window.event;
    //console.log(e.keyCode);
    if (e.keyCode == "82") {
      classLoop(text, "red");
    } else if (e.keyCode == "71") {
      classLoop(text, "green");
    } else if (e.keyCode == "66") {
      classLoop(text, "blue");
    } else {
      classLoop(text, "black");
    }
  }
  
  function classLoop(elements, clr) {
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.color = clr;
    }
  }
}