var cx = document.querySelector("canvas").getContext("2d");

function trapezoid(x, y) {
  cx.beginPath();
  cx.moveTo(x, y);
  cx.lineTo(x + 50, y);
  cx.lineTo(x + 70, y + 60);
  cx.lineTo(x - 10, y + 60);
  cx.closePath();
  cx.stroke();
};
trapezoid(20, 20);

function diamond(x, y) {
  cx.translate(x + 20, y + 20);
  cx.rotate(Math.PI / 4);
  cx.fillRect(-20, -20, 60, 60);
  cx.resetTransform();
}
diamond(130, 20);

function zigzag(x, y) {
  cx.beginPath();
  cx.moveTo(x, y);
  for (var i = 0; i < 8; i++) {
      cx.lineTo(x + 60, y + i * 8 + 4);
      cx.lineTo(x, y + i * 8 + 8);
  }
  cx.stroke();
}
zigzag(220, 20);

function spiral(x, y) {
  var radius = 50, xCenter = x + radius, yCenter = y + radius;
  cx.beginPath();
  cx.moveTo(xCenter, yCenter);
  for (var i = 0; i < 100; i++) {
    var angle = i * Math.PI / 20;
    var dist = radius * i / 100;
    cx.lineTo(xCenter + Math.cos(angle) * dist,
              yCenter + Math.sin(angle) * dist);
  }
  cx.stroke();
}
spiral(300, 0);

function star(x, y) {
  var radius = 50, xCenter = x + radius, yCenter = y + radius;
  cx.beginPath();
  cx.moveTo(xCenter + radius, yCenter);
  for (var i = 1; i <= 8; i++) {
    var angle = i * Math.PI / 4;
    cx.quadraticCurveTo(xCenter, yCenter,
                        xCenter + Math.cos(angle) * radius,
                        yCenter + Math.sin(angle) * radius);
  }
  cx.fillStyle = "gold";
  cx.fill();
}
star(400, 10);
