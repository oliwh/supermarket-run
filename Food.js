class Food extends Tile {
    constructor(x, y, food) {
        super(x, y);
        this.colour = "0, 255, 0";
        switch(food) {
            case "apples":
                this.colour = "#df5c5c";
                break;
            case "flour":
                this.colour = "#e3e0dd";
                break;
            case "lettuce":
                this.colour = "#8ce778";
                break;
            case "ham":
                this.colour = "#cc8e9b";
                break;
            case "potatoes":
                this.colour = "#cca68e";
                break;
            case "oranges":
                this.colour = "#ec8455";
                break;
            case "chocolate":
                this.colour = "#87592a"
        }
        this.offset = random(0.1, 0.8);
    }

    show() {
        //placeholder shelf
        push();
        noStroke();
        fill(this.colour);
        ellipseMode(CENTER);
        ellipse(this.x + (this.offset * levelScale), this.y + (this.offset * levelScale), levelScale / 2, levelScale / 2);
        pop();
    }
}