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
                //No tiles created for empty spaces
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
    for(let i = 0; i < tiles.length - 1; i++) {
        tiles[i].show();
    }
    keyDetect();
}
//Moves the player when wasd are pressed
function keyDetect() {
    if(frameCount % 1 == 0) {
        if (keyIsDown(87)) {//w
            player.move(0, -1);
        }
        if (keyIsDown(83)) {//s
            player.move(0, 1);
        }
       if (keyIsDown(65)) {//a
            player.move(-1, 0);
      }
      if (keyIsDown(68)) {//d
            player.move(1, 0);
        }
    }
}
