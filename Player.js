class Player {
    constructor(x, y) {
        this.x = levelScale * x;
        this.y = levelScale * y;
        this.plrScale = 0.75;
        this.size = createVector(levelScale * 0.5625 * this.plrScale, levelScale * 0.8125 * this.plrScale);
        this.velocity = 3.0;
        this.dir = 1;
    }

    move(x, y) {
        if(!this.collision(x, y)) {
            this.x += x * this.velocity;
            this.y += y * this.velocity;
        }
    }

    chgDir(newDir) {
        this.dir = newDir;
    }

    show() {
        if(this.dir == 1) {
            if(up == false) {
                image(plrLeft, this.x + (levelScale / 2), this.y + (levelScale / 2), levelScale * this.plrScale, levelScale * this.plrScale);
            } else {
                image(plrLeftUp, this.x + (levelScale / 2), this.y + (levelScale / 2), levelScale * this.plrScale, levelScale * this.plrScale);        
            }
        } else {
            if(up == false) {
                image(plrRight, this.x + (levelScale / 2), this.y + (levelScale / 2), levelScale * this.plrScale, levelScale * this.plrScale);
            } else {
                image(plrRightUp, this.x + (levelScale / 2), this.y + (levelScale / 2), levelScale * this.plrScale, levelScale * this.plrScale);
            }
        }
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
                if((tiles[i].x == (levelScale * 3) || 
                    tiles[i].x == (levelScale * 4) || 
                    tiles[i].x == (levelScale * 5)) && 
                    (tiles[i].y == (levelScale * 24))) {
                    checkEnd();
                    return false;
                } else {
                return true;
                }
            } 
        }
        return false;
    }
}
