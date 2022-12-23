class Player {
    constructor(x, y) {
        this.x = levelScale * x;
        this.y = levelScale * y;
        this.size = createVector(levelScale / 2, levelScale / 2)
        print("size: " + this.size);
        this.velocity = 1.5;
    }

    move(x, y) {
        if(!this.collision(x, y)) {
            this.x += x * this.velocity;
            this.y += y * this.velocity;
        }
    }

    show() {
        //placeholder character
        push();
        noStroke();
        fill(255, 0, 0);
        ellipseMode(CENTER);
        ellipse(this.x + (levelScale / 2), this.y + (levelScale / 2), this.size.x, this.size.y);
        pop();
        //image(playerImg, this.x, this.y, 88, 192);
    }

    collision(x, y) {
        for(let i = 0; i < tiles.length - 1; i++) {
            if((this.x + (this.size.x / 2) + (x * this.velocity) > tiles[i].x - (levelScale / 2)) &&
               (this.x - (this.size.x / 2) + (x * this.velocity) < tiles[i].x + (levelScale / 2)) &&
               (this.y + (this.size.y / 2) + (y * this.velocity) > tiles[i].y - (levelScale / 2)) &&
               (this.y - (this.size.y / 2) + (y * this.velocity) < tiles[i].y + (levelScale / 2)) ||
               (this.x + (this.size.x / 2) + (x * this.velocity) > levelScale * 25 - this.size.x) ||
               (this.x - (this.size.x / 2) + (x * this.velocity) < - this.size.x) ||
               (this.y + (this.size.y / 2) + (y * this.velocity) > levelScale * 25 - this.size.y) ||
               (this.y - (this.size.y / 2) + (y * this.velocity) < - this.size.y)) {
                print("collision at: " + tiles[i].x + ", " + tiles[i].y);
                return true;
            } 
        }
        return false;
    }
}
