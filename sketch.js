var bullet, wall

var speed, weight
function setup() {
  createCanvas(1500,400);

  speed=random(55,90);
  weight=random(400,1500)

  thickness=random(22,83)

  bullet  = createSprite(50,200,50,15);

  bullet.velocityX = speed;

  bullet.shapeColor=color(225)

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);
}

function draw() {
  background(0);  
 if(hasCollides(bullet, wall))
 {
   bullet.velocityX = 0
   var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);


   if(damage>10)
   {
     wall.shapeColor=color(225,0,0);
   }



   if(damage<10)
   {
     wall.shapeColor=color(0,225,0);
   }
 }
  drawSprites();
}

function hasCollided(Lbullet, Lwall)
{
  bulletRightEdge=Lbullet.x +Lbullet.width;
  wallLeftEdge=Lwall.x
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
  return false;
}