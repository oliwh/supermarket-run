class Shelf {
    /* x coord left (0) to right 
     * y coord top (0) to bottom
     * height
     * width */
    constructor(x, y, h, w) {
        this.x = scale * x;
        this.y = scale * y;
        this.h = scale * h;
        this.w = scale * w;
    }

    show() {
        //placeholder shelf
        push();
        noStroke();
        fill(255);
        rectMode(CORNER);
        translate(this.x, this.y);
        rect(0, 0, this.h, this.w);
        pop();
    }
}