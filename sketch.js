
var particleSystems = [];

function setup() {
 createCanvas(640, 360);
 setFrameRate(60);
}

function draw(){
	background(51);
	for (var i = 0; i<particleSystems.length;i++){
	particleSystems.addParticle();
	particleSystems.run();
	}
}

function mousePressed(){
	particleSystems.push(new ParticleSystem(1,createVector(mouseX,mouseY)));
}

