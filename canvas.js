var cx = document.querySelector("canvas").getContext("2d");
cx.beginPath();
cx.moveTo(10, 90);
cx.quadraticCurveTo(60, 10, 90, 90);
cx.lineTo(60, 10);
cx.closePath();

cx.moveTo(10, 100);
cx.arcTo(90, 100, 90, 190, 20);
cx.moveTo(10, 100);
cx.arcTo(90, 100, 90, 190, 80);

cx.moveTo(190, 50);
cx.arc(150, 50, 40, 0, 7);
cx.moveTo(290, 50);
cx.arc(250, 50, 40, 0, -0.5 * Math.PI);
cx.stroke();

var results = [
  {name: "Satisfied", count: 1043, color: "lightblue"},
  {name: "Neutral", count: 563, color: "lightgreen"},
  {name: "Unsatisfied", count: 510, color: "pink"},
  {name: "No comment", count: 175, color: "silver"}
];
var total = results.reduce(function(sum, choice) { return sum + choice.count }, 0);
var currentAngle = -0.5 * Math.PI;
results.forEach(function(result) {
  var sliceAngle = (result.count / total) * 2 * Math.PI;
  cx.beginPath();
  cx.arc(200, 200, 100, currentAngle, currentAngle + sliceAngle);
  currentAngle += sliceAngle;
  cx.lineTo(200, 200);
  cx.fillStyle = result.color;
  cx.fill();
});

var img = document.createElement("img");
img.src = "images/hat.png";
img.addEventListener("load", function() {
  for (var x = 10; x < 200; x += 30)
    cx.drawImage(img, 310, x);
});
function flipHorizontally(context, around) {
  context.translate(around, 0);
  context.scale(-1, 1);
  context.translate(-around, 0);
}
cx.moveTo(100, 10);
var img2 = document.createElement("img");
img2.src = "images/player.png";
var spriteW = 24, spriteH = 30;
// img2.addEventListener("load", function() {
//   var cycle = 0;
//   setInterval(function() {
//     cx.clearRect(0, 0, spriteW, spriteH);
//     cx.drawImage(img2, cycle * spriteW, 0, spriteW, spriteH, 0, 0, spriteW, spriteH);
//     cycle = (cycle + 1) % 8;
//   }, 120);
// });
var img3 = document.createElement("img");
img3.src = "images/player.png";
img3.addEventListener("load", function() {
  flipHorizontally(cx, 10 + spriteW / 2);
  cx.drawImage(img3, 0, 0, spriteW, spriteH, 10, 0, spriteW, spriteH);
});
