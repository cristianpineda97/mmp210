var button;
var images = [];
var letters = [];
var apple, bubblegum, cat, dominoes, elevator, floppydisk, gorilla, hearts, iguana, jackolantern, kite, lens, mansion, nasa, omelette, poker, questionmark, ribbon, superman, television, umbrella, videocamera, waterdrop, xanax, youtube, zombie;

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
    floppydisk = loadImage("img/floppydisk.png");
    images.push(floppydisk)
    gorilla = loadImage("img/gorilla.png");
    images.push(gorilla)
    hearts = loadImage("img/hearts.png");
    images.push(hearts)
    iguana = loadImage("img/iguana.png");
    images.push(iguana)
    jackolantern = loadImage("img/jackolantern.png");
    images.push(jackolantern)
    kite = loadImage("img/kite.png");
    images.push(kite)
    lens = loadImage("img/lens.png");
    images.push(lens)
    mansion = loadImage("img/mansion.png");
    images.push(mansion)
    nasa = loadImage("img/nasa.png");
    images.push(nasa) 
    omelette = loadImage("img/omelette.png");
    images.push(omelette) 
    poker = loadImage("img/poker.png");
    images.push(poker) 
    questionmark = loadImage("img/questionmark.png");
    images.push(questionmark) 
    ribbon = loadImage("img/ribbon.png");
    images.push(ribbon) 
    superman = loadImage("img/superman.png");
    images.push(superman) 
    television = loadImage("img/television.png");
    images.push(television)
    umbrella = loadImage("img/umbrella.png");
    images.push(umbrella)
    videocamera = loadImage("img/videocamera.png");
    images.push(videocamera)
    waterdrop = loadImage("img/waterdrop.png");
    images.push(waterdrop)
    xanax = loadImage("img/xanax.png");
    images.push(xanax)
    youtube = loadImage("img/youtube.png");
    images.push(youtube)
    xzombie = loadImage("img/zombie.png");
    images.push(zombie)
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
