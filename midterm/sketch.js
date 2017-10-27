function setup() {
	createCanvas(640, 640);
    design();
}

function design() {
        
    var columns = 10;
	var rows = 10;
	var w = width/columns;
	var h = height/rows;
	let randomShape = floor(random(0,3));
    
    var r = random(0, 255);
    var g = random(0, 255);
    var b = random(0, 255);
    
            if (randomShape == 0) {
                
                background("green");
                
            } else if (randomShape == 1) {
        
                background("red");
            
            } else {
        
                background("black");
         
            }
    
	for (var x = 10; x < width; x += w) {
		for (var y = 10; y < height; y += h) {
            
            if (randomShape == 0) {
                console.log(randomShape);

                fill("red");
                rect(x, y-4, 40 ,40);
                
            } else if (randomShape == 1) {
                console.log(randomShape);
               
                fill("pink");
                ellipse(x+20, y+20, 40 ,40);
                
            } else {
                console.log(randomShape);
            
                fill("orange");
                rect(x, y-4, 40 ,40);
            }
            
		}
	}
  
}

function mouseClicked() {
	design();

}