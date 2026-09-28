function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(250, 0, 100);
    const mouse_y = mouseY;
    for (let i = 0; i <= 20; i++) {
        fill(map(mouse_y, 0, height, 0, 255) - i * 10);
        stroke(map(mouse_y, 0, height, 255, 0) - i);
        rect(0, i * 20, 400, 10);
    }
}
