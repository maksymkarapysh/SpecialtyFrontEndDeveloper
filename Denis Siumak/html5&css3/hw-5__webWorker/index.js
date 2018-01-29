window.addEventListener("load", function() {
  var click = document.getElementsByClassName("btn__length")[0],
      output = document.getElementsByClassName("output")[0];

  click.addEventListener("click", function() {
    var length = document.getElementsByClassName("number")[0].value;
    var worker = new Worker("worker.js");

    worker.postMessage(length);
    worker.addEventListener("message", function (e) {
      output.innerHTML = e.data.join(" , ");
    }, false);

  }, false);
});
