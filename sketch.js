let player;
let levelScale = 15;
let tiles = [];

function preload() {
}

function setup() {
    frameRate(60);
    createCanvas(levelScale * 25, levelScale * 25);
    player = new Player(13, 12);

    for(let i = 0; i < 25; i++) {
        for(j = 0; j < 25; j++) {
            switch(level[i][j]) {
                case 1:
                    tiles.push(new Tile(j, i, 1));
                    break;
                case 2:
                    tiles.push(new Tile(j, i, 2));
                    break;
                //add cases for powerups eventually
            }
        }
    }
}

function draw() {
    background('#9a9fa7');
    player.show();
    //Draw Level
    for(let i = 0; i < tiles.length; i++) {
        tiles[i].show();
    }
}
//moves the player when wasd are pressed
function keyPressed() {
    if(key == 'w') {
        player.move(0, -1);
    } else if(key == 's') {
        player.move(0, 1);
    } else if(key == 'a') {
        player.move(-1, 0);
    } else if(key == 'd') {
        player.move(1, 0);
    }
}    

