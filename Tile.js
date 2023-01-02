class Tile {
    /* x coord left (0) to right 
     * y coord top (0) to bottom */
    constructor(x, y, type) {
        this.x = levelScale * x;
        this.y = levelScale * y;
        this.colour = "0, 255, 0";
        switch(type) {
            case 1:
                this.colour = 255;
                break;
            case 2:
                this.colour = '#37946e';
                break;
        }
    }

    show() {
        //Deprecated due to different level render method
    }
}