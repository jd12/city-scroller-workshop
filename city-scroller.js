function setup() {
  // Create the backdrop in which the game will go on
  createCanvas(screen.width, 400);
}

function draw() {
  background(color(0, 0, 0));
  fill(color(0, 0, 255)); // Make our rectangle blue
  rect(200, 200, 60, 60);
}
