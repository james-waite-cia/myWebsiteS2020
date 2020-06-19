let drawImage, imgWidth, imgHeight, imgProfilePic, imgTransparency;
let flowers = [];
//let colors = [];

function preload() {
    for (let i = 0; i < 3; i++) {
        flowers[i] = loadImage('img/flower' + i + '.png');
    }
    imgProfilePic = loadImage('img/James-Waite-Profile-Pic.jpg');
    
}

function setup() {
    let myCanvas = createCanvas(800, 600);
    myCanvas.parent('myContainer');
    background(50);
    drawImage = flowers[0];
    imgTransparency = 255;
    imgWidth = 50;
    imgHeight = 50;
    document.getElementById('sizeDimension').innerHTML = imgWidth + 'px';
    document.getElementById('tOutput').innerHTML = 'Opacity: ' + imgTransparency;
}

function changeImage(value) {
    drawImage = flowers[value];
}

function changeTransparency(value) {
    imgTransparency = parseFloat(value);
    document.getElementById('tOutput').innerHTML = 'Opacity: ' + imgTransparency;
}

function mouseDragged() {
    tint(255, imgTransparency);
    image(drawImage, mouseX - (imgWidth / 2), mouseY - (imgHeight / 2), imgWidth, imgHeight);
}

function changeSize(value) {
    // increase/decrease width of image
    imgWidth += parseFloat(value);
    imgHeight += parseFloat(value);
    document.getElementById('sizeDimension').innerHTML = imgWidth + 'px';
}

function draw() {
    //
}

