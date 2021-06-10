var bg,bgImage;
var invisibleGround;
var player,playerImg;
var obstacle, obstacle1,obstacle2,obstacle3,obstacle4, obstacleGroup;
var points, point1,point2,point3, pointsGroup;
var score = 0;
var gameState  = "play";

function preload(){

bgImg = loadImage("Images/Background.jpg");

playerImg = loadImage("Images/Player.png");

obstacle1 = loadImage("Images/Obstacle1.png");
obstacle2 = loadImage("Images/Obstacle2.png");
obstacle3 = loadImage("Images/Obstacle3.png");
obstacle4 = loadImage("Images/Obstacle4.png");

point1 = loadImage("Images/Point1.png");
point2 = loadImage("Images/Point2.png");
point3 = loadImage("Images/Point3.png");

}

function setup() {
  createCanvas(1000,580);

    bg = createSprite(900,110,1000,600);
    bg.addImage("background",bgImg);
    bg.scale = 3.5;
    bg.velocityX = -5;
    bg.x = bg.width/2

    invisibleGround = createSprite(500,470,1000,10);
    invisibleGround.visible = false;

    player = createSprite(100,450,20,50);
    player.addImage("player",playerImg);
    player.scale = 0.5;
      
    obstacleGroup = new Group();
    pointsGroup = new Group();
}

function draw() {
 
  background(0);
  fill("white");
  textSize (40);
  text("Score:" + score, 750,50);

      if(keyDown("space")){
        player.velocityY = -10;
      }
      player.velocityY = player.velocityY + 0.8;

      if(bg.x < 0){
        bg.x = bg.width/2;
      }
      
  createObstacle();
  spawnPoints();

  player.collide(invisibleGround);

  drawSprites();
}

function createObstacle(){
  if(frameCount % 100 === 0){
    obstacle = createSprite(1400,420,30,80)
    obstacle.velocityX = -7;
    var rand = Math.round(random(1,4));
     switch(rand) {
       case 1: obstacle.addImage(obstacle1); 
       break;
       case 2: obstacle.addImage(obstacle2); 
       break;
       case 3: obstacle.addImage(obstacle3);
       break;
       case 4: obstacle.addImage(obstacle4);
       break;
       default: break; 
      }
      obstacle.scale = 0.5
      obstacleGroup.add(obstacle);
  }
}

function spawnPoints(){
  if(frameCount % 300 === 0){
    points = createSprite(800,900,30,20);
    points.y = Math.round(random(100,400));
   
   
    points.velocityX = -7;
  var rand = Math.round(random(1,3));
    switch(rand) {  
      case 1: points.addImage(point1); 
      break;
      case 2: points.addImage(point2); 
      break;
      case 3: points.addImage(point3);
      break;
      default: break; 
      }

    points.scale=0.2;
    pointsGroup.add(points);
  }
}