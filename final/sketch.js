function setup() {
	createCanvas(640, 360);
	bingo = color(255);
}
    var bingo;
    var clicked = false;

function draw() {
	background("black");

	strokeWeight(2);
	stroke("white");
	line(width/2, 0, width/2, height);
	line(0, height/2, width, height/2);

	if (mouseX > width/2 && mouseY > height/2) {
		rect(width/2, height/2, width, height);
        text("peek-a-boo", 100, 100);
        textSize(25)
		bingo = "yellow";
        
	} else if (mouseX < width/2 && mouseY > height/2) {
		rect(0, height/2, width/2, height);
		bingo = "red";
        
	} else if (mouseX > width/2 && mouseY < height/2){
		rect(width/2, 0, width, height/2);
		bingo = "red"; 
        
	} else {
		rect(0, 0, width/2, height/2);
        text("i see you", 450, 300);
        textSize(25)
		bingo = "yellow";
        
}

	fill(bingo);
}