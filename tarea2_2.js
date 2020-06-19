var a
var b 
function setup() {
  createCanvas(400, 400);
  a = 400
  b = 0
  }

function draw() {
  background(255);
  stroke(0);
  line(a,a,200,200);
  line(b,a,200,200);
  line(200,b,200,200);
  
  a = a -1
  b = b +1

}
