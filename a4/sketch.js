function setup() { 
  createCanvas(500, 500);
     background(220);
     frameRate(60);
     text("Click around the canvas", 300, 300);
} 

function draw() {
    
    var size = 50;
    
    background("green");
    text("Click around the canvas", 20, height/2);
    textSize(40);
    rect(mouseX, mouseY, width/2 - size, height/2 - size );
}

function mousePressed(){
    
    fill(
        mouseX, //red
        mouseX/2, //green
        mouseY, //yellow
        mouseY/2, //blue
    )
}