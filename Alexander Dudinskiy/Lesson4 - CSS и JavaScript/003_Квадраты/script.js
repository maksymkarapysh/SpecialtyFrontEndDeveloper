var square = document.querySelectorAll(".square");

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

setInterval(function() {
	for (var i = 0; i < square.length; i++) {
		var randomGrph = getRandomInt(0, 501);
		square[i].style.top = randomGrph + "px";
		var randomCol = getRandomInt(100000, 1000000);
		square[i].style.backgroundColor = "#" + randomCol;
		randomGrph = getRandomInt(0, 901);
		square[i].style.left = randomGrph + "px";

		// console.log(square[i]);
	}
}, 2000);