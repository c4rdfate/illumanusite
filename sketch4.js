const sketch4 = (p) => { 
  let phrase = "THE IMAGE DOES NOT REMAIN STABLE"; 
  let spots = []; 
  let font; 
  let container; 

  p.preload = function () { 
    font = p.loadFont('assets/QEAntonyLark.ttf'); 
  } 

  p.setup = function () { 
    container = document.getElementById("sketch4"); 
    let rect = container.getBoundingClientRect(); 
    
    let c = p.createCanvas(rect.width, rect.height);
    c.parent("sketch4"); 
    
    p.textFont(font); 
    p.textAlign(p.CENTER, p.CENTER); 
    p.textSize(30);

    for (let i = 0; i < 50; i++) { 
      spots.push({ 
        x: p.random(p.width), 
        y: p.random(p.height), 
        r: p.random(-6, 10) 
      }); 
    } 
  }; 

  p.draw = function () { 
    p.clear(); 
    for (let s of spots) { 
      p.push(); 
      p.translate(s.x, s.y); 
      p.rotate(p.radians(s.r)); 
      p.text(phrase, 0, 0, 200); 
      p.pop(); 
    } 
  }; 

  
  p.windowResized = function() { 
    let rect = container.getBoundingClientRect(); 
    p.resizeCanvas(rect.width, rect.height); 
  } 
}; 

new p5(sketch4);
