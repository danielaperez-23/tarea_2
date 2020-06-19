var x = 400
function setup() {
  createCanvas(400, 400);
 
}

function draw() {
  background(255);
  rectMode(CENTER)
  stroke( 100)
  fill(190)
  rect(200,200,x,x);
  fill(250)
  ellipse(200,200,x-100,x-100);
  x = x -1
  
  
  
}
