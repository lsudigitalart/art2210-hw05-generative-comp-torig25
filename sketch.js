function setup() {
  createCanvas(600, 600);
}

function draw() {
    background(0);
    translate(300, 300);

    //for loop
    for (let i = 0; i < 5; i++) {
    
    //angle and rotation
    let xOffset = random(-300, 300);
    let yOffset = random(-300, 300);
    let angle = random(0, 360);

    translate(xOffset, yOffset);
    rotate(angle);

    //line
    strokeWeight(5);
    stroke(400);
    line(0, 0, (600, 600), 0);



    }

}
