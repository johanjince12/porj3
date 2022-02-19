var obstacle1, obstacle2;
var backgroundimage;
var mainbiker;
var gameover;
var waterbottle;
var crash;
var gameState = PLAY;


function preload(){
    carenemy= loadImage("assets/carenemy.png");
    enemybiker = loadImage("assets/enemybike.png");
    backgroundimage = loadImage("assets/background.jpg");
    mainbiker = loadImage("assets/mainbiker.png");
    gameover = loadImage("assets/mainbiker.png");
    waterbottle = loadImage("assets/waterbottle.png");
    crash = loadImage("assets/crash.png");

}
function setup(){
    canvas = createCanvas(600, 200);

    mainbiker = createSprite(100,100,20,50);
    mainbiker.scale =  0.7;


}

function draw(){
    background(backgroundimage);



    if(gamestate === PLAY){
        ground.velocityX = .5;
        score = score + Math.round(frameCount/70);

        if(keydown("DOWN_ARROW")&& mainbiker.y >=100){
            mainbiker.velocityY = 2;
        }

        if(keydown("UP_ARROW")&& mainbiker.y >=100){
            mainbiker.velocityY = -2
        }
    }

}
