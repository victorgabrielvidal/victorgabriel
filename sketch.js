let cor;
let posicaoHorizontal; // x
let posicaoVertical; // y

let posicaoHorizontal2; // x
let posicaoVertical2; // y

let posicaoHorizontal3; // x
let posicaoVertical3; // y



  function setup() {
createCanvas(800, 800);
background("black");

cor = color(random(255), random(255), random(255));
posicaoHorizontal = 3;
posicaoVertical = random(height);
    
posicaoHorizontal2 = 4;
posicaoVertical2 = random(height);

posicaoHorizontal3 = 5;
posicaoVertical3 = random(height);
}

function draw() {
fill(cor);
circle(posicaoHorizontal, posicaoVertical, 70);
circle(posicaoHorizontal2, posicaoVertical2, 70);
circle(posicaoHorizontal3, posicaoVertical3, 70);
  
posicaoHorizontal+= random(0, 3);
posicaoVertical+= random(-3, 3);
  
posicaoHorizontal2+= random(0, 3);
posicaoVertical2+= random(-3, 3);
  
posicaoHorizontal3+= random(0, 3);
posicaoVertical3+= random(-3, 3);
  
if(mouseIsPressed) {
cor = color(random(0, 255), random(0, 255), random(0, 255), random(0, 100));
  }
}