let player;
let levelScale = 15;
let tiles = [];
let foods = [];
let numOfItems;
let foodItems = ["apples", "flour", "chocolate", "lettuce", "potatoes", "oranges", "chocolate"]
let score = 0;

function preload() {
}

function setup() {
    numOfItems = floor(random(5, 11));
    print("numOfItems: " + numOfItems);
    frameRate(60);
    createCanvas(levelScale * 25, levelScale * 25);
    player = new Player(13, 12);
    itemLocations();
    setupScene();
    //Random generation of food items
}

function draw() {
    background('#9a9fa7');
    player.show();
    //Draw Level
    for(let i = 0; i < tiles.length - 1; i++) {
        tiles[i].show();
    }
    for(let i = 0; i < foods.length - 1; i++) {
        foods[i].show();
    }
    keyDetect();
    for(let i = 0; i < foods.length; i++) {
        if(dist(player.x, player.y, foods[i].x, foods[i].y) < 8) {
            collectItem(i);
        }
    }
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

//Generates the locations of items in the scene
function itemLocations() {
    for(let i = 0; i < numOfItems; i++) {
        let spawned = false;
        while(spawned == false) {
            let x = floor(random(25));
            let y = floor(random(25));
            if(level[x][y] == 0) {
                level[x][y] = 3;
                spawned = true;
            }
        }
    }
}

function setupScene() {
    for(let i = 0; i < 25; i++) {
        for(j = 0; j < 25; j++) {
            switch(level[i][j]) {
                //No tiles created for empty spaces
                //Wall
                case 1:
                    tiles.push(new Tile(j, i, 1));
                    break;
                //Exit
                case 2:
                    tiles.push(new Tile(j, i, 2));
                    break;
                //Food items
                case 3:
                    foods.push(new Food(j, i, random(foodItems)));
                    break;
                //add cases for powerups eventually
            }
        }
    }
}

function collectItem(i) {
    foods.splice(i, 1);
    score++;
    print("score: " + score);
}

function checkEnd() {
    if(score == numOfItems - 1) {
        fill(250);
        rectMode(CENTER);
        rect(width / 2,height * 0.01 + height / 2, width * 0.9, height * 0.25);
        fill(0);
        textSize(width / 16);
        textAlign(CENTER);
        text('Success! Your time was\n' + floor(frameCount / 60) + " seconds", width / 2, height / 2);
        noLoop();
    }
}