var x
var y 
var z
var w
var a
var b 
var c
var d
function setup() {
  createCanvas(400, 400);
  x = 100
  y = 100
  z = 300
  w = 100
  a = 100 
  b = 300
  c = 300 
  d = 300 
}

function draw() {
  background(255);
//Dibujar circulos 
  fill(220);
  ellipse(x,y,100,100);
  ellipse(z,w,100,100);
  ellipse(a,b,100,100);
  ellipse(c,d,100,100);
  x = x  +1;
  y = y  +1;
  z = z  -1;
  w = w  +1;
  a = a  +1;
  b = b  -1;
  c = c  -1;
  d = d  -1;
  
}
