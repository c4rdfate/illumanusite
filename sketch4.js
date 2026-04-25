const sketch4 = (p) => {

  let phrase = "THE IMAGE DOES NOT REMAIN STABLE";
  let spots = [];
  let font;

 p.preload = function () {
    font= p.loadFont('assets/QEAntonyLark.ttf');
  
  }


p.setup = function () {
    let c = p.createCanvas(1080, 1920); // temporary size
    c.parent("sketch4");
    p.textFont(font); 
    for (let i = 0; i < 100; i++) {
    spots.push({
    x: p.random(p.width),
    y: p.random(p.height),
    r: p.random(-6, 10)
    });
    }

    p.textAlign(p.CENTER, p.CENTER);
    p.textSize(5)
    
  };

  p.draw = function () {
    p.clear();

    for (let s of spots) {
    p.push();
    p.translate(s.x, s.y);
    p.rotate(p.radians(s.r));
    p.text(phrase, 0, 0);
    p.pop();
    }
  };

};

new p5(sketch4);