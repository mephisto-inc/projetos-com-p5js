let x_pos, y_pos, gradient_y;

function pink_background() {
  background(250, 0, 100);
}

function setup() {
  createCanvas(800, 800);
  pink_background();
  x_pos = width / 2;
  y_pos = height / 2;
}

function mousePressed() {
  pink_background();
}

function draw() {
  //
  // --- draw a gradient background reacting to the mouse position ---
  // pink_background();
  // const gradient_y = mouseY;
  // // const gradient_y = random(255);
  // const iterate_height = height / 20;
  // for (let i = 0; i <= iterate_height; i++) {
  //   fill(map(gradient_y, 0, height, 0, 255) - i * 3);
  //   stroke(map(gradient_y, 0, height, 255, 0) - i);
  //   rect(0, i * 20, width, 10);
  // }
  //
  // --- draw a circle at a random position near the previous position ---
  // x_pos += random(-10, 10);
  // y_pos += random(-10, 10);
  // x_pos = constrain(x, 10, width - 10);
  // y_pos = constrain(y, 10, height - 10);
  // fill(random(0, 255), random(0, 255), random(0, 255), 200);
  // noStroke();
  // circle(x_pos, y_pos, 20);
  //
  // --- draw a circle at a random position ---
  // x_pos = random(0, width);
  // y_pos = random(0, height);
  // fill(random(0, 255), random(0, 255), random(0, 255), 200);
  // noStroke();
  // circle(x_pos, y_pos, 20);
}
