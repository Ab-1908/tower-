
var boy,ground ;
var wall, wallImage;


function preload()
{

  boyImage = loadImage("boy.png");
  //groundImage = loadImage("ground.jpg")
  wallImage = loadImage("wall.jpeg");
}

function setup() {
createCanvas(400, 600);
  
  wall = createSprite(200, 300,400,600);
  wall.addImage(wallImage);
  wall.y = wall.height/2;
  
   boy = createSprite(50, 520, 50, 50);
   boy.addImage(boyImage);
   boy.scale=0.1;

   ground = createSprite(200, 580, 600, 50);
  //ground.addImage(groundImage);
  
  
}


function draw() {
  background(0);  
  
  wall.velocityY = 2;

  console.log(wall.height);
  //if(wall.y>600)
  //{
    //wall.y = wall.height/2;
  //}
  drawSprites();
}






