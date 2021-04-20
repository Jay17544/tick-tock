var hr,mn,sc
var hrAngle
var mnAngle
var scAngle
function setup() {
  createCanvas(400,400);
  angleMode(DEGREES)
}

function draw() {
  background(0);
  hr=hour();
  mn=minute();
  sc=second();  
  translate(200,200)
  rotate(-90)
  hrAngle=map(hr%12,0,12,0,360)
  mnAngle=map(mn,0,60,0,360)
  scAngle=map(sc,0,60,0,360)

  push ()
  rotate(scAngle)
  stroke("red")
  strokeWeight(5)
  line(0,0,75,0)
  pop ()

  push ()
  rotate(mnAngle)
  stroke("green")
  strokeWeight(5)
  line(0,0,50,0)
  pop ()

  push ()
  rotate(hrAngle)
  stroke("blue")
  strokeWeight(5)
  line(0,0,25,0)
  pop ()

  strokeWeight(10)
  noFill();
  stroke("red")
  arc(0,0,300,300,0,scAngle)

  stroke("green")
  arc(0,0,270,270,0,mnAngle)

  stroke("blue")
  arc(0,0,240,240,0,hrAngle)
}