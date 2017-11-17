var button;
var images = [];
var letters = [];
var apple, bubblegum,cat, dominoes;

function preload() {
    apple = loadImage("img/apple.png");
    images.push(apple);
    bubblegum = loadImage("img/bubblegum.png");
    images.push(bubblegum);
    cat = loadImage("img/cat.png");
    images.push(cat);
    dominoes = loadImage("img/dominoes.png");
    images.push(dominoes);
}

function setup() {
    createCanvas(648, 400);
    background("white");
      button = createButton('PRESS');
      button.position(width/2, 500);
      button.mousePressed(changeImage);
    console.log(images);
     letters = [
        'a',
        'b',
        'c',
        'd'
    ];
//    image(apple, width/2, height/2);
//    image(bubblegum, width/2, height/2);
//    image(cat, width/2, height/2)
//    image(dominoes, width/2, height/2)
//    console.log(letters[0]);
}

function changeImage() {
    
}

function mousePressed() {
//    background("white");
//   
//    
//    var randomLetter = floor(random(0, letters.length));
//    var letter = letters[randomLetter];
//    
//    textWidth(width);
//    textAlign(CENTER);
//    var myName = "cristian";
//    fill("black");
//    text(letter, width/2, height/2);
}