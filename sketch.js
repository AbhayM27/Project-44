
var game;
var BG, level1BG, level1bac,level1bac2;
var BGMusic;
var Ground1, Ground2, Ground3;
var Ground;
var MonskeyIdle, Monskey,MonskeyWalkR,MonskeyWalkL,MonskeyJump,Monsk;
var MonskeyGroup;

function preload() {
  BGMusic = loadSound("Sounds/MenuMusic.mp3");
  BG = loadImage("Images/MenuPG.jpg");
  level1BG = loadImage("Images/Level 1 Bg.jpg");
  Ground1 = loadImage("Images/Ground 1.png");
  Ground2 = loadImage("Images/Ground 2.png");
  Ground3 = loadImage("Images/Ground 3.png");
  
  MonskeyIdle = loadAnimation("Images/Idle 1.png","Images/Idle 2.png","Images/Idle 3.png");
  MonskeyWalkR = loadAnimation("Images/Walking 1.png","Images/Walking 2.png","Images/Walking 3.png","Images/Walking 4.png","Images/Walking 5.png","Images/Walking 6.png","Images/Walking 7.png","Images/Walking 8.png","Images/Walking 9.png","Images/Walking 10.png","Images/Walking 11.png")
  MonskeyWalkL = loadAnimation("Images/Walking 1 L.png","Images/Walking 2 L.png","Images/Walking 3 L.png","Images/Walking 4 L.png","Images/Walking 5 L.png","Images/Walking 6 L.png","Images/Walking 7 L.png","Images/Walking 8 L.png","Images/Walking 9 L.png","Images/Walking 10 L.png","Images/Walking 11 L.png")
  MonskeyJump = loadAnimation("Images/Jump 1.png","Images/Jump 2.png","Images/Jump 3.png","Images/Jump 4.png","Images/Jump 3.png","Images/Jump 2.png","Images/Jump 1.png");


}

function setup() {
  createCanvas(1600,400);
 

  game = new Game();
  game.start();
  
  
}

function draw() {
 
  // for transition
  if(keyDown("space")) {
    game.level1();
    
  }
   // for moving right
  if(keyWentDown(RIGHT_ARROW)) {
    Monskey.velocityX = 10;
    Monskey.addAnimation("Walks",MonskeyWalkR);
    Monskey.changeAnimation("Walks");
  } else if(keyWentUp(RIGHT_ARROW)) {
    Monskey.velocityX = 0;
    Monskey.changeAnimation("Idle");
  }

  // For moving left
  if(keyWentDown(LEFT_ARROW)) {
    Monskey.velocityX = -10;
    Monskey.addAnimation("WalksLeft",MonskeyWalkL);
    Monskey.changeAnimation("WalksLeft"); ;
  } else if(keyWentUp(LEFT_ARROW)) {
    Monskey.velocityX = 0;
    Monskey.changeAnimation("Idle");
  }

  
  // For jumping
  if(keyWentDown(UP_ARROW)) { 
    Monskey.velocityY = -5;
    Monskey.addAnimation("Jump",MonskeyJump);
    Monskey.changeAnimation("Jump");
  } 
   
   

  
  
  drawSprites();
}