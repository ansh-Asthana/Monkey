
var monkey , monkey_running, ground
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score = 0;
var survivalTime;
var backgroundImage, jungleImage;

function preload(){
  
  monkey_running =                           loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","    sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  jungleImage = loadImage("jungle.jpg")
 
}



function setup() {
  monkey = createSprite(80, 315, 20, 20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;

  ground = createSprite(400,350,900,10);
  ground.visible = false;
  // ground.velocityX = -4;
  // ground.x = ground.width/2;
  // console.log(ground.x)
  
  obstacleGroup = new Group();
  FoodGroup = new Group();
  backgroundImage = createSprite(0,0,800,800)
  backgroundImage.addImage(jungleImage);
  backgroundImage.velocityX = -3;
  
}


function draw() {
  background("white");
  drawSprites();
  
  
  spawnObstacles();
  spawnFood();
  
  monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(ground);
  if(keyDown("Space")&&monkey.y >= 314){
    monkey.velocityY = -12;
  }
  
  if(monkey.isTouching(obstacleGroup)){
       monkey.velocityX = 0;
     score = 0;
     }

   backgroundImage.depth = monkey.depth - 10; 
  if(monkey.isTouching(FoodGroup)){
     FoodGroup.destroyEach();  
    score += 1;
     }
  fill("white");
  text("score:"+score, 100,100);
  
  console.log(monkey.y)
  
  
    if (backgroundImage.x < 0){
      backgroundImage.x = backgroundImage.width/2;
    }
}



function spawnObstacles() {
  if (frameCount % 100 === 0) {
        obstacle = createSprite(600,330,20,20);
        obstacle.addImage(obstacleImage);
        obstacle.scale = 0.1;
        obstacle.velocityX = -4;
        obstacle.lifeTime = 400;
    
        obstacleGroup.add(obstacle);
      }
}
function spawnFood() {
  if (frameCount % 200 === 0) {
        banana = createSprite(600,200,20,20);
        banana.addImage(bananaImage);
        banana.scale = 0.1;
        banana.velocityX = -4;
        banana.lifeTime = 400;
    
        FoodGroup.add(banana);
      }
}



