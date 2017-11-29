var button;
var images = [];
var letters = [];
var apple, bubblegum, cat, dominoes;

function preload() {
    apple = loadImage("img/apple.png");
    images.push(apple);
    bubblegum = loadImage("img/bubblegum.png");
    images.push(bubblegum);
    cat = loadImage("img/cat.png");
    images.push(cat);
    dominoes = loadImage("img/dominoes.png");
    images.push(dominoes);
    elevator = loadImage("img/elevator.png");
    images.push(elevator)
}

function setup() {
    createCanvas(648, 400);
    background("white");
      textSize("200");
      textFont("Luckiest Guy")
      button = createButton('PRESS');
      button.position(width/2, 500);
      button.mousePressed(changeImage);
    // console.log(images);
     letters = [
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'I',
        'J',
        'K',
        'L',
        'M',
        'N',
        'O',
        'P',
        'Q',
        'R',
        'S',
        'T',
        'U',
        'V',
        'W',
        'X',
        'Y',
        'Z',
       
    ];
    rectMode(CENTER);
}

function changeImage() {
    var r = random(0, 255);
    var g = random(0, 255);
    var b = random(0, 255);
    background(r, g, b);
  var randomNum = floor (random (0, 26));
  image(images[randomNum], width/4 - 120, height/2 - 160);
  fill("white");
  text(letters[randomNum], width/2 + 100, height/2 + 50)

};
