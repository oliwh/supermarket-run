class Player {
    constructor(x, y) {
        this.x = scale * x;
        this.y = scale * y;
    }

    move(x, y) {
        this.x += scale * x;
        this.y += scale * y;
        if(this.x > scale * 24) {
            this.x = scale * 24;
        } else if(this.x < 0) {
            this.x = 0;
        }
        if(this.y > scale * 24) {
            this.y = scale * 24;
        } else if(this.y < 0) {
            this.y = 0;
        }
    }

    show() {
        //placeholder character
        stroke(255);
        strokeWeight(4);
        noFill();
        ellipseMode(CORNER);
        ellipse(this.x, this.y, scale, scale);
        //image(playerImg, this.x, this.y, 88, 192);
    }
}
