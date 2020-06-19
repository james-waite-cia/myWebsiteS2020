// module aliases
var Engine = Matter.Engine,
//    Render = Matter.Render,
    World  = Matter.World,
    Bodies = Matter.Bodies;

// declare our global variables
let engine, world;
let circles = [];
let boundaries = [];
let pegs = [];
let flowers = [];

let ground;

function preload() {
    for(let i = 0; i < 3; i++) {
        flowers[i] = loadImage('img/flower' + i + '.png');
    }
}

function setup() {
    // create canvas and parent to div with myContainer ID in html
    let myCanvas = createCanvas(800, 600);
    myCanvas.parent('myContainer');
    // start physics engine to world object
    engine = Engine.create();
    world  = engine.world;
    
    // make new instances of Boundary class and push to boundaries array
    boundaries.push(new Boundary(0, 0, 20, height*2, 0));
    boundaries.push(new Boundary(0, 0, width*2, 20, 0));
    boundaries.push(new Boundary(width, height, 20, height*2, 0));
//    boundaries.push(new Boundary(0, height, width*2, 20, 0));
//    boundaries.push(new Boundary(x, y, w, h, a));
    
    for (var a = 50; a < width; a += 100) {
        for (var b = 50; b < height; b += 100) {
            // add pegs to array at x = a and y = b
            pegs.push(new Peg(a, b, 5));
        }
    }
}

// circle template
class Circle {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
        let options = {
            friction: 0,
            restitution: 0.95
        };
        this.body = Bodies.circle(x, y, r, options);
        World.add(world, this.body);
//        console.log(this.body);
    }
    
    outOfBounds() {
        let pos = this.body.position;
        return pos.y > height;
    }
    
    show() {
        let pos = this.body.position;
        let angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
//        strokeWeight(1);
//        stroke(255);
//        stroke(r, g, b, o);
//        fill(127);
//        ellipse(0, 0, this.r*2);
        image(flowers[0], 0, 0, this.r, this.r)
        pop();
    };
}

class Boundary {
    constructor(x, y, w, h, a) {
        this.w = w;
        this.h = h;
        let options = {
            friction: .8,
            restitution: 0.95,
            angle: a,
            isStatic: true
        };
        this.body = Bodies.rectangle(x, y, w, h, options);
        World.add(world, this.body);
    }
    
    show() {
        let pos = this.body.position;
        let angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
//        strokeWeight(1);
        noStroke();
        fill(0);
        rect(0, 0, this.w, this.h);
        pop();
    }
}

class Peg {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
        let options = {
            friction: 0,
            restitution: 0.95,
            isStatic: true
        }
        this.body = Bodies.circle(x, y, r, options);
        World.add(world, this.body);
    }
    show() {
        let pos = this.body.position;
        let angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        noStroke();
        fill(255, 23, 0);
        ellipse(0, 0, this.r*2);
        pop();
    }
}

class Square {
    constructor(x, y, w, h) {
        this.x = x;
    }
}

function mouseDragged() {
    // make new instance of Circle class and push to circles[] array
    circles.push(new Circle(mouseX, mouseY, random(15, 20)));
}

function createSquares() {
    // make new instance of Square class and push to squares[] array
    squares.push(new Square(width/2, height/2, 20, 20));
}

function draw() {
    background(50);
    // update engine each frame
    Engine.update(engine);
    // for loop to draw circles array to canvas
    for ( let i = 0; i < circles.length; i++) {
        circles[i].show();
        if(circles[i].outOfBounds()) {
            // remove this circle
            circles.splice(i, 1);
        }
    }
    // for loop to draw boundaries array to canvas
    for ( let i = 0; i < boundaries.length; i++) {
        boundaries[i].show();
    }
    for ( let i = 0; i < pegs.length; i++) {
        pegs[i].show();
    }
}