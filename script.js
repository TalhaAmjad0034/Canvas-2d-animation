var canvas = document.getElementById("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var ctx = canvas.getContext("2d");

function Circle(x, y, dx, dy, radius) {
  this.draw = function () {
    ctx.beginPath();
    ctx.arc(x, y, 30, 0, Math.PI * 2, false);
    ctx.strokeStyle = "blue";
    ctx.stroke();
    ctx.fill();
  };
  this.update = function () {
    if (x + radius > innerWidth || x - radius < 0) {
      dx = -dx;
    }

    if (y + radius > innerHeight || y - radius < 0) {
      dy = -dy;
    }

    x += dx;
    y += dy;

    this.draw();
  };
}

// let circle = new Circle(x, y, dx, dy, radius);

let circleArr = [];

for (let i = 0; i < 100; i++) {
  var x = Math.random() * (innerWidth - radius * 2) + radius;
  var y = Math.random() * (innerHeight - radius * 2) + radius;
  var dx = Math.random() - 0.5;
  var dy = Math.random() - 0.5;
  var radius = 30;
  circleArr.push(new Circle(x, y, dx, dy, radius));
}

console.log(circleArr);

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, innerWidth, innerHeight);
  for (let i = 0; i < circleArr.length; i++) {
    circleArr[i].update();
  }
}

animate();
