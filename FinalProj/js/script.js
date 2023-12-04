let mapImg;
let allSongs;
let Bsong, Isong, Msong, Nsong, Ssong, Usong;
let Bbool = false;
let Ibool = false;
let Mbool = false;
let Nbool = false;
let Sbool = false;
let Ubool = false;
let flag1 = false;
let flag2 = false;
let flag3 = false;
let flag4 = false;
let flag5 = false;
let flag6 = false;
let play;
var slider;

function preload() {
  mapImg = loadImage("assets/mapp.png");
  Bsong = loadSound("assets/Brazil.mp3");
  Isong = loadSound("assets/India.mp3");
  Msong = loadSound("assets/Mongolia.mp3");
  Nsong = loadSound("assets/Nigeria.mp3");
  Ssong = loadSound("assets/Spain.mp3");
  Usong = loadSound("assets/USA.mp3");
}

function setup() {
  let canvas = createCanvas(1000, 600);
  canvas.parent("p5container");

  play1 = new Play(92, 550, "brazil");
  play2 = new Play(242, 550, "india");
  play3 = new Play(390, 550, "spain");
  play4 = new Play(540, 550, "usa");
  play5 = new Play(690, 550, "mongolia");
  play6 = new Play(842, 550, "nigeria");

  site1 = new Site(335, 380, "brazil");
  site2 = new Site(650, 315, "india");
  site3 = new Site(448, 272, "spain");
  site4 = new Site(190, 266, "usa");
  site5 = new Site(711, 237, "mongolia");
  site6 = new Site(480, 345, "nigeria");

  //volume slider tool
  slider = createSlider(0, 1, 0.5, 0.01); 
  slider.position(1130,175);
  //slider.style('width', '100px');
  slider.parent('interfaces');
}

