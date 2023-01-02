let player;
let levelScale = 32;
let tiles = [];
let foods = [];
let numOfItems;
let foodItems = [
    "img/icons/apple.png", 
    "img/icons/banana.png", 
    "img/icons/bread.png", 
    "img/icons/carrot.png", 
    "img/icons/cauliflower.png", 
    "img/icons/cheese.png", 
    "img/icons/cherry.png", 
    "img/icons/corn.png", 
    "img/icons/garlic.png", 
    "img/icons/grape.png", 
    "img/icons/honey.png", 
    "img/icons/kiwi.png", 
    "img/icons/lemon.png", 
    "img/icons/orange.png", 
    "img/icons/pineapple.png", 
    "img/icons/sausage.png", 
    "img/icons/strawberry.png", 
    "img/icons/turkey.png"
];
let tileTypes = [
    "img/tiles/tile-floor.png",
    "img/tiles/tile-wall-y.png",
    "img/tiles/tile-wall-y-end.png",
    "img/tiles/tile-wall-x-1.png",
    "img/tiles/tile-wall-x-2.png"
];
let tileImgs = [];
let score = 0;
let imgs = [];
let plrLeft, plrRight;
let start;
let bg;

function preload() {
    //Load player images
    plrLeft = loadImage("img/player/player_left.png")
    plrRight = loadImage("img/player/player_right.png")

    //Load food images
    for(let i = 0; i < foodItems.length; i++) {
        imgs.push(loadImage(foodItems[i]));
    }
    for(let i = 0; i < tileTypes.length; i++) {
        tileImgs.push(loadImage(tileTypes[i]));
    }
    bg = loadImage("img/tiles/level.png");
}

function setup() {
    frameRate(60);
    createCanvas(levelScale * 25, levelScale * 25);
    start = true;

    //Instanciate player
    player = new Player(13, 12);
    
    //Random generation of food items
    numOfItems = floor(random(5, 11));
    print("Number of items: " + numOfItems);
    itemLocations();
    setupScene();

}

function draw() {
    background('#9a9fa7');

    imageMode(CENTER);
    image(bg, width / 2, height / 2, 800, 800);
    player.show();
    //Draw Level
    for(let i = 0; i < tiles.length; i++) {
        tiles[i].show();
    }
    for(let i = 0; i < foods.length; i++) {
        foods[i].show();
    }
    keyDetect();
    for(let i = 0; i < foods.length; i++) {
        if(dist(player.x, player.y, foods[i].x, foods[i].y) < levelScale * 0.75) {
            collectItem(i);
        }
    }
    if(start == true) {
        startScreen();
    }
}
//Moves the player when wasd are pressed
function keyDetect() {
    if(frameCount % 1 == 0) {
        if(keyIsDown(87)) {     //W
            player.move(0, -1);
        }
        if(keyIsDown(83)) {     //S
            player.move(0, 1);
        }
        if(keyIsDown(65)) {     //A
            player.move(-1, 0);
            player.chgDir(1);
        }
        if(keyIsDown(68)) {     //D
            player.move(1, 0);
            player.chgDir(-1);
        }
    }
}

//Detect start of game
function keyPressed() {
    if(keyCode == ENTER && start == true) {
        start = false;
        print("Start set to: " + start);
        loop();
        frameCount = 0;
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
                    foods.push(new Food(j, i, floor(random(foodItems.length))));
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
    print("Validating end...");
    if(score == numOfItems) {
        print("Ending game");
        fill(250);
        rectMode(CENTER);
        rect(width / 2,height * 0.01 + height / 2, width * 0.9, height * 0.25);
        fill(0);
        textSize(width / 16);
        textAlign(CENTER);
        text('Success! Your time was\n' + floor(frameCount / 60) + ' seconds', width / 2, height / 2);
        noLoop();
    } else {
        print("End checks failed!");
    }
}

function startScreen() {
    print("Initialising start screen...")
    fill(250);
    rectMode(CENTER);
    rect(width / 2, height * 0.54, width * 0.85, height * 0.25);
    fill(0);
    textSize(width / 24);
    textAlign(CENTER);
    text('You\'re in the supermarket after hours!\nTry to collect all your shopping as quickly \nas possibleand then run to the exit!\n(Press enter to begin)', width / 2, height * 0.475);
    noLoop();
    print("Start successfully screen drawn!");
}