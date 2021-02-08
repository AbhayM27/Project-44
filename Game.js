class Game {
    constructor() {



    }


start() {
    
      BGMusic.play();
      image(BG,0,0);
   

 
}



level1() {
    BGMusic.stop(); 
    // all the background stuff

    level1bac = createSprite(800,200,20,20);
    level1bac.addImage(level1BG);
    level1BG.resize(1600,800);
  
    ///////////////////////////////////////
    
    //image(level1BG,800,0,800,400);

  

    Ground = createSprite(200,380,500,20);
    Ground.addImage("Ground1",Ground3);
    Ground.debug = true;
    Ground.setCollider("rectangle",0,0,400,50);

    var x = 150;
    var y = 330;

    // Monskey Sprite
    Monskey = createSprite(x,y,40,40);
    Monskey.addAnimation("Idle",MonskeyIdle);
    Monskey.debug = true;
    

    if(Monskey.isTouching(Ground)) {
      Monskey.velocityY = 0;
    }
   
  





   


}



}