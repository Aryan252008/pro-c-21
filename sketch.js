var bullet, wall;
var bullet1,wall1;
var bullet2,wall2;
var bullet3,wall3;



var speed ,weight,thickness;

function setup() {
  
  createCanvas(1600,1000);

  thickness=random(22,83);

  bullet = createSprite(50, 200, 20, 20);
  wall = createSprite(1500,190,thickness,height/4);

  bullet1 = createSprite(50, 400, 20, 20);
  wall1 = createSprite(1500,390,thickness,height/4);

  bullet2 = createSprite(50, 600, 20, 20);
  wall2 = createSprite(1500,590,thickness,height/4);

  bullet3 = createSprite(50, 800, 20, 20);
  wall3 = createSprite(1500,790,thickness,height/4);





  speed=random(223,321);
  weight=random(30,52);
  
}

function draw() {
  
  background("black");
  
  bullet.velocityX = speed; 
  bullet1.velocityX = speed;
  bullet2.velocityX = speed;
  bullet3.velocityX = speed;

  bullet.shapeColor("gold");
  bullet1.shapeColor("gold");
  bullet2.shapeColor("gold");
  bullet3.shapeColor("gold");

if(hasCollided(bullet, wall))
{
  bullet.velocityX=0;
  var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);


  if(damage>10)
  {
     wall.shapeColor=color(255,0,0),

  }

  if(damage<10)
  {
     wall.shapeColor=color(0,255,0),

  }

  if(damage>10)
  {
     wall1.shapeColor=color(255,0,0),

  }

  if(damage<10)
  {
     wall1.shapeColor=color(0,255,0),

  }

  if(damage>10)
  {
     wall2.shapeColor=color(255,0,0),

  }

  if(damage<10)
  {
     wall2.shapeColor=color(0,255,0),

  }


  if(damage>10)
  {
     wall3.shapeColor=color(255,0,0),

  }

  if(damage<10)
  {
     wall3.shapeColor=color(0,255,0),

  }


}














  drawSprites();
}

function hasCollided( lbullet, lwall)
{
  bulletRightEdge=lbullet.x +lbullet.width;
  wallLeftEdge=lwall

if (bulletRightEdge>=wallLeftEdge)
   {
      return true
   }
   return false

}












