var hr,mn,sc;

function setup() {
  createCanvas(400,400);
  
  angleMode(DEGREES);
}
function draw() {
background("#f3dafe");  
  hr = hour();
  mn = minute();
  sc = second();

  translate(200,200);
  rotate(-90);

  scAngle = map(sc,0,60,0,360);
  mnAngle = map(mn,0,60,0,360);
  hrAngle = map(hr%12,0,12,0,360);

  push();
  rotate(scAngle);
  stroke("#eb84d8");
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  push();
  rotate(mnAngle);
  stroke("#a564ea");
  strokeWeight(7);
  line(0,0,90,0);
  pop();

  push();
  rotate(hrAngle);
  strokeWeight(7);
  stroke("#000074");
  line(0,0,50,0);
  pop();

  stroke("#eb84d8");
  strokeWeight(7);
  noFill();
  arc(0,0,280,280,0,scAngle);

  stroke("#a564ea");
  strokeWeight(7);
  noFill();
  arc(0,0,265,265,0,mnAngle);

  stroke("#000074");
  strokeWeight(7);
  noFill();
  arc(0,0,250,250,0,hrAngle);

  drawSprites();
}