class Tile {
    /* x coord left (0) to right 
     * y coord top (0) to bottom
     * height
     * width */
    constructor(x, y, type) {
        this.x = levelScale * x;
        this.y = levelScale * y;
        switch(type) {
            case 1:
                type = 150;
                break;
            case 2:
                type = '#37946e';
                break;
        }
        //this.h = scale * h;
        //this.w = scale * w;
    }

    show() {
        //placeholder shelf
        push();
        noStroke();
        fill(255);
        rectMode(CENTER);
        translate(this.x + (levelScale / 2), this.y + (levelScale / 2));
        rect(0, 0, levelScale, levelScale);
        pop();
    }
}