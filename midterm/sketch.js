function setup() {
	createCanvas(1000, 550);
	background("black");
}
    function draw() {  
        
        var offset = 250;
        triangle(170, 75, 300, 165, 420, 75);
        triangle(210, 300, 300, 455, 380, 300);
        triangle(210, 300, 300, 100, 380, 300);
        fill("yellow");
        noStroke();
        
        var columnNum = 5;
var rowNum = 3;
var columnSize = width/columnNum;
var rowSize = height/rowNum;
for (var x = 0; x <= width; x += columnSize) {
	for (var y = 0; y <= height; y += rowSize) {
		/* draw window here */
        
        ellipse(x,y,50)
	}
        
}
        
    }