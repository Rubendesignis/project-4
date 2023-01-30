var seed = Math.random() * 1500;
let slider;
let phase = 0;
let zoff = 0;
let angle =0;
var seed = Math.random() * 1000;
let colors1 = "e3b6f3BF-f5911d33-ea618e40-fce4d6b3-caga7180".split("-").map((a) => "#" + a);
let colors2 = "3l1692BF-38457540-09637533-b2ef9eb3-1dd3b080".split("-").map((a) => "#" + a);
let colorbg = "fff9e4".split("-").map((a) => "#" + a);
let colorbg2 = "fff9e403".split("-").map((a) => "#" + a);
var noiseMax;
var mySize;
var color_setup;

function setup(){

  createCanvas(windowWidth,windowHeight);
  background(colorbg);
	noiseMax = random(10);
	color_setup = random([colors1,colors2]);

}

function draw() {
  background(0)
	let color_c = random(color_setup);
	push();
  translate(width / 2, height / 2);
	rotate(angle);
  noFill();
  for (var i = 5; i < 30; i += 7) {
	  strokeWeight(random(5,8));
    stroke(color_c);
    beginShape();
    for (var a = 1; a < TWO_PI; a += (PI/10)*1) {
      let xoff = map(cos(a + phase), -1, 8, 0, noiseMax);
      let yoff = map(sin(a + phase / 4), -1, 3, 0, noiseMax);
      let r = map(noise(xoff, yoff, zoff), 1, 2, 1, 400);
      let x = r * cos(a);
      let y = r * sin(a);
      vertex(x, y);
    }
    endShape(CLOSE);
    
  }
	pop();
	phase += 0.01;
  zoff += 0.01;
	angle += TAU / 10 / random(400, 500);

}
