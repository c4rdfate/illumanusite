const sketch4 = (p) => { 
  let phrase = "THE IMAGE DOES NOT REMAIN STABLE"; //repeat phrase
  let spots = []; //array
  let font; 
  let container; 

  p.preload = function () { 
    font = p.loadFont('assets/QEAntonyLark.ttf'); 
  } 

  p.setup = function () { 
    
    //dynamic resize 
    container = document.getElementById("sketch4"); 
    let rect = container.getBoundingClientRect(); 
    
    let c = p.createCanvas(rect.width, rect.height);
    c.parent("sketch4"); 
    
    //text stuff 
    p.textFont(font); 
    p.textAlign(p.CENTER, p.CENTER); 
    p.textSize(30);

    //loop for placing the phrase
    for (let i = 0; i < 50; i++) { 
      spots.push({ 
        x: p.random(p.width), 
        y: p.random(p.height), 
        r: p.random(-6, 10),
        a: p.random(100, 255) 
      }); 
    } 
  }; 

  p.draw = function () { 
   // place phrase based on the placement of the last one, diff everytime
    p.clear(); 
    for (let s of spots) { 
      p.push(); 
      p.translate(s.x, s.y); 
      p.rotate(p.radians(s.r));
      p.fill(0, 0, 0, s.a) 
      p.text(phrase, 0, 0, 200); 
      p.pop(); 
    } 
  }; 

  //dynamic resize
  p.windowResized = function() { 
    let rect = container.getBoundingClientRect(); 
    p.resizeCanvas(rect.width, rect.height); 
  } 
}; 

new p5(sketch4);
