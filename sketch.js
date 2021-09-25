var space, astronaut;
var star, asteroid;
var spaceImg, astronautImg, starImg, asteroidImg;

var gameOverImg

var END =0;
var PLAY=1;
var gameState = PLAY;

var score=0;

function preload(){
spaceImg=loadImage("spacerunnerbg.jpg");

astronautImg=loadImage("astronautflyer.png");

starImg=loadImage("stars.png");
asteroidImg=loadImage("asteroids.png");

gameOverImg=loadImage("gameover.jpg");
}

function setup() {
createCanvas(600,400);
// Moving background
space=createSprite(100,150);
space.addImage(spaceImg);
space.velocityY = -5;

//moving astronaut
astronaut = createSprite(180,250,30,30);
astronaut.scale = 0.5;
astronaut.addImage(astronautImg);


//set collider
astronaut.setCollider('circle',0,0,350)

gameOver = createSprite(650,150);
gameOver.addImage(gameOverImg);
gameOver.scale = 0.8;
}

function draw() {
 background(0);
 astronaut.x = World.mouseX;

 drawSprites();

var select_sprite =  Math.round(random(1,2));


if(frameCount % 80 == 0){
  if (select_sprite == 1){
    createStars();
  }
  else if(select_sprite == 2){
    createAsteroids();
  }
}


 textSize(20);
 fill(255);
 text('Score:'+score,200,10);

 if(gameState===PLAY){
    gameOver.visible=false;
   score = score + Math.round(getFrameRate()/50);
   space.velocityY = -(6 + 2*score/150);
  
   edges= createEdgeSprites();
    astronaut.bounceOff(edges);
  
  //code to reset the background
  if(space.y < 0 ){
    space.y = height/2;
  }
}
}
//spawn stars
function createStars(){
  star = createSprite(random(50,350),40,10,10);
  star.scale=0.1;
  star.addImage(starImg);
  star.velocityY = -3;
  }
  //spawn asteroids
  function createAsteroids(){
  asteroid = createSprite(random(50,350),40,10,10);
  asteroid.scale=0.3;
  asteroid.addImage(asteroidImg);
  asteroid.velocityY = -3;
  }