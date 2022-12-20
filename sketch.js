import Player from 'Player.js';
import 'initShelves.js';

let player;
let scale = 15;


function preload() {
}

function setup() {
    frameRate(60);
    createCanvas(scale * 25, scale * 25);
    player = new Player(13, 12);
    //instanciates all shelves
    initShelves();
}

function draw() {
    background('#9a9fa7');
    player.show();
    //draws all shelves
    for(let i = 0; i < shelves.length; i++) {
        shelves[i].show();
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

