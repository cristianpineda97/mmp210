var images = [];
function setup() {
    createCanvas(648, 400);
    background("red");
    var apple = loadImage("apple.png");
    images.push();
    var bubble = loadImage("bubblegum.png");
    images.push();
    var cat = loadImage("cat.png");
    images.push();
    var dominoes = loadImage("dominoes.png");
    images.push();
    
}

function draw() {

}

function mousePressed() {
    background("red");
    var letters = [
        'a',
        'b',
        'c',
        'd'
    ];
    
    var randomLetter = floor(random(0, letters.length));
    var letter = letters[randomLetter];
    
    textWidth(width);
    textAlign(CENTER);
    var myName = "cristian";
    fill("black");
    text(letter, width/2, height/2);
}