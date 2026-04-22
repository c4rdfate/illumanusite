//svg declarations 
let img1;
let ratio;
let btn;


function preload() {
  img1 = loadImage('test_assets/frame.svg');
  
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  //enter button set up 

  let button = createButton('Enter');
  button.position(windowWidth/1.4,windowHeight/1.7)
  button.mousePressed(buttonPressed);
  function buttonPressed() {
  window.location.href = "main.html"; }
}

function draw() {
   background('red');
  
 image(img1, windowWidth/2, 0);

}
