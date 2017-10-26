function setup() {
	createCanvas(640, 640);
	background ("black");
	noStroke();
}

function mouseClicked() {
//	design();
    
       var space = 5;        
    var column = width/10;
    var row = height/10;
    var r = random(0,255);
    var g = random(0,255);
    var b = random(0,255);
    
    background(r,g,b);
    
	    for (var x = 25; x <= width; x += column) {
        for (var y = 30; y <= height; y += row) {
            
            r = random(200,255);
            g = random(230,255);
            b = random(230,255);
            
            //ellipse
            stroke("orange");
            strokeWeight(1);
            fill("orange");
            ellipse(x, y-4 , 40, 40);

            
		}
    }
  
}