function setup() {
    createCanvas(648, 400);
}
function draw() {
   background (39, 192, 255);
    
    var fbx = 0;
    var fby = 200;
    var fbw = 100;
    var fbh = 200;
    var sbx = 100;
    var sby = 90;
    var sbw = 150;
    var sbh = 325;
    
    fill ("#853700");
    rect (fbx, fby, fbw, fbh);
    rect (sbx, sby, sbw, sbh);
    rect (115, 65, 25, 25);
    rect (510, 330, 25, 100);
    rect (440, 330, 25, 100);
    rect (370, 330, 25, 100);
    
    fill ("green");
    ellipse (520, 290, 100);
    ellipse (450, 290, 100);
    ellipse (380, 290, 100);
    
    fill ("black");
    rect (25, 230, 50, 50);
    rect (40, 350, 25, 50);
    rect (125, 130, 100, 20);
    rect (125, 160, 100, 20);
    rect (125, 190, 100, 20);
    rect (125, 220, 100, 20);
    rect (125, 250, 100, 20);
    rect (125, 280, 100, 20);
    rect (160, 350, 25, 50);
    
    fill ("yellow");
    ellipse (595, 50, 270);
}
