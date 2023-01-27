var canvas = document.getElementById("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var ctx = canvas.getContext("2d");

let mouse = {
  x: undefined,
  y: undefined,
};

let maxRadius = 40;

let colorArray = ["#2C3E50", "#E74C3C", "#ECF0F1", "#3498DB", "#2980B9"];

window.addEventListener("mousemove", function (event) {
  mouse.x = event.x;
  mouse.y = event.y;
});

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init();
});

function Circle(x, y, dx, dy, radius) {
  let minRadius = radius;
  let color = colorArray[Math.floor(Math.random() * colorArray.length)];
  this.draw = function () {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    ctx.fillStyle = color;
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

    // interactivity

    if (
      mouse.x - x < 50 &&
      mouse.x - x > -50 &&
      mouse.y - y < 50 &&
      mouse.y - y > -50
    ) {
      if (radius < maxRadius) {
        radius += 1;
      }
    } else if (radius > minRadius) {
      radius -= 1;
    }

    this.draw();
  };
}

// let circle = new Circle(x, y, dx, dy, radius);

let circleArr = [];

for (let i = 0; i < 400; i++) {
  var x = Math.random() * (innerWidth - radius * 2) + radius;
  var y = Math.random() * (innerHeight - radius * 2) + radius;
  var dx = Math.random() - 0.5;
  var dy = Math.random() - 0.5;
  var radius = Math.random() * 10 + 1;
  circleArr.push(new Circle(x, y, dx, dy, radius));
}

function init() {
  // empty the array
  circleArr = [];
  // create new circles on new window size
  for (let i = 0; i < 400; i++) {
    var x = Math.random() * (innerWidth - radius * 2) + radius;
    var y = Math.random() * (innerHeight - radius * 2) + radius;
    var dx = Math.random() - 0.5;
    var dy = Math.random() - 0.5;
    var radius = Math.random() * 10 + 1;
    circleArr.push(new Circle(x, y, dx, dy, radius));
  }
}

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, innerWidth, innerHeight);
  for (let i = 0; i < circleArr.length; i++) {
    circleArr[i].update();
  }
}

animate();
