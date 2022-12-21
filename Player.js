class Player {
    constructor(x, y) {
        this.x = levelScale * x;
        this.y = levelScale * y;
    }

    move(x, y) {
        if((this.x + (levelScale * x) <= levelScale * 24) && (this.x + (levelScale * x) >= 0) && (this.y + (levelScale * y) <= levelScale * 24) && (this.y + (levelScale * y) >= 0)) {
            if(!(level[(this.y + (levelScale * y))/levelScale][(this.x + (levelScale * x))/levelScale] == 1)) {
                this.x += levelScale * x;
                this.y += levelScale * y;
            }
            print(this.x);
            print(this.y);
        }
    }

    show() {
        //placeholder character
        stroke(255);
        strokeWeight(4);
        noFill();
        ellipseMode(CORNER);
        ellipse(this.x, this.y, levelScale, levelScale);
        //image(playerImg, this.x, this.y, 88, 192);
    }
}
