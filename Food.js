class Food extends Tile {
    constructor(x, y, food) {
        super(x, y);
        this.food = food;
    }

    show() {
        imageMode(CENTER);
        image(imgs[this.food], this.x + (levelScale / 2), this.y + (levelScale / 2));
    }
}