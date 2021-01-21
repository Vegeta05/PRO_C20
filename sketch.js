var cat1, cat2, cat3, cat4, cat;
var mouse, m1, m2 ,m3, m4;
var backImage;
var back;
var catrun;


function preload() {
    //load the images here
    cat1 = loadImage(tomOne.png);
    cat2 = loadImage(tomeTwo.png);
    backImage = loadImage(garden.png);
    cat3 = loadImage(tomThree.png);
    cat4 = loadImage(tomFour.png);
    m1 = loadImage(jerryOne.png);
    m2 = loadImage(jerryTwo.png);
    m3 = loadImage(jerryThree.png);
    m4 = loadImage(jerryFour.png);
    catrun = loadAnimation(cat2,cat3, cat4);
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(700,100,20,20);
    cat.scale = 0.3;
    back = createSprite(1000,800);
    back.depth = -4;
}

function draw() {
    background(255);
    //Write condition here to evalute if tom and jerry collide
    cat.addImage(cat1);
    back.addImage(backImage);
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    if(keyCode === LEFT_ARROW){
        cat.velocityX = -5;
        cat.addAnimation("catrun", cat2);
        cat.changeAnimation("catRunning");
    }

}
