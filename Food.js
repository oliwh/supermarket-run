class Food {
    constructor(x, y, food) {
        this.x = levelScale * x;
        this.y = levelScale * y;
        this.food = food;
    }

    show() {
        imageMode(CENTER);
        if(up == false) {
            image(imgs[this.food], this.x + (levelScale / 2), this.y + (levelScale / 2));
        } else {
            image(imgs[this.food], this.x + (levelScale / 2), this.y + (levelScale / 2) - levelScale / 16);
        }
    }
}