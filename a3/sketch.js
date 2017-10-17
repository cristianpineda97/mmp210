function setup() {
	createCanvas(830, 550);
	background("black");
    
	var name = "CRISTIAN";
	var primaryFont = "Courier New";
	var insideColor = color("orange");

    fill("black");
    rect (305, 230, 360, 100);
    
	textSize(100);
	fill(insideColor);
	textFont(primaryFont);
	textStyle(ITALIC);
	stroke("white");
	strokeWeight(6);
	text(name, 170, 300);
    
}