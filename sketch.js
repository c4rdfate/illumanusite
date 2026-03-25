// var declaration 
xpos = 1; 
xspeed = 2; 

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
 // background(220);
  
  fill("purple");
  ellipse(xpos, height/2, width/3, height/3);
  
  if(xpos > width) {
    xspeed = -5; 
    }
    
  if (xpos <  2){
    xspeed = 5;
  }
    
  xpos += xspeed;
}
