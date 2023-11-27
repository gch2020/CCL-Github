let particles = [];

function setup() {
 let canvas = createCanvas(400, 400);
 canvas.parent("p5container");
}

function draw() {
  background(255);

  fill(216, 191, 216);
  rect(0, 0, width, height / 1.5);

  fill(220);
  noStroke();
  rect(75, 80, 50, 15, 10);
  rect(83.5, 55, 32, 32, 5);
  rect(94, 20, 10, 70, 5);
  rect(20, 20, 80, 10, 5);
  rect(20, 20, 15, 300, 5);
  // rect(20, 250, 300, 100, 5, 5, 20, 20);

  textSize(16);
  textFont("papyrus");
  fill(0);
  text("Click to give the cat a bath 🛁", 185, 30);

  textSize(50);
  text("😽", 75, 245);

  if (mouseIsPressed) {
    textSize(50);
    text("😾", 75, 245);
  }

  for (let i = 0; i < 5; i++) {
    let p = new Particle();
    particles.push(p);
  }
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].show();
    if (particles[i].finished()) {
      // gets rid of unwanted particles to avoid system slowing down
      particles.splice(i, 1);
    }
  }
}

class Particle {
  constructor() {
    this.x = 100;
    this.y = 100;
    this.vx = random(1, -1);
    this.vy = random(6);
    this.alpha = 255;
  }

  finished() {
    return this.alpha < 0;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.alpha -= 5;
  }
  show() {
    if (mouseIsPressed) {
      noStroke();
      //stroke(255);
      fill(175, 238, 238, this.alpha);
      ellipse(this.x, this.y, 7, 12);

      //textSize(50);
      //text('😾', 75,245);
    }
    fill(220);
    rect(20, 250, 275, 100, 5, 5, 20, 20);
  }
  // fill(220);
  // rect(20, 250, 300, 100, 5, 5, 20, 20);
}
