/*
It doesn't really work as a charm, but it's roughly good to see, being made in one minute.
Made by TrinTragula
*/

// Random point on a circle
function randomPointOnCircle(radius) {
  var angle = Math.random() * 2 * Math.PI;
  return {x: radius * Math.cos(angle),
          y: radius * Math.sin(angle)};
}
var radius = 20;
var canvas = [];
for (var i = 0; i < radius*2+10; i++){
  	canvas[i] = [];
	 for (var j = 0; j < radius*2+10; j++){
     	canvas[i][j] = ". ";
     }
}
// populate the matrix
for (var i = 0; i < 50000; i++){
	var point = randomPointOnCircle(radius)
	var x = x < 0 ? -Math.floor(point.x) : Math.floor(point.x) + radius;
	var y = y < 0 ? -Math.floor(point.y) : Math.floor(point.y) + radius;
	canvas[x][y] = "#";
}
// print it
result = "";
for (var i = 0; i < radius*2; i++){
	 for (var j = 0; j < radius*2; j++){
     	result += canvas[i][j];
     }
  result += "\n"
}
console.log(result)
