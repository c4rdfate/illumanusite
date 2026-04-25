let mary1, mary2, mary3;
let mary = [];
let index = 0;

function preload() {

  mary1 = loadImage('assets/Adoration_Of_The_Magi2.png');
  mary2 = loadImage('assets/coronation_of_mary2.png');
  mary3 = loadImage('assets/TiHF_Virgin Mary2.png');

  mary = [mary1, mary2, mary3];

  
}

function setup() {

  container = document.getElementById("sketch2");

  let rect = container.getBoundingClientRect();
  let c = createCanvas(rect.width, rect.height);
  c.parent("sketch2");


  imageMode(CENTER);


}

function draw() {
    
    clear();
    let img = mary[index];

    let scale = min(width / img.width, height / img.height) * 1;
    let w = img.width * scale;
    let h = img.height * scale;

    image(img, width/2, height/2, w, h);
  
}

function mousePressed() {

    
 if (mouseX >= 0 && mouseX <= width &&
      mouseY >= 0 && mouseY <= height) {

    index = (index + 1) % mary.length;

  }

  
}

function windowResized() {

  let rect = container.getBoundingClientRect();
  resizeCanvas(rect.width, rect.height);

}