function draw() {
  background(mapImg);

  if (mouseX > 59 && mouseX < 125 && mouseY > 529 && mouseY < 571) {
    Bbool = true;
    if (!Bsong.isPlaying()) {
      Bsong.loop();
    }
  } else if (mouseX > 209 && mouseX < 275 && mouseY > 529 && mouseY < 571) {
    Ibool = true;
    if (!Isong.isPlaying()) {
      Isong.loop();
    }
  } else if (mouseX > 357 && mouseX < 423 && mouseY > 529 && mouseY < 571) {
    Sbool = true;
    if (!Ssong.isPlaying()) {
      Ssong.loop();
    }
  } else if (mouseX > 507 && mouseX < 573 && mouseY > 529 && mouseY < 571) {
    Ubool = true;
    if (!Usong.isPlaying()) {
      Usong.loop();
    }
  } else if (mouseX > 657 && mouseX < 723 && mouseY > 529 && mouseY < 571) {
    Mbool = true;
    if (!Msong.isPlaying()) {
      Msong.loop();
    }
  } else if (mouseX > 809 && mouseX < 875 && mouseY > 529 && mouseY < 571) {
    Nbool = true;
    if (!Nsong.isPlaying()) {
      Nsong.loop();
    }
  } else {
    BBool = false;
    if (Bsong.isPlaying()) {
      Bsong.stop();
    }

    Ibool = false;
    if (Isong.isPlaying()) {
      Isong.stop();
    }

    MBool = false;
    if (Msong.isPlaying()) {
      Msong.stop();
    }

    NBool = false;
    if (Nsong.isPlaying()) {
      Nsong.stop();
    }

    SBool = false;
    if (Ssong.isPlaying()) {
      Ssong.stop();
    }

    UBool = false;
    if (Usong.isPlaying()) {
      Usong.stop();
    }
  }

  Bsong.setVolume(slider.value() * 2);
  Isong.setVolume(slider.value() * 0.3);
  Msong.setVolume(slider.value() * 0.8);
  Nsong.setVolume(slider.value() * 0.8);
  Ssong.setVolume(slider.value() * 0.6);
  Usong.setVolume(slider.value() * 0.8);

  //playbutton.update();
  play1.display();
  play1.checkDrag();
  play1.update();
  site1.display();
 
  play2.display();
  play2.checkDrag();
  play2.update();
  site2.display();

  play3.display();
  play3.checkDrag();
  play3.update();
  site3.display();

  play4.display();
  play4.checkDrag();
  play4.update();
  site4.display();

  play5.display();
  play5.checkDrag();
  play5.update();
  site5.display();

  play6.display();
  play6.checkDrag();
  play6.update();
  site6.display();
if (flag1) {
      textSize(35)
      text("🇧🇷", 78, 520);
    }
  if (flag2) {
      textSize(35)
      text("🇮🇳", 226, 520);}
  if (flag3) {
      textSize(35)
      text("🇪🇸", 374, 520);}
  if (flag4) {
      textSize(35)
      text("🇺🇸", 524, 520);}
  if (flag5) {
      textSize(35)
      text("🇲🇳", 674, 520);}
  if (flag6) {
      textSize(35)
      text("🇳🇬", 826, 520);} 
  
  if(keyIsPressed){
    if (key == ' ') {
      flag1 = false;
      flag2 = false;
      flag3 = false;      
      flag4 = false;      
      flag5 = false;      
      flag6 = false;      
      
  }
  }

  if (dist(site1.x, site1.y, play1.x, play1.y) < 30) {

    flag1 = true;
    
    

      
  }else if (dist(site2.x-10, site2.y-20, play2.x, play2.y) < 15) {

    flag2 = true;
    
  
    }else if (dist(site3.x, site3.y, play3.x, play3.y) < 30) {

    flag3 = true;
    
    
    }else if (dist(site4.x, site4.y, play4.x, play4.y) < 30) {

    flag4 = true;
    

    }else if (dist(site5.x, site5.y, play5.x, play5.y) < 30) {

    flag5 = true;
    

    }else if (dist(site6.x, site6.y, play6.x, play6.y) < 30) {

    flag6 = true;
    

    }


 // //mouse tracker
 //  fill(0);
 //  text("MouseX: " + mouseX, 10, 20);
 //  text("MouseY: " + mouseY, 10, 40);
    
  textSize(30);
  text("📍", 335, 380); //brazil
  text("📍", 650, 315); //india
  text("📍", 448, 272); //spain
  text("📍", 190, 266); //USA
  text("📍", 711, 237); //mongolia
  text("📍", 480, 345); //nigeria

  textSize(20);
  textFont("Lilita One");
  fill(0);
  text("Brazil 🇧🇷", 360, 380);
  text("India 🇮🇳", 680, 310);
  text("Spain 🇪🇸", 385, 275);  
  text("USA 🇺🇸", 220, 266);    
  text("Mongolia 🇲🇳", 735, 237);
  text("Nigeria 🇳🇬", 505, 345);

  push();
  textAlign(LEFT);
  textSize(17);
  textFont("Montserrat");
  text(
    "Hover over ▶️ to listen to music, then drag and drop to match", 10, 30); 
  text("Click SPACEBAR to restart",10,60);
  pop();

  textSize(17);
  textFont("Montserrat");
  text("Volume", 875,30);
}

function mouseReleased() {
  play1.release(); //brazil
  play2.release(); //india
  play3.release(); //spain
  play4.release(); //USA
  play5.release(); //mongolia
  play6.release(); //nigeria
}
class Site {
  constructor(x, y, name) {
    this.x = x;
    this.y = y;
    this.name = name;
  }
  display() {
    textSize(30);
    text("📍", this.x, this.y);
  }
}

class Play {
  constructor(x, y, name) {
    this.playDragging = false;
    this.x = x;
    this.y = y;
    this.name = name;
    this.originalX = x;
    this.originalY = y;
  }

  display() {
    push();
    stroke(255);
    fill(255, 228, 225);
    rectMode(CENTER);
    rect(this.x, this.y, 66, 42, 5);

    noStroke();
    push();
    fill(255, 99, 71);
    triangle(
      this.x - 15,
      this.y + 17,
      this.x - 15,
      this.y -13,
      this.x + 20,
      this.y 
    );

    pop();
    pop();
  }
  update() {
    if (this.playDragging) {
      this.x = mouseX;
      this.y = mouseY;
    } else {
      this.x = this.originalX;
      this.y = this.originalY;
    }
  }
  checkDrag() {
    let distance = dist(mouseX, mouseY, this.x, this.y);
    if (mouseIsPressed && distance <= 50) {

      this.playDragging = true;
    }
  }
  release() {
    this.playDragging = false; 
    
    
    
    
  }
}
