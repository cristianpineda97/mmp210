function setup() {
	createCanvas(1000, 550);
	background("black");
}
<<<<<<< HEAD
    function draw() {  
=======
    function draw() {
        
//        rect (260, 186, 120, 30);  
>>>>>>> 5991fa48d6f92d3e9595fb54a0cecadd2fcd435f
        
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
        
<<<<<<< HEAD
    }
=======
}
>>>>>>> 5991fa48d6f92d3e9595fb54a0cecadd2fcd435f
