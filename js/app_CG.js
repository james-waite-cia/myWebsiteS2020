// declare variable globally
let bubbles = [];

function setup() {
    let myCanvas = createCanvas(600, 400);
    myCanvas.parent('myContainer');
}

function mousePressed() {
    let r = random(10, 40);
    let b = new Bubble(mouseX, mouseY, r);
    bubbles.push(b);
    console.log(bubbles);
}

function draw() {
    background(50);
    for (let i = 0; i < bubbles.length; i++) {
        bubbles[i].show();
        bubbles[i].move();
    }
}

class Bubble {
    constructor(x, y, r){
        this.x = x;
        this.y = y;
        this.r = r;
    }
    
    move() {
        this.x = this.x + random(-5, 5);
        this.y = this.y + random(-5, 5);
    }
    
    show() {
//        stroke(255);
//        strokeWeight(4);
//        noFill();
        noStroke();
        fill(255, 50);
        ellipse(this.x, this.y, this.r * 2);
    }
}


//// declare our variables
//let word = "Hello!";
//let arrExample = ["World", 54, 298, false, "anotherWord"];
////  arrExample = [ 0, 1, 2, 3, 4, 5];
//let posX = 0;
//let speed = 1;
//let hue = 0;
//
//// setup is called once at the begining
//function setup() {
//    let myCanvas = createCanvas(600, 400);
//    myCanvas.parent('myContainer');
//    
//    console.log(arrExample);
//    
//    for (let i = 0; i < arrExample.length; i++) {
//        console.log(arrExample[i]);
//    }
//
//}
//
//// draw is called every frame that is drawn to the browser
//function draw() {
//    background(50);
//    
////  'bouncing' rectangle
//    noStroke();
//    noFill();
//    strokeWeight(4);
//    stroke(0, 0, 255);
////    stroke(g);
//    stroke(r, g, b);
//    rect(posX, 200, 30, height / 2);
//    
//    posX = posX + speed;
//    
//    if(posX >= width || posX <= 0) {
//        speed = speed * -1;
//    }
//    
////  color changing circles
//    if (hue > 250) {
//        hue = 0;
//    } else {
//        hue++;
//        noStroke();
//        fill(hue, 200, 200);
//        ellipse(150, 100, 60);
////    ellipse(x, y, d);
////    ellipse(x, y, w, h);
//    }
//    
////  stepped rectangles
//    stroke(255, 0, 0);
//    for(let i = 0; i < height; i += 50 ) {
//        noFill();
//        strokeWeight(.5);
//        rect(i + 10, i, 20, 10);
//    }
//    
////  circles along middle
//    for(let i = 0; i < width; i += 150 ) {
//        noFill();
//        strokeWeight(.5);
//        ellipse(i, height / 2, 25);
//    }
//    
////  concentric circles
//    for (let i = 10; i <= 400; i+=40) {
//
//        noFill();
//        let r = random(0, 255);
////        stroke(g);
////        stroke(r, g, b);
//        stroke(random(0, 255), random(50, 100), 0);
//        ellipse(width / 2, height / 2, i);
//    }
//    
////  crosshairs center on mouse
//    rect(mouseX - 25, mouseY, 50, 1);
//    rect(mouseX, mouseY - 25, 1, 50);
//    
//}
//
//
//
//
//
//
//
//
