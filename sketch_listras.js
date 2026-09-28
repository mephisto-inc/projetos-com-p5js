function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(250, 0, 100);
    for (let i = 0; i <= 20; i++) {
        fill(i * 10);
        stroke(255 - (i * 12.75));
        rect(0, i * 20, 400, 10);
    }
}
