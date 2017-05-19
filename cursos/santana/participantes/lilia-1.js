function setup() {
  createCanvas(500, 500);
  rectMode(CENTER);
}

function draw() {
  background(255);
  for (var tam = 9; tam <= height; tam = tam + 10) {
    noFill();
    var b1 = random(-5, 5);
    var b2 = random(-5, 5);
    var b3 = random(-7, 5);
    if (250 - mouseX > tam / 2) {
      fill(0, 10);
    } else {
      fill(45, 20, 30, 10);
    }

    if (250 - mouseY > tam / 2) {
      stroke(120, 85, 216);
    } else {
      stroke(0);
    }
    rect(250 + b1, 230 + b1, tam + b2, tam + b3);
  }
}

function mousePressed() {
  noLoop();
}

function keyPressed() {
  loop();
}